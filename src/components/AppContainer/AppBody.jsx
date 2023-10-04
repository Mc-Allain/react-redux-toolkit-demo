import classNames from "classnames";
import React from "react";

const AppBody = ({children}) => {
    return (
		<div className="grow w-full flex justify-center overflow-y-auto">
            <div className={classNames(
                'flex h-full h-fit w-full',
            )}>
                {children}
            </div>
		</div>
    );
};

export default AppBody;
