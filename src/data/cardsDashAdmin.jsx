import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import {
  cantIntegradosMensual,
  cantIntegradosMensualAnterior,
  cantidadIntegradosSemana,
  cantidadIntegradosSemanaAnterior,
  cantidadSinIntegrar,
  promDiasIntegrados,
} from "../services/CuantityClients";

export const dataDashAdmin = (clientes, vendedor) => {
  return [
    {
      title: "Clientes integrados esta semana",
      icon: <CelebrationOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadIntegradosSemana(clientes, vendedor),
      dataAnterior: cantidadIntegradosSemanaAnterior(clientes, vendedor),
      fondo: "#3AA6B9",
      letra: "#fafafa",
      iconExtra: (
        <SentimentDissatisfiedOutlinedIcon style={{ color: "#fafafa" }} />
      ),
    },
    {
      title: "Clientes integrados mensual",
      icon: <CheckCircleOutlineOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantIntegradosMensual(clientes, vendedor),
      dataAnterior: cantIntegradosMensualAnterior(clientes, vendedor),
      fondo: "#5D9C59",
      letra: "#fafafa",
    },
    {
      title: "Clientes pendientes de integrarse",
      icon: <LeaderboardOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadSinIntegrar(clientes, vendedor),
      fondo: "#E9B384",
      letra: "#fafafa",
    },
    {
      title: "Promedio de dias en integrarse",
      icon: <PermContactCalendarOutlinedIcon style={{ color: "#fafafa" }} />,
      data: promDiasIntegrados(clientes, vendedor),
      fondo: "#FF9EAA",
      letra: "#fafafa",
    },
  ];
};
