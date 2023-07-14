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

const ModalStopIntegracion = ({ clientes, idClient }) => {
  const cliente = filterById(clientes, idClient);
  const [obs, setObs] = useState(null);
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  const userName = useSelector((state) => state.user.name);

  const handlerStop = async () => {
    const newActOk = {
      _id: uuidv4(),
      actividad: "Cliente no contesta",
      fecha: new Date(),
      proximoContacto: new Date(),
      dato: "Detener integracion",
      estadoAct: "Cumplida",
      resultado: "Cliente no contesta",
      fechaCumplimiento: new Date(),
    };

    await mutationNewAct.mutateAsync({
      id: cliente._id,
      newActOk,
      userName,
    });
    await mutationclient.mutateAsync({
      id: cliente._id,
      estado: "No contesta",
      userName,
    });
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
