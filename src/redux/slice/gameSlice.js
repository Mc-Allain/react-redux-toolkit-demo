import { createSlice } from '@reduxjs/toolkit';

const getRandomItem = (collections = [], skippedItem = {}) => {
	let availableList = [...collections].filter(item => {
		return item.answered === false && item.skipped === false;
	})

	if (availableList.length > 1) {
		availableList = [...availableList].filter(item => {
			return (Object.keys(skippedItem).length === 0 || skippedItem.index !== item.index);
		})
	}

	if (availableList.length > 0) {
		const randomIndex = Math.floor(Math.random() * availableList.length);
		const randomItem = availableList?.at(randomIndex);

		return randomItem;
	}

	return {};
}

const clearSkips = (collections = []) => {
	const updatedCollections = [...collections].map(item => {
		if (item.skipped === true) {
			item.skipped = false;
		}

		return item;
	})

	return updatedCollections;
}

const updateCollections = (collections = [], newItem = {value: ''}) => {
	const updatedCollections = [...collections].map(item => {
		if (item.index === newItem.index) {
			return newItem;
		} else {
			return item;
		}
	})

	return updatedCollections;
}

export const AnswerStatus = {
	DEFAULT: 'Default',
	CORRECT: 'Correct',
	INCORRECT: 'Incorrect',
}

export const GameStatus = {
	DOWN: 'Down',
	LIVE: 'Live',
}

const initialState = {
	collections: [],
	inDisplay: {},
	score: 0,
	answerStatus: AnswerStatus.DEFAULT,
	gameStatus: GameStatus.DOWN,
};

export const gameSlice = createSlice({
	name: 'name',
	initialState,
	reducers: {
		startGame: (state, action) => {
			const collections = action.payload;

			state.collections = collections;
			state.inDisplay = getRandomItem(collections);
			state.score = 0;
			state.answerStatus = AnswerStatus.DEFAULT;
			state.gameStatus = GameStatus.LIVE;
		},
		endGame: (state, action) => {
			state.collections = [];
			state.inDisplay = {};
			state.score = 0;
			state.answerStatus = AnswerStatus.DEFAULT;
			state.gameStatus = GameStatus.DOWN;
		},
		nextDisplay: (state, action) => {
			let updatedCollections = [...state.collections];
			const inDisplay = {...action.payload};

			if (Object.keys(inDisplay).length > 0) {
				inDisplay.skipped = true;
	
				updatedCollections = updateCollections(updatedCollections, inDisplay);
			}

			let randomItem = getRandomItem(updatedCollections);

			if (Object.keys(randomItem).length === 0) {
				updatedCollections = clearSkips(updatedCollections);
				
				randomItem = getRandomItem(updatedCollections, inDisplay);
			}

			state.collections = updatedCollections;
			state.answerStatus = AnswerStatus.DEFAULT;

			if (Object.keys(randomItem).length > 0) {
				state.inDisplay = randomItem;
			} else {
				state.gameStatus = GameStatus.DOWN;
			}
		},
		submitAnswer: {
			reducer(state, action) {
				let updatedCollections = [...state.collections];
				const submittedAnswer = action.payload.submittedAnswer;
				const inDisplay = {...action.payload.inDisplay};
	
				if (Object.keys(inDisplay).length > 0) {
					const answers = inDisplay.answers;
	
					const isEqualAnswer = answers === submittedAnswer?.trim().toLowerCase();
					const doesContainAnswer = typeof answers === 'object' && answers.includes(submittedAnswer?.trim().toLowerCase());
					const isCorrectAnswer = isEqualAnswer || doesContainAnswer;

					// console.log([...updatedCollections].filter(item => item.index === inDisplay.index).length, inDisplay);
					
					if (isCorrectAnswer) {
						inDisplay.answered = true;
	
						updatedCollections = updateCollections(updatedCollections, inDisplay);
	
						if (state.gameStatus === GameStatus.LIVE) {
							if (state.answerStatus !== AnswerStatus.CORRECT) {
								state.collections = updatedCollections;
								state.score += 1;
								state.answerStatus = AnswerStatus.CORRECT;
							}
						}
					} else {
						if (state.gameStatus === GameStatus.LIVE) {
							if (state.answerStatus !== AnswerStatus.INCORRECT) {
								state.answerStatus = AnswerStatus.INCORRECT;
							}
						}
					}
				}
			},
			prepare(submittedAnswer, inDisplay) {
			  return { payload: { submittedAnswer, inDisplay } }
			}
		},
		setAnswerStatus: (state, action) => {
			if (state.answerStatus !== action.payload) {
				state.answerStatus = action.payload;
			}
		}
	},
});

export const { startGame, endGame, nextDisplay, submitAnswer, setAnswerStatus } = gameSlice.actions;

export default gameSlice.reducer;