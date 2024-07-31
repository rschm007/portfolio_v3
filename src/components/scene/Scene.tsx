import { Campfire, Clouds, Stars } from "components";
import { useTheme } from "hooks";
import React from "react";

export const Scene = () => {
	const { darkMode } = useTheme();

	return (
		<>
			{darkMode && (
				<>
					<Stars />

					<div className="moon" />
				</>
			)}

			{!darkMode && (
				<>
					<Clouds />
				</>
			)}

			<Campfire />

			<div className="trees" />

			<div className="midground">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path d="M0,160L120,144C240,128,480,96,720,122.7C960,149,1200,235,1320,277.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg>
			</div>

			<div className="foreground">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path d="M0,96L120,85.3C240,75,480,53,720,42.7C960,32,1200,32,1320,32L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg>
			</div>
		</>
	);
};
