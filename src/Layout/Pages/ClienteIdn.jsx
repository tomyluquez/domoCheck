import { useParams } from "react-router-dom";
import useGetClient from "./../../Hooks/useGetClient";
import hitosGlobales from "./../../services/hitosGlobales";
import DatosCliente from "../../Components/Clientes/DatosCliente";
import Tabs from "../../Components/Tabls";

const ClienteIdn = () => {
  const clientId = useParams();
  const cliente = useGetClient(clientId.id);
  const hitosGlobal = hitosGlobales(cliente);

  return (
    <div>
      <DatosCliente cliente={cliente} />
      <Tabs cliente={cliente} hitos={hitosGlobal} />
    </div>
  );
};

export default ClienteIdn;
