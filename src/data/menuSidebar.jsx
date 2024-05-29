import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

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
      to: "/Clientes",
    },
    {
      icon: <FolderSharedOutlinedIcon />,
      text: "Prospectos",
      to: "/Prospectos",
    },
    {
      icon: <CalendarMonthOutlinedIcon />,
      text: "Actividades",
      to: "/Actividades",
    },
    {
      icon: <PersonAddAltOutlinedIcon />,
      text: "Agregar cliente",
    },
    {
      icon: <BuildOutlinedIcon />,
      text: "Configuracion",
      to: "/Configuracion",
    },
  ].filter((item) => {
    if (
      (user.role === "integrador" || user.role === "integral") &&
      item.text === "Configuracion"
    ) {
      return false;
    }
    if (user.role === "comercial" && item.text === "Configuracion") {
      return false;
    }
    if (
      (user.role === "vendedor" && item.text === "Configuracion") ||
      (user.role === "vendedor" && item.text === "Clientes") ||
      (user.role === "vendedor" && item.text === "Prospectos")
    ) {
      return false;
    }
    if (
      (user.role === "masDelivery" && item.text === "Configuracion") ||
      (user.role === "masDelivery" && item.text === "Actividades") ||
      (user.role === "masDelivery" && item.text === "Agregar cliente") ||
      (user.role === "masDelivery" && item.text === "Prospectos")
    ) {
      return false;
    }
    if (
      (user.role === "marketing" && item.text === "Configuracion") ||
      (user.role === "marketing" && item.text === "Actividades") ||
      (user.role === "marketing" && item.text === "Agregar cliente") ||
      (user.role === "marketing" && item.text === "Prospectos")
    ) {
      return false;
    }
    return true;
  });
};
