import FormCreateUser from "../Formularios/FormCreateUser";

const ModalUser = ({ user }) => {
  return (
    <>
      <h3>{user?.name ? "Editar" : "Crear"} Usuario</h3>
      <FormCreateUser user={user} />
    </>
  );
};

export default ModalUser;
