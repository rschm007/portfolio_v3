import './App.scss';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Main from "./pages/Main";
import About from './pages/About';
import Work from "./pages/Work";
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
// import Contact from "./pages/Contact";

// custom scroll hook handler
export const useScrollHandler = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(false)

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }

      console.log("scroll");
    }

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll)

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])

  return scroll

}

const App = () => {
  const scroll = useScrollHandler();

  return (
    <Router>
      <Navigation onScroll={scroll ? "scrolledDown" : ""} />

      <Route path="/home" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} onScroll={scroll ? "scrolledDown" : ""} />
      {/* <Route path="/contact" component={Contact} /> */}
    </Router>
  );
}

export default App;
