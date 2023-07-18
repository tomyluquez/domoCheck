import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import {
  cantClientes,
  cantidadIntegradosToday,
  cantidadIntegradosTotales,
  promDiasIntegrados,
} from "../services/CuantityClients";

export const dataDashAdmin = (clientes, vendedor) => {
  return [
    {
      title: "Clientes integrados Hoy",
      icon: <CelebrationOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadIntegradosToday(clientes, vendedor),
      fondo: "#3AA6B9",
      letra: "#fafafa",
      iconExtra: (
        <SentimentDissatisfiedOutlinedIcon style={{ color: "#fafafa" }} />
      ),
    },
    {
      title: "Clientes integrados Totales",
      icon: <CheckCircleOutlineOutlinedIcon style={{ color: "#fafafa" }} />,
      data: cantidadIntegradosTotales(clientes, vendedor),
      fondo: "#5D9C59",
      letra: "#fafafa",
    },
    {
      title: "Promedio de dias en integrarse",
      icon: <PermContactCalendarOutlinedIcon style={{ color: "#fafafa" }} />,
      data: promDiasIntegrados(clientes, vendedor),
      fondo: "#FF9EAA",
      letra: "#fafafa",
    },
    {
      title: "Promedio integrados",
      icon: <LeaderboardOutlinedIcon style={{ color: "#fafafa" }} />,
      data:
        Math.round(
          (cantidadIntegradosTotales(clientes, vendedor) /
            cantClientes(clientes, vendedor)) *
            100
        ) + "%",
      fondo: "#E9B384",
      letra: "#fafafa",
    },
  ];
};
