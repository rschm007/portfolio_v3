import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Main from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Main} />
    </Router>
  );
}

export default App;
