import { TextareaAutosize } from "@mui/material";
import { styled } from "styled-components";
import { colorFondo, colorLogo, colorLetra } from "./GeneralStyles";

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

export const StyledTextarea = styled(TextareaAutosize)`
  width: ${(props) => props.width};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  color: ${(props) => (props.modo ? colorLetra : colorFondo)};
  background: ${(props) => (props.modo ? "#404040" : colorLetra)};
  border-radius: 12px 12px 0 12px;
  border: 1px solid ${grey[200]};
  box-shadow: 0px 2px 2px ${grey[50]};

  &:hover {
    border-color: ${colorLogo};
  }

  &:focus {
    border-color: ${colorLogo};
    box-shadow: 0 0 0 3px ${colorLogo};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`;
