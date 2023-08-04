import { useState } from "react";
import TexTarea from "./TexTarea";
import { ButtonCustom } from "../Styles/ButtonStyles";
import { hoverColors, stateColors } from "../data/colors";
import { colorLetra } from "../Styles/GeneralStyles";
import useMutations from "../Hooks/useMutations";
import useMutationNewAct from "../Hooks/useMutationNewAct";
import filterById from "../services/filterById";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modal";
import { v4 as uuidv4 } from "uuid";
import useCreateNotifi from "../Hooks/useCreateNotifi";
import { bodyNotification } from "../services/getNotifi";

const CancelIntergacion = ({ clientes, idClient, users }) => {
  const cliente = filterById(clientes, idClient);
  const [obs, setObs] = useState(null);
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  const notifiMutation = useCreateNotifi();
  const userName = useSelector((state) => state.user.name);

  const handlerCancel = async () => {
    const newActOk = {
      _id: uuidv4(),
      actividad: "Cliente cancelo la integracion",
      fecha: new Date(),
      proximoContacto: new Date(),
      dato: "Cancelacion",
      estadoAct: "Cumplida",
      resultado: "Cliente cancelo la integracion",
      fechaCumplimiento: new Date(),
    };

    await mutationNewAct.mutateAsync({
      id: cliente._id,
      newActOk,
      userName,
    });
    await mutationclient.mutateAsync({
      id: cliente._id,
      estado: "No lo quiere",
      userName,
    });
    const bodyNotifi = bodyNotification(
      "No lo quiere",
      cliente,
      users.data,
      userName
    );
    notifiMutation.mutate(bodyNotifi);
    dispatch(closeModal());
  };

  return (
    <div>
      <TexTarea obs={obs} setObs={setObs} />
      <ButtonCustom
        width="80px"
        fondo={stateColors["No lo quiere"]}
        color={colorLetra}
        hfondo={hoverColors["No lo quiere"]}
        borde={colorLetra}
        onClick={handlerCancel}
      >
        {isLoading ? <Loading /> : "Cancelar integracion"}
      </ButtonCustom>
    </div>
  );
};

export default CancelIntergacion;
