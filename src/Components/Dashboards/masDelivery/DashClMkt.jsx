import { Accordion, AccordionSummary } from "@mui/material";
import {
  AccordionDetailsDash,
  CardVendedores,
  DivContainerCardsVendedores,
} from "../../../Styles/Pages/DashboardStyles";
import { stateDashClMkt } from "../../../data/estadosClMkt";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DivContainerState } from "../../../Styles/TableStyles";

const DashClMkt = ({ clientes, darkMode }) => {
  const clientsWhitActividad = stateDashClMkt(clientes);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(clientsWhitActividad);
  return (
    <DivContainerCardsVendedores style={{ width: "50%", marginTop: "80px" }}>
      <h5>Clientes pasados por Marketing a Integradores</h5>
      {clientsWhitActividad &&
        clientsWhitActividad.map((dato, i) => (
          <Accordion
            key={i}
            expanded={expanded === `${dato.value}${i}`}
            onChange={handleChange(`${dato.value}${i}`)}
            style={{
              width: "100%",
              borderRadius: "20px",
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
                {dato.cliente}
              </span>
              <span>{dato.estadoDatos.length}</span>
            </AccordionSummary>
            <AccordionDetailsDash>
              {dato.estadoDatos.map((actividad, i) => (
                <CardVendedores
                  key={i}
                  estado={actividad.dato}
                  modo={darkMode ? "dark" : ""}
                  style={{
                    background:
                      actividad.estadoDato === "Solicitado"
                        ? "#ff4242"
                        : "green",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{actividad.dato}</span>
                  <DivContainerState>
                    <span>{actividad.estadoDato}</span>
                  </DivContainerState>
                </CardVendedores>
              ))}
            </AccordionDetailsDash>
          </Accordion>
        ))}
    </DivContainerCardsVendedores>
  );
};

export default DashClMkt;
