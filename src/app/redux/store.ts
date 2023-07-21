import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './nameSlice';

//nameSliceを使えるように設定（複数設定も可
const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
