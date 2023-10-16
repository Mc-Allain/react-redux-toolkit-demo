import { createSlice } from '@reduxjs/toolkit';
import { VOCABULARY } from '../../constants/vocabulary';

const createVocabularyChapter = (chapter = []) => {
	const key = chapter?.at(0);
	const label = chapter?.at(1);

	return {
		key: key,
		label: label,
		isToggled: false,
	};
}

const generateVocabularyChapters = () => {
	const vocabularyChapters = [];

	for (let chapter of VOCABULARY.chapters) {
		vocabularyChapters.push(createVocabularyChapter(chapter))
	}

	return vocabularyChapters;
}

const createVocabulary = (vocabulary) => {
	const vocabularyList = [];
	const JP = vocabulary.JP;
	const EN = vocabulary.EN;

	for (let key in JP) {
		vocabularyList.push({
			item: JP[key],
			answers: EN[key],
			answered: false,
			skipped: false,
		});
	}

	return vocabularyList;
}

const generateVocabularyList = (vocabularyChapters) => {
	let vocabularyList = [];

	const selectedChapters = [...vocabularyChapters].filter(value => value.isToggled);
	
	for (let chapter of selectedChapters) {
		const vocabulary = VOCABULARY.values[chapter.key];
		vocabularyList.push(createVocabulary(vocabulary));
	}

	vocabularyList = vocabularyList.flat();

	return vocabularyList;
}

const initialState = {
	vocabularyChapters: generateVocabularyChapters(),
	vocabularyList: [],
};

export const vocabularyQuizSlice = createSlice({
	name: 'vocabularyQuiz',
	initialState,
	reducers: {
		toggleButton: (state, action) => {
			const index = action.payload;
			const vocabularyItem = state.vocabularyChapters[index];
			
			vocabularyItem.isToggled = !vocabularyItem.isToggled;
		},
		createCollections: (state, action) => {
			const vocabularyList = generateVocabularyList([...state.vocabularyChapters]);

			state.vocabularyList = vocabularyList;
		},
		removeCollections: (state, action) => {
			state.vocabularyList = [];
		},
	},
});

export const { toggleButton, createCollections, removeCollections } = vocabularyQuizSlice.actions;

export default vocabularyQuizSlice.reducer;