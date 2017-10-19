import React, { Component } from 'react'

class MenuItem extends Component {
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
          <MenuItem name="Something" />
          <MenuItem name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <MenuItem name="Something" />
          <MenuItem name="Else" />
          <MenuItem name="Something" />
          <MenuItem name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <MenuItem name="Something" />
        </ul>
      </aside>
    )
  }
}

export default Menu
