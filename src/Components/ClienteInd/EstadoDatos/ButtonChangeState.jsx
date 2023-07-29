import { ButtonCustom } from "../../../Styles/ButtonStyles";
import Loading from "../../Loading";

const ButtonChangeState = ({
  cliente,
  isLoading,
  handlerChange,
  label,
  estado,
}) => {
  return (
    <ButtonCustom
      width="150px"
      onClick={() =>
        handlerChange(
          `${cliente.nombreLocal} fue ${estado}`,
          `${cliente.nombreLocal} fue ${estado}`,
          estado
        )
      }
    >
      {isLoading ? <Loading /> : label}
    </ButtonCustom>
  );
};

export default ButtonChangeState;
