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
      <ul className="footer-list">
        <li>&copy; {new Date().getFullYear()} dabbot.org</li>
        <li>&middot;</li>
        <li><a href="#">terms</a></li>
        <li>&middot;</li>
        <li><a href="#">support</a></li>
      </ul>
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
