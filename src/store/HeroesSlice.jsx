import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (hero) => hero.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state) => state.heroes
);

const slice = createSlice({
  name: 'heroes',
  initialState: adapter.getInitialState(),
  reducers: {
    clearState: (state, action) => [],
    setAll: adapter.setAll,
  },
});

export const { clearState, setAll } = slice.actions;

export default slice.reducer;
