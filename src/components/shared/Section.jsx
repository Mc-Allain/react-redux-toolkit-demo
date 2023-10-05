import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const Section = ({title, className, headerClassName, containerClassName, children, colors}) => {
	return (
		<div className={classNames(
			'flex flex-col w-full border',
			className,
			colors.SECTION,
		)}>
			<div className={classNames(
				'w-full border-b text-start px-5 py-1 text-lg font-medium',
				headerClassName,
				colors.SECTION_HEADER,
			)}>
				{title}
			</div>
			<div className={classNames(
				'grow p-4 text-start',
				containerClassName,
			)}>
				{children}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	...state.colorThemeReducer,
})

export default connect(mapStateToProps) (Section);