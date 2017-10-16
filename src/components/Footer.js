import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong className="footer-em-text">DAB Bot</strong> by <a href="https://github.com/orgs/dabbotorg/people" className="has-text-success">DAB Bot Development Team</a>.
              This website's content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="has-text-success">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer