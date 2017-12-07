import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <p style={{ display: "inline-block", padding: "0 1rem 0 1rem", fontSize: "2rem" }}>
        <a href={this.props.href} style={{ color: "#f5f5f5" }} >
          <span className="icon">
            <i className={"fa " + this.props.icon}></i>
          </span>
        </a>
      </p>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div>
              <Item href="https://github.com/dabbotorg" icon="fa-github" />
              <Item href="https://twitter.com/dabbbot" icon="fa-twitter" />
            </div>
            <p>Copyright &copy; 2017 dabbot.org | Please help to keep this project alive on <a href="/upgrades">Patreon</a>.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
