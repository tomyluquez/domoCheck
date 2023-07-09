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
    width: 120px;
    display: none;
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
  width: 5%;
  transition: all 0.3s ease-in-out;
  height: 100vh;
  cursor: pointer;
  position: fixed;
  z-index: 3;
  background-color: ${colorLogo};
  @media screen and (max-width: 700px) {
    position: absolute;
    left: -100%;
  }

  &:hover {
    ${ASidebar} {
      span {
        display: block;
      }
    }
    width: 15%;
    transition: width 0.3s ease-in-out;
    background-color: ${colorLogoOpa};
  }

  &:not(:hover) {
    transition: width 0.3s ease-in-out;
  }
`;

export const ContainerPpal = styled.div`
  width: calc(100% - 5%);
  padding: 10px;
  margin-left: 80px;
  background-color: #eff3f8;
  height: 97vh;
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
