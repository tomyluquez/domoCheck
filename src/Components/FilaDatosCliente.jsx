import { DivContainerState, TableStyles } from "../Styles/TableStyles";
import { TableCell } from "@mui/material";
import formatDate from "../services/formatDate";
import useMutations from "../Hooks/useMutations";
import { useDispatch, useSelector } from "react-redux";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { openModal } from "../redux/slices/modal";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { stateColors } from "../data/colors";
import { DivSolicitud } from "../Styles/Pages/ClientsIndStyles";
import Loading from "./Loading";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const FilaDatosCliente = ({ dato, cliente }) => {
  const mutationclient = useMutations();
  const dispatch = useDispatch();
  const { isLoading } = mutationclient;
  const userName = useSelector((state) => state.user.name);

  const handlerProcess = () => {
    mutationclient.mutateAsync({
      id: cliente._id,
      datoClient: dato.tipo,
      estadoClient: "Entregado",
      userName,
    });
  };

  return (
    <TableStyles estado={dato.estado} sx={{ bgcolor: "color.inputs" }}>
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
          {dato.estado === "Entregado no procesado" && (
            <CheckCircleOutlineOutlinedIcon onClick={handlerProcess} />
          )}
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
