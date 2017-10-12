import React, { Component } from 'react'
import Title from '../components/Title'
import Jumbotron from '../components/Jumbotron'

class Home extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <Jumbotron />
      </div>
    )
  }
}

export default Home
