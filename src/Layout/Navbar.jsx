import { useState } from "react";
import {
  Logo,
  MenuHamburguer,
  NavbarStyles,
  TitleNav,
} from "../Styles/Pages/NavbarStyles";
import SidebarMobile from "../Components/SidebarMobile";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <NavbarStyles>
      <MenuHamburguer onClick={() => setSidebarOpen(true)} />
      {sidebarOpen && <SidebarMobile setSidebarOpen={setSidebarOpen} />}
      <TitleNav>CheckDelivery Clientes</TitleNav>
      <Logo src="/logoCheck.png" alt="logo check delivery" />
    </NavbarStyles>
  );
};

export default Navbar;
