import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal";
import formatDate from "../../services/formatDate";
import {
  DivDatosContacto,
  DivTitle,
  IconAdd,
  SpanTitle,
  SpanIcon,
  SpanLabel,
  DivContactos,
  DivContactoInd,
  Telefono,
  SpanValue,
} from "../../Styles/Pages/ClientsIndStyles";
import { Divider } from "@mui/material";

const DatosCliente = ({ cliente }) => {
  const dispatch = useDispatch();

  return (
    <DivDatosContacto>
      <DivTitle>
        <SpanTitle>{cliente.nombreLocal}</SpanTitle>
        <SpanIcon>
          <IconAdd
            onClick={() =>
              dispatch(openModal({ type: "Agregar contacto", id: cliente._id }))
            }
          />
        </SpanIcon>
      </DivTitle>
      <Divider />
      <DivContactos>
        <DivContactoInd>
          <SpanValue>
            <SpanLabel>Nombre Contacto:</SpanLabel> {cliente.nombreCrm}
          </SpanValue>
          <SpanValue>
            <SpanLabel>Tel Contacto:</SpanLabel>{" "}
            <Telefono
              href={`https://wa.me/+54${cliente.telContacto}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cliente.telContacto}
            </Telefono>
          </SpanValue>
        </DivContactoInd>
        {cliente.contactos.length > 0 &&
          cliente.contactos.map((contacto, index) => (
            <DivContactoInd key={index}>
              <SpanValue>
                <SpanLabel>Nombre Contacto:</SpanLabel> {contacto.nombre}
              </SpanValue>
              <SpanValue>
                <SpanLabel>Tel Contacto:</SpanLabel>{" "}
                <Telefono
                  href={`https://wa.me/+54${contacto.tel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contacto.tel}
                </Telefono>
              </SpanValue>
            </DivContactoInd>
          ))}
        <DivContactoInd>
          <SpanValue>
            <SpanLabel>Vendedor:</SpanLabel> {cliente.vendedor}
          </SpanValue>
          <SpanValue>
            <SpanLabel>Fecha de Solicitud:</SpanLabel>{" "}
            {formatDate(cliente.fechaSolicitud)}
          </SpanValue>
        </DivContactoInd>
      </DivContactos>
    </DivDatosContacto>
  );
};

export default DatosCliente;
