import React, { Component } from 'react';

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

class Header extends Component {
  render() {
    return (
      <div className="header">
        <HeaderText text="dab" bold={false} />
        <HeaderImage />
        <HeaderText text="Bot" bold={true} />
      </div>
    )
  }
}

class HeaderImage extends Component {
  render() {
    return (
      <img className="image" src={require('./logo.png')} alt="dabBot Discord Music Bot Logo" />
    )
  }
}

class HeaderText extends Component {
  render() {
    return (
      <p className="title">
        <HeaderTextContent text={this.props.text} bold={this.props.bold} />
      </p>
    )
  }
}

class HeaderTextContent extends Component {
  render() {
    if (this.props.bold) {
      return (
        <strong>{this.props.text}</strong>
      )
    } else {
      return (
        this.props.text
      )
    }
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav text-md-center nav-justified w-100">
            <NavbarItem href="#" name="Home" />
            <NavbarItem href="#" name="Invite" />
            <NavbarItem href="#" name="Commands" />
            <NavbarItem href="#" name="Radios" />
            <NavbarItem href="#" name="Queue" />
            <NavbarItem href="https://dabbot.org/support" name="Support" />
            <NavbarItem href="https://patreon.com/dabbot" name="Patreon" />
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
        <a className="nav-link" href={this.props.href}>{this.props.name}</a>
      </li>
    )
  }
}

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
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

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="float-right">
          <FooterRight />
        </div>
        <FooterLeft />
      </footer>
    )
  }
}

class FooterLeft extends Component {
  render() {
    return (
      <p>
        &copy; 2017 dabbot.org 
        &middot;
        <a href="#">terms</a>
        &middot;
        <a href="#">support</a>
      </p>
    )
  }
}

class FooterRight extends Component {
  render() {
    return (
      <p>
        <a href="#">
          Back to top
        </a>
      </p>
    )
  }
}

export default App;
