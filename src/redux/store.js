import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./slices/modal";
import valueReducer from "./slices/value";
import alertReducer from "./slices/Alert";
import clientesReducer from "./slices/clientes";
import usersReducer from "./slices/users";
import notiReducer from "./slices/notifications";

const clientsPersistConfig = {
  key: "clients",
  version: 1,
  storage,
};

const persistedCart = persistReducer(clientsPersistConfig, clientesReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    clientes: persistedCart,
    alert: alertReducer,
    value: valueReducer,
    user: usersReducer,
    notis: notiReducer,
  },
});

export const persistor = persistStore(store);
