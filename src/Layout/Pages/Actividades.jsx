import { Typography } from "@mui/material";
import TableActGral from "../../Components/Actividades/TableActGral";
import OrdenActividades from "../../Components/Actividades/OrdenActividades";
import { useState } from "react";
import filterByAct from "../../services/filterByAct";
import ordenarActividades from "../../services/ordenarActividades";
import { useSelector } from "react-redux";
import { ordenAct } from "./../../data/ordenAct";

const Actividades = () => {
  const [orden, setOrden] = useState(1);
  const clientes = useSelector((state) => state.clientes.clientes);
  const actividadesPendientes = filterByAct(clientes);
  const actividadesOrdenadas = ordenarActividades(actividadesPendientes, orden);

  return (
    <div>
      <Typography variant="h6" gutterBottom component="div">
        Mis Actividades
      </Typography>
      <OrdenActividades orden={orden} setOrden={setOrden} ordenAct={ordenAct} />
      <TableActGral key={orden} actividadesPendientes={actividadesOrdenadas} />
    </div>
  );
};

export default Actividades;
