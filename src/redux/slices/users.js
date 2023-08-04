import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  role: "",
  vendedor: "",
  id: "",
};

export const userSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      if (action.payload) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.vendedor = action.payload.vendedor || null;
        state.id = action.payload.id;
      }
    },
    logoutUser: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
