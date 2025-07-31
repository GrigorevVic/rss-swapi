import { configureStore } from '@reduxjs/toolkit';
import selectCharReducer from './selectedCharSlice';
import { api } from '../api/api';

export const store = configureStore({
  reducer: {
    selectedChar: selectCharReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
