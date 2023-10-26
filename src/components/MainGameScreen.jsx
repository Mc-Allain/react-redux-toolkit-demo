import classNames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import Button, { ButtonClass } from './shared/Button';
import { AnswerStatus, endGame, nextDisplay, submitAnswer, setAnswerStatus, GameStatus } from '../redux/slice/gameSlice';
import { Screens, switchScreen } from '../redux/slice/screenSlice';

const MainGameScreen = ({colors, mainGameScreenName, collections, inDisplay, score, answerStatus, gameStatus, endGame, nextDisplay, submitAnswer, setAnswerStatus, switchScreen}) => {
	const inputRef = useRef(null);

	const inDisplayValue = inDisplay.value;

    const inInclusiveBetween = useCallback(
		(value, min = 0, max = 1) => {
			return value >= min && value <= max;
		}, []
	)

	const quitGame = useCallback(
		() => {
			endGame();
			switchScreen(Screens.START_UP);
		}, [endGame, switchScreen]
	)

	const handleNextDisplay = useCallback(
		() => {
			nextDisplay(inDisplay);
		}, [nextDisplay, inDisplay]
	)

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	useEffect(() => {
		if (answerStatus === AnswerStatus.CORRECT) {
			setTimeout(() => {
				nextDisplay();
			}, 500);
		} else {
			inputRef.current.focus();
		}
	}, [answerStatus, nextDisplay]);

	useEffect(() => {
		inputRef.current.value = '';
	}, [inDisplay]);

	useEffect(() => {
		if (gameStatus === GameStatus.DOWN) {
			switchScreen(Screens.END_GAME);
		}
	}, [gameStatus, endGame, switchScreen]);

	return (
		<div className='flex flex-col justify-center items-center flex-grow gap-2'>
			<div className={'flex flex-col justify-center items-center gap-12 w-[90%] min-w-[350px] flex-grow max-h-[550px]'}>
				<div className='text-lg font-medium uppercase'>{mainGameScreenName}</div>

				<div className='text-2xl font-medium'>Score: {score}/{collections.length}</div>

				<div className='flex flex-col justify-center items-center flex-grow gap-12 py-8'>
					<div className={classNames(
							'h-[180px] flex items-center', {
								'text-7xl md:text-8xl lg:text-9xl': inInclusiveBetween(inDisplayValue.length, 1, 4),
								'text-5xl md:text-7xl lg:text-8xl': inInclusiveBetween(inDisplayValue.length, 5, 7),
								'text-4xl md:text-6xl lg:text-7xl': inInclusiveBetween(inDisplayValue.length, 8, 11),
								'text-3xl md:text-5xl lg:text-6xl': inInclusiveBetween(inDisplayValue.length, 11, inDisplayValue.length),
							}, {
								'text-green-500': answerStatus === AnswerStatus.CORRECT,
								'text-red-500': answerStatus === AnswerStatus.INCORRECT,
							}
						)}
					>
						{inDisplayValue}
					</div>

					<input type="text" ref={inputRef} className={classNames(
						'text-2xl lg:text-5xl px-4 py-2 text-center w-full border w-64 lg:w-96',
						colors.INPUT
					)}
						onKeyUp={(e) => {
							if (e.key === 'Enter') {
								submitAnswer(inputRef.current.value, inDisplay);
							} else if (e.key === 'Escape') {
								handleNextDisplay();
							}
						}}
						onChange={() => setAnswerStatus(AnswerStatus.DEFAULT)}
						disabled={answerStatus === AnswerStatus.CORRECT}
					/>
				</div>

				<div className='flex flex-col justify-between gap-8 w-64 lg:w-96'>
					<div className='flex justify-between items-center gap-4'>
						<Button className={'flex-grow !text-base'} buttonClass={ButtonClass.DANGER} 
							onClick={() => quitGame()} disabled={answerStatus === AnswerStatus.CORRECT}>
								Quit
						</Button>
						<Button className={'flex-grow !text-base'} buttonClass={ButtonClass.SUCCESS} 
							onClick={() => handleNextDisplay()} disabled={answerStatus === AnswerStatus.CORRECT}>
								Next (Esc)
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	...state.colorThemeReducer,
	...state.screenReducer,
	...state.gameReducer,
})

const mapDispatchToProps = { endGame, nextDisplay, submitAnswer, setAnswerStatus, switchScreen }

export default connect(mapStateToProps, mapDispatchToProps) (MainGameScreen);