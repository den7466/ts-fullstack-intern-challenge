import { configureStore } from '@reduxjs/toolkit';
import { likesSlise } from './slices/likesSlice';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { imagesSlise } from './slices/imagesSlice';

const rootReducer = {
  [likesSlise.name]: likesSlise.reducer,
  [imagesSlise.name]: imagesSlise.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;