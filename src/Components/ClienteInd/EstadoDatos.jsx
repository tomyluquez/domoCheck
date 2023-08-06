import {
  Box,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import { TableCellStyle, TableStyles } from "../../Styles/TableStyles";

import { createData } from "../../services/createData";
import FilaDatosCliente from "../FilaDatosCliente";

const EstadoDatos = ({ cliente }) => {
  const dataCliente = createData(cliente);

  return (
    <Box sx={{ margin: 1, bgcolor: "color.inputs" }}>
      <Typography variant="h6" gutterBottom component="div">
        Datos
      </Typography>
      <TableCellStyle size="small" aria-label="purchases">
        <TableHead>
          <TableStyles sx={{ bgcolor: "color.inputs" }}>
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Solicitar</TableCell>
            <TableCell>Historial</TableCell>
          </TableStyles>
        </TableHead>
        <TableBody>
          {dataCliente.Datos.map((historyRow) => (
            <FilaDatosCliente
              key={cliente._id}
              dato={historyRow}
              cliente={cliente}
            />
          ))}
        </TableBody>
      </TableCellStyle>
    </Box>
  );
};

export default EstadoDatos;
