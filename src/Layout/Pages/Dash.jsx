import { useSelector } from "react-redux";
import AdminDash from "../../Components/Dashboards/AdminDash";
// import VendedoresDash from "../../Components/Dashboards/VendedoresDash";
// import IntegradoresDash from "../../Components/Dashboards/IntegradoresDash";
// import MasDeliDash from "../../Components/Dashboards/MasDeliDash";
// import MarketingDash from "../../Components/Dashboards/MarketingDash";

const Dash = () => {
  const user = useSelector((state) => state.user);
  const clientes = useSelector((state) => state.clientes.clientes);

  return (
    <div>
      {/* {user.role === "admin" && <AdminDash clientes={clientes} />}
      {user.role === "vendedor" && <VendedoresDash clientes={clientes} />}
      {user.role === "integrador" && <IntegradoresDash clientes={clientes} />}
      {user.role === "masDelivery" && <MasDeliDash clientes={clientes} />}
      {user.role === "marketing" && <MarketingDash clientes={clientes} />} */}
      <AdminDash clientes={clientes} user={user} />
    </div>
  );
};

export default Dash;
