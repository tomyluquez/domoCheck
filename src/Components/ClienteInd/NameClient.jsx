import {
  DivTitle,
  IconEdit,
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
        <SpanTitle sx={{ color: "letra.main" }}>
          {cliente.nombreLocal}
        </SpanTitle>
        <IconEdit
          onClick={() =>
            dispatch(openModal({ type: "Modificar cliente", id: cliente._id }))
          }
        />
      </div>
    </DivTitle>
  );
};

export default NameClient;
