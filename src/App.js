import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Main from "./pages/Main";
import About from './pages/About';
import Work from "./pages/Work";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      {/* <Route path="/contact" component={Contact} /> */}
    </Router>
  );
}

export default App;
