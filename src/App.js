import "./App.scss";

import { Route, useLocation, Switch } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import Stars from "./components/Animations/Stars";

import { React } from "react";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const App = () => {
  // get current url
  const location = useLocation().pathname;

  console.log(location);

  // change background content depending on url
  let background, moon;
  if (location === '/work') {
    background = 'background_2';
    moon = (<div className="moon" />)

  } else {
    background = 'background_1'
  }

  return (
    <AnimatePresence>
      <Wrapper class="background">
        {moon}
        <Stars />
        <Wrapper class={background} exitOpacity={1}>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>


        </Wrapper>
      </Wrapper>
    </AnimatePresence>
  );
};

export default App;
