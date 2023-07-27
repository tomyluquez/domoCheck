import { useSelector } from "react-redux";
import DashPpal from "../../Components/Dashboards/DashPpal";

const Dash = () => {
  const user = useSelector((state) => state.user);
  const clientes = useSelector((state) => state.clientes.clientes);

  return (
    <div className="flexColumn">
      <DashPpal clientes={clientes} user={user} />
    </div>
  );
};

export default Dash;
