import {
  DivTitle,
  IconAdd,
  IconEdit,
  SpanIcon,
  SpanTitle,
} from "../../Styles/Pages/ClientsIndStyles";
import { openModal } from "../../redux/slices/modal";
import { useDispatch } from "react-redux";

const NameClient = ({ cliente }) => {
  const dispatch = useDispatch();
  console.log(cliente);

  return (
    <DivTitle>
      <div className="flex">
        <SpanTitle>{cliente.nombreLocal}</SpanTitle>
        <IconEdit
          onClick={() =>
            dispatch(openModal({ type: "Modificar cliente", id: cliente._id }))
          }
        />
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
