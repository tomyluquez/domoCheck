import {
  DivContainerCards,
  DivTareas,
} from "../../../Styles/Pages/DashboardStyles";
import { vendedores } from "../../../data/vendedores";
import DatosDashVendedor from "../DatosDashVendedor";
import DashClMkt from "../masDelivery/DashClMkt";
import ActCumplidasDash from "./ActCumplidasDash";
const AdminDash = ({ clientes, darkMode }) => {
  return (
    <DivTareas data-aos="fade-right" data-aos-duration="1200">
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
      <DashClMkt clientes={clientes} darkMode={darkMode} />
    </DivTareas>
  );
};

export default AdminDash;
