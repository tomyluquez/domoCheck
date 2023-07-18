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
import { Cards } from "../../Styles/Pages/DashboardStyles";
import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { actTodayCump } from "../../services/actividadesToday";
import formatDateHours from "../../services/formatDateHours";

const ActCumplidasDash = ({ clientes }) => {
  const [value, setValue] = useState(1);
  const { actCumplidasToday, actPendientesToday } = actTodayCump(clientes);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Cards style={{ width: "80%", height: "550px", marginTop: "50px" }}>
      <span>Actividades del dia</span>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList
            style={{
              backgroundColor: "#fafafa",
              zIndex: 2,
              width: "100%",
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab key={1} label={"Cumplidas"} value={1} />
            <Tab key={2} label={"Pendientes"} value={2} />
          </TabList>
        </Box>

        <TabPanel
          style={{ marginTop: "15px", overflow: "auto", height: "450px" }}
          value={1}
          key={1}
        >
          {actCumplidasToday.length > 0 ? (
            actCumplidasToday.map((act) => (
              <div key={act._id}>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    {formatDateHours(act.actividad.fechaCumplimiento)} -
                    {act.actividad.cumplidor}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{act.actividad.resultado}</TimelineContent>
                </TimelineItem>
                <TimelineItem></TimelineItem>
              </div>
            ))
          ) : (
            <span>No hay actividades cumplidas hoy</span>
          )}
        </TabPanel>
        <TabPanel
          style={{ marginTop: "15px", overflow: "auto", height: "450px" }}
          value={2}
          key={2}
        >
          {actPendientesToday.length > 0 ? (
            actPendientesToday.map((act) => (
              <div key={act._id}>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    {formatDateHours(act.actividad.proximoContacto)} -
                    {act.actividad.creador}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="tercary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{act.actividad.actividad}</TimelineContent>
                </TimelineItem>
                <TimelineItem></TimelineItem>
              </div>
            ))
          ) : (
            <span>No hay actividades para hoy</span>
          )}
        </TabPanel>
      </TabContext>
    </Cards>
  );
};

export default ActCumplidasDash;
