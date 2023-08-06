import styled from "styled-components";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { colorFondo, colorLetra } from "../GeneralStyles";

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 5px;
  border-radius: 50%;
  padding: 5px;
`;

export const TitleNav = styled.h1`
  margin-left: 10px;
  @media screen and (max-width: 700px) {
    display: none !important;
  }
`;

export const MenuHamburguer = styled(ListOutlinedIcon)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none !important;
  @media screen and (max-width: 700px) {
    display: inline-block !important;
  }
`;

export const NavbarStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 15px 80px;
  height: 50px;
  width: auto;
  @media screen and (max-width: 700px) {
    justify-content: space-between;
    padding: 15px;
  }
  // background-color: ${colorLetra};
  // box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  // -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  // -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DivNotifications = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  width: 250px;
  background-color: ${(props) => {
    if (props.modo === "dark") {
      if (props.estado === "Pendiente") {
        return "#404040";
      } else {
        return colorFondo;
      }
    } else {
      if (props.estado === "Pendiente") {
        return "#eff3f8";
      } else {
        return "#fafafa";
      }
    }
  }};
  cursor: pointer;
`;
