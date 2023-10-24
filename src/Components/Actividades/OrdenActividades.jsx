import { DivContainer } from "../../Styles/ActividadesStyle";
// import { getOptionUsers } from "../../services/getOptionUsers";
import SelectCustom from "../SelectCustom";

const OrdenActividades = ({
  orden,
  setOrden,
  ordenAct,
  orderTypeAct,
  ordenType,
  setOrdenType,
  // usuario,
  // usuarios,
  // setOrdenUserType,
}) => {
  // const users = usuarios && getOptionUsers(usuarios.data);
  return (
    <DivContainer>
      <span>Ordenar Por:</span>
      <SelectCustom
        w="15%"
        label="Estado"
        value={orden}
        setValue={setOrden}
        opciones={ordenAct}
      />
      <span>Ordenar Por:</span>
      <SelectCustom
        w="15%"
        label="Tipo"
        value={ordenType}
        setValue={setOrdenType}
        opciones={orderTypeAct}
      />
      {/* <span>Ordenar Por:</span>
      <SelectCustom
        w="15%"
        label="Usuario"
        value={usuario}
        setValue={setOrdenUserType}
        opciones={users}
      /> */}
    </DivContainer>
  );
};

export default OrdenActividades;
