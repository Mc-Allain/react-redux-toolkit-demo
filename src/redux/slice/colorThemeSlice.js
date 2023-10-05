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
	},
	DARK: {
        APP_CONTAINER: 'bg-gray-700',
        APP_HEADER: 'bg-gray-900 text-white border-gray-600',
        APP_BODY: 'bg-gray-900 text-white',
		THEME_TOGGLE_ICON: 'text-gray-400 hover:text-yellow-200 ',
		
		SECTION: 'border-gray-600',
		SECTION_HEADER: 'bg-slate-900 text-white border-gray-600',
	}
}

const colorThemeSlice = createSlice({
	name: 'colorTheme',
	initialState: {
		colorTheme: THEMES.LIGHT,
		colors: COLORS[THEMES.LIGHT],
	},
	reducers: {
		switchTheme: (state, action) => {
			const selectedTheme = action.payload;

			localStorage.setItem('Theme', selectedTheme);

			state.colorTheme = selectedTheme;
			state.colors = COLORS[selectedTheme];
		},
	},
});

export const { switchTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;