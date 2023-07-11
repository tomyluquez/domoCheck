import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { createRowsHistorial } from "../services/createData";
import { TableStyles } from "../Styles/TableStyles";
import actByClient from "../services/actByClient";

export default function TableACtividades({ cliente, orden }) {
  const { actividadesCliente, actividadesPendientes, actividadesCumplidas } =
    actByClient(cliente);
  let rows;

  if (orden === 1) {
    rows = createRowsHistorial(actividadesPendientes);
  } else if (orden === 2) {
    rows = createRowsHistorial(actividadesCumplidas);
  } else if (orden === 3) {
    rows = createRowsHistorial(actividadesCliente);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableStyles>
            <TableCell>Estado Actividad</TableCell>
            <TableCell>Nombre Local</TableCell>
            <TableCell>Nombre Cliente</TableCell>
            <TableCell>Telefono de Contacto</TableCell>
            <TableCell>Fecha Vencmiento</TableCell>
            <TableCell>Actividad</TableCell>
            <TableCell>Comentario</TableCell>
          </TableStyles>
        </TableHead>
        <TableBody>
          {rows
            .slice()
            .reverse()
            .map((row) => (
              <TableStyles key={row.name}>
                <TableCell>{row.estado}</TableCell>
                <TableCell>{row.nombreLocal}</TableCell>
                <TableCell>{row.nombreCrm}</TableCell>
                <TableCell>{row.telContacto}</TableCell>
                <TableCell>{row.vencimiento}</TableCell>
                <TableCell>{row.actividad}</TableCell>
                <TableCell>{row.comentario}</TableCell>
              </TableStyles>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
