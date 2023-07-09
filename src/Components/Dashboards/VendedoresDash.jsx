import { useSelector } from "react-redux";
import {
  Cards,
  DivSpanNumber,
  NumberCard,
  SpanCard,
  DivContainerCards,
} from "../../Styles/Pages/DashboardStyles";
import { Divider } from "@mui/material";
import {
  cantidadIntegrados,
  cantidadSolicitados,
} from "../../services/CuantityClients";
import { colorFondo } from "../../Styles/GeneralStyles";

const VendedoresDash = ({ clientes }) => {
  const vendedor = useSelector((state) => state.user.vendedor);
  return (
    <DivContainerCards>
      <Cards>
        <h2 style={{ margin: 0, color: colorFondo }}>{vendedor}</h2>
        <Divider />
        <DivSpanNumber>
          <SpanCard>clientes Solicitados:</SpanCard>
          <NumberCard>{cantidadSolicitados(clientes, vendedor)}</NumberCard>
        </DivSpanNumber>
        <DivSpanNumber>
          <SpanCard>clientes Integrados:</SpanCard>
          <NumberCard>{cantidadIntegrados(clientes, vendedor)}</NumberCard>
        </DivSpanNumber>
        <DivSpanNumber>
          <SpanCard>Porcentaje Integracion:</SpanCard>
          <NumberCard>
            {(cantidadIntegrados(clientes, vendedor) /
              cantidadSolicitados(clientes, vendedor)) *
              100 || 0}
            %
          </NumberCard>
        </DivSpanNumber>
      </Cards>
    </DivContainerCards>
  );
};

export default VendedoresDash;
