import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { PageName, pageName } from '../interfaces/PageName';

interface GameState {
  isGameStarted: boolean,
  pageSelected: PageName,
}

const initialState: GameState = {
  isGameStarted: false,
  pageSelected: pageName.rules,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startRestart: (state) => {
      state.isGameStarted = !state.isGameStarted;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectPage: (state, action: PayloadAction<PageName>) => {
      state.pageSelected = action.payload;
    },
  },
})

export const { startRestart, selectPage } = gameSlice.actions;

export const selectStore = (state: RootState) => state.game;

export default gameSlice.reducer
