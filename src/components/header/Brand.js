import React, { Component } from 'react'

class Brand extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <span className="align-center">
            <h1 className="title is-1 header-text">
              <img className="header-image" src={require("../../logo.png")} alt="dabBot Logo" />
              <span className="header-text-large"> Bot</span>
            </h1>
          </span>
        </div>
      </div>
    )
  }
}

export default Brand
