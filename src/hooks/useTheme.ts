import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkModeAtom = atomWithStorage("darkMode", true);

export const useTheme = () => {
	const [darkMode, setDarkMode] = useAtom(darkModeAtom);

	return {
		darkMode,
		setDarkMode,
	};
};
