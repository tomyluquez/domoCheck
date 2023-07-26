import DatosDash from "./DatosDash";
import AdminDash from "./admin/AdminDash";
import DashComercial from "./integradores/DashComercial";

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
    </>
  );
};

export default DashPpal;
