import React, { Component } from 'react'
import Title from '../components/Title'

class Commands extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <h2>Available commands:</h2>
        <ol>
          <li>help</li>
          <li>play</li>
        </ol>
      </div>
    )
  }
}

export default Commands
