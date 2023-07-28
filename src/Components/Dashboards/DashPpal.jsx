import DatosDash from "./DatosDash";
import AdminDash from "./admin/AdminDash";
import DashComercial from "./integradores/DashComercial";
import DashIntegrador from "./integradores/DashIntegrador";
import DashMkt from "./masDelivery/DashMkt";
import DashVendedor from "./vendedores/DashVendedor";

const DashPpal = ({ clientes, user }) => {
  return (
    <>
      <DatosDash
        clientes={clientes}
        vendedor={user.vendedor !== null ? user.vendedor : null}
        role={user.role}
      />
      {user.role === "admin" && <AdminDash clientes={clientes} />}
      {user.role === "comercial" && <DashComercial clientes={clientes} />}
      {user.role === "vendedor" && (
        <DashVendedor clientes={clientes} user={user} />
      )}
      {user.role === "marketing" && <DashMkt clientes={clientes} />}
      {user.role === "integrador" && <DashIntegrador clientes={clientes} />}
    </>
  );
};

export default DashPpal;
