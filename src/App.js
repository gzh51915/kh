import React from 'react';
import { HashRouter, BrowserRouter, withRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
// import Reg from './pages/Reg';
// import Login from './pages/Login';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Home/>
      {/* <Reg/>
      <Login/> */}
      
    </div>
   
  );
}
// App = withRouter(App);

export default App;
