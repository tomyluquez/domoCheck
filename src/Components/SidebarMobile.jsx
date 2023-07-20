import { Avatar, Box, SwipeableDrawer } from "@mui/material";
import { colorLogo } from "../Styles/GeneralStyles";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { openModal } from "../redux/slices/modal";
import { useDispatch, useSelector } from "react-redux";
import { LinkMobile, ListMobile } from "../Styles/Pages/SidebarStyles";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { logoutUser } from "../redux/slices/users";

const SidebarMobile = ({ setSidebarOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={true}
      onClose={() => setSidebarOpen(false)}
      onOpen={() => setSidebarOpen(true)}
    >
      <Box
        sx={{ width: 250, backgroundColor: colorLogo }}
        role="presentation"
        onClick={() => setSidebarOpen(false)}
        onKeyDown={() => setSidebarOpen(false)}
      >
        <ListMobile>
          <LinkMobile style={{ position: "absolute", top: "10px" }}>
            <Avatar>{user.name.split("")[0].toUpperCase()}</Avatar>
            <span>Hola ! {user.name}</span>
          </LinkMobile>

          <LinkMobile to="/">
            <DashboardOutlinedIcon />
            <span>Dashboard</span>
          </LinkMobile>

          {(user.role === "admin" ||
            user.role === "integrador" ||
            user.role === "masDelivery") && (
            <LinkMobile to="/Clientes">
              <FolderSharedOutlinedIcon />
              <span>Clientes</span>
            </LinkMobile>
          )}

          {(user.role === "admin" || user.role === "integrador") && (
            <LinkMobile to="/Actividades">
              <CalendarMonthOutlinedIcon />
              <span>Actividades</span>
            </LinkMobile>
          )}

          {user.role !== "masDelivery" && (
            <LinkMobile
              onClick={() => dispatch(openModal({ type: "Agregar cliente" }))}
            >
              <PersonAddAltOutlinedIcon />
              <span>Agregar cliente</span>
            </LinkMobile>
          )}

          {user.role === "admin" && (
            <LinkMobile to="/Configuracion">
              <BuildOutlinedIcon />
              <span>Configuracion</span>
            </LinkMobile>
          )}

          <LinkMobile
            style={{ position: "absolute", bottom: "10px" }}
            onClick={handleLogout}
          >
            <ExitToAppOutlinedIcon />
            <span>Cerrar sesion</span>
          </LinkMobile>
        </ListMobile>
      </Box>
    </SwipeableDrawer>
  );
};

export default SidebarMobile;
