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
import { useSelector } from "react-redux";
import formatDate from "../../services/formatDate";

const Observaciones = ({ cliente }) => {
  const [obs, setObs] = useState(null);
  const mutationclient = useMutations();
  const { isLoading } = mutationclient;
  const userName = useSelector((state) => state.user.name);

  const handlerAddObs = () => {
    mutationclient.mutate({
      id: cliente._id,
      obs: { obs, userName, date: new Date() },
    });
    setObs(null);
  };

  return (
    <>
      <DivContainerObs>
        {cliente.observaciones ? (
          cliente.observaciones
            .slice()
            .reverse()
            .map((obs, index) => (
              <p key={index}>
                {obs.obs} -{" "}
                <span style={{ color: "grey" }}>
                  {formatDate(obs.date)} {obs.userName}
                </span>
              </p>
            ))
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
