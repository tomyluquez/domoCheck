import {
  DivContainerCards,
  DivTareas,
} from "../../../Styles/Pages/DashboardStyles";
import { vendedores } from "../../../data/vendedores";
import DatosDashVendedor from "../DatosDashVendedor";
import ActCumplidasDash from "./ActCumplidasDash";
const AdminDash = ({ clientes }) => {
  return (
    <DivTareas data-aos="fade-left" data-aos-duration="1200">
      <ActCumplidasDash clientes={clientes} />
      <DivContainerCards style={{ width: "65%" }}>
        {vendedores.map((vendedor, i) => (
          <DatosDashVendedor
            key={i}
            clientes={clientes}
            vendedor={vendedor.value}
          />
        ))}
      </DivContainerCards>
    </DivTareas>
  );
};

export default AdminDash;
