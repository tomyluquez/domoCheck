import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./slices/modal";
import valueReducer from "./slices/value";
import alertReducer from "./slices/Alert";
import modeReducer from "./slices/mode";
import clientesReducer from "./slices/clientes";
import usersReducer, { logoutUser } from "./slices/users";
import notiReducer from "./slices/notifications";

const clientsPersistConfig = {
  key: "clients",
  version: 1,
  storage,
};

const usersPersistConfig = {
  key: "clients",
  version: 1,
  storage,
};

const modePersistConfig = {
  key: "mode",
  version: 1,
  storage,
};

const persistedCart = persistReducer(clientsPersistConfig, clientesReducer);
const persistUsers = persistReducer(usersPersistConfig, usersReducer);
const persistMode = persistReducer(modePersistConfig, modeReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    clientes: persistedCart,
    alert: alertReducer,
    value: valueReducer,
    user: persistUsers,
    notis: notiReducer,
    mode: persistMode,
  },
});

export const persistor = persistStore(store);

let inactivityTimer;

const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    store.dispatch(logoutUser());
  }, 60 * 60 * 1000); // 60 minutos (tiempo en milisegundos)
};

window.addEventListener("mousemove", resetInactivityTimer);
window.addEventListener("keydown", resetInactivityTimer);
