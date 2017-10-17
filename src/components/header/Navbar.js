import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavbarInternalItemLink extends Component {
  render() {
    return (
      <li>
        <NavLink to={this.props.href} exact activeStyle={{
          backgroundColor: '#2B2B2B',
          borderColor: '#2B2B2B',
          color: 'white',
        }} >
          {this.props.name}
        </NavLink>
      </li>
    )
  }
}

class NavbarExternalItemLink extends Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.name}</a>
      </li>
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
      <NavbarItemLink external={this.props.external} name={this.props.name} href={this.props.href} />
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
              <NavbarItem name="Home" href="/" />
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
