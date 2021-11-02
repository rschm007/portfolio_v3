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

const App = () => {
  return (
    <Router>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
