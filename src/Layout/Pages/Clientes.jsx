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

  if (filteredClientes.length === 0) {
    return (
      <>
        <Filters clientes={clientes} clientesActivos={filteredClientes} />{" "}
        <TablaPrincipal clientes={filteredClientes} />
      </>
    );
  }

  return (
    <div data-aos="fade-left" data-aos-duration="1200">
      <Filters clientes={clientes} clientesActivos={clientesActivos} />
      <TablaPrincipal clientes={clientesActivos} />
    </div>
  );
};

export default Clientes;
