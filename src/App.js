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

const classNames = require('classnames');

class Brand extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <span className="align-center">
            <h1 className="title is-1 header-text">
              <img className="header-image" src={require("./logo.png")} alt="dabBot Logo" />
              <span className="header-text-large"> Bot</span>
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
          <div className="container">
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
      <h1 className="title is-2 align-center">DAB Bot</h1>
    )
  }
}

class HomeHeaderCallToAction extends Component {
  render() {
    return (
      <a className="button is-success is-large">
        Invite DAB Bot
      </a>
    )
  }
}

class HomeHeaderSubtitle extends Component {
  render() {
    return (
      <h1 className="subtitle is-2 align-center">
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
      <div className="column is-12">
        <HomeHeaderTitle />
        <HomeHeaderSubtitle />
      </div>
    )
  }
}

class HomeFeaturesTile extends Component {
  render() {
    const faName = "fa-" + this.props.icon;
    const iconName = "icon-" + this.props.icon;
    const classes = classNames("fa", faName, iconName);

    return (
      <article className="title is-child notification is-dark">
        <p className="title">
          <i className={classes} aria-hidden="true"></i>
          {" " + this.props.name}
        </p>
      </article>
    )
  }
}

class HomeFeaturesLeftColumn extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <HomeFeaturesTile name="YouTube" icon="youtube-play" />
        <HomeFeaturesTile name="SoundCloud" icon="soundcloud" />
      </div>
    )
  }
}

class HomeFeaturesRightColumn extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <HomeFeaturesTile name="Twitch" icon="twitch" />
        <HomeFeaturesTile name="Radio Stations" icon="microphone" />
      </div>
    )
  }
}

class HomeFeaturesBottom extends Component {
  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title">
            <i className="fa fa-list" aria-hidden="true"></i> Much More
          </p>
          <p className="subtitle">
            DAB Bot is always implementing new sources for music.
          </p>
        </article>
      </div>
    )
  }
}

class HomeFeatures extends Component {
  render() {
    return (
      <div className="column is-12">
        <h3 className="title is-4">Featuring:</h3>
        <div className="title is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <HomeFeaturesLeftColumn />
              <HomeFeaturesRightColumn />
            </div>
            <HomeFeaturesBottom />
          </div>
        </div>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div className="columns is-multiline">
        <HomeHeader />
        <HomeFeatures />
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
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong className="footer-em-text">DAB Bot</strong> by <a href="https://github.com/orgs/dabbotorg/people" className="has-text-success">DAB Bot Development Team</a>. The source code is licensed
              <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" className="has-text-success"> CCPL</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="has-text-success">CC BY NC SA 4.0</a>.
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
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
