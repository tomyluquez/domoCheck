import TablaPrincipal from "../../Components/Clientes/TablaPrincipal";
import Filters from "../../Components/Clientes/Filters";
import { useSelector } from "react-redux";
import filterClientByRole from "../../services/filterClientsByRole";

const Clientes = () => {
  const { clientes, filteredClientes } = useSelector((state) => state.clientes);
  const role = useSelector((state) => state.user.role);
  const clientesActivos = filterClientByRole(
    filteredClientes.length > 0 ? filteredClientes : clientes,
    role
  );

  return (
    <div>
      <Filters clientes={clientes} clientesActivos={clientesActivos} />
      <TablaPrincipal clientes={clientesActivos} />
    </div>
  );
};

export default Clientes;
