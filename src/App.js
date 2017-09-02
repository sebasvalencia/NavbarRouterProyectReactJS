import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>

    );
  }
}

export default App;
