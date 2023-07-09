import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./slices/modal";
import valueReducer from "./slices/value";
import alertReducer from "./slices/Alert";
import clientesReducer from "./slices/clientes";
import usersReducer from "./slices/users";

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

const persistedCart = persistReducer(clientsPersistConfig, clientesReducer);
const persistUser = persistReducer(usersPersistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    clientes: persistedCart,
    alert: alertReducer,
    value: valueReducer,
    user: persistUser,
  },
});

export const persistor = persistStore(store);
