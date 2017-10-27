import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <li><a>{this.props.name}</a></li>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <Menu name="Something" />
          <Menu name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <Menu name="Something" />
          <Menu name="Else" />
          <Menu name="Something" />
          <Menu name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <Menu name="Something" />
        </ul>
      </aside>
    )
  }
}

export default Menu
