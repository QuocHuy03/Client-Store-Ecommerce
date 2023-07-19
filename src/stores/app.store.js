import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const cartPersistConfig = {
  key: "cart",
  storage: storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  cart: persistedCartReducer,
});

const middleware = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);
