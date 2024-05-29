import FormFilters from "../Formularios/FormFilters";
import { DivDatosContacto } from "../../Styles/Pages/ClientsIndStyles";
import { useSelector } from "react-redux";
import FormFiltersProspects from "../Formularios/FormFiltersProspects";

const Filters = ({ clientes, clientesActivos }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);

  const hasMenuProperty =
    clientes.length > 0 &&
    Object.prototype.hasOwnProperty.call(clientes[0], "menu");

  return (
    <DivDatosContacto modo={darkMode ? "dark" : ""}>
      <h5>Filtrar</h5>
      {hasMenuProperty ? (
        <FormFilters clientes={clientes} />
      ) : (
        <FormFiltersProspects prospectos={clientes} />
      )}
      Total: {clientesActivos.length}
    </DivDatosContacto>
  );
};

export default Filters;
