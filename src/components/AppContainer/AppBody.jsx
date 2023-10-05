import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";

const AppBody = ({children, className, colors}) => {
    return (
		<div className="grow w-full flex justify-center overflow-y-auto">
            <div className={classNames(
                'flex h-full h-fit',
                colors.APP_BODY,
                className,
            )}>
                {children}
            </div>
		</div>
    );
};

const mapStateToProps = state => ({
	...state.colorThemeReducer,
})

export default connect(mapStateToProps) (AppBody);
