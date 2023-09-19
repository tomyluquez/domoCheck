import { Accordion, AccordionSummary } from "@mui/material";
import {
  AccordionDetailsDash,
  CardVendedores,
  DivContainerCardsVendedores,
} from "../../../Styles/Pages/DashboardStyles";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getStateProspects } from "../../../services/getStateProspects";
import { stateColors } from "./../../../data/colors";
import ModalHistorial from "../../Modales/ModalHistorial";

const DatosProspects = ({ clientes, darkMode, width }) => {
  const data = getStateProspects(clientes);
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {showModal && (
        <ModalHistorial
          clientes={clientes}
          idClient={showModal}
          open={showModal}
          setOpen={setShowModal}
        />
      )}
      <DivContainerCardsVendedores style={{ width: width }} height="300px">
        <h5>Prospectos Cargados - {clientes.length}</h5>
        {data &&
          data.map((dato, i) => (
            <Accordion
              key={i}
              expanded={expanded === `${dato.data.length}${i}`}
              onChange={handleChange(`${dato.data.length}${i}`)}
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
                  {dato.estado}
                </span>
                <span>{dato.data.length}</span>
              </AccordionSummary>
              <AccordionDetailsDash>
                {dato.data.map((cliente, i) => (
                  <CardVendedores
                    key={i}
                    estado={cliente.nombreLocal}
                    modo={darkMode ? "dark" : ""}
                    style={{
                      background: stateColors[cliente.estado],
                    }}
                    onClick={() => setShowModal(cliente._id)}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      {cliente.nombreLocal}
                    </span>
                  </CardVendedores>
                ))}
              </AccordionDetailsDash>
            </Accordion>
          ))}
      </DivContainerCardsVendedores>
    </>
  );
};

export default DatosProspects;
