import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { PageName, pageName } from '../interfaces/PageName';

interface GameState {
  isGameStarted: boolean,
  pageSelected: PageName,
  gameScore: number,
  gameTime: number,
}

const initialState: GameState = {
  isGameStarted: false,
  pageSelected: pageName.rules,
  gameScore: 0,
  gameTime: 0,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playGame: (state, action: PayloadAction<boolean>) => {
      state.isGameStarted = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectPage: (state, action: PayloadAction<PageName>) => {
      state.pageSelected = action.payload;
    },
    incrementScore: (state, action: PayloadAction<number>) => {
      state.gameScore += action.payload;
    },
    setGameTime: (state, action: PayloadAction<number>) => {
      state.gameTime = action.payload;
    },
    resetGame: (state) => {
      state.gameTime = 0;
      state.gameScore = 0;
      state.isGameStarted = false;
    }
  },
})

export const { playGame, selectPage, incrementScore, setGameTime, resetGame } = gameSlice.actions;

export const selectStore = (state: RootState) => state.game;

export default gameSlice.reducer
