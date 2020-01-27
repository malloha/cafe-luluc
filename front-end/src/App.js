import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer.js'
import Header from './components/Header.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
