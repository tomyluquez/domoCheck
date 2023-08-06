import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { createData } from "../../services/createData";
import Row from "./Filas";
import { TableStyles } from "../../Styles/TableStyles";

const TablaPrincipal = ({ clientes }) => {
  const rowsTable = [
    ...clientes.map((cliente) => {
      return createData(cliente);
    }),
  ];

  if (rowsTable.length === 0) {
    return <span>No hay resultados</span>;
  }

  return (
    <TableContainer
      className="table"
      component={Paper}
      sx={{ bgcolor: "color.inputs" }}
    >
      <Table aria-label="collapsible table" sx={{ bgcolor: "color.inputs" }}>
        <TableHead>
          <TableStyles sx={{ bgcolor: "color.inputs" }}>
            <TableCell />
            <TableCell>Estado</TableCell>
            <TableCell>Nombre Local</TableCell>
            <TableCell>Nombre Cliente</TableCell>
            <TableCell>Telefono Contacto</TableCell>
            <TableCell>Fecha Solicitud</TableCell>
            <TableCell>Fecha Ultimo Contacto</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Venedor</TableCell>
          </TableStyles>
        </TableHead>
        <TableBody className="table">
          {rowsTable.map((row, i) => (
            <Row className="table" key={i} cliente={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaPrincipal;
