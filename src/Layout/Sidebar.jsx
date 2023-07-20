import { useState } from "react";
import { colorFondo, colorLetra } from "../Styles/GeneralStyles";
import {
  ASidebar,
  LiSidebar,
  MenuLeft,
  MenuRight,
  SidebarStyle,
  UlSidebar,
} from "../Styles/Pages/SidebarStyles";
import { menuSidebar } from "../data/menuSidebar";
import { openModal } from "../redux/slices/modal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/users";
import { Logo } from "../Styles/Pages/NavbarStyles";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerActive = (text) => {
    if (text === "Agregar cliente") {
      dispatch(openModal({ type: "Agregar cliente" }));
    }
    if (text === "Cerrar sesion") {
      dispatch(logoutUser());
    }
  };
  return (
    <>
      <SidebarStyle menuOpen={menuOpen}>
        {menuOpen ? (
          <MenuLeft
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <MenuRight onClick={() => setMenuOpen(!menuOpen)} />
        )}
        <Logo src="/logodomo.png" alt="logo check delivery" />
        <UlSidebar>
          {menuSidebar(user).map((menu) => (
            <LiSidebar
              key={menu.text}
              style={{
                backgroundColor:
                  location.pathname === menu.to ? colorFondo : "",
                borderRadius: "10px",
                position: `${menu.position}` || "relative",
                bottom: `${menu.bottom}` || "0",
                top: `${menu.top}` || "0",
                left: `${menu.left}` || "0",
                right: `${menu.right}` || "0",
              }}
            >
              <ASidebar
                menuOpen={menuOpen}
                to={menu.to}
                onClick={() => handlerActive(menu.text)}
                style={{
                  color: location.pathname === menu.to ? colorLetra : "",
                }}
              >
                {menu.icon}
                <span>{menu.text}</span>
              </ASidebar>
            </LiSidebar>
          ))}
        </UlSidebar>
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
