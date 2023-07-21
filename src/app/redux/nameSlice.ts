import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    count: 0,
    name: '',
    beforename: '',
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setbeforeName: (state, action) => {
      state.beforename = action.payload;
    },
  },
});

export const { increment, decrement, reset, setName, setbeforeName } = nameSlice.actions;

export default nameSlice.reducer;
