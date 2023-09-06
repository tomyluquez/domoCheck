import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import formatDate from "../services/formatDate";
import { hitoColors } from "../data/colors";
import { tipoHito } from "../services/histosInd";

export default function TinmeLineClient({ hitos }) {
  return (
    <Timeline position="alternate">
      {hitos.map((hito, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {formatDate(hito.fechaCumplimiento)} - {hito.cumplidor}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                backgroundColor: hitoColors[hito.dato] || hitoColors.otros,
              }}
            >
              {tipoHito[hito.dato]}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{ py: "12px", px: 2 }}
            style={{ fontFamily: "poppins" }}
          >
            <Typography variant="h6" component="span">
              {hito.dato}
            </Typography>
            <Typography style={{ fontFamily: "poppins" }}>
              {hito.actividad}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
