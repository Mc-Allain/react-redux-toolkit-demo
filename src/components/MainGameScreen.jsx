import React from 'react'
import Section from './shared/Section'
import { connect } from 'react-redux'

const MainGameScreen = ({mainGameScreenName}) => {
	return (
		<div className='flex flex-col justify-center items-center flex-grow gap-2'>
			<Section title={mainGameScreenName} className={'w-[90%] min-w-[350px] flex-grow max-h-[550px]'} containerClassName={'flex flex-col gap-5'} >
				This is the Main Game Screen
			</Section>
		</div>
	)
}

const mapStateToProps = state => ({
	...state.screenReducer,
})

export default connect(mapStateToProps) (MainGameScreen);