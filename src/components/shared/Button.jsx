import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'


export const ButtonClass = {
	DEFAULT: 'DEFAULT',
	PRIMARY: 'PRIMARY',
	DANGER: 'DANGER',
	DANGER_SOLID: 'DANGER SOLID',
	SUCCESS: 'SUCCESS',
	SUCCESS_SOLID: 'SUCCESS SOLID',
}

const Button = ({ children, colors, onClick, className, buttonClass = ButtonClass.DEFAULT, disabled = false }) => {
	return (
		<div className={classNames(
			'flex justify-center items-center h-fit px-4 py-1 cursor-pointer text-sm font-medium border', {
				[`${colors.BUTTON}`]: buttonClass === ButtonClass.DEFAULT && !disabled,
				[`${colors.TOGGLED_BUTTON}`]: buttonClass === ButtonClass.PRIMARY && !disabled,
				[`${colors.DANGER_BUTTON}`]: buttonClass === ButtonClass.DANGER && !disabled,
				[`${colors.DANGER_BUTTON_SOLID}`]: buttonClass === ButtonClass.DANGER_SOLID && !disabled,
				[`${colors.SUCCESS_BUTTON}`]: buttonClass === ButtonClass.SUCCESS && !disabled,
				[`${colors.SUCCESS_BUTTON_SOLID}`]: buttonClass === ButtonClass.SUCCESS_SOLID && !disabled,
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