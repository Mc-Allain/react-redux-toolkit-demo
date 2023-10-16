import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collections: [],
    inDisplay: {},
};

export const gameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    startGame: (state, action) => {
        const collections = action.payload;

        const availableList = [...collections].filter(item => {
            return item.answered === false && item.skipped === false;
        })

        if (availableList.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableList.length);
            const randomItem = availableList?.at(randomIndex);
            
            state.inDisplay = randomItem;
        }

        state.collections = collections;
    },
  },
});

export const { startGame } = gameSlice.actions;

export default gameSlice.reducer;