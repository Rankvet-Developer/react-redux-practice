import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddlewares) => 
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
