import React, { Component } from 'react'

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

export default Jumbotron
