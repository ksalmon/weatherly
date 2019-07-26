import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainHeader from './components/Header/MainHeader'
import MainFooter from './components/Footer/MainFooter'
import LandingPage from './scenes/LandingPage'
import LegalPage from './scenes/LegalPage'
import './App.css';

class App extends Component {
  render() {
  
    return (
      <Router>
        <MainHeader/>

        <Route exact path="/" component={LandingPage} />
        <Route path="/legal" component={LegalPage} />

        <MainFooter/>

      </Router>
    );
  }
}

export default App;
