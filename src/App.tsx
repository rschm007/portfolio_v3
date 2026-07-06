import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
	ContactFab,
	Navigation,
	NightMode,
	Stars,
	Wrapper,
} from "./components";
import { About, Contact, Main, Work } from "./pages";

const App = () => {
	return (
		<AnimatePresence>
			<Wrapper className="background">
				<Stars />

				<Navigation />

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/home" element={<Navigate to="/" replace />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<NightMode />

				<ContactFab />
			</Wrapper>
		</AnimatePresence>
	);
};

export default App;
