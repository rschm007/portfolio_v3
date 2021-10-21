import './App.scss';
import Campfire from './components/Animations/Campfire';
import Header from "./components/Header";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper class="background">
        <Header tag="h1" content="Hi! My name is Robert Schmahl" class="header_main__hero" />
        
        <Wrapper class="campfire">
          <Campfire />
        </Wrapper>
      </Wrapper> 
    </div>
  );
}

export default App;
