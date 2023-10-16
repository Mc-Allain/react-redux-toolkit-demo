import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Screens, switchScreen } from '../redux/slice/screenSlice';
import { endGame } from '../redux/slice/gameSlice';
import Button from './shared/Button';

const EndGameScreen = ({collections, score, endGame, switchScreen}) => {
	
	const finish = useCallback(
		() => {
			endGame();
			switchScreen(Screens.START_UP);
		}, [endGame, switchScreen]
	)

	return (
		<div className='flex flex-col justify-center items-center flex-grow gap-2'>
			<div className={'flex flex-col justify-center items-center gap-12 w-[90%] min-w-[350px] flex-grow max-h-[550px]'}>
				<div className='text-lg font-medium uppercase'>Congratulations</div>

				<div className='text-2xl font-medium'>Final Score: {score}/{collections.length}</div>
				
				<Button onClick={finish} className={'!text-base uppercase'}>Finish</Button>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	...state.colorThemeReducer,
	...state.screenReducer,
	...state.gameReducer,
})

const mapDispatchToProps = { endGame, switchScreen }

export default connect(mapStateToProps, mapDispatchToProps) (EndGameScreen);