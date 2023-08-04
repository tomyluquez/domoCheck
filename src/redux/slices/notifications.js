import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNoti: (state, action) => {
      if (action.payload.data && action.payload.data.length > 0) {
        const newNoti = action.payload.data.map((noti) => {
          const idUser = noti.users.filter(
            (user) => user.idUser === action.payload.idUser
          );
          const notis = {
            idNoti: noti._id,
            date: new Date(noti.createAt),
            description: noti.description,
            idNotiUser: idUser[0]?._id,
            status: idUser[0]?.statusNotification,
          };
          return notis;
        });

        state.notifications = newNoti;
      }
    },
  },
});

export const { addNoti } = notificationsSlice.actions;
export default notificationsSlice.reducer;
