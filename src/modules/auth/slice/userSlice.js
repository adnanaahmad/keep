import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload.token;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions

export default userSlice.reducer;