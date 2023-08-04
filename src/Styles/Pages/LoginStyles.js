import { styled } from "styled-components";
import { colorFondo, colorLetra, colorLogo } from "../GeneralStyles";

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #404040;
`;

export const DivBackground = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const DivLogin = styled.div`
  width: 35%;
  height: 35%;
  @media screen and (max-width: 700px) {
    width: 100%;
    border-left: none;
  }
`;

export const ImgLogin = styled.img`
  filter: drop-shadow(8px 18px 14px ${colorFondo});
`;

export const FormLoginStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  justify-content: end;
  gap: 20px;
  border: 1px solid ${colorLogo};
  background-color: ${colorLetra};
  box-shadow: 0px 8px 14px -3px rgb(189, 216, 25);
  -webkit-box-shadow: 0px 8px 14px -3px rgb(189, 216, 25);
  -moz-box-shadow: 0px 8px 14px -3px rgb(189, 216, 25);
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
