import classNames from 'classnames'
import React from 'react'

const AppContainer = ({children}) => {
    return (
        <div className={classNames(
            'h-screen flex flex-col',
        )}>
            {children}
        </div>
    )
}

export default AppContainer;