import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarInternalItemLink extends Component {
  render() {
    return (
      <Link to={this.props.href}>{this.props.name}</Link>
    )
  }
}

class NavbarExternalItemLink extends Component {
  render() {
    return (
      <a href={this.props.href}>{this.props.name}</a>
    )
  }
}

class NavbarItemLink extends Component {
  render() {
    if (this.props.external) {
      return (<NavbarExternalItemLink name={this.props.name} href={this.props.href} />)
    } else {
      return (<NavbarInternalItemLink name={this.props.name} href={this.props.href} />)
    }
  }
}

class NavbarItem extends Component {
  render() {
    return (
      <li className={this.props.active ? "is-active" : ""}>
        <NavbarItemLink external={this.props.external} name={this.props.name} href={this.props.href} />
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
              <NavbarItem external name="Invite" href="https://dabbot.org/invite" />
              <NavbarItem name="Commands" href="/commands" />
              <NavbarItem name="Radios" href="/radios" />
              <NavbarItem name="Queues" href="/queues" />
              <NavbarItem external name="Support" href="https://dabbot.org/support" />
              <NavbarItem external name="Patreon" href="https://patreon.com/dabbot" />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
