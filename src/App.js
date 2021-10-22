import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Main from "./pages/Main";

import Campfire from './components/Animations/Campfire';
import Header from "./components/Header";
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <Router>
      <Route path="/" component={Main} />
    </Router>
  );
}

export default App;
