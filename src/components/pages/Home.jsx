import React from 'react'
import { connect } from 'react-redux';
import StartUpScreen from '../StartUpScreen';
import { Screens } from '../../redux/slice/screenSlice';
import MainGameScreen from '../MainGameScreen';
import EndGameScreen from '../EndGameScreen';

const Home = ({currentScreen}) => {
	return (
		<div className='flex flex-col gap-2 grow w-full p-4'>
			{
				currentScreen === Screens.START_UP ? (
					<StartUpScreen />
				) : currentScreen === Screens.MAIN_GAME ? (
					<MainGameScreen />
				) : currentScreen === Screens.END_GAME ? (
					<EndGameScreen />
				) : <></>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	...state.screenReducer,
})

export default connect(mapStateToProps) (Home);