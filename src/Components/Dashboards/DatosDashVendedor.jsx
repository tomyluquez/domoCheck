import {
  Cards,
  DivSpanNumber,
  NumberCard,
  SpanCard,
} from "../../Styles/Pages/DashboardStyles";
import { colorFondo } from "../../Styles/GeneralStyles";
import { Divider } from "@mui/material";
import {
  cantidadIntegradosTotales,
  cantidadSolicitados,
} from "../../services/CuantityClients";

const DatosDashVendedor = ({ clientes, vendedor }) => {
  return (
    <Cards
      style={{
        width: "200px",
        height: "300px",
        gap: "10px",
        padding: "0 15px",
      }}
    >
      <h2 style={{ margin: 0, color: colorFondo }}>{vendedor}</h2>
      <Divider />
      <DivSpanNumber>
        <SpanCard>clientes Solicitados:</SpanCard>
        <NumberCard>{cantidadSolicitados(clientes, vendedor)}</NumberCard>
      </DivSpanNumber>
      <DivSpanNumber>
        <SpanCard>clientes Integrados:</SpanCard>
        <NumberCard>{cantidadIntegradosTotales(clientes, vendedor)}</NumberCard>
      </DivSpanNumber>
      <DivSpanNumber>
        <SpanCard>Porcentaje Integracion:</SpanCard>
        <NumberCard>
          {Math.round(
            (cantidadIntegradosTotales(clientes, vendedor) /
              cantidadSolicitados(clientes, vendedor)) *
              100 || 0
          )}
          %
        </NumberCard>
      </DivSpanNumber>
    </Cards>
  );
};

export default DatosDashVendedor;
