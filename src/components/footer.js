import React, { Component } from 'react'

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

export default Footer
