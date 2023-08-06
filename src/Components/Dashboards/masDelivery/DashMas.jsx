import DashMkt from "./DashMkt";
import DashIntegrador from "../integradores/DashIntegrador";
import { useSelector } from "react-redux";

const DashMas = ({ clientes, role }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  return (
    <div style={{ width: "100%" }} className="flexColumn">
      <DashIntegrador clientes={clientes} role={role} darkMode={darkMode} />
      <DashMkt clientes={clientes} darkMode={darkMode} />
    </div>
  );
};

export default DashMas;
