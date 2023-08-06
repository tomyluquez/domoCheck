import { DivNotifications } from "../../Styles/Pages/NavbarStyles";
import { Divider } from "@mui/material";
import { IconsNoti } from "../../data/iconsNoti";
import formatDateHours from "../../services/formatDateHours";

const NotificationInd = ({ noti, darkMode }) => {
  return (
    <>
      <DivNotifications
        key={noti.idNoti}
        estado={noti.status}
        modo={darkMode ? "dark" : ""}
      >
        <div
          className="flex"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          {IconsNoti[noti.tipo]}
          <h3 style={{ margin: 0 }}>{noti.tipo.toUpperCase()}</h3>
        </div>
        <span>{noti.description}</span>
        <span style={{ color: "grey", alignSelf: "end", fontSize: "12px" }}>
          {formatDateHours(noti.date)}
        </span>
      </DivNotifications>
      <Divider />
    </>
  );
};

export default NotificationInd;
