import logo from './logo.svg';
import './App.css';
import Home from './screens/Home/HomePage'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Home/>
      {/* <BrowserRouter>
          <Routes>
            <Route exact path="/"  component={Home} />
          </Routes>
        </BrowserRouter> */}
     {/* hiii */}
    </div>
  );
}

export default App;
