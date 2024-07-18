import { createSlice } from '@reduxjs/toolkit';

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = sampleSlice.actions;

export default sampleSlice.reducer;
