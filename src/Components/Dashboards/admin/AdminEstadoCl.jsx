import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { ActividadesAdmin } from "../../../Styles/Pages/AdminStyles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useEffect, useState } from "react";
import { getActivities } from "../../../data/getDataClientesDash";
import useGetUsers from "../../../Hooks/useGetUsers";
import { Accordion, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionDetailsDash,
  CardVendedores,
} from "../../../Styles/Pages/DashboardStyles";
import { DivContainerState } from "../../../Styles/TableStyles";
import formatDateHours from "../../../services/formatDateHours";

const AdminEstadoCl = ({ clientes, darkMode }) => {
  const [dataDates, setDataDates] = useState({ dateStart: "", dateEnd: "" });
  const [actividadesPorUsuario, setActividadesPorUsuario] = useState(null);
  const { data } = useGetUsers();

  useEffect(() => {
    if (dataDates.dateStart !== "" && dataDates.dateEnd !== "" && data) {
      const dataClients = getActivities(clientes, dataDates, data);
      setActividadesPorUsuario(dataClients);
    }
  }, [dataDates, clientes, data]);

  return (
    <ActividadesAdmin
      modo={darkMode ? "dark" : ""}
      style={{ marginTop: "50px" }}
    >
      <h4 style={{ margin: "10px" }}>Actividades por usuario</h4>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker
            sx={{ bgcolor: "color.inputs" }}
            onChange={(e) =>
              setDataDates({
                ...dataDates,
                dateStart: e[0].$d,
                dateEnd: e[1].$d,
              })
            }
            localeText={{ start: "Desde", end: "Hasta" }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div
        style={{
          maxHeight: "500px",
          overflow: "auto",
          width: "100%",
          gap: "10px",
        }}
        className="flexColumn"
      >
        {actividadesPorUsuario &&
          actividadesPorUsuario.map((usuario, i) => (
            <Accordion
              key={i}
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${i}-content`}
                id={`panel-${i}-header`}
              >
                <span
                  style={{
                    width: "80%",
                    flexShrink: 0,
                  }}
                >
                  {usuario.nombreUsuario}
                </span>
                <span>{usuario.actividadesCumplidas.length}</span>
              </AccordionSummary>
              <AccordionDetailsDash>
                {usuario.actividadesCumplidas.map((actividad, j) => (
                  <Accordion
                    key={j}
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel-${i}-${j}-content`}
                      id={`panel-${i}-${j}-header`}
                    >
                      <span
                        style={{
                          width: "80%",
                          flexShrink: 0,
                        }}
                      >
                        {actividad.categoria}
                      </span>
                      <span>{actividad.actividades.length}</span>
                    </AccordionSummary>
                    <AccordionDetailsDash>
                      {actividad.actividades.map((actividad, k) => (
                        <CardVendedores
                          key={k}
                          estado={actividad.dato}
                          modo={darkMode ? "dark" : ""}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {actividad.dato.includes("Seguimiento")
                              ? actividad.dato
                              : actividad.resultado}
                          </span>
                          <DivContainerState>
                            <span>
                              {formatDateHours(actividad.fechaCumplimiento)}
                            </span>
                          </DivContainerState>
                        </CardVendedores>
                      ))}
                    </AccordionDetailsDash>
                  </Accordion>
                ))}
              </AccordionDetailsDash>
            </Accordion>
          ))}
      </div>
    </ActividadesAdmin>
  );
};

export default AdminEstadoCl;
