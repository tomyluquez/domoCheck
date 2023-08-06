import {
  Cards,
  DivSpanNumber,
  NumberCard,
  SpanCard,
} from "../../Styles/Pages/DashboardStyles";
import { Divider, Typography } from "@mui/material";
import {
  cantidadIntegradosTotales,
  cantidadSolicitados,
} from "../../services/CuantityClients";
import { useSelector } from "react-redux";

const DatosDashVendedor = ({ clientes, vendedor }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  return (
    <Cards
      style={{
        width: "200px",
        height: "300px",
        gap: "10px",
        padding: "0 15px",
      }}
      modo={darkMode ? "dark" : ""}
    >
      <Typography sx={{ color: "secondary.main", fontSize: "20px" }}>
        {vendedor}
      </Typography>
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
