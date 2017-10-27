import React, { Component } from 'react'

class Item extends Component {
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
          <Item name="Something" />
          <Item name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <Item name="Something" />
          <Item name="Else" />
          <Item name="Something" />
          <Item name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <Item name="Something" />
        </ul>
      </aside>
    )
  }
}

export default Menu
