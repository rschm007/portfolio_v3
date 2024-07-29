import { useTheme } from "hooks";
import React from "react";
import SunIcon from "../../../../assets/icons/ph--sun.svg";
import MoonIcon from "../../../../assets/icons/ph--moon.svg";
import { Wrapper } from "components";

export const ThemeSwitch = () => {
	const { darkMode, setDarkMode } = useTheme();
	const isDark = darkMode ? "dark" : "light";

	const onSwitchClick = () => {
		const newValue = !darkMode;

		setDarkMode(newValue);
	};

	return (
		<div
			className="darkmode_switch_container flex_row"
			id={isDark}
			onClick={onSwitchClick}
		>
			<input
				type="checkbox"
				id="toggle"
				className="darkmode_toggle_checkbox"
				onClick={onSwitchClick}
			/>

			<label htmlFor="toggle" className="darkmode_toggle_label">
				<span className="darkmode_label_background"></span>
			</label>

			<Wrapper className="flex_row">
				<img src={SunIcon} alt="sun" className={`sun_icon ${isDark}`} />

				<img
					src={MoonIcon}
					alt="moon"
					className={`moon_icon ${isDark}`}
				/>
			</Wrapper>
		</div>
	);
};
