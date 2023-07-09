import { Divider } from "@mui/material";
import Tiempos from "../Tiempos";

const TiemposIntegracion = ({ cliente }) => {
  return (
    <div>
      {cliente.fechaContacto && (
        <>
          <Tiempos
            fecha1={cliente.fechaSolicitud}
            fecha2={cliente.fechaContacto}
            desde="Solicitud del Cliente"
            hasta="Primer Contacto"
          />
          <Divider />
        </>
      )}
      {cliente.menu.fechaSolicitado && (
        <>
          <Tiempos
            fecha1={cliente.fechaContacto}
            fecha2={cliente.menu.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Menu"
          />
          <Divider />
        </>
      )}
      {cliente.datos.fechaSolicitado && (
        <>
          <Tiempos
            fecha1={cliente.fechaContacto}
            fecha2={cliente.datos.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Datos"
          />
          <Divider />
        </>
      )}

      {cliente.imgStore.fechaSolicitado && (
        <>
          <Tiempos
            fecha1={cliente.fechaContacto}
            fecha2={cliente.imgStore.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Imagenes"
          />
          <Divider />
        </>
      )}

      {cliente.imgProd.fechaSolicitado && (
        <>
          <Tiempos
            fecha1={cliente.fechaContacto}
            fecha2={cliente.imgProd.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Imagenes"
          />
          <Divider />
        </>
      )}

      {cliente.mapa.fechaSolicitado && (
        <>
          <Tiempos
            fecha1={cliente.fechaContacto}
            fecha2={cliente.mapa.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Mapa"
          />
          <Divider />
        </>
      )}
      {cliente.menu.fechaEntregado && (
        <>
          <Tiempos
            fecha1={cliente.menu.fechaSolicitado}
            fecha2={cliente.menu.fechaEntregado}
            desde="Solicitud"
            hasta="Entrega de Menu"
          />
          <Divider />
        </>
      )}
      {cliente.datos.fechaEntregado && (
        <>
          <Tiempos
            fecha1={cliente.datos.fechaSolicitado}
            fecha2={cliente.datos.fechaEntregado}
            desde="Solicitud"
            hasta="Entrega de Datos"
          />
          <Divider />
        </>
      )}

      {cliente.imgStore.fechaEntregado && (
        <>
          <Tiempos
            fecha1={cliente.imgStore.fechaSolicitado}
            fecha2={cliente.imgStore.fechaEntregado}
            desde="Solicitud"
            hasta="Entrega de Imagenes"
          />
          <Divider />
        </>
      )}

      {cliente.imgProd.fechaEntregado && (
        <>
          <Tiempos
            fecha1={cliente.imgProd.fechaSolicitado}
            fecha2={cliente.imgProd.fechaEntregado}
            desde="Solicitud"
            hasta="Entrega de Imagenes"
          />
          <Divider />
        </>
      )}

      {cliente.mapa.fechaEntregado && (
        <>
          <Tiempos
            fecha1={cliente.mapa.fechaSolicitado}
            fecha2={cliente.mapa.fechaEntregado}
            desde="Solicitud"
            hasta="Entrega de Mapa"
          />
          <Divider />
        </>
      )}
      {cliente.fechaDespachado && (
        <>
          <Tiempos
            fecha1={cliente.fechaSolicitud}
            fecha2={cliente.fechaDespachado}
            desde="Solicitud del cliente"
            hasta="Despacho"
          />
          <Divider />
        </>
      )}
      {cliente.fechaIntegrado && (
        <>
          <Tiempos
            fecha1={cliente.fechaDespachado}
            fecha2={cliente.fechaIntegrado}
            desde="Despacho"
            hasta="Integrado"
          />
          <Divider />
        </>
      )}
    </div>
  );
};

export default TiemposIntegracion;
