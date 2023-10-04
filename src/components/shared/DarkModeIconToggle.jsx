import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const DarkModeIconToggle = () => {
	
    useEffect(() => {
        const savedTheme = localStorage.getItem('Theme');
    }, []);

	return (
		<FontAwesomeIcon
			icon={true ? faMoon : faSun}
			className={classNames(
				"text-xl lg:text-2xl p-2 cursor-pointer",
			)}
		/>
	);
};

export default DarkModeIconToggle;
