import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../modules/nav/slice/noteSlice';
import userReducer from '../modules/auth/slice/userSlice';
import labelReducer from '../modules/nav/slice/labelSlice';

export const store = configureStore({
  reducer: {
      userSlice: userReducer,
      noteSlice: noteReducer,
      labelSlice: labelReducer
  },
})