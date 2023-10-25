import { useState } from "react";
import filterById from "../../services/filterById";
import useMutations from "../../Hooks/useMutations";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import { useDispatch, useSelector } from "react-redux";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { hoverColors, stateColors } from "../../data/colors";
import { colorLetra } from "../../Styles/GeneralStyles";
import Loading from "../Loading";
import useCreateNotifi from "../../Hooks/useCreateNotifi";
import { retomarIntegracion } from "../../services/retomarIntegracion";

const ModalReturnIntegracion = ({ clientes, idClient, users }) => {
  const cliente = filterById(clientes, idClient);
  const [obs, setObs] = useState(null);
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  const notifiMutation = useCreateNotifi();
  const userName = useSelector((state) => state.user.name);

  const handlerStop = async () => {
    retomarIntegracion(
      cliente,
      userName,
      mutationNewAct,
      mutationclient,
      users,
      notifiMutation,
      dispatch
    );
  };

  return (
    <div>
      <TexTarea obs={obs} setObs={setObs} />
      <ButtonCustom
        width="80px"
        fondo={stateColors["Despachado"]}
        color={colorLetra}
        hfondo={hoverColors["Despachado"]}
        borde={colorLetra}
        onClick={handlerStop}
      >
        {isLoading ? <Loading /> : "Retomar integracion"}
      </ButtonCustom>
    </div>
  );
};

export default ModalReturnIntegracion;
