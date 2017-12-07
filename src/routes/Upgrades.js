import React, { Component } from 'react'
import Title from '../components/Title'

class Upgrades extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <h2>Upgrades</h2>
      </div>
    )
  }
}

export default Upgrades
