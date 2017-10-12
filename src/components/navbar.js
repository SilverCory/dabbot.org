import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav text-md-center nav-justified w-100">
            <NavbarItem href="/" name="Home" />
            <NavbarItem external href="https://dabbot.org/invite" name="Invite" />
            <NavbarItem href="/commands" name="Commands" />
            <NavbarItem href="/radios" name="Radios" />
            <NavbarItem href="/queue" name="Queue" />
            <NavbarItem external href="https://dabbot.org/support" name="Support" />
            <NavbarItem external href="https://patreon.com/dabbot" name="Patreon" />
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
        <NavbarItemLink external={this.props.external} href={this.props.href} name={this.props.name} />
      </li>
    )
  }
}

class NavbarItemLink extends Component {
  render() {
    if (this.props.external) {
      return (
        <NavbarExternalItemLink href={this.props.href} name={this.props.name} />
      )
    } else {
      return (
        <NavbarInternalItemLink href={this.props.href} name={this.props.name} />
      )
    }
  }
}

class NavbarInternalItemLink extends Component {
  render() {
    return (
      <Link className="nav-link" to={this.props.href}>{this.props.name}</Link>
    )
  }
}

class NavbarExternalItemLink extends Component {
  render() {
    return (
      <a className="nav-link" href={this.props.href}>{this.props.name}</a>
    )
  }
}

export default Navbar
