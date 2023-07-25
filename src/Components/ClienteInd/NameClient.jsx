import {
  DivTitle,
  IconAdd,
  IconEdit,
  SpanIcon,
  SpanTitle,
} from "../../Styles/Pages/ClientsIndStyles";
import { openModal } from "../../redux/slices/modal";
import useChangeName from "../../Hooks/useChangeName";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NameClient = ({ cliente }) => {
  const dispatch = useDispatch();
  const changeNameMutation = useChangeName();
  const [edit, setEdit] = useState(false);
  const [nombreLocal, setNombreLocal] = useState(cliente.nombreLocal);

  const handleChangeName = () => {
    setEdit(false);
    if (nombreLocal !== cliente.nombreLocal) {
      changeNameMutation.mutate({ nombreLocal, idClient: cliente._id });
    }
  };

  return (
    <DivTitle>
      <div className="flex">
        {edit ? (
          <input
            type="text"
            defaultValue={cliente.nombreLocal}
            onBlur={handleChangeName}
            onChange={(e) => setNombreLocal(e.target.value)}
          />
        ) : (
          <SpanTitle>{cliente.nombreLocal}</SpanTitle>
        )}
        <IconEdit onClick={() => setEdit(!edit)} />
      </div>
      <SpanIcon>
        <IconAdd
          onClick={() =>
            dispatch(openModal({ type: "Agregar contacto", id: cliente._id }))
          }
        />
      </SpanIcon>
    </DivTitle>
  );
};

export default NameClient;
