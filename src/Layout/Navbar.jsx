import { useState } from "react";
import {
  MenuHamburguer,
  NavbarStyles,
  TitleNav,
} from "../Styles/Pages/NavbarStyles";
import SidebarMobile from "../Components/SidebarMobile";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { colorFondo } from "../Styles/GeneralStyles";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <NavbarStyles>
      <MenuHamburguer onClick={() => setSidebarOpen(true)} />
      {sidebarOpen && <SidebarMobile setSidebarOpen={setSidebarOpen} />}
      <TitleNav style={{ color: colorFondo }}>DOMO CHECK DELIVERY</TitleNav>
      <div className="flex">
        <span>Hola ! {user.name}</span>
        <Avatar>{user.name.split("")[0].toUpperCase()}</Avatar>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
