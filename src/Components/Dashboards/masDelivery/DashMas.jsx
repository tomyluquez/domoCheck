import DashMkt from "./DashMkt";
import DashIntegrador from "../integradores/DashIntegrador";

const DashMas = ({ clientes, role }) => {
  return (
    <div style={{ width: "100%" }} className="flexColumn">
      <DashIntegrador clientes={clientes} role={role} />
      <DashMkt clientes={clientes} />
    </div>
  );
};

export default DashMas;
