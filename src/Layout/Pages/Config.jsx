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
import { Avatar, Tooltip } from "@mui/material";
import { colorFondo, colorLogo } from "../../Styles/GeneralStyles";
import DeleteUser from "../../Components/Configuracion/DeleteUser";
import Loading from "../../Components/Loading";

const Config = () => {
  const { data, isLoading } = useGetUsers();
  const dispatch = useDispatch();
  const handlerCreateUser = () => {
    dispatch(openModal({ type: "Agregar usuario" }));
  };

  const handlerEditUser = (user) => {
    dispatch(openModal({ type: "Editar usuario", referencia: user }));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div data-aos="fade-right" data-aos-duration="1200">
          <div className="flex">
            <h4>Usuarios Creados ({data && data.data.length})</h4>
            <ButtonCustom onClick={handlerCreateUser}>
              Crear Usuario
            </ButtonCustom>
          </div>
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
        </div>
      )}
    </>
  );
};

export default Config;
