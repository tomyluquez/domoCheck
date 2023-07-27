import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";

import {
  cantIntegradosMensual,
  cantIntegradosMensualAnterior,
  cantidadIntegradosSemana,
  cantidadIntegradosSemanaAnterior,
  cantidadIntegradosTotales,
  cantidadSinIntegrar,
  clientesFaltanDatos,
  clientesPendientes,
  clientesSinContestar,
  promDiasIntegrados,
} from "../services/CuantityClients";
import filterByAct from "../services/filterByAct";
import ordenarActividades from "../services/ordenarActividades";
import filterClients from "../services/filteredClients";

export const dataDashAdmin = (clientes, vendedor, dispatch) => {
  const { actividadesPendientes } = filterByAct(clientes);
  const actividadesOrdenadasPend = ordenarActividades(
    actividadesPendientes,
    1,
    "Pendientes"
  );

  const cardsDash = [
    {
      title: "Clientes integrados esta semana",
      icon: <CelebrationOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadIntegradosSemana(clientes, vendedor).length,
      clientes: cantidadIntegradosSemana(clientes, vendedor),
      dataAnterior: cantidadIntegradosSemanaAnterior(clientes, vendedor),
      fondo: "#3AA6B9",
      letra: "#fafafa",
      iconExtra: (
        <SentimentDissatisfiedOutlinedIcon style={{ color: "#fafafa" }} />
      ),
      role: "admin",
    },
    {
      title: "Clientes integrados mensual",
      icon: <CheckCircleOutlineOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantIntegradosMensual(clientes, vendedor).length,
      clientes: cantIntegradosMensual(clientes, vendedor),
      dataAnterior: cantIntegradosMensualAnterior(clientes, vendedor),
      fondo: "#5D9C59",
      letra: "#fafafa",
      role: "admin",
    },
    {
      title: "Clientes integrados total",
      icon: <CheckCircleOutlineOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadIntegradosTotales(clientes, vendedor),
      fondo: "#1D5D9B",
      letra: "#fafafa",
      role: "admin",
      to: "/Clientes",
      hover: true,
      filters: () => {
        filterClients(
          clientes,
          undefined,
          "Integrado",
          undefined,
          undefined,
          undefined,
          dispatch
        );
      },
    },
    {
      title: "Clientes pendientes de integrarse",
      icon: <LeaderboardOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadSinIntegrar(clientes, vendedor),
      fondo: "#E9B384",
      letra: "#fafafa",
      role: "admin",
    },
    {
      title: "Promedio de dias en integrarse",
      icon: <PermContactCalendarOutlinedIcon style={{ color: "#fafafa" }} />,
      data: promDiasIntegrados(clientes, vendedor),
      fondo: "#FF9EAA",
      letra: "#fafafa",
      role: "admin",
    },
    {
      title: "Clientes pendientes de contactar",
      icon: <AddIcCallOutlinedIcon style={{ color: "#fafafa" }} />,
      data: clientesPendientes(clientes),
      fondo: "#1D5D9B",
      letra: "#fafafa",
      role: "comercial",
      to: "/Clientes",
      hover: true,
      filters: () => {
        filterClients(
          clientes,
          undefined,
          "Pendiente",
          undefined,
          undefined,
          undefined,
          dispatch
        );
      },
    },
    {
      title: "Clientes faltan datos",
      icon: <ContactMailOutlinedIcon style={{ color: "#fafafa" }} />,
      data: clientesFaltanDatos(clientes),
      fondo: "#FFD6A5",
      letra: "#fafafa",
      role: "comercial",
      to: "/Clientes",
      hover: true,
      filters: () => {
        filterClients(
          clientes,
          undefined,
          "Faltan datos",
          undefined,
          undefined,
          undefined,
          dispatch
        );
      },
    },
    {
      title: "Clientes sin contestar",
      icon: <ContactPhoneOutlinedIcon style={{ color: "#fafafa" }} />,
      data: clientesSinContestar(clientes),
      fondo: "#FF9B9B",
      letra: "#fafafa",
      role: "comercial",
      to: "/Clientes",
      hover: true,
      filters: () => {
        filterClients(
          clientes,
          undefined,
          "No contesta",
          undefined,
          undefined,
          undefined,
          dispatch
        );
      },
    },
    {
      title: "Actividades sin cumplir",
      icon: <EditCalendarOutlinedIcon style={{ color: "#fafafa" }} />,
      data: actividadesOrdenadasPend.length,
      fondo: "#E97777 ",
      letra: "#fafafa",
      role: "comercial",
      to: "/Actividades",
      hover: true,
    },
  ];

  const dashVentas = cardsDash.filter((dash) => dash.role !== "comercial");
  const dashIntegracion = cardsDash.filter((dash) => dash.role === "comercial");

  return { dashVentas, dashIntegracion };
};
