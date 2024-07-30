import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigation, PageWrapper, Scene } from "./components";
import { About, Contact, Main, Work } from "./pages";
import { useTheme } from "hooks";

const App = () => {
	const { darkMode } = useTheme();
	const theme = darkMode ? "dark" : "light";

	return (
		<AnimatePresence>
			<PageWrapper className={`background flex_col ${theme}`}>
				<Navigation />

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/home" element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<Scene />
			</PageWrapper>
		</AnimatePresence>
	);
};

export default App;
