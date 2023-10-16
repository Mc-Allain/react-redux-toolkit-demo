import { createSlice } from '@reduxjs/toolkit';

export const Screens = {
    START_UP: 'START UP',
    MAIN_GAME: 'MAIN GAME',
}

const initialState = {
    currentScreen: Screens.START_UP,
    mainGameScreenName: '',
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    switchScreen: {
      reducer(state, action) {
        state.currentScreen = action.payload.screen;
        state.mainGameScreenName = action.payload.mainGameScreenName;
      },
      prepare(screen, mainGameScreenName = '') {
        return { payload: { screen, mainGameScreenName } }
      }
    },
  },
});

export const { switchScreen } = screenSlice.actions;

export default screenSlice.reducer;