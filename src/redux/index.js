import { combineReducers } from "@reduxjs/toolkit";
import colorThemeReducer from './slice/colorThemeSlice'

export default combineReducers({
    colorThemeReducer: colorThemeReducer,
})