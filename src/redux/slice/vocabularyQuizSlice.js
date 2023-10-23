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
	const valueArray = vocabulary.JP;
	const answerArray = vocabulary.EN;

	for (let key in valueArray) {
		let values = valueArray[key];
		
		if (typeof values !== 'object') {
			values = [values];
		}

		for (let value of values) {
			const answers = answerArray[key];

			vocabularyList.push({
				value: value,
				answers: answers ? answers : '',
				answered: false,
				skipped: false,
			});
		}
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