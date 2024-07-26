import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigation, NightMode, Stars, Wrapper } from "./components";
import { About, Contact, Main, Work } from "./pages";

const App = () => {
	return (
		<AnimatePresence>
			<Wrapper className="background">
				<Stars />

				<Navigation />

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/home" element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<NightMode />
			</Wrapper>
		</AnimatePresence>
	);
};

export default App;
