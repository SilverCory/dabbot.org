import React, { Component } from 'react';

import Header from './components/header'
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import Footer from "./components/footer"

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="masthead">
          <Header />
          <Navbar />
          <Jumbotron />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App
