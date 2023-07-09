import { useState } from "react";
import { colorFondo } from "../Styles/GeneralStyles";
import {
  ASidebar,
  LiSidebar,
  SidebarStyle,
  UlSidebar,
} from "../Styles/Pages/SidebarStyles";
import { menuSidebar } from "../data/menuSidebar";
import { openModal } from "../redux/slices/modal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/users";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("Dashboard");
  const user = useSelector((state) => state.user);

  const handlerActive = (text) => {
    setActive(text);
    if (text === "Agregar cliente") {
      dispatch(openModal({ type: "Agregar cliente" }));
    }
    if (text === "Cerrar sesion") {
      dispatch(logoutUser());
    }
  };
  return (
    <SidebarStyle>
      <UlSidebar>
        {menuSidebar(user).map((menu) => (
          <LiSidebar
            key={menu.text}
            style={{
              backgroundColor: active === menu.text ? colorFondo : "",
              borderRadius: "10px",
              position: `${menu.position}` || "relative",
              bottom: `${menu.bottom}` || "0",
              top: `${menu.top}` || "0",
              left: `${menu.left}` || "0",
              right: `${menu.right}` || "0",
            }}
          >
            <ASidebar
              to={menu.to}
              onClick={() => handlerActive(menu.text)}
              style={{ color: active === menu.text ? "white" : "" }}
            >
              {menu.icon}
              <span>{menu.text}</span>
            </ASidebar>
          </LiSidebar>
        ))}
      </UlSidebar>
    </SidebarStyle>
  );
};

export default Sidebar;
