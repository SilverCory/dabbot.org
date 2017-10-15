import React, { Component } from 'react'

import HomeHeader from './home/HomeHeader'
import HomeFeatures from './home/HomeFeatures'

class Home extends Component {
  render() {
    return (
      <div className="columns is-multiline">
        <HomeHeader />
        <HomeFeatures />
      </div>
    )
  }
}

export default Home
