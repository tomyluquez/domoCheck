import { useDispatch } from "react-redux";
import useGetUsers from "../../Hooks/useGetUsers";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { CardsAdmin, DivContainerUsers } from "../../Styles/Pages/AdminStyles";
import { openModal } from "../../redux/slices/modal";

const Config = () => {
  const { data } = useGetUsers();
  const dispatch = useDispatch();
  const handlerCreateUser = () => {
    dispatch(openModal({ type: "Agregar usuario" }));
  };

  const handlerEditUser = (user) => {
    dispatch(openModal({ type: "Editar usuario", referencia: user }));
  };

  return (
    <>
      <h4>Usuarios Creados ({data && data.data.length})</h4>
      <ButtonCustom onClick={handlerCreateUser}>Crear Usuario</ButtonCustom>
      <DivContainerUsers>
        {data &&
          data.data.map((user) => (
            <CardsAdmin key={user._id} onClick={() => handlerEditUser(user)}>
              <h5>{user.name.toUpperCase()}</h5>
              <span>{user.email}</span>
              <span>{user.role}</span>
            </CardsAdmin>
          ))}
      </DivContainerUsers>
    </>
  );
};

export default Config;
