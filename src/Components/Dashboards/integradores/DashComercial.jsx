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
      style={{
        marginTop: "50px",
        width: "100%",
        flexWrap: "wrap",
        gap: "20px",
      }}
      data-aos="fade-right"
      data-aos-duration="1200"
    >
      {datosDashComer.map((dato, i) => (
        <CardsAdmin key={i} style={{ minHeight: "300px", width: "25%" }}>
          <div className="flex" style={{ fontWeight: "bold" }}>
            <span>{dato.totales}</span>
            <span>{filterByType(clientes, dato.dato, "todos")}</span>
          </div>
          <div className="flexBet">
            <span>
              {dato.entregados}-{" "}
              <span style={{ color: "grey" }}>
                ({filterByType(clientes, dato.dato, "Entregado")})
              </span>
            </span>
            <Progress
              value={filterByTypePorcent(clientes, dato.dato, "Entregado")}
            />
          </div>
          <div className="flexBet">
            <span>
              {dato.solicitados}-
              <span style={{ color: "grey" }}>
                ({filterByType(clientes, dato.dato, "Solicitado")})
              </span>
            </span>

            <Progress
              value={filterByTypePorcent(clientes, dato.dato, "Solicitado")}
            />
          </div>
          <div className="flexBet">
            <span>
              {dato.pendientes}-{" "}
              <span style={{ color: "grey" }}>
                ({filterByType(clientes, dato.dato, "Pendientes")})
              </span>
            </span>
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
