import { TextareaAutosize } from "@mui/material";
import { styled } from "styled-components";
import { colorFondo, colorLogo } from "./GeneralStyles";

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
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${colorFondo};
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
