import {
  DivContainerCards,
  DivContainerCardsRow,
  DivTareas,
} from "../../../Styles/Pages/DashboardStyles";
import { vendedores } from "../../../data/vendedores";
import DatosDashVendedor from "../DatosDashVendedor";
import DashClMkt from "../masDelivery/DashClMkt";
import ActCumplidasDash from "./ActCumplidasDash";
import AdminEstadoCl from "./AdminEstadoCl";
import { ButtonCustom } from "../../../Styles/ButtonStyles";
import { useState } from "react";
import getReports from "../../../Hooks/useGetRepors";
import { CircularProgress } from "@mui/material";
import { sendEmail } from "../../../services/senEmailReports";
import { useDispatch, useSelector } from "react-redux";
import DatosProspects from "../masDelivery/DatosProspects";

const AdminDash = ({ clientes, darkMode, prospects }) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerClick = () => {
    setIsLoading(true);

    getReports()
      .then((data) => {
        sendEmail(data.data, user, dispatch);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <ButtonCustom onClick={handlerClick} style={{ marginTop: "20px" }}>
        {isLoading ? <CircularProgress /> : "Enviar Reporte Semanal"}
      </ButtonCustom>
      <DivTareas
        data-aos="fade-right"
        data-aos-duration="1200"
        style={{ gap: "50px" }}
      >
        <ActCumplidasDash clientes={clientes} />
        <AdminEstadoCl clientes={clientes} darkMode={darkMode} />
        <DivContainerCardsRow>
          <DashClMkt clientes={clientes} darkMode={darkMode} width="40%" />
          <DatosProspects
            clientes={prospects}
            darkMode={darkMode}
            width="40%"
          />
        </DivContainerCardsRow>
      </DivTareas>
      <DivContainerCards style={{ width: "100%" }}>
        {vendedores.map((vendedor, i) => (
          <DatosDashVendedor
            key={i}
            clientes={clientes}
            vendedor={vendedor.value}
          />
        ))}
      </DivContainerCards>
    </>
  );
};

export default AdminDash;
