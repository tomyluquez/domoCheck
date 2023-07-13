import { useEffect, useState } from "react";
import OrdenActividades from "../Actividades/OrdenActividades";
import { ordenHistorial } from "../../data/ordenAct";
import TableActGral from "../Actividades/TableActGral";
import actByClient from "../../services/actByClient";

const Historial = ({ cliente }) => {
  const [orden, setOrden] = useState(1);
  const { actividadesCliente, actividadesPendientes, actividadesCumplidas } =
    actByClient(cliente);
  const [actPend, setActPend] = useState(actividadesPendientes);

  useEffect(() => {
    if (orden === 1) setActPend(actividadesPendientes);
    if (orden === 2) setActPend(actividadesCumplidas);
    if (orden === 3) setActPend(actividadesCliente);
  }, [orden, actividadesCliente, actividadesPendientes, actividadesCumplidas]);

  return (
    <div>
      <OrdenActividades
        orden={orden}
        setOrden={setOrden}
        ordenAct={ordenHistorial}
      />
      <TableActGral
        tipoActividad={orden === 1 ? "Pendientes" : "Cumplidas"}
        actividades={actPend}
      />
    </div>
  );
};

export default Historial;
