import filterById from "../../services/filterById";
import { hitosInd } from "../../services/histosInd";
import TinmeLineClient from "../TimeLine";

const ModalHistorial = ({ clientes, idClient }) => {
  const cliente = filterById(clientes, idClient);
  const hitosIndividual = hitosInd(cliente);

  return (
    <div>
      <TinmeLineClient hitos={hitosIndividual} />
    </div>
  );
};

export default ModalHistorial;
