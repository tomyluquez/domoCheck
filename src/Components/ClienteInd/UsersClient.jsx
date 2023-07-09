import { TextField } from "@mui/material";
import { useState } from "react";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { dataTienda, dataUsers } from "../../data/dataUsers";
import {
  DivUserAPi,
  DivUsers,
  DivUsersGrid,
} from "../../Styles/Pages/ClientsIndStyles";
import useSetUsersApi from "../../Hooks/useSetUsersApi";
import Loading from "./../Loading";
import { useSelector } from "react-redux";

const UsersClient = ({ cliente }) => {
  const role = useSelector((state) => state.user.role);
  const [data, setData] = useState({
    usuarioApi: cliente.usuarios?.usuarioApi || "",
    claveApi: cliente.usuarios?.claveApi || "",
    linkTienda: cliente.usuarios?.linkTienda || "",
    usuarioAdmin: cliente.usuarios?.usuarioAdmin || "",
    claveAdmin: cliente.usuarios?.claveAdmin || "",
    usuarioLocal: cliente.usuarios?.usuarioLocal || "",
    claveLocal: cliente.usuarios?.claveLocal || "",
    usuarioOperador: cliente.usuarios?.usuarioOperador || "",
    claveOperador: cliente.usuarios?.claveOperador || "",
  });
  const mutationUsers = useSetUsersApi();
  const { isLoading } = mutationUsers;

  const handlerSetUsersApi = () => {
    const users = {
      usuarioApi: data.usuarioApi,
      claveApi: data.claveApi,
      linkTienda: data.linkTienda,
      idClient: cliente._id,
      endpoint: "usersAPI",
    };
    mutationUsers.mutate(users);
  };
  const handlerSetUsersDatos = () => {
    const users = {
      usuarioAdmin: data.usuarioAdmin,
      claveAdmin: data.claveAdmin,
      usuarioLocal: data.usuarioLocal,
      claveLocal: data.claveLocal,
      usuarioOperador: data.usuarioOperador,
      claveOperador: data.claveOperador,
      idClient: cliente._id,
      endpoint: "usersDatos",
    };
    mutationUsers.mutate(users);
  };
  return (
    <DivUsers>
      <DivUserAPi>
        <h4 style={{ margin: 0 }}>Usuarios API</h4>
        {dataTienda.map((dataUser) => (
          <TextField
            key={dataUser.value}
            sx={{ minWidth: 180, width: "50%" }}
            value={data[dataUser.value]}
            id="outlined-basic"
            label={dataUser.label}
            variant="outlined"
            required={true}
            disabled={role !== "masDelivery"}
            onChange={(e) =>
              setData({ ...data, [dataUser.value]: e.target.value })
            }
          />
        ))}
        {role === "masDelivery" && (
          <ButtonCustom onClick={handlerSetUsersApi}>
            {isLoading ? <Loading /> : "Guardar"}
          </ButtonCustom>
        )}
      </DivUserAPi>
      <DivUsersGrid>
        <h4 style={{ margin: 0 }}>Usuarios para el panel de control</h4>
        {dataUsers.map((dataUser) => (
          <TextField
            key={dataUser.value}
            sx={{ minWidth: 180, width: "40%" }}
            value={data[dataUser.value]}
            id="outlined-basic"
            label={dataUser.label}
            variant="outlined"
            required={true}
            disabled={role !== "masDelivery"}
            onChange={(e) =>
              setData({ ...data, [dataUser.value]: e.target.value })
            }
          />
        ))}
        {role === "masDelivery" && (
          <ButtonCustom onClick={handlerSetUsersDatos}>
            {isLoading ? <Loading /> : "Guardar"}
          </ButtonCustom>
        )}
      </DivUsersGrid>
    </DivUsers>
  );
};

export default UsersClient;
