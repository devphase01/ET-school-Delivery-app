import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productApi } from './service/ProductService';
import productMenuReducer from './reducers/ProductMenu';
import cartReducer from './reducers/Cart';
import userOrderReducer from './reducers/UserOrder'; 

const rootReducer = combineReducers({
  order: userOrderReducer,
  cart: cartReducer,
  menu: productMenuReducer,
  [productApi.reducerPath]: productApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});
