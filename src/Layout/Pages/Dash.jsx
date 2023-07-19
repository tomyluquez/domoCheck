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
      <AdminDash clientes={clientes} user={user} />
    </div>
  );
};

export default Dash;
