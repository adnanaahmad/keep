import { createSlice } from '@reduxjs/toolkit';

const notes = [];

const initialState = {
  notes,
}

export const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    createNote: (state) => {
      //state.value -= 1
    },
    updateNoteCoordinates: (state, action) => {
        let index = state.notes.findIndex(note => note._id === action.payload.id);
        state.notes[index].x = action.payload.x;
        state.notes[index].y = action.payload.y;
    },
    deleteNote: (state, action) => {
     // state.value += action.payload
    },
    setNotesData: (state, action) => {
      state.notes = action.payload.notes;
    }
  },
})

// Action creators are generated for each case reducer function
export const { createNote, updateNoteCoordinates, deleteNote, setNotesData } = noteSlice.actions

export default noteSlice.reducer