import {
  Cards,
  DivContainerCards,
  DivData,
  DivNumberData,
  NumberData,
} from "../../Styles/Pages/DashboardStyles";
import { dataDashAdmin } from "../../data/cardsDashAdmin";

const DatosDash = ({ clientes, vendedor }) => {
  return (
    <DivContainerCards>
      {dataDashAdmin(clientes, vendedor).map((dash, i) => (
        <Cards key={i} style={{ backgroundColor: dash.fondo }}>
          <DivData>
            <span style={{ color: dash.letra }}>{dash.title}</span>
            {dash.iconExtra && dash.data === 0 ? dash.iconExtra : dash.icon}
          </DivData>
          <DivNumberData style={{ color: dash.letra }}>
            <NumberData>{dash.data}</NumberData>
          </DivNumberData>
        </Cards>
      ))}
    </DivContainerCards>
  );
};

export default DatosDash;
