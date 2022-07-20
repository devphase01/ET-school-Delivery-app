import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productApi } from './service/ProductService';
import ProductMenuReducer from './reducers/ProductMenu';
import cartReducer from './reducers/Cart';

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: ProductMenuReducer,
  [productApi.reducerPath]: productApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});
