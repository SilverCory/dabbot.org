import React, { Component } from 'react'

function getTitleFromPath(pathname) {
  const name = pathname.substring(1, pathname.length) // remove / from path

  if (!name.length) {
    return "The Discord Music Bot"
  } else {
    return name.charAt(0).toUpperCase() + name.substring(1, name.length)
  }
}

class Title extends Component {
  render() {
    return (
      <title>dabBot | {getTitleFromPath(this.props.pathname)}</title>
    )
  }
}

export default Title
