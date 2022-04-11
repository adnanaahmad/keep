import { createSlice } from '@reduxjs/toolkit';

const labels = []

const initialState = {
  labels
}

export const labelSlice = createSlice({
  name: 'labelSlice',
  initialState,
  reducers: {
    createLabel: (state) => {
        //state.value -= 1
    },
    updateLabel: (state, action) => {
        // let index = state.allNotes.findIndex(note => note.id === action.payload.id);
        // state.allNotes[index].x = action.payload.x;
        // state.allNotes[index].y = action.payload.y;
    },
    deleteLabel: (state, action) => {
     // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { createLabel, updateLabel, deleteLabel } = labelSlice.actions;

export default labelSlice.reducer;