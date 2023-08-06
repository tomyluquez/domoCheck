import { styled } from "styled-components";
import { colorFondoHover, colorLetra, colorLogo } from "../GeneralStyles";
import { hoverColors } from "../../data/colors";
import { AccordionDetails } from "@mui/material";

export const DivContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

export const DivContainerCardsUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 15px 0;
  width: 95%;
  text-align: center;
  background-color: ${(props) =>
    props.modo === "dark" ? "#404040" : colorLetra};

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Cards = styled.div`
  width: 15%;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${(props) =>
    props.modo === "dark" ? "#404040" : colorLetra};
  border-radius: 20px;
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  padding: 15px;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: ${(props) =>
      props.hover ? "scale(1.1)" : "scale(1)"} !important;
  }
`;

export const CardsUp = styled.div`
  width: 15%;
  min-height: 110px;
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
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: ${(props) =>
      props.hover ? "scale(1.1)" : "scale(1)"} !important;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
  }
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

export const DivData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const DivNumberData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const NumberData = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const NumberDataAnterior = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const DivTareas = styled.div`
  display: flex;
    justify-content: center;
    padding: 0 25px;
    flex-wrap: wrap;
}
`;

export const CardVendedores = styled(Cards)`
  width: 80%;
  min-height: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  text-align: center;
  &:hover {
    background-color: ${(props) => hoverColors[props.estado]};
    cursor: pointer;
  }
`;

export const DivContainerCardsVendedores = styled.div`
  width: 95%;
  min-height: 600px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
  justify-content: start;
  align-items: center;
`;

export const AccordionDetailsDash = styled(AccordionDetails)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const SpanDate = styled.span`
  position: absolute;
  bottom: 0;
  right: -15px;
  display: flex;
  width: 100%;
  color: grey;
  font-size: 12px;
  gap: 5px;
`;
