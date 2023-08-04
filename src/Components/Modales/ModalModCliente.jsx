import filterById from "../../services/filterById";
import FormModCliente from "../Formularios/FormModCliente";

const ModalModCliente = ({ clientes, idClient }) => {
  const cliente = filterById(clientes, idClient);

  return (
    <div>
      <FormModCliente cliente={cliente} />
    </div>
  );
};

export default ModalModCliente;
