import useMutations from "../../Hooks/useMutations";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import EstadoDatos from "./EstadoDatos";
import useMutationNewAct from "./../../Hooks/useMutationNewAct";
import handlerChangeState from "../../services/handlerChangeState";
import Loading from "../Loading";
import { hoverColors, stateColors } from "../../data/colors";
import { colorLetra } from "../../Styles/GeneralStyles";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal";
import { Navigate } from "react-router-dom";

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
    };
    handlerChangeState(props);
    <Navigate to="/clientes" />;
  };

  const handlerCancel = () => {
    dispatch(
      openModal({
        type: "Cancelar integracion",
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
          <ButtonCustom
            width="150px"
            onClick={() =>
              handlerChange(
                "Cliente despachado",
                "Cliente despachado",
                "Despachado"
              )
            }
          >
            {isLoading ? <Loading /> : "Despachar"}
          </ButtonCustom>
        )}
        {cliente.estado === "Despachado" && (
          <ButtonCustom
            width="150px"
            onClick={() =>
              handlerChange(
                "Cliente listo para testo",
                "Cliente listo para testo",
                "Testeo"
              )
            }
          >
            {isLoading ? <Loading /> : "Listo para testeo"}
          </ButtonCustom>
        )}
        {cliente.estado === "Testeo" && (
          <ButtonCustom
            width="150px"
            onClick={() =>
              handlerChange(
                "Cliente listo para configurar",
                "Cliente listo para configurar",
                "Configuracion"
              )
            }
          >
            {isLoading ? <Loading /> : "Listo para configurar"}
          </ButtonCustom>
        )}
        {cliente.estado === "Configuracion" && (
          <ButtonCustom
            width="150px"
            onClick={() =>
              handlerChange(
                "Cliente listo para integrar",
                "Cliente Integrado",
                "Integrado"
              )
            }
          >
            {isLoading ? <Loading /> : "Listo para integrar"}
          </ButtonCustom>
        )}
        {cliente.estado !== "No lo quiere" && (
          <ButtonCustom
            width="80px"
            fondo={stateColors["No lo quiere"]}
            color={colorLetra}
            hfondo={hoverColors["No lo quiere"]}
            borde={colorLetra}
            onClick={handlerCancel}
          >
            Cancelar Integracion
          </ButtonCustom>
        )}
      </div>
      {cliente.estado !== "No contesta" &&
        cliente.estado !== "No lo quiere" &&
        cliente.estado !== "Pendiente" && <EstadoDatos cliente={cliente} />}
    </div>
  );
};

export default EstadoIntegracion;
