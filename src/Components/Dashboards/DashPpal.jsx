import { useSelector } from "react-redux";
import DatosDash from "./DatosDash";
import AdminDash from "./admin/AdminDash";
import DashComercial from "./integradores/DashComercial";
import DashIntegrador from "./integradores/DashIntegrador";
import DashMas from "./masDelivery/DashMas";
import DashMkt from "./masDelivery/DashMkt";
import DashVendedor from "./vendedores/DashVendedor";
import DashClMkt from "./masDelivery/DashClMkt";
import DatosProspects from "./masDelivery/DatosProspects";

const DashPpal = ({ clientes, user, prospects }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  return (
    <>
      <DatosDash
        clientes={clientes}
        vendedor={user.vendedor !== null ? user.vendedor : null}
        role={user.role}
        darkMode={darkMode}
      />
      {user.role === "admin" && (
        <AdminDash
          clientes={clientes}
          darkMode={darkMode}
          prospects={prospects}
        />
      )}
      {user.role === "comercial" && (
        <DashComercial
          clientes={clientes}
          darkMode={darkMode}
          prospects={prospects}
        />
      )}
      {user.role === "vendedor" && (
        <DashVendedor clientes={clientes} user={user} darkMode={darkMode} />
      )}
      {user.role === "integral" && (
        <div
          className="flex"
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <DashIntegrador
            clientes={clientes}
            role={user.role}
            darkMode={darkMode}
          />
          <DatosProspects
            clientes={prospects}
            darkMode={darkMode}
            width="40%"
          />
          <DashComercial
            clientes={clientes}
            darkMode={darkMode}
            prospects={prospects}
          />
          <DashVendedor clientes={clientes} user={user} darkMode={darkMode} />
        </div>
      )}
      {user.role === "marketing" && (
        <div className="flex" style={{ alignItems: "start", width: "100%" }}>
          <DashMkt clientes={clientes} darkMode={darkMode} />
          <DashClMkt clientes={clientes} darkMode={darkMode} />
        </div>
      )}
      {user.role === "integrador" && (
        <DashIntegrador
          clientes={clientes}
          role={user.role}
          darkMode={darkMode}
        />
      )}
      {user.role === "masDelivery" && (
        <DashMas clientes={clientes} role={user.role} darkMode={darkMode} />
      )}
    </>
  );
};

export default DashPpal;
