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

  return (
    <TableContainer className="table" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableStyles>
            <TableCell />
            <TableCell>Estado</TableCell>
            <TableCell>Nombre Local</TableCell>
            <TableCell>Nombre Cliente</TableCell>
            <TableCell>Telefono Contacto</TableCell>
            <TableCell>Fecha Solicitud</TableCell>
            <TableCell>Fecha Contacto</TableCell>
            <TableCell>Venedor</TableCell>
          </TableStyles>
        </TableHead>
        <TableBody className="table">
          {rowsTable
            .slice()
            .reverse()
            .map((row) => (
              <Row className="table" key={row.name} cliente={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaPrincipal;
