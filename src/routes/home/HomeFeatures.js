import React, { Component } from 'react'

const classNames = require('classnames');

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

export default HomeFeatures
