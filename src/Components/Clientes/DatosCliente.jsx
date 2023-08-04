import formatDate from "../../services/formatDate";
import {
  DivDatosContacto,
  SpanLabel,
  DivContactos,
  DivContactoInd,
  Telefono,
  SpanValue,
} from "../../Styles/Pages/ClientsIndStyles";
import { Divider } from "@mui/material";
import NameClient from "../ClienteInd/NameClient";
import DatosRedes from "../ClienteInd/DatosRedes";

const DatosCliente = ({ cliente }) => {
  return (
    <DivDatosContacto>
      <NameClient cliente={cliente} />
      <DatosRedes cliente={cliente} />
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
