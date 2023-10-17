import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '../../constants/colorTheme';

/** PROTECTED CONSTANTS */

const COLORS = {
	LIGHT: {
        APP_CONTAINER: 'bg-gray-200',
        APP_HEADER: 'bg-gray-100 border-gray-300',
        APP_BODY: 'bg-gray-50',
		THEME_TOGGLE_ICON: 'text-gray-500 hover:text-blue-400',
		
		SECTION: 'border-gray-300',
		SECTION_HEADER: 'bg-slate-100 border-gray-300',

		BUTTON: 'border-gray-400 bg-white hover:bg-gray-100 text-blue-400 ',
		TOGGLED_BUTTON: 'border-blue-700 bg-blue-400 hover:bg-blue-500 text-white',
		DISABLED_BUTTON: 'border-gray-300 bg-gray-50 text-gray-300',
		SUCCESS_BUTTON: 'border-gray-400 bg-white hover:bg-gray-100 text-green-400 ',
		SUCCESS_BUTTON_SOLID: 'border-green-700 bg-green-600 hover:bg-green-500 text-white',
		DANGER_BUTTON: 'border-gray-400 bg-white hover:bg-gray-100 text-red-400 ',
		DANGER_BUTTON_SOLID: 'border-red-700 bg-red-600 hover:bg-red-500 text-white',

        INPUT: 'bg-white border-gray-400',
	},
	DARK: {
        APP_CONTAINER: 'bg-gray-700',
        APP_HEADER: 'bg-gray-900 text-white border-gray-600',
        APP_BODY: 'bg-gray-900 text-white',
		THEME_TOGGLE_ICON: 'text-gray-400 hover:text-yellow-200 ',
		
		SECTION: 'border-gray-600',
		SECTION_HEADER: 'bg-slate-900 text-white border-gray-600',

		BUTTON: 'border-gray-500 bg-gray-950 hover:bg-gray-800 text-blue-400 ',
		TOGGLED_BUTTON: 'border-blue-700 bg-blue-600 hover:bg-blue-500 text-white',
		DISABLED_BUTTON: 'border-gray-600 bg-gray-900 text-gray-600',
		SUCCESS_BUTTON: 'border-gray-500 bg-gray-950 hover:bg-gray-800 text-green-400 ',
		SUCCESS_BUTTON_SOLID: 'border-green-700 bg-green-600 hover:bg-green-500 text-white',
		DANGER_BUTTON: 'border-gray-500 bg-gray-950 hover:bg-gray-800 text-red-400 ',
		DANGER_BUTTON_SOLID: 'border-red-700 bg-red-600 hover:bg-red-500 text-white',

        INPUT: 'bg-gray-950 border-gray-500',
	}
}

const initialState = {
	colorTheme: THEMES.LIGHT,
	colors: COLORS[THEMES.LIGHT],
};

const colorThemeSlice = createSlice({
	name: 'colorTheme',
	initialState,
	reducers: {
		switchTheme: (state, action) => {
			const selectedTheme = action.payload;

			const isValidTheme = Object.values(THEMES).includes(selectedTheme);

			if (isValidTheme) {
				localStorage.setItem('Theme', selectedTheme);

				state.colorTheme = selectedTheme;
				state.colors = COLORS[selectedTheme];
			}
		},
	},
});

export const { switchTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;