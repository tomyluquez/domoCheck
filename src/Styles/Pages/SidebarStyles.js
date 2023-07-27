import styled from "styled-components";
import {
  colorFondo,
  colorLetra,
  colorLogo,
  colorLogoOpa,
  colorFondoHover,
} from "../GeneralStyles";
import { Link } from "react-router-dom";
import { List } from "@mui/material";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

export const ASidebar = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${colorFondo};
  gap: 5px;
  padding: 8px 5px;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  span {
    width: 125px;
    display: ${(props) => (props.menuOpen ? "block" : "none")};
    transition: display 0.3s ease-in-out;
  }
  &:hover {
    background-color: ${colorFondoHover};
    color: ${colorLetra};
  }
`;

export const UlSidebar = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 20px;
  padding: 0px 0px 0px 12px;
`;

export const SidebarStyle = styled.section`
  display: flex;
  align-items: center;
  width: ${(props) => (props.menuOpen ? "15%" : "5%")};
  transition: all 0.3s ease-in-out;
  height: 100vh;
  cursor: pointer;
  position: fixed;
  z-index: 3;
  background-color: ${(props) => (props.menuOpen ? colorLogoOpa : colorLogo)};
  @media screen and (max-width: 700px) {
    position: absolute;
    left: -100%;
  }
`;

export const ContainerPpal = styled.div`
  width: calc(100% - 5%);
  padding: 10px;
  margin-left: 80px;
  background-color: #eff3f8;

  ${SidebarStyle} :hover & {
    margin-left: 195px !important;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const LiSidebar = styled.li`
  display: flex;
`;

export const ListMobile = styled(List)`
  background-color: ${colorLogo};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 0 10px !important;
  flex-direction: column;
`;

export const LinkMobile = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const MenuRight = styled(KeyboardDoubleArrowRightOutlinedIcon)`
  position: absolute;
  top: 0;
  right: -10px;
  z-index: 100;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MenuLeft = styled(KeyboardDoubleArrowLeftOutlinedIcon)`
  position: absolute;
  top: 0;
  right: -10px;
  z-index: 100;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
