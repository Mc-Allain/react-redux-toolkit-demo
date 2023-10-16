import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'


export const ButtonClass = {
	DEFAULT: 'DEFAULT',
	PRIMARY: 'PRIMARY',
}

const Button = ({ children, colors, onClick, className, buttonClass = ButtonClass.DEFAULT, disabled = false }) => {
	return (
		<div className={classNames(
			'px-4 py-1 cursor-pointer text-sm font-medium border', {
				[`${colors.BUTTON}`]: buttonClass === ButtonClass.DEFAULT && !disabled,
				[`${colors.TOGGLED_BUTTON}`]: buttonClass === ButtonClass.PRIMARY && !disabled,
				[`${colors.DISABLED_BUTTON}`]: disabled,
				'!cursor-default': disabled,
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

export default connect(mapStateToProps) (Button);