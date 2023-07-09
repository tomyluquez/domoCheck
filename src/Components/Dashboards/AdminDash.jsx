import { vendedores } from "./../../data/vendedores";
import {
  cantidadIntegrados,
  cantidadSolicitados,
} from "../../services/CuantityClients";
import {
  DivContainerCards,
  Cards,
  SpanCard,
  NumberCard,
  DivSpanNumber,
} from "../../Styles/Pages/DashboardStyles";
import { Divider } from "@mui/material";
import { colorFondo } from "../../Styles/GeneralStyles";
const AdminDash = ({ clientes }) => {
  return (
    <>
      <DivContainerCards>
        {vendedores.map((vendedor, i) => (
          <Cards key={i}>
            <h2 style={{ margin: 0, color: colorFondo }}>{vendedor.value}</h2>
            <Divider />
            <DivSpanNumber>
              <SpanCard>clientes Solicitados:</SpanCard>
              <NumberCard>
                {cantidadSolicitados(clientes, vendedor.value)}
              </NumberCard>
            </DivSpanNumber>
            <DivSpanNumber>
              <SpanCard>clientes Integrados:</SpanCard>
              <NumberCard>
                {cantidadIntegrados(clientes, vendedor.value)}
              </NumberCard>
            </DivSpanNumber>
            <DivSpanNumber>
              <SpanCard>Porcentaje Integracion:</SpanCard>
              <NumberCard>
                {(cantidadIntegrados(clientes, vendedor.value) /
                  cantidadSolicitados(clientes, vendedor.value)) *
                  100 || 0}
                %
              </NumberCard>
            </DivSpanNumber>
          </Cards>
        ))}
      </DivContainerCards>
    </>
  );
};

export default AdminDash;
