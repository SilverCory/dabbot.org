import React, { Component } from 'react'

const classNames = require('classnames');

class Tile extends Component {
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

class LeftColumn extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <Tile name="YouTube" icon="youtube-play" />
        <Tile name="SoundCloud" icon="soundcloud" />
      </div>
    )
  }
}

class RightColumn extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <Tile name="Twitch" icon="twitch" />
        <Tile name="Radio Stations" icon="microphone" />
      </div>
    )
  }
}

class Bottom extends Component {
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

class Features extends Component {
  render() {
    return (
      <div className="column is-12">
        <h3 className="title is-4">Featuring:</h3>
        <div className="title is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <LeftColumn />
              <RightColumn />
            </div>
            <Bottom />
          </div>
        </div>
      </div>
    )
  }
}

export default Features
