import React, { Component } from 'react'

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
      <img className="image" src={require('../logo.png')} alt="dabBot Discord Music Bot Logo" />
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

export default Header
