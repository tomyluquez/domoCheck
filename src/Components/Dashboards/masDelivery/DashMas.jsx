// import DashMkt from "./DashMkt";
import DashIntegrador from "../integradores/DashIntegrador";
import { useSelector } from "react-redux";
import DatosProspects from "./DatosProspects";

const DashMas = ({ clientes, role }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const prospects = useSelector((state) => state.clientes.prospects);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "45px",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <DashIntegrador clientes={clientes} role={role} darkMode={darkMode} />
      <DatosProspects clientes={prospects} darkMode={darkMode} width="60%" />
      {/* <DashMkt clientes={clientes} darkMode={darkMode} width="50%" /> */}
    </div>
  );
};

export default DashMas;
