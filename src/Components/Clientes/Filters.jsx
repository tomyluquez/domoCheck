import FormFilters from "../Formularios/FormFilters";
import { DivDatosContacto } from "../../Styles/Pages/ClientsIndStyles";
import { useSelector } from "react-redux";

const Filters = ({ clientes, clientesActivos }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  return (
    <DivDatosContacto modo={darkMode ? "dark" : ""}>
      <h5>Filtrar</h5>
      <FormFilters clientes={clientes} />
      Total:{clientesActivos.length}
    </DivDatosContacto>
  );
};

export default Filters;
