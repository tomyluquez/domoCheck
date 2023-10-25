import { useState } from "react";
import filterById from "../../services/filterById";
import useMutations from "../../Hooks/useMutations";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { closeModal } from "../../redux/slices/modal";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { hoverColors, stateColors } from "../../data/colors";
import { colorLetra } from "../../Styles/GeneralStyles";
import Loading from "../Loading";
import useCreateNotifi from "../../Hooks/useCreateNotifi";
import { bodyNotification } from "../../services/getNotifi";
import { sendEmailActs } from "../../data/sendMail";
import { getUserEmail } from "../../services/getMailUser";

const ModalStopIntegracion = ({ clientes, idClient, users }) => {
  const cliente = filterById(clientes, idClient);
  const [obs, setObs] = useState(null);
  const userEmail = getUserEmail(users.data.data, cliente.vendedor);
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  const notifiMutation = useCreateNotifi();
  const userName = useSelector((state) => state.user.name);

  const handlerStop = async () => {
    const newActOk = {
      _id: uuidv4(),
      actividad: "Cliente no contesta",
      fecha: new Date(),
      proximoContacto: new Date(),
      dato: "Detener integracion",
      estadoAct: "Cumplida",
      resultado: obs,
      fechaCumplimiento: new Date(),
      cumplidor: userName,
    };
    await mutationNewAct.mutateAsync({
      id: cliente._id,
      newActOk,
      userName,
    });

    const newActPen = {
      _id: uuidv4(),
      actividad: obs,
      fecha: new Date(),
      proximoContacto: new Date(),
      dato: "StandBy",
      estadoAct: "Pendiente",
      creador: cliente.vendedor,
    };

    await mutationNewAct.mutateAsync({
      id: cliente._id,
      newActPen,
      userName,
    });

    await mutationclient.mutateAsync({
      id: cliente._id,
      estado: "StandBy",
      userName,
    });
    const bodyNotifi = bodyNotification(
      "No contesta",
      cliente,
      users.data,
      userName
    );
    notifiMutation.mutate(bodyNotifi);
    sendEmailActs(cliente.vendedor, userName, cliente, userEmail);
    dispatch(closeModal());
  };

  return (
    <div>
      <TexTarea obs={obs} setObs={setObs} />
      <ButtonCustom
        width="80px"
        fondo={stateColors["No contesta"]}
        color={colorLetra}
        hfondo={hoverColors["No contesta"]}
        borde={colorLetra}
        onClick={handlerStop}
      >
        {isLoading ? <Loading /> : "Detener integracion"}
      </ButtonCustom>
    </div>
  );
};

export default ModalStopIntegracion;
