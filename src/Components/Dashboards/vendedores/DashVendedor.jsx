import {
  AccordionDetailsDash,
  CardVendedores,
  DivContainerCardsVendedores,
  SpanDate,
} from "../../../Styles/Pages/DashboardStyles";
import { stateColors } from "../../../data/colors";
import {} from "../../../services/filteredClients";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { DivContainerState } from "../../../Styles/TableStyles";
import { Accordion, AccordionSummary } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StateDashVendedor } from "../../../data/estados";
import formatDate from "../../../services/formatDate";

const DashVendedor = ({ clientes, user, darkMode }) => {
  const StateDash = StateDashVendedor(clientes, user.vendedor);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <DivContainerCardsVendedores data-aos="fade-right" data-aos-duration="1200">
      {StateDash &&
        StateDash.map(
          (estado, i) =>
            estado.cantidad > 0 && (
              <Accordion
                key={i}
                expanded={expanded === `${estado.descripcion}${i}`}
                onChange={handleChange(`${estado.descripcion}${i}`)}
                style={{
                  width: "50%",
                  borderRadius: "20px",
                  backgroundColor: estado.color,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <span
                    style={{
                      width: "80%",
                      flexShrink: 0,
                    }}
                  >
                    {estado.estado}
                  </span>
                  <span>{estado.cantidad}</span>
                </AccordionSummary>
                <AccordionDetailsDash>
                  {estado.clientes.map((cliente) => (
                    <CardVendedores
                      key={cliente._id}
                      estado={cliente.estado}
                      modo={darkMode ? "dark" : ""}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {cliente.nombreLocal}
                      </span>
                      <DivContainerState>
                        <FiberManualRecordIcon
                          style={{
                            color: stateColors[cliente.estado],
                          }}
                        />
                        <span>{cliente.estado}</span>
                        <SpanDate>
                          {estado.estado === "Faltan datos" ||
                          estado.estado === "No lo quiere" ||
                          estado.estado === "No contesta"
                            ? `Fecha de ultimo contacto: ${formatDate(
                                cliente.modificacion
                                  ? cliente.modificacion[estado.fecha]
                                  : cliente.fechaSolicitud
                              )}`
                            : `Fecha de ${estado.estado}: ${formatDate(
                                cliente[estado.fecha]
                              )}`}
                          {estado.estado === "Faltan datos" && (
                            <div>
                              Falta (
                              {cliente.imgStore.estado !== "Entregado" &&
                                "imgStore,"}{" "}
                              {cliente.imgProd.estado !== "Entregado" &&
                                "imgProd,"}
                              {cliente.menu.estado !== "Entregado" && "menu,"}
                              {cliente.datos.estado !== "Entregado" && "datos,"}
                              {cliente.mapa.estado !== "Entregado" && "mapa,"})
                            </div>
                          )}
                        </SpanDate>
                      </DivContainerState>
                    </CardVendedores>
                  ))}
                </AccordionDetailsDash>
              </Accordion>
            )
        )}
    </DivContainerCardsVendedores>
  );
};

export default DashVendedor;
