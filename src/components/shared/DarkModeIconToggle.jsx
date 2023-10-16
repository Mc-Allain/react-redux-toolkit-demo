import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { switchTheme } from "../../redux/slice/colorThemeSlice"
import { connect } from "react-redux";
import { THEMES } from "../../constants/colorTheme";

const DarkModeIconToggle = ({colorTheme, colors, switchTheme}) => {
	
    useEffect(() => {
        const savedTheme = localStorage.getItem('Theme');
		
		if (savedTheme) {
			console.log(savedTheme);
			switchTheme(savedTheme);
		}
    }, [switchTheme]);

	return (
		<FontAwesomeIcon
			icon={colorTheme === THEMES.LIGHT ? faMoon : faSun}
			className={classNames(
				"text-xl lg:text-2xl p-2 cursor-pointer",
				colors.THEME_TOGGLE_ICON,
			)}

			onClick={() => switchTheme(colorTheme === THEMES.LIGHT ?  THEMES.DARK : THEMES.LIGHT)}
		/>
	);
};

const mapStateToProps = state => ({
	...state.colorThemeReducer,
})

const mapDispatchToProps = { switchTheme }

export default connect(mapStateToProps, mapDispatchToProps) (DarkModeIconToggle);
