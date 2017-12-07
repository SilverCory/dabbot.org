import React, { Component } from 'react'
import Title from '../components/Title'

class Radios extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <h2>Radio station browser coming soon...</h2>
      </div>
    )
  }
}

export default Radios
