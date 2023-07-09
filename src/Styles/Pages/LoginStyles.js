import { styled } from "styled-components";
import { colorFondo, colorLetra } from "../GeneralStyles";

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colorLetra};
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
  height: 100%;
  border-left: 1px solid ${colorFondo};

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
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: end;
  gap: 20px;
`;
