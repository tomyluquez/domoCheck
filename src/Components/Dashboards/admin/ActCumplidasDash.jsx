import {
  TabContext,
  TabList,
  TabPanel,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { useEffect, useState, useCallback } from "react";
import { Box, CircularProgress, Tab } from "@mui/material";
import formatDateHours from "../../../services/formatDateHours";
import { ActividadesAdmin } from "../../../Styles/Pages/AdminStyles";
import useGetUsers from "../../../Hooks/useGetUsers";
import { getOptionUsers } from "../../../services/getOptionUsers";
import SelectCustom from "../../SelectCustom";
import { generateTabsDashAdmin } from "../../../data/tabs";
import { useSelector } from "react-redux";

const ActCumplidasDash = ({ clientes }) => {
  const { data, isLoading } = useGetUsers();
  const [dataUsers, setDataUsers] = useState([]);
  const [value, setValue] = useState(1);
  const [usuario, setUsuario] = useState("Todos");
  const darkMode = useSelector((state) => state.mode.darkMode);

  useEffect(() => {
    if (data) {
      setDataUsers(getOptionUsers(data.data));
    }
  }, [data]);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);
  return (
    <ActividadesAdmin
      style={{ marginTop: "50px" }}
      modo={darkMode ? "dark" : ""}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="flex">
            <span>Actividades del dia</span>
            <SelectCustom
              w="20%"
              label="Usuario"
              value={usuario}
              setValue={(newValue) => setUsuario(newValue)}
              opciones={dataUsers}
            />
          </div>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                style={{
                  zIndex: 2,
                  width: "100%",
                }}
                textColor="primary"
                indicatorColor="primary"
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {generateTabsDashAdmin(clientes, usuario).map((tab) => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </TabList>
            </Box>
            {generateTabsDashAdmin(clientes, usuario).map((dash) => (
              <TabPanel
                style={{ marginTop: "15px", overflow: "auto", height: "450px" }}
                value={dash.value}
                key={dash.value}
              >
                {dash.array.length > 0 ? (
                  dash.array.map((act) => (
                    <div key={act.value}>
                      <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                          {dash.condicion === "cumplidor"
                            ? `${formatDateHours(
                                act.actividad.fechaCumplimiento
                              )} - ${act.actividad.cumplidor}`
                            : `${formatDateHours(act.actividad.proximoContacto)}
                            - ${act.actividad.creador}`}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            color={
                              dash.condicion === "cumplidor"
                                ? "primary"
                                : "notifi"
                            }
                          />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          {dash.condicion === "cumplidor"
                            ? `${act.actividad.resultado} - ${act.cliente.nombreLocal}`
                            : `${act.actividad.actividad} - ${act.cliente.nombreLocal}`}
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem></TimelineItem>
                    </div>
                  ))
                ) : (
                  <span>No hay actividades para hoy</span>
                )}
              </TabPanel>
            ))}
          </TabContext>
        </>
      )}
    </ActividadesAdmin>
  );
};

export default ActCumplidasDash;
