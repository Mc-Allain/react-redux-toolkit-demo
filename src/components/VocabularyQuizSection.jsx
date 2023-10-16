import React, { useCallback, useMemo } from 'react'
import Section from './shared/Section'
import ToggleButton from './shared/ToggleButton'
import Button, { ButtonClass } from './shared/Button'
import { toggleButton, start } from "../redux/slice/vocabularyQuizSlice"
import { Screens, switchScreen } from "../redux/slice/screenSlice"
import { connect } from 'react-redux'

const VocabularyQuizSection = ({vocabularyChapters, toggleButton, start, switchScreen}) => {

	const title = 'Vocabulary Quiz';

	const selectedChaptersCount = useMemo(() => [...vocabularyChapters].filter(chapter => chapter.isToggled)?.length, [vocabularyChapters]);

	const handleStart = useCallback(
		() => {
			start();
			switchScreen(Screens.MAIN_GAME, title);
		}, [start, switchScreen]
	)

	return (
		<Section title={title} className={'w-full md:w-1/2 lg:w-1/3 xl:w-1/4'} containerClassName={'flex flex-col gap-5'} >
			<div className='flex flex-wrap gap-2'>
				{
					vocabularyChapters?.map((value, index) => {
						return (
							<ToggleButton key={index} className={'flex-grow text-center max-w-[150px]'} isToggled={value.isToggled} onClick={() => toggleButton(index)}>
								{value.label}
							</ToggleButton>
						)
					})
				}
			</div>
			<div className='w-full'>
				<Button className={'text-center !text-base uppercase'} buttonClass={ButtonClass.PRIMARY} disabled={selectedChaptersCount === 0} onClick={() => handleStart()}>
					Start
				</Button>
			</div>
		</Section>
	)
}

const mapStateToProps = state => ({
	...state.vocabularyQuizReducer,
})

const mapDispatchToProps = { toggleButton, start, switchScreen }

export default connect(mapStateToProps, mapDispatchToProps) (VocabularyQuizSection);