import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../modules/nav/slice/notesSlice';
import userReducer from '../modules/auth/slice/userSlice';

export const store = configureStore({
  reducer: {
      notes: notesReducer,
      user: userReducer
  },
})