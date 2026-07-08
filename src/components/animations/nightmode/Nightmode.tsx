import { Campfire } from "./campfire";

export const NightMode = () => {
	return (
		<>
			<div className="moon" aria-hidden="true" />
			<div className="trees" aria-hidden="true" />

			<Campfire />
		</>
	);
};
