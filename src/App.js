import './App.scss';
import Header from "./components/Header";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper class="background">
        <Header content="My name is Robert Schmahl" />
      </Wrapper> 
    </div>
  );
}

export default App;
