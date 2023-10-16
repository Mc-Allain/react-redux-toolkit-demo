import classNames from 'classnames';
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import Button, { ButtonClass } from './shared/Button';

const MainGameScreen = ({colors, mainGameScreenName, inDisplay}) => {
	const inputRef = useRef(null);

	const itemInDisplay = inDisplay.item;

    const inInclusiveBetween = (value, min, max) => {
        return value >= min && value <= max;
    }

	return (
		<div className='flex flex-col justify-center items-center flex-grow gap-2'>
			<div className={'flex flex-col justify-center items-center gap-12 w-[90%] min-w-[350px] flex-grow max-h-[550px]'}>
				<div className='text-lg font-medium uppercase'>{mainGameScreenName}</div>

				<div className={classNames(
					'my-8', {
						'text-8xl lg:text-9xl': inInclusiveBetween(itemInDisplay.length, 1, 3),
						'text-5xl lg:text-8xl': inInclusiveBetween(itemInDisplay.length, 4, 6),
						'text-4xl lg:text-7xl': inInclusiveBetween(itemInDisplay.length, 7, 10),
						'text-3xl lg:text-5xl': inInclusiveBetween(itemInDisplay.length, 11, itemInDisplay.length),
					}
				)}>
					{itemInDisplay}
				</div>

				<div className='flex flex-col gap-8 w-64 lg:w-96'>
					<input type="text" ref={inputRef} className={classNames(
						'text-2xl lg:text-5xl px-4 py-2 text-center w-full border',
						colors.INPUT
					)}
						onKeyUp={(e) => {
							if (e.key === 'Enter') {

							} else if (e.key === 'Escape') {
								
							}
						}}
					/>

					<div className='flex justify-between items-center gap-4'>
						<Button className={'flex-grow text-base'} buttonClass={ButtonClass.DANGER}>Quit</Button>
						<Button className={'flex-grow text-base'} buttonClass={ButtonClass.SUCCESS}>Next (Esc)</Button>
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

export default connect(mapStateToProps) (MainGameScreen);