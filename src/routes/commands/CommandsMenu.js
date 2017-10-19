import React, { Component } from 'react'

class CommandsMenuItem extends Component {
  render() {
    return (
      <li><a>{this.props.name}</a></li>
    )
  }
}

class CommandsMenu extends Component {
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <CommandsMenuItem name="Something" />
          <CommandsMenuItem name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <CommandsMenuItem name="Something" />
          <CommandsMenuItem name="Else" />
          <CommandsMenuItem name="Something" />
          <CommandsMenuItem name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <CommandsMenuItem name="Something" />
        </ul>
      </aside>
    )
  }
}

export default CommandsMenu
