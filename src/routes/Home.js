import React, { Component } from 'react'
import Title from '../components/Title'
import HomeHeader from './home/HomeHeader'
import HomeFeatures from './home/HomeFeatures'

class Home extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <div className="columns is-multiline">
          <HomeHeader />
          <HomeFeatures />
        </div>
      </div>
    )
  }
}

export default Home
