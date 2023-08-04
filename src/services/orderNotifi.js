export const ordenNotifications = (notifications, userActive) => {
  const notisUser = notifications.data.map((noti) => {
    const notiUser = noti.users.filter((user) => user.idUser === userActive.id);
    const notis = {
      idNoti: noti._id,
      date: new Date(noti.createAt),
      description: noti.description,
      idNotiUser: notiUser[0]?._id,
      status: notiUser[0]?.statusNotification,
      tipo: noti.tipo,
    };
    return notis;
  });
  return notisUser.sort((a, b) => {
    if (a.status === "Pendiente" && b.status !== "Pendiente") {
      return -1;
    } else if (a.status !== "Pendiente" && b.status === "Pendiente") {
      return 1;
    } else {
      return b.date - a.date;
    }
  });
};
