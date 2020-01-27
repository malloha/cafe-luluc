import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/main.js';
import AboutUs from './components/aboutUs';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <Main /> */}
        <AboutUs />
      </div>
    );
  }
}

export default App;
