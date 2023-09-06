import {
  DivContainerCards,
  DivTareas,
} from "../../../Styles/Pages/DashboardStyles";
import { vendedores } from "../../../data/vendedores";
import DatosDashVendedor from "../DatosDashVendedor";
import DashClMkt from "../masDelivery/DashClMkt";
import ActCumplidasDash from "./ActCumplidasDash";
import AdminEstadoCl from "./AdminEstadoCl";
const AdminDash = ({ clientes, darkMode }) => {
  return (
    <DivTareas
      data-aos="fade-right"
      data-aos-duration="1200"
      style={{ gap: "50px" }}
    >
      <ActCumplidasDash clientes={clientes} />
      <AdminEstadoCl clientes={clientes} darkMode={darkMode} />
      <DivContainerCards style={{ width: "45%" }}>
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
