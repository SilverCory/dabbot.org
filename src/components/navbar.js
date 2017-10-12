import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav text-md-center nav-justified w-100">
            <NavbarItem href="#" name="Home" />
            <NavbarItem href="#" name="Invite" />
            <NavbarItem href="#" name="Commands" />
            <NavbarItem href="#" name="Radios" />
            <NavbarItem href="#" name="Queue" />
            <NavbarItem href="https://dabbot.org/support" name="Support" />
            <NavbarItem href="https://patreon.com/dabbot" name="Patreon" />
          </ul>
        </div>
      </nav>
    )
  }
}

class NavbarItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href={this.props.href}>{this.props.name}</a>
      </li>
    )
  }
}

export default Navbar
