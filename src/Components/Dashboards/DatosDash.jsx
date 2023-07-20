import { useEffect, useState } from "react";
import {
  Cards,
  DivContainerCards,
  DivData,
  DivNumberData,
  NumberData,
  NumberDataAnterior,
} from "../../Styles/Pages/DashboardStyles";
import { dataDashAdmin } from "../../data/cardsDashAdmin";
import { compararData } from "../../data/comprarData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const DatosDash = ({ clientes, vendedor, role }) => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const { dashVentas, dashIntegracion } = dataDashAdmin(
      clientes,
      vendedor,
      dispatch
    );
    setData(role === "integrador" ? dashIntegracion : dashVentas);
  }, [clientes, role, vendedor, dispatch]);

  const handleClick = (to, functionDash) => {
    if (functionDash) {
      functionDash();
    }
    navigate(to);
  };
  return (
    <DivContainerCards>
      {data &&
        data.map((dash, i) => (
          <Cards
            key={i}
            hover={dash.hover}
            style={{
              backgroundColor: dash.fondo,
              cursor: dash.hover ? "pointer" : "default",
            }}
            onClick={() => handleClick(dash.to, dash.filters)}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <DivData>
              <span style={{ color: dash.letra }}>{dash.title}</span>
              {dash.iconExtra && dash.data === 0 ? dash.iconExtra : dash.icon}
            </DivData>
            <DivNumberData style={{ color: dash.letra }} className="flex">
              {dash.dataAnterior !== undefined &&
                compararData(dash.data, dash.dataAnterior)}
              <NumberData>{dash.data}</NumberData>
              {dash.dataAnterior !== undefined && (
                <NumberDataAnterior>| {dash.dataAnterior}</NumberDataAnterior>
              )}
            </DivNumberData>
          </Cards>
        ))}
    </DivContainerCards>
  );
};

export default DatosDash;
