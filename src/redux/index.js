import { combineReducers } from "@reduxjs/toolkit";
import colorThemeReducer from './slice/colorThemeSlice'
import screenReducer from './slice/screenSlice'
import gameReducer from './slice/gameSlice'
import vocabularyQuizReducer from './slice/vocabularyQuizSlice'

export default combineReducers({
    colorThemeReducer: colorThemeReducer,
    screenReducer: screenReducer,
    gameReducer: gameReducer,
    vocabularyQuizReducer: vocabularyQuizReducer,
})