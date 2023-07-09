import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertOpen: false,
  motivo: "",
  estado: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, action) => {
      state.alertOpen = true;
      state.motivo = action.payload.motivo;
      state.estado = action.payload.estado;
    },
    closeAlert: (state) => {
      state.alertOpen = false;
      state.motivo = "";
      state.estado = "";
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
