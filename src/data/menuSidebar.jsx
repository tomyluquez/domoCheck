import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { Avatar } from "@mui/material";

export const menuSidebar = (user) => {
  return [
    {
      icon: <DashboardOutlinedIcon />,
      text: "Dashboard",
      to: "/",
    },
    {
      icon: <FolderSharedOutlinedIcon />,
      text: "Clientes",
      to: "/clientes",
    },
    {
      icon: <CalendarMonthOutlinedIcon />,
      text: "Actividades",
      to: "/actividades",
    },
    {
      icon: <PersonAddAltOutlinedIcon />,
      text: "Agregar cliente",
    },
    {
      icon: <ExitToAppOutlinedIcon />,
      text: "Cerrar sesion",
      position: "absolute",
      bottom: "10px",
      to: "/",
    },
    {
      icon: <Avatar>{user.name.split("")[0].toUpperCase()}</Avatar>,
      text: `Hola ! ${user.name}`,
      position: "absolute",
      top: "10px",
      to: "/",
    },
    {
      icon: <BuildOutlinedIcon />,
      text: "Configuracion",
      to: "/configuracion",
    },
  ].filter((item) => {
    if (user.role === "integrador" && item.text === "Configuracion") {
      return false;
    }
    if (
      (user.role === "vendedor" && item.text === "Configuracion") ||
      (user.role === "vendedor" && item.text === "Actividades") ||
      (user.role === "vendedor" && item.text === "Clientes")
    ) {
      return false;
    }
    if (
      (user.role === "masDelivery" && item.text === "Configuracion") ||
      (user.role === "masDelivery" && item.text === "Actividades") ||
      (user.role === "masDelivery" && item.text === "Agregar cliente")
    ) {
      return false;
    }
    if (
      (user.role === "marketing" && item.text === "Configuracion") ||
      (user.role === "marketing" && item.text === "Actividades") ||
      (user.role === "marketing" && item.text === "Agregar cliente")
    ) {
      return false;
    }
    return true;
  });
};
