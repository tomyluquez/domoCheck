import { DivContainerState, TableStyles } from "../Styles/TableStyles";
import { TableCell } from "@mui/material";
import formatDate from "../services/formatDate";
import useMutations from "../Hooks/useMutations";
import { useDispatch } from "react-redux";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { openModal } from "../redux/slices/modal";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { stateColors } from "../data/colors";
import { DivSolicitud } from "../Styles/Pages/ClientsIndStyles";
import Loading from "./Loading";

const FilaDatosCliente = ({ dato, cliente }) => {
  const mutationclient = useMutations();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  return (
    <TableStyles estado={dato.estado}>
      <TableCell className="icon" component="th" scope="row">
        {dato.tipo}
      </TableCell>
      <TableCell className="icon">
        {" "}
        <DivContainerState>
          <FiberManualRecordIcon
            style={{
              color: stateColors[dato.estado],
            }}
          />
          <span>{dato.estado}</span>
        </DivContainerState>
      </TableCell>
      <TableCell className="icon">
        {dato.estado === "Pendiente de solicitar"
          ? dato.estado
          : formatDate(dato.fechaSolicitud)}
      </TableCell>
      <TableCell className="icon">
        {dato.estado === "Pendiente de solicitar" ? (
          <DivSolicitud>
            {/* <input
              type="text"
              style={{ width: 15 }}
              value={proxContacto}
              onChange={(e) => {
                const value = e.target.value;
                const filteredValue = value.replace(/[^0-9]/g, ""); // Filtra los caracteres que no sean números
                setProxContacto(filteredValue);
              }}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                ];
                if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
                  e.preventDefault(); // Evita la entrada de caracteres que no sean números
                }
              }}
            /> */}
            <span
              onClick={() =>
                dispatch(
                  openModal({
                    type: `Solicitud ${dato.tipo}`,
                    referencia: dato.tipo,
                    id: cliente._id,
                  })
                )
              }
            >
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <LibraryAddCheckOutlinedIcon />
                </>
              )}
            </span>
          </DivSolicitud>
        ) : (
          <span>-</span>
        )}
      </TableCell>
      <TableCell className="icon">
        <span
          onClick={() =>
            dispatch(
              openModal({
                type: `${dato.tipo} Historial`,
                referencia: dato.tipo,
                id: cliente._id,
              })
            )
          }
        >
          <HistoryOutlinedIcon />
        </span>
      </TableCell>
    </TableStyles>
  );
};

export default FilaDatosCliente;
