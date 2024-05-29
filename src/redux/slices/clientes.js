import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientes: [],
  filteredClientes: [],
  prospects: [],
  filteredProspects: [],
};

export const clientesSlice = createSlice({
  name: "clientes",
  initialState,
  reducers: {
    addClients: (state, action) => {
      if (action.payload) {
        state.clientes = action.payload.data;
        state.filteredClientes = action.payload.data;
      }
    },
    filters: (state, action) => {
      state.filteredClientes = action.payload;
    },
    filtersProspects: (state, action) => {
      state.filteredProspects = action.payload;
    },
    addProspects: (state, action) => {
      if (action.payload) {
        state.prospects = action.payload.data;
        state.filteredProspects = action.payload.data;
      }
    },
  },
});

export const { addClients, filters, addProspects, filtersProspects } =
  clientesSlice.actions;
export default clientesSlice.reducer;
