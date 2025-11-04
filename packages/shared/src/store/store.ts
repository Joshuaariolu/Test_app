import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { learningSlice } from './slices/learningSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    learning: learningSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;