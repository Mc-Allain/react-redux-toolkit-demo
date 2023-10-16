import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const AppContainer = ({children, colors}) => {
    return (
        <div className={classNames(
            'h-screen flex flex-col',
            colors.APP_CONTAINER
        )}>
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
	...state.colorThemeReducer,
})

export default connect(mapStateToProps) (AppContainer);