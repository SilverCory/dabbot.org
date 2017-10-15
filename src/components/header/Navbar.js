import React, { Component } from 'react'

class NavbarItem extends Component {
  render() {
    return (
      <li className={this.props.active ? "is-active" : ""}>
        <a href={this.props.href}>{this.props.name}</a>
      </li>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <NavbarItem name="Home" href="/" active={true} />
              <NavbarItem name="Invite" href="https://dabbot.org/invite" />
              <NavbarItem name="Commands" href="/commands" />
              <NavbarItem name="Radios" href="/radios" />
              <NavbarItem name="Queues" href="/queues" />
              <NavbarItem name="Support" href="https://dabbot.org/support" />
              <NavbarItem name="Patreon" href="https://patreon.com/dabbot" />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
