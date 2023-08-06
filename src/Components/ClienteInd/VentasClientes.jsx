import { useState } from "react";
import useMutationVentas from "../../Hooks/useMutationVentas";
import { IconEdit } from "../../Styles/Pages/ClientsIndStyles";

const VentasClientes = ({ cliente, userName, role }) => {
  const mutationVentas = useMutationVentas();
  const [edit, setEdit] = useState(false);
  const [ventas, setVentas] = useState(cliente.ventas || 0);

  const handlerVentas = () => {
    setEdit(false);
    mutationVentas.mutate({ idClient: cliente._id, ventas, userName });
  };

  return (
    <div
      className="flex"
      style={{
        marginBottom: "20px",
        fontSize: "40px",
        gap: "40px",
      }}
    >
      <span>Ventas:</span>
      {edit ? (
        <input
          type="number"
          defaultValue={ventas}
          onBlur={handlerVentas}
          onChange={(e) => setVentas(e.target.value)}
        />
      ) : (
        <span>{ventas}</span>
      )}
      {role === "marketing" && <IconEdit onClick={() => setEdit(!edit)} />}
    </div>
  );
};

export default VentasClientes;
