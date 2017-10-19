import React, { Component } from 'react'
import Title from '../components/Title'
import Header from './home/Header'
import Features from './home/Features'

class Home extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <div className="columns is-multiline">
          <Header />
          <Features />
        </div>
      </div>
    )
  }
}

export default Home
