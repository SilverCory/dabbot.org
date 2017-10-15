import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/*import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './routes/Home'
import Commands from './routes/Commands'
import Radios from './routes/Radios'
import Queue from './routes/Queue'*/

import './App.css'

class Brand extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <span className="align-center">
            <h1 className="title is-1 header-text">
              <img className="header-image" src={require("./logo.png")} alt="dabBot Logo" />
              <span className="header-text-large">BOT</span>
            </h1>
          </span>
        </div>
      </div>
    )
  }
}

class NavbarItem extends Component {
  render() {
    return (
      <li className={this.props.active ? "is-active" : ""}>
        <a href={this.props.href}>{this.props.name}</a>
      </li>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <NavbarItem name="Home" href="#" active={true} />
              <NavbarItem name="Invite" href="https://dabbot.org/invite" />
              <NavbarItem name="Commands" href="#" />
              <NavbarItem name="Radios" href="#" />
              <NavbarItem name="Queue" href="#" />
              <NavbarItem name="Support" href="https://dabbot.org/support" />
              <NavbarItem name="Patreon" href="https://patreon.com/dabbot" />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <section className="hero is-dark">
        <Brand />
        <Navbar />
      </section>
    )
  }
}

class HomeHeaderTitle extends Component {
  render() {
    return (
      <h1 class="title is-2 align-center">DAB BOT</h1>
    )
  }
}

class HomeHeaderCallToAction extends Component {
  render() {
    return (
      <a class="button is-success is-large">
        Invite DAB BOT
      </a>
    )
  }
}

class HomeHeaderSubtitle extends Component {
  render() {
    return (
      <h1 class="subtitle is-2 align-center">
        High Quality Discord Music Bot
        <hr />
        <HomeHeaderCallToAction />
      </h1>
    )
  }
}

class HomeHeader extends Component {
  render() {
    return (
      <div class="column is-12">
        <HomeHeaderTitle />
        <HomeHeaderSubtitle />
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div className="columns is-multiline">
        <HomeHeader />
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Home />
        </div>
      </section>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong className="footer-em-text">DAB BOT</strong> by <a href="https://github.com/orgs/dabbotorg/people" class="has-text-success">DAB BOT Development Team</a>. The source code is licensed
              <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" class="has-text-success"> CCPL</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" class="has-text-success">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
