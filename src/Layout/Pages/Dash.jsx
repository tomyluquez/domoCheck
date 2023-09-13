import { useSelector } from "react-redux";
import DashPpal from "../../Components/Dashboards/DashPpal";

const Dash = () => {
  const user = useSelector((state) => state.user);
  const clientes = useSelector((state) => state.clientes.clientes);
  const prospects = useSelector((state) => state.clientes.prospects);

  return (
    <div className="flexColumn">
      <DashPpal clientes={clientes} user={user} prospects={prospects} />
    </div>
  );
};

export default Dash;
