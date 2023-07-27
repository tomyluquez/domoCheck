import { useState } from "react";
import { MenuHamburguer, NavbarStyles } from "../Styles/Pages/NavbarStyles";
import SidebarMobile from "../Components/SidebarMobile";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <NavbarStyles>
      <MenuHamburguer onClick={() => setSidebarOpen(true)} />
      {sidebarOpen && <SidebarMobile setSidebarOpen={setSidebarOpen} />}
      <div className="flex">
        <span>
          Hola {user.name.toUpperCase()} !{" "}
          <span style={{ fontSize: "25px" }}>👋</span>
        </span>
        <Avatar>{user.name.split("")[0].toUpperCase()}</Avatar>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
