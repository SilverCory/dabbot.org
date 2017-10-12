import React, { Component } from 'react';

import './App.css'

class App extends Component {
  render() {
    return (
      <Container />
    );
  }
}

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="masthead">
          <Navbar />
          <Jumbotron />
        </div>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar nav-expand-md navbar-light bg-light rounded mb-3">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav text-md-center nav-justified w-100">
            <NavbarItem />
            <NavbarItem />
            <NavbarItem />
            <NavbarItem />
            <NavbarItem />
            <NavbarItem />
          </ul>
        </div>
      </nav>
    )
  }
}

class NavbarItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">
          Home
        </a>
      </li>
    )
  }
}

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <JumbotronHeader />
        <JumbotronLead />
        <JumbotronButton />
      </div>
    )
  }
}

class JumbotronHeader extends Component {
  render() {
    return (
      <h1>dabBot - the music bot that makes you dab</h1>
    )
  }
}

class JumbotronLead extends Component {
  render() {
    return (
      <p className="lead">
        A Discord music bot providing high quality music from YouTube, Radio Stations, Soundcloud, Twitch, Discord.FM and much more.
      </p>
    )
  }
}

class JumbotronButton extends Component {
  render() {
    return (
      <p>
        <a className="btn btn-lg btn-success" href="https://dabbot.org/invite" role="button">
          Invite dabBot
        </a>
      </p>
    )
  }
}

export default App;
