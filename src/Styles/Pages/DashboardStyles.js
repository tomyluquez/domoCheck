import { styled } from "styled-components";
import { colorFondoHover, colorLetra, colorLogo } from "../GeneralStyles";

export const DivContainerCards = styled.div`
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

export const Cards = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${colorLetra};
  border-radius: 20px;
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;

export const SpanCard = styled.span`
  font-size: 10px;
  color: ${colorFondoHover};
`;

export const NumberCard = styled.span`
  font-size: 40px;
  color: ${colorLogo};
`;

export const DivSpanNumber = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
`;
