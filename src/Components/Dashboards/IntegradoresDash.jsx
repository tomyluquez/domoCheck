import {
  DivContainerCards,
  DivSpanNumber,
  SpanCard,
  NumberCard,
  Cards,
} from "../../Styles/Pages/DashboardStyles";
import { cantidadIntegradosTotales } from "../../services/CuantityClients";
import { Divider } from "@mui/material";
import { colorFondo } from "../../Styles/GeneralStyles";

const IntegradoresDash = ({ clientes }) => {
  return (
    <DivContainerCards>
      <Cards>
        <h2 style={{ margin: 0, color: colorFondo }}>{"Integradores"}</h2>
        <Divider />
        <DivSpanNumber>
          <SpanCard>clientes Solicitados:</SpanCard>
          <NumberCard>{clientes.length}</NumberCard>
        </DivSpanNumber>
        <DivSpanNumber>
          <SpanCard>clientes Integrados:</SpanCard>
          <NumberCard>{cantidadIntegradosTotales(clientes)}</NumberCard>
        </DivSpanNumber>
        <DivSpanNumber>
          <SpanCard>Porcentaje Integracion:</SpanCard>
          <NumberCard>
            {Math.round(cantidadIntegradosTotales(clientes) / clientes.length) *
              100 || 0}
            %
          </NumberCard>
        </DivSpanNumber>
      </Cards>
    </DivContainerCards>
  );
};

export default IntegradoresDash;
