import React, { Component } from 'react'

class HomeHeaderSubtitle extends Component {
  render() {
    return (
      <h1 className="subtitle is-2 align-center">
        High Quality Discord Music Bot
        <hr />
        <a className="button is-success is-large">
          Invite DAB Bot
        </a>
      </h1>
    )
  }
}

class HomeHeader extends Component {
  render() {
    return (
      <div className="column is-12">
        <h1 className="title is-2 align-center">DAB Bot</h1>
        <HomeHeaderSubtitle />
      </div>
    )
  }
}

export default HomeHeader
