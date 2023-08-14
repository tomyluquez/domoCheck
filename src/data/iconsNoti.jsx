import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

export const IconsNoti = {
  Testeo: (
    <BugReportOutlinedIcon
      style={{
        color: "maroon",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  retoma: (
    <CheckOutlinedIcon
      style={{
        color: "blue",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  "No contesta": (
    <SentimentDissatisfiedOutlinedIcon
      style={{
        color: "orange",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  "No contesta - Marketing": (
    <PhoneMissedIcon
      style={{
        color: "orange",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  "No lo quiere": (
    <DangerousOutlinedIcon
      style={{
        color: "red",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  "Nuevo cliente": (
    <GroupAddOutlinedIcon
      style={{
        color: "green",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  Despachado: (
    <SendOutlinedIcon
      style={{
        color: "blue",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  "Pendiente de despachar": (
    <FolderSharedOutlinedIcon
      style={{
        color: "yellow",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
  Integrado: (
    <CelebrationOutlinedIcon
      style={{
        color: "green",
        backgroundColor: "#e2e2e2",
        padding: "8px",
        borderRadius: "50%",
      }}
    />
  ),
};
