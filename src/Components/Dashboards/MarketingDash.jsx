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

const MarketingDash = ({ clientes }) => {
  return (
    <DivContainerCards>
      <Cards>
        <h2 style={{ margin: 0, color: colorFondo }}>Marketing</h2>
        <Divider />

        <DivSpanNumber>
          <SpanCard>clientes Integrados:</SpanCard>
          <NumberCard>{cantidadIntegradosTotales(clientes)}</NumberCard>
        </DivSpanNumber>
      </Cards>
    </DivContainerCards>
  );
};

export default MarketingDash;
