import useMutations from "../../Hooks/useMutations";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import EstadoDatos from "./EstadoDatos";
import useMutationNewAct from "./../../Hooks/useMutationNewAct";
import handlerChangeState from "../../services/handlerChangeState";
import Loading from "../Loading";
import { hoverColors, stateColors } from "../../data/colors";
import { colorLetra } from "../../Styles/GeneralStyles";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/slices/modal";
import { useNavigate } from "react-router-dom";
import ButtonChangeState from "./EstadoDatos/ButtonChangeState";
import useCreateNotifi from "../../Hooks/useCreateNotifi";
import useGetUsers from "../../Hooks/useGetUsers";

const EstadoIntegracion = ({ cliente }) => {
  const datosEntregados =
    cliente.menu.estado === "Entregado" &&
    cliente.mapa.estado === "Entregado" &&
    cliente.imgStore.estado === "Entregado" &&
    cliente.imgProd.estado === "Entregado" &&
    cliente.datos.estado === "Entregado" &&
    cliente.estado === "Faltan datos";
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const mutationAct = useMutationNewAct();
  const { isLoading } = mutationclient;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const notifiMutation = useCreateNotifi();
  const users = useGetUsers();

  const handlerChange = (setObs, setResultado, setEstado) => {
    const props = {
      proximoContacto: new Date(),
      obs: setObs,
      dato: "Estado del cliente",
      estadoAct: "Cumplida",
      resultado: setResultado,
      mutationNewAct,
      mutationAct,
      mutationclient,
      cliente,
      estado: setEstado,
      userName,
      users: users.data,
      notifiMutation,
    };
    handlerChangeState(props);
    navigate("/Clientes");
  };

  const handleModal = (motivo) => {
    dispatch(
      openModal({
        type: motivo,
        id: cliente._id,
      })
    );
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span>
          Estado: {datosEntregados ? "Pendiente de despachar" : cliente.estado}
        </span>
        {datosEntregados && (
          <ButtonChangeState
            cliente={cliente}
            isLoading={isLoading}
            handlerChange={handlerChange}
            label="Despachar"
            estado="Despachado"
          />
        )}
        {cliente.estado === "Despachado" && (
          <ButtonChangeState
            cliente={cliente}
            isLoading={isLoading}
            handlerChange={handlerChange}
            label="Listo para testeo"
            estado="Testeo"
          />
        )}
        {cliente.estado === "Testeo" && (
          <ButtonChangeState
            cliente={cliente}
            isLoading={isLoading}
            handlerChange={handlerChange}
            label="Listo para configurar"
            estado="Configuracion"
          />
        )}
        {cliente.estado === "Configuracion" && (
          <ButtonCustom
            width="150px"
            onClick={() =>
              handlerChange(
                `${cliente.nombreLocal} listo para integrar`,
                `Se integro ${cliente.nombreLocal}`,
                "Integrado"
              )
            }
          >
            {isLoading ? <Loading /> : "Listo para integrar"}
          </ButtonCustom>
        )}
        {cliente.estado !== "No lo quiere" && (
          <ButtonCustom
            width="100px"
            fondo={stateColors["No lo quiere"]}
            color={colorLetra}
            hfondo={hoverColors["No lo quiere"]}
            borde={colorLetra}
            onClick={() => handleModal("Cancelar integracion")}
          >
            Cancelar Integracion
          </ButtonCustom>
        )}
        {cliente.estado !== "No lo quiere" &&
          cliente.estado !== "No contesta" &&
          cliente.estado !== "StandBy" && (
            <ButtonCustom
              width="80px"
              fondo={stateColors["No contesta"]}
              color={colorLetra}
              hfondo={hoverColors["No contesta"]}
              borde={colorLetra}
              onClick={() => handleModal("Detener integracion")}
            >
              Stand By
            </ButtonCustom>
          )}
        {(cliente.estado === "No contesta" ||
          cliente.estado === "No lo quiere" ||
          cliente.estado === "StandBy") && (
          <ButtonCustom
            width="80px"
            fondo={hoverColors["Despachado"]}
            color={colorLetra}
            hfondo={stateColors["Despachado"]}
            borde={colorLetra}
            onClick={() => handleModal("Retomar integracion")}
          >
            Retomar Integracion
          </ButtonCustom>
        )}
      </div>
      {cliente.estado !== "Pendiente" && <EstadoDatos cliente={cliente} />}
    </div>
  );
};

export default EstadoIntegracion;
