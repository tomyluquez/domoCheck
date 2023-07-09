import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "1",
};

export const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = valueSlice.actions;
export default valueSlice.reducer;
