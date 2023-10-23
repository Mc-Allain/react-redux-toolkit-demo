import { createSlice } from '@reduxjs/toolkit';
import { VOCABULARY } from '../../constants/vocabulary';

const createVocabularyQuizType = (typeKey = '') => {
	const label = VOCABULARY.types[typeKey];

	return {
		key: typeKey,
		label: label,
		isToggled: label === VOCABULARY.types.JPTOEN,
	};
}

const generateVocabularyQuizTypes = () => {
	const vocabularyQuizTypes = [];

	for (let typeKey of Object.keys(VOCABULARY.types)) {
		vocabularyQuizTypes.push(createVocabularyQuizType(typeKey));
	}

	return vocabularyQuizTypes;
}

const createVocabularyChapter = (chapterKey = '') => {
	const label = VOCABULARY.chapters[chapterKey];

	return {
		key: chapterKey,
		label: label,
		isToggled: false,
	};
}

const generateVocabularyChapters = () => {
	const vocabularyChapters = [];

	for (let chapterKey of Object.keys(VOCABULARY.chapters)) {
		vocabularyChapters.push(createVocabularyChapter(chapterKey));
	}

	return vocabularyChapters;
}

const createVocabulary = (vocabulary, selectedTypes) => {
	const vocabularyList = [];
	let valueArray = [];
	let answerArray = [];
	
	for (let type of selectedTypes) {
		if (type.label === VOCABULARY.types.JPTOEN) {
			valueArray.push([...vocabulary.JP]);
			answerArray.push([...vocabulary.EN])
		} else if (type.label === VOCABULARY.types.ENTOJP) {
			valueArray.push([...vocabulary.EN]);
			answerArray.push([...vocabulary.ROMAJI])
		}
	}
	
	valueArray = valueArray.flat();
	answerArray = answerArray.flat();

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

const generateVocabularyList = (vocabularyQuizTypes, vocabularyChapters) => {
	let vocabularyList = [];

	const selectedTypes = [...vocabularyQuizTypes].filter(value => value.isToggled);

	const selectedChapters = [...vocabularyChapters].filter(value => value.isToggled);
	
	for (let chapter of selectedChapters) {
		const vocabulary = VOCABULARY.values[chapter.key];
		vocabularyList.push(createVocabulary(vocabulary, selectedTypes));
	}

	vocabularyList = vocabularyList.flat();

	for (let index in vocabularyList) {
		vocabularyList[index].index = index;
	}

	return vocabularyList;
}

const initialState = {
	vocabularyQuizTypes: generateVocabularyQuizTypes(),
	vocabularyChapters: generateVocabularyChapters(),
	vocabularyList: [],
};

export const vocabularyQuizSlice = createSlice({
	name: 'vocabularyQuiz',
	initialState,
	reducers: {
		typeToggleButton: (state, action) => {
			const index = action.payload;
			const type = state.vocabularyQuizTypes[index];
			
			type.isToggled = !type.isToggled;
		},
		chaptersToggleButton: (state, action) => {
			const index = action.payload;
			const chapter = state.vocabularyChapters[index];
			
			chapter.isToggled = !chapter.isToggled;
		},
		createCollections: (state, action) => {
			const vocabularyList = generateVocabularyList([...state.vocabularyQuizTypes], [...state.vocabularyChapters]);

			state.vocabularyList = vocabularyList;
		},
		removeCollections: (state, action) => {
			state.vocabularyList = [];
		},
	},
});

export const { typeToggleButton, chaptersToggleButton, createCollections, removeCollections } = vocabularyQuizSlice.actions;

export default vocabularyQuizSlice.reducer;