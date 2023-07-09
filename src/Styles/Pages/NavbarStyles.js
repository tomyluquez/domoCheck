import styled from "styled-components";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { colorLetra } from "../GeneralStyles";

export const Logo = styled.img`
  width: 50px;
  height: 50px;
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
  justify-content: space-between;
  padding: 15px;
  height: 50px;
  width: auto;
  background-color: ${colorLetra};
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
