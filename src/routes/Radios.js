import React, { Component } from 'react'
import Title from '../components/Title'

class Radios extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <h2>Radio Stations:</h2>
        <ol>
          <li>Minecraft Radio</li>
          <li>Christmas FM</li>
        </ol>
      </div>
    )
  }
}

export default Radios
