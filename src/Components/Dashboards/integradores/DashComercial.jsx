import { datosDashComer } from "../../../data/datosDashComercial";
import {
  filterByType,
  filterByTypePorcent,
} from "../../../services/filterByTipe";
import { CardsAdmin } from "../../../Styles/Pages/AdminStyles";
import Progress from "../../Progress";

const DashComercial = ({ clientes }) => {
  return (
    <div
      className="flex"
      style={{ marginTop: "50px" }}
      data-aos="fade-right"
      data-aos-duration="1200"
    >
      {datosDashComer.map((dato, i) => (
        <CardsAdmin key={i} style={{ minHeight: "300px" }}>
          <div className="flex">
            <span>{dato.totales}</span>
            <span>{filterByType(clientes, dato.dato, "todos")}</span>
          </div>
          <div className="flex">
            <span>{dato.solicitados}</span>
            <span>{filterByType(clientes, dato.dato, "Solicitado")}</span>
            <Progress
              value={filterByTypePorcent(clientes, dato.dato, "Solicitado")}
            />
          </div>
          <div className="flex">
            <span>{dato.entregados}</span>
            <span>{filterByType(clientes, dato.dato, "Entregado")}</span>
            <Progress
              value={filterByTypePorcent(clientes, dato.dato, "Entregado")}
            />
          </div>
          <div className="flex">
            <span>{dato.pendientes}</span>
            <span>{filterByType(clientes, dato.dato, "Pendientes")}</span>
            <Progress
              value={filterByTypePorcent(clientes, dato.dato, "Pendientes")}
            />
          </div>
        </CardsAdmin>
      ))}
    </div>
  );
};

export default DashComercial;
