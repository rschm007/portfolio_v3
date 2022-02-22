import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Work from "./pages/Work";
import Navigation from "./components/Navigation";
import { React } from "react";
// import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Navigation />

        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Router>
    </AnimatePresence>
  );
};

export default App;
