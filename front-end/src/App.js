import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Menu from './components/menu'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
