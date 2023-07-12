import FormFilters from "../Formularios/FormFilters";
import { DivDatosContacto } from "../../Styles/Pages/ClientsIndStyles";

const Filters = ({ clientes, clientesActivos }) => {
  return (
    <DivDatosContacto>
      <h5>Filtrar</h5>
      <FormFilters clientes={clientes} />
      Total:{clientesActivos.length}
    </DivDatosContacto>
  );
};

export default Filters;
