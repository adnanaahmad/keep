import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../modules/nav/slice/notesSlice';

export const store = configureStore({
  reducer: {
      notes: notesReducer
  },
})