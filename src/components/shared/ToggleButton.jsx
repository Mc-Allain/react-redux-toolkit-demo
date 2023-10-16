import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const ToggleButton = ({ children, colors, isToggled = false, onClick, className }) => {
	return (
		<div className={classNames(
			'px-4 py-1 cursor-pointer text-sm font-medium border', {
				[`${colors.BUTTON}`]: !isToggled,
				[`${colors.TOGGLED_BUTTON}`]: isToggled,
			},
			className,
		)}
			onClick={onClick}
		>
			{children}
		</div>
	)
}

const mapStateToProps = state => ({
	...state.colorThemeReducer,
})

export default connect(mapStateToProps) (ToggleButton);