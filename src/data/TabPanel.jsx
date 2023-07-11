import DatosDespachado from "../Components/ClienteInd/DatosDespachado";
import DatosMarketing from "../Components/ClienteInd/DatosMarketing";
import EstadoIntegracion from "../Components/ClienteInd/EstadoIntegracion";
import Historial from "../Components/ClienteInd/Historial";
import Observaciones from "../Components/ClienteInd/Observaciones";
import TiemposIntegracion from "../Components/ClienteInd/TiemposIntegracion";
import UsersClient from "../Components/ClienteInd/UsersClient";
import TinmeLineClient from "../Components/TimeLine";

const tabPanels = (cliente, hitos) => {
  const clienteDespachado =
    cliente.estado !== "Pendiente" &&
    cliente.estado !== "No lo quiere" &&
    cliente.estado !== "Faltan datos" &&
    cliente.estado !== "No contesta";
  return [
    {
      value: "1",
      componente: <EstadoIntegracion cliente={cliente} />,
      label: "Estado de la integracion",
    },
    {
      value: "2",
      componente: <TiemposIntegracion cliente={cliente} />,
      label: "Tiempos de integracion",
    },
    {
      value: "3",
      componente: <Observaciones cliente={cliente} />,
      label: "Observaciones",
    },
    {
      value: "4",
      componente: <Historial cliente={cliente} />,
      label: "Historial de actividades",
    },
    {
      value: "5",
      componente: <TinmeLineClient hitos={hitos} />,
      label: "Hitos",
    },
    clienteDespachado && {
      value: "6",
      componente: <UsersClient cliente={cliente} />,
      label: "Usuarios y contraseñas",
    },
    clienteDespachado && {
      value: "7",
      componente: <DatosDespachado cliente={cliente} />,
      label: "Datos",
    },
    cliente.estado === "Integrado" && {
      value: "8",
      componente: <DatosMarketing cliente={cliente} />,
      label: "Marketing",
    },
  ];
};

export default tabPanels;
