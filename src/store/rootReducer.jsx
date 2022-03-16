import { combineReducers } from '@reduxjs/toolkit';
import hero from './HeroSlice';
import heroes from './HeroesSlice';
import theme from './ThemeSlice';
const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    heroes,
    hero,
  });

  return combinedReducer(state, action);
};

export default createReducer;
