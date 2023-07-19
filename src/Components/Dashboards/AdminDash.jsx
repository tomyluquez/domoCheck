import {} from "../../services/CuantityClients";
import {
  DivContainerCards,
  DivTareas,
} from "../../Styles/Pages/DashboardStyles";
import DatosDash from "./DatosDash";
import { vendedores } from "./../../data/vendedores";
import DatosDashVendedor from "./DatosDashVendedor";
import ActCumplidasDash from "./ActCumplidasDash";
const AdminDash = ({ clientes, user }) => {
  console.log(user.vendedor);
  return (
    <>
      <DatosDash
        clientes={clientes}
        vendedor={user.vendedor !== null ? user.vendedor : ""}
      />
      {user.role === "admin" && (
        <DivTareas>
          <ActCumplidasDash clientes={clientes} />
          <DivContainerCards>
            {vendedores.map((vendedor, i) => (
              <DatosDashVendedor
                key={i}
                clientes={clientes}
                vendedor={vendedor.value}
              />
            ))}
          </DivContainerCards>
        </DivTareas>
      )}
    </>
  );
};

export default AdminDash;
