import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ showLogo, setShowLogo] = React.useState(true);
  const [ color, setColor] = React.useState('blue');
  
  React.useEffect(() => {
    const colors = ["red", "blue", "green"];
    let index = 0;
    const interval = setInterval(() => {
      setColor(colors[((index++) % colors.length)]);  
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="App" onClick={() => {
      setShowLogo(showLogo => !showLogo);
    }}>
      <header className="App-header">
      { showLogo && <img src={logo} className="App-logo" alt="logo" /> }
        <p bgColor={color}>
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
    </div>
  );
}

export default App;
