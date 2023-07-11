import { useState } from "react";
import filterById from "../../services/filterById";
import useMutations from "../../Hooks/useMutations";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { closeModal } from "../../redux/slices/modal";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { hoverColors, stateColors } from "../../data/colors";
import { colorLetra } from "../../Styles/GeneralStyles";
import Loading from "../Loading";

const ModalReturnIntegracion = ({ clientes, idClient }) => {
  const cliente = filterById(clientes, idClient);
  const [obs, setObs] = useState(null);
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  const handlerStop = async () => {
    const newActOk = {
      _id: uuidv4(),
      actividad: "Cliente retomo la integracion",
      fecha: new Date(),
      proximoContacto: new Date(),
      dato: "Retomar integracion",
      estadoAct: "Cumplida",
      resultado: "Cliente retomo la integracion",
      fechaCumplimiento: new Date(),
    };

    await mutationNewAct.mutateAsync({
      id: cliente._id,
      newActOk,
    });
    await mutationclient.mutateAsync({
      id: cliente._id,
      estado: "Faltan datos",
    });
    dispatch(closeModal());
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
