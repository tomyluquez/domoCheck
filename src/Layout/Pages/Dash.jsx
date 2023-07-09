import { useSelector } from "react-redux";
import AdminDash from "../../Components/Dashboards/AdminDash";
import VendedoresDash from "../../Components/Dashboards/VendedoresDash";
import IntegradoresDash from "../../Components/Dashboards/IntegradoresDash";
import MasDeliDash from "../../Components/Dashboards/MasDeliDash";

const Dash = () => {
  const user = useSelector((state) => state.user);
  const clientes = useSelector((state) => state.clientes.clientes);
  console.log(clientes);

  return (
    <div>
      {user.role === "admin" && <AdminDash clientes={clientes} />}
      {user.role === "vendedor" && <VendedoresDash clientes={clientes} />}
      {user.role === "integrador" && <IntegradoresDash clientes={clientes} />}
      {user.role === "masDelivery" && <MasDeliDash clientes={clientes} />}
    </div>
  );
};

export default Dash;
