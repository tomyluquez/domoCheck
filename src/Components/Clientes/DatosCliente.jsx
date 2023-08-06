import { DivDatosContacto } from "../../Styles/Pages/ClientsIndStyles";
import { Divider } from "@mui/material";
import NameClient from "../ClienteInd/NameClient";
import DatosRedes from "../ClienteInd/DatosRedes";
import { useSelector } from "react-redux";
import DatosContacto from "../ClienteInd/DatosContacto";

const DatosCliente = ({ cliente }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <DivDatosContacto modo={darkMode ? "dark" : ""}>
      <NameClient cliente={cliente} />
      <DatosRedes cliente={cliente} />
      <Divider />
      <DatosContacto cliente={cliente} />
    </DivDatosContacto>
  );
};

export default DatosCliente;
