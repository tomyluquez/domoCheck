import { Divider } from "@mui/material";
import Tiempos from "../Tiempos";
import { dataTiempos } from "../../data/tiemposIntegraciones";

const TiemposIntegracion = ({ cliente }) => {
  return (
    <div>
      {dataTiempos.map((data) => (
        <>
          {data.dato
            ? cliente[data.dato][data.fechaHasta] && (
                <>
                  <Tiempos
                    fecha1={cliente[data.dato][data.fechaDesde]}
                    fecha2={cliente[data.dato][data.fechaHasta]}
                    desde={data.desde}
                    hasta={data.hasta}
                  />
                  <Divider />
                </>
              )
            : cliente[data.fechaHasta] && (
                <>
                  <Tiempos
                    fecha1={cliente[data.fechaDesde]}
                    fecha2={cliente[data.fechaHasta]}
                    desde={data.desde}
                    hasta={data.hasta}
                  />
                  <Divider />
                </>
              )}
        </>
      ))}
    </div>
  );
};

export default TiemposIntegracion;
