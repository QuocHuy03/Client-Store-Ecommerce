import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import discountSlice from "./discountSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";

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

const discountPersistConfig = {
  key: "discount",
  storage: storage,
};

const persistedDiscountReducer = persistReducer(
  discountPersistConfig,
  discountSlice
);

const orderPersistConfig = {
  key: "order",
  storage: storage,
};
const persistedOrderReducer = persistReducer(orderPersistConfig, orderSlice);

const productPersistConfig = {
  key: "product",
  storage: storage,
};
const persistedProductReducer = persistReducer(
  productPersistConfig,
  productSlice
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  cart: persistedCartReducer,
  order: persistedOrderReducer,
  discount: persistedDiscountReducer,
  product: persistedProductReducer,
});

const middleware = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);
