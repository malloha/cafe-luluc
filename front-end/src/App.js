import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Gallery from './components/Gallery.js'
import Visit from './components/Visit.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <Visit />
        <Footer />
      </div>
    );
  }
}

export default App;
