import { DivContainer } from "../../Styles/ActividadesStyle";
import SelectCustom from "../SelectCustom";

const OrdenActividades = ({
  orden,
  setOrden,
  ordenAct,
  orderTypeAct,
  ordenType,
  setOrdenType,
}) => {
  return (
    <DivContainer>
      <span>Ordenar Por:</span>
      <SelectCustom
        w="20%"
        label="Estado"
        value={orden}
        setValue={setOrden}
        opciones={ordenAct}
      />
      <span>Ordenar Por:</span>
      <SelectCustom
        w="20%"
        label="Tipo"
        value={ordenType}
        setValue={setOrdenType}
        opciones={orderTypeAct}
      />
    </DivContainer>
  );
};

export default OrdenActividades;
