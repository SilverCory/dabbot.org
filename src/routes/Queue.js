import React, { Component } from 'react'
import Title from '../components/Title'

class Queue extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <h2>Song queue</h2>
        <ol>
          <li>NCS My Heart</li>
          <li>Migos - Dab</li>
        </ol>
      </div>
    )
  }
}

export default Queue

