import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JOG-Portfolio</h1>
        </header>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/about" component={About}/>*/}
      </div>
    );
  }
}

export default App;
