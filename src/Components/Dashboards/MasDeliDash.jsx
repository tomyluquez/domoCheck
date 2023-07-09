import {
  DivContainerCards,
  DivSpanNumber,
  SpanCard,
  NumberCard,
  Cards,
} from "../../Styles/Pages/DashboardStyles";
import {
  cantidadDespachados,
  cantidadIntegradosTotales,
} from "../../services/CuantityClients";
import { Divider } from "@mui/material";
import { colorFondo } from "../../Styles/GeneralStyles";

const MasDeliDash = ({ clientes }) => {
  return (
    <DivContainerCards>
      <Cards>
        <h2 style={{ margin: 0, color: colorFondo }}>{"Mas Delivery"}</h2>
        <Divider />
        <DivSpanNumber>
          <SpanCard>clientes Despachados:</SpanCard>
          <NumberCard>{cantidadDespachados(clientes)}</NumberCard>
        </DivSpanNumber>
        <DivSpanNumber>
          <SpanCard>clientes Integrados:</SpanCard>
          <NumberCard>{cantidadIntegradosTotales(clientes)}</NumberCard>
        </DivSpanNumber>
      </Cards>
    </DivContainerCards>
  );
};

export default MasDeliDash;
