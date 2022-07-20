import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productApi } from './service/ProductService';
import ProductMenuReducer from './reducers/ProductMenu';

const rootReducer = combineReducers({
  ProductMenuReducer,
  [productApi.reducerPath]: productApi.reducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});
