import { Divider } from "@mui/material";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import {
  DivContainer,
  DivContainerObs,
} from "../../Styles/Pages/Observaciones";
import useMutations from "../../Hooks/useMutations";
import { useState } from "react";
import Loading from "../Loading";

const Observaciones = ({ cliente }) => {
  const [obs, setObs] = useState(null);
  const mutationclient = useMutations();
  const { isLoading } = mutationclient;

  const handlerAddObs = () => {
    mutationclient.mutate({ id: cliente._id, obs });
    setObs(null);
  };

  return (
    <>
      <DivContainerObs>
        {cliente.observaciones ? (
          cliente.observaciones
            .slice()
            .reverse()
            .map((obs, index) => <p key={index}>{obs}</p>)
        ) : (
          <p>No hay observaciones</p>
        )}
        <Divider />
      </DivContainerObs>
      <DivContainer>
        <TexTarea cliente={cliente} obs={obs} setObs={setObs} />
        <ButtonCustom
          width="250px"
          height="50px"
          disabled={!obs}
          onClick={handlerAddObs}
        >
          {isLoading ? <Loading /> : "Agregar Observacion"}
        </ButtonCustom>
      </DivContainer>
    </>
  );
};

export default Observaciones;
