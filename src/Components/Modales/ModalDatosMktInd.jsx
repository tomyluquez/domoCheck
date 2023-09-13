import { actDatoMkt } from "../../services/actDatoMkt";
import filterById from "../../services/filterById";
import formatDate from "../../services/formatDate";
import { hitosInd } from "../../services/histosInd";
import TinmeLineClient from "../TimeLine";

const ModalDatosMktInd = ({ clientes, idClient, dato }) => {
  console.log(dato);
  const cliente = filterById(clientes, idClient);
  const title = dato.slice(4);
  const hitosIndividual = hitosInd(cliente, title);
  const actPendiente = actDatoMkt(cliente, title);

  return (
    <div>
      {actPendiente.length > 0 && (
        <p>
          Fecha de proximo contacto -
          {formatDate(actPendiente[actPendiente.length - 1].proximoContacto)}
        </p>
      )}
      <TinmeLineClient hitos={hitosIndividual} />
    </div>
  );
};

export default ModalDatosMktInd;
