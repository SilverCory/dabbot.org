import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './routes/Home'
import Commands from './routes/Commands'
import Radios from './routes/Radios'
import Queue from './routes/Queue'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="masthead">
            <Header />
            <Navbar />

            <Route exact path="/" component={Home}/>
            <Route path="/commands" component={Commands}/>
            <Route path="/radios" component={Radios}/>
            <Route path="/queue" component={Queue}/>

            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
