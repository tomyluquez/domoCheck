import { useEffect, useState } from "react";
import {
  Cards,
  DivContainerCards,
  DivData,
  DivNumberData,
  NumberData,
  NumberDataAnterior,
} from "../../Styles/Pages/DashboardStyles";
import { dataDashAdmin } from "../../data/cardsDashAdmin";
import { compararData } from "../../data/comprarData";

const DatosDash = ({ clientes, vendedor, role }) => {
  const [data, setData] = useState(false);
  useEffect(() => {
    const { dashVentas, dashIntegracion } = dataDashAdmin(clientes, vendedor);
    setData(role === "integrador" ? dashIntegracion : dashVentas);
  }, [clientes, role, vendedor]);
  return (
    <DivContainerCards>
      {data &&
        data.map((dash, i) => (
          <Cards key={i} style={{ backgroundColor: dash.fondo }}>
            <DivData>
              <span style={{ color: dash.letra }}>{dash.title}</span>
              {dash.iconExtra && dash.data === 0 ? dash.iconExtra : dash.icon}
            </DivData>
            <DivNumberData style={{ color: dash.letra }} className="flex">
              {dash.dataAnterior !== undefined &&
                compararData(dash.data, dash.dataAnterior)}
              <NumberData>{dash.data}</NumberData>
              {dash.dataAnterior !== undefined && (
                <NumberDataAnterior>| {dash.dataAnterior}</NumberDataAnterior>
              )}
            </DivNumberData>
          </Cards>
        ))}
    </DivContainerCards>
  );
};

export default DatosDash;
