import { Box, SwipeableDrawer } from "@mui/material";
import { colorLogo } from "../Styles/GeneralStyles";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { openModal } from "../redux/slices/modal";
import { useDispatch } from "react-redux";
import { LinkMobile, ListMobile } from "../Styles/Pages/SidebarStyles";

const SidebarMobile = ({ setSidebarOpen }) => {
  const dispatch = useDispatch();

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
          <LinkMobile to="/dashboard">
            <DashboardOutlinedIcon />
            <span>Dashboard</span>
          </LinkMobile>
          <LinkMobile to="/clientes">
            <FolderSharedOutlinedIcon />
            <span>Clientes</span>
          </LinkMobile>
          <LinkMobile to="/actividades">
            <CalendarMonthOutlinedIcon />
            <span>Actividades</span>
          </LinkMobile>
          <LinkMobile
            onClick={() => dispatch(openModal({ type: "Agregar cliente" }))}
          >
            <PersonAddAltOutlinedIcon />
            <span>Agregar cliente</span>
          </LinkMobile>
        </ListMobile>
      </Box>
    </SwipeableDrawer>
  );
};

export default SidebarMobile;
