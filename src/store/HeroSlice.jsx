import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: undefined,
  name: undefined,
  description: undefined,
  comics: undefined,
  series: undefined,
  stories: undefined,
  thumb: undefined,
  urls: undefined,
};

const slice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => action.payload,
  },
});

export const { clearState, updateState } = slice.actions;

export default slice.reducer;
