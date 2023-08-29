import {
  CardVendedores,
  DivContainerCardsVendedores,
} from "../../../Styles/Pages/DashboardStyles";
import { filterMkt } from "../../../services/filteredClients";
import { DivContainerState } from "../../../Styles/TableStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeValue } from "../../../redux/slices/value";

const DashMkt = ({ clientes, darkMode }) => {
  const clientesMkt = filterMkt(clientes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanlderClient = (id) => {
    dispatch(changeValue("8"));
    navigate(`/clientes/${id}`);
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1200"
      style={{ textAlign: "center", width: "50%" }}
    >
      <h3>Clientes con menos de 10 ventas</h3>
      <DivContainerCardsVendedores
        style={{ flexDirection: "row", flexWrap: "wrap" }}
      >
        {clientesMkt.map((cliente) => (
          <CardVendedores
            key={cliente._id}
            estado={cliente.estado}
            onClick={() => hanlderClient(cliente._id)}
            modo={darkMode ? "dark" : ""}
            style={{ width: "40%" }}
          >
            <span style={{ fontWeight: "bold" }}>{cliente.nombreLocal}</span>
            <DivContainerState style={{ color: "grey" }}>
              <span>VENTAS: {cliente.ventas}</span>
            </DivContainerState>
          </CardVendedores>
        ))}
      </DivContainerCardsVendedores>
    </div>
  );
};

export default DashMkt;
