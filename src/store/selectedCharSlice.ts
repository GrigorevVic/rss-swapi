import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { People } from '../types/types';
import { RootState } from './store';

const selectedCharAdapter = createEntityAdapter({
  selectId: (character: People) => character.name,
});

const initialState = selectedCharAdapter.getInitialState();

const selectedCharSlice = createSlice({
  name: 'selectedChar',
  initialState,
  reducers: {
    selectChar(state, action) {
      selectedCharAdapter.addOne(state, action);
    },
    unselectChar(state, action) {
      selectedCharAdapter.removeOne(state, action);
    },
    unselectAll(state) {
      selectedCharAdapter.removeAll(state);
    },
  },
});

export const { selectChar, unselectChar, unselectAll } =
  selectedCharSlice.actions;

export const { selectById } = selectedCharAdapter.getSelectors(
  (state: RootState) => state.selectedChar
);

export default selectedCharSlice.reducer;
