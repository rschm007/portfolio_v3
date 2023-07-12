import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import Stars from "./components/Animations/Stars";
import Campfire from "./components/Animations/Campfire";

import { React } from "react";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <Wrapper class="background">
        <Stars />

        <Navigation />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <div className="moon" />
        <div className="trees" />
        <Campfire />

      </Wrapper>
    </AnimatePresence>
  );
};

export default App;
