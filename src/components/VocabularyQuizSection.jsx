import React, { useMemo, useEffect } from 'react'
import Section from './shared/Section'
import ToggleButton from './shared/ToggleButton'
import Button, { ButtonClass } from './shared/Button'
import { typeToggleButton, chaptersToggleButton, createCollections, removeCollections } from "../redux/slice/vocabularyQuizSlice"
import { startGame } from "../redux/slice/gameSlice"
import { Screens, switchScreen } from "../redux/slice/screenSlice"
import { connect } from 'react-redux'

const VocabularyQuizSection = ({vocabularyQuizTypes, vocabularyChapters, vocabularyList, typeToggleButton, chaptersToggleButton, createCollections, removeCollections, startGame, switchScreen}) => {

	const title = 'Vocabulary Quiz';

	const selectedQuizTypeCount = useMemo(() => [...vocabularyQuizTypes].filter(chapter => chapter.isToggled)?.length, [vocabularyQuizTypes]);

	const selectedChaptersCount = useMemo(() => [...vocabularyChapters].filter(chapter => chapter.isToggled)?.length, [vocabularyChapters]);
	
	useEffect(() => {
		if (vocabularyList.length > 0) {
			startGame(vocabularyList);
			switchScreen(Screens.MAIN_GAME, title);
		}

		return () => {
			if (vocabularyList.length > 0) {
				removeCollections();
			}
		}
	}, [vocabularyList, startGame, switchScreen, removeCollections]);

	return (
		<Section title={title} className={'w-full md:w-1/2 lg:w-1/3 xl:w-1/4'} containerClassName={'flex flex-col gap-5'} >
			<div className='flex flex-wrap gap-2'>
				{
					vocabularyQuizTypes?.map((value, index) => {
						return (
							<ToggleButton key={index} className={'flex-grow text-center min-w-[225px]'} isToggled={value.isToggled} onClick={() => typeToggleButton(index)}>
								{value.label}
							</ToggleButton>
						)
					})
				}
			</div>
			<div className='flex flex-wrap gap-2'>
				{
					vocabularyChapters?.map((value, index) => {
						return (
							<ToggleButton key={index} className={'flex-grow text-center min-w-[150px]'} isToggled={value.isToggled} onClick={() => chaptersToggleButton(index)}>
								{value.label}
							</ToggleButton>
						)
					})
				}
			</div>
			<div className='w-full'>
				<Button className={'text-center !text-base uppercase'} buttonClass={ButtonClass.PRIMARY} disabled={selectedChaptersCount === 0 || selectedQuizTypeCount === 0} onClick={() => createCollections()}>
					Start
				</Button>
			</div>
		</Section>
	)
}

const mapStateToProps = state => ({
	...state.vocabularyQuizReducer,
})

const mapDispatchToProps = { typeToggleButton, chaptersToggleButton, createCollections, removeCollections, startGame, switchScreen }

export default connect(mapStateToProps, mapDispatchToProps) (VocabularyQuizSection);