import FormFilters from "../Formularios/FormFilters";
import { DivDatosContacto } from "../../Styles/Pages/ClientsIndStyles";

const Filters = ({ clientes }) => {
  return (
    <DivDatosContacto>
      <h5>Filtrar</h5>
      <FormFilters clientes={clientes} />
    </DivDatosContacto>
  );
};

export default Filters;
