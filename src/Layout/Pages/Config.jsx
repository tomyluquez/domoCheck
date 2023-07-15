import { useDispatch } from "react-redux";
import useGetUsers from "../../Hooks/useGetUsers";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import {
  CardsAdmin,
  DivAvatar,
  DivContainerUsers,
  DivIcons,
  DivIconsUser,
  EditIcon,
} from "../../Styles/Pages/AdminStyles";
import { openModal } from "../../redux/slices/modal";
import { Avatar, Skeleton, Tooltip } from "@mui/material";
import { colorFondo, colorLogo } from "../../Styles/GeneralStyles";
import DeleteUser from "../../Components/Configuracion/DeleteUser";

const Config = () => {
  const { data, isLoading } = useGetUsers();
  const dispatch = useDispatch();
  const handlerCreateUser = () => {
    dispatch(openModal({ type: "Agregar usuario" }));
  };

  const handlerEditUser = (user) => {
    dispatch(openModal({ type: "Editar usuario", referencia: user }));
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </div>
    );
  }

  return (
    <>
      <h4>Usuarios Creados ({data && data.data.length})</h4>
      <ButtonCustom onClick={handlerCreateUser}>Crear Usuario</ButtonCustom>
      <DivContainerUsers>
        {data &&
          data.data.map((user) => (
            <CardsAdmin key={user._id}>
              <DivIcons>
                <DivAvatar>
                  <Avatar style={{ backgroundColor: colorLogo }}>
                    {user.name.split("")[0].toUpperCase()}
                  </Avatar>
                  <span style={{ color: colorFondo }}>
                    {user.name.toUpperCase()}
                  </span>
                </DivAvatar>
                <DivIconsUser>
                  <Tooltip title="Editar">
                    <EditIcon onClick={() => handlerEditUser(user)} />
                  </Tooltip>
                  <DeleteUser user={user} />
                </DivIconsUser>
              </DivIcons>
              <span>{user.email}</span>
              <span>{user.role}</span>
            </CardsAdmin>
          ))}
      </DivContainerUsers>
    </>
  );
};

export default Config;
