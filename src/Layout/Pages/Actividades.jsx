import { Typography } from "@mui/material";
import TableActGral from "../../Components/Actividades/TableActGral";
import OrdenActividades from "../../Components/Actividades/OrdenActividades";
import { useState } from "react";
import filterByAct from "../../services/filterByAct";
import ordenarActividades from "../../services/ordenarActividades";
import { useSelector } from "react-redux";
import { ordenAct } from "./../../data/ordenAct";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import FilterByDate from "../../Components/Actividades/FilterByDate";

const Actividades = () => {
  const [orden, setOrden] = useState(1);
  const [activ, setActiv] = useState("Pendientes");
  const clientes = useSelector((state) => state.clientes.clientes);
  const role = useSelector((state) => state.user.role);
  const [data, setData] = useState({
    dateStart: "",
    dateEnd: "",
  });
  const { actividadesPendientes, actividadesCumplidas } = filterByAct(clientes);
  const actividadesOrdenadasPend = ordenarActividades(
    actividadesPendientes,
    orden,
    "Pendientes"
  );
  const actividadesCumplidasPend = ordenarActividades(
    actividadesCumplidas,
    data,
    "Cumplidas"
  );
  console.log(actividadesCumplidasPend);

  return (
    <div>
      {role === "admin" && (
        <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
          <ButtonCustom width="150px" onClick={() => setActiv("Pendientes")}>
            Actividades Pendientes
          </ButtonCustom>
          <ButtonCustom width="150px" onClick={() => setActiv("Cumplidas")}>
            Actividades Cumplidas
          </ButtonCustom>
        </div>
      )}
      {activ === "Pendientes" && (
        <>
          <Typography variant="h6" gutterBottom component="div">
            Actividades
          </Typography>
          <OrdenActividades
            orden={orden}
            setOrden={setOrden}
            ordenAct={ordenAct}
          />
          <TableActGral
            key={`pendientes-${orden}`} // Agregar información adicional a la clave
            tipoActividad={activ}
            actividades={actividadesOrdenadasPend}
          />
        </>
      )}
      {activ === "Cumplidas" && (
        <>
          <Typography variant="h6" gutterBottom component="div">
            Actividades
          </Typography>
          <FilterByDate data={data} setData={setData} />
          <TableActGral
            key={`cumplidas-${data.dateStart}-${data.dateEnd}`} // Agregar información adicional a la clave
            tipoActividad={activ}
            actividades={actividadesCumplidasPend}
          />
        </>
      )}
    </div>
  );
};

export default Actividades;
