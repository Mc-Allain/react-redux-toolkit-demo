import React from 'react'
import classNames from 'classnames'
import DarkModeIconToggle from '../shared/DarkModeIconToggle'

const AppHeader = () => {
    return (
        <div className={classNames(
            `min-h-[32px] min-h-[44px] grow-0 w-full uppercase text-lg font-semibold 
                flex justify-between items-center gap-2 px-4 lg:px-8 py-1 sticky top-0 border-b-[1px]`,
        )}>
            <div className='text-lg lg:text-2xl font-medium uppercase '>
                React Redux Toolkit Demo
            </div>
            <DarkModeIconToggle />
        </div>
    )
}


export default AppHeader;