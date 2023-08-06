import {
  DivContactoInd,
  DivContactos,
  IconAdd,
  SpanIcon,
  SpanLabel,
  SpanValue,
  Telefono,
} from "../../Styles/Pages/ClientsIndStyles";
import { openModal } from "../../redux/slices/modal";
import formatDate from "../../services/formatDate";
import { useDispatch } from "react-redux";

const DatosContacto = ({ cliente }) => {
  const dispatch = useDispatch();

  return (
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
      <SpanIcon>
        <IconAdd
          onClick={() =>
            dispatch(openModal({ type: "Agregar contacto", id: cliente._id }))
          }
        />
      </SpanIcon>
    </DivContactos>
  );
};

export default DatosContacto;
