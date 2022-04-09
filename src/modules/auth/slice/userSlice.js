import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
        // let index = state.allNotes.findIndex(note => note.id === action.payload.id);
        // state.allNotes[index].x = action.payload.x;
        // state.allNotes[index].y = action.payload.y;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions

export default userSlice.reducer;