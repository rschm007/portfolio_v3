import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import {
	ContactFab,
	Navigation,
	NightMode,
	Stars,
	Wrapper,
} from "./components";
import { About, CaseStudy, Contact, Main, Services, Work } from "./pages";

const App = () => {
	return (
		// reducedMotion="user" makes every framer-motion animation (route
		// transitions, card/button entrances) honor the OS "reduce motion"
		// setting: transform/position animations are skipped, opacity is kept.
		<MotionConfig reducedMotion="user">
			<AnimatePresence>
				<Wrapper className="background">
					<Stars />

					<Navigation />

					<Routes>
						<Route path="/" element={<Main />} />
						<Route
							path="/home"
							element={<Navigate to="/" replace />}
						/>
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Work />} />
					<Route
						path="/work/:slug"
						element={<CaseStudy />}
					/>
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>

					<NightMode />

					<ContactFab />
				</Wrapper>
			</AnimatePresence>
		</MotionConfig>
	);
};

export default App;
