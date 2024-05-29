import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { TableStyles } from "../../Styles/TableStyles";
import FilasProspectos from "./Filas";

const TablaProspectos = ({ prospectos }) => {
  if (prospectos.length === 0) {
    return <span>No hay resultados</span>;
  }

  return (
    <>
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
              <TableCell>Nombre prospecto</TableCell>
              <TableCell>Telefono Contacto</TableCell>
              <TableCell>Interes</TableCell>
              <TableCell>Fecha Ultimo Contacto</TableCell>
            </TableStyles>
          </TableHead>
          <TableBody className="table">
            {prospectos &&
              prospectos.map((dato, i) => (
                <FilasProspectos key={i} prospecto={dato} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablaProspectos;
