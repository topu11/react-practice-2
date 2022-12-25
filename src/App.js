import logo from './logo.svg';
import './App.css';
import ClickEventPractice from './classComponents/clickEvent';
import FunctionalComponet from './functionalComponents/functionalComponent';
import TestFunstionState from './functionalBase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ClickEventPractice />
      <FunctionalComponet />
      <TestFunstionState />
    </div>
  );
}

export default App;
