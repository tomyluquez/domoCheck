import { Badge, Popover } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useEffect, useState } from "react";
import { ordenNotifications } from "../../services/orderNotifi";
import { DivNotifications } from "../../Styles/Pages/NavbarStyles";
import NotificationInd from "./NotificationInd";
import useChangeStateNoti from "../../Hooks/useChangeNoti";
import { useQueryClient } from "react-query";

const Notifications = ({ notifications, user }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [pendingNotifications, setPendingNotifications] = useState(0);
  const [notiSorted, setNotiSorted] = useState(null);
  const changeStateNoti = useChangeStateNoti();

  const handlerChangeState = async () => {
    setOpen(!open);
    if (notiSorted) {
      // Filtrar las notificaciones pendientes antes de la mutación
      const pendingNotis = notiSorted.filter(
        (noti) => noti.status === "Pendiente"
      );
      setPendingNotifications(pendingNotis.length);
      // Realizar la mutación para cambiar el estado de las notificaciones a "Leída"
      await Promise.all(
        pendingNotis.map((noti) =>
          changeStateNoti.mutateAsync({
            idNotification: noti.idNoti,
            idNotificationUser: noti.idNotiUser,
          })
        )
      );
      // Volver a obtener las notificaciones después de la mutación
      // (puedes omitir esto si estás usando el refetch en el hook useMutation)
      queryClient.invalidateQueries("notifications");
    }
  };

  useEffect(() => {
    if (notifications && notifications.message !== "no hay notificaciones") {
      const notisUser = ordenNotifications(notifications, user);
      setNotiSorted(notisUser);
      // Calcular la cantidad de notificaciones pendientes al cargar el componente
      const pendingNotis = notisUser.filter(
        (noti) => noti.status === "Pendiente"
      );
      setPendingNotifications(pendingNotis.length);
    } else {
      setNotiSorted(null);
      setPendingNotifications(0);
    }
  }, [notifications, user]);

  return (
    <>
      <Badge
        badgeContent={pendingNotifications || 0}
        color="tercary"
        style={{ color: "white" }}
        onClick={handlerChangeState}
      >
        <NotificationsNoneOutlinedIcon
          style={{ cursor: "pointer", color: "black" }}
        />
      </Badge>

      <Popover
        id="simple-popover"
        open={open}
        onClose={() => setOpen(!open)}
        style={{ top: "50px", left: "-70px" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {notiSorted !== null ? (
          notiSorted.map((noti) => (
            <NotificationInd key={noti.idNoti} noti={noti} />
          ))
        ) : (
          <DivNotifications>
            <span>No hay notificaciones</span>
          </DivNotifications>
        )}
      </Popover>
    </>
  );
};

export default Notifications;
