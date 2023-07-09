import filterById from "../../services/filterById";
import { hitosInd } from "../../services/histosInd";
import TinmeLineClient from "../TimeLine";

const ModalDatosHistorial = ({ clientes, idClient, reference }) => {
  const cliente = filterById(clientes, idClient);
  const hitosIndividual = hitosInd(cliente, reference);
  console.log(hitosIndividual);
  return (
    <div>
      <TinmeLineClient hitos={hitosIndividual} />
    </div>
  );
};

export default ModalDatosHistorial;
