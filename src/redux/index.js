import { combineReducers } from "@reduxjs/toolkit";
import colorThemeReducer from './slice/colorThemeSlice'
import vocabularyQuizReducer from './slice/vocabularyQuizSlice'
import screenReducer from './slice/screenSlice'

export default combineReducers({
    colorThemeReducer: colorThemeReducer,
    vocabularyQuizReducer: vocabularyQuizReducer,
    screenReducer: screenReducer,
})