import logo from './logo.svg';
import './App.css';

function App() {
  console.log("well");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my portfolio website! <code>Aarmin</code>.
        </p>
        <p>I will work on this further!</p>
        <a className="App-link" href="https://www.youtube.com/channel/UCBvKcxR39NQ9J61MFZSgw2Q" target="_blank" rel="noopener noreferrer">My youtube channel</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
