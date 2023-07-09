import { DivContainer } from "../../Styles/ActividadesStyle";
import SelectCustom from "../SelectCustom";

const OrdenActividades = ({ orden, setOrden, ordenAct }) => {
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
    </DivContainer>
  );
};

export default OrdenActividades;
