import React, { Component } from 'react'

import HomeHeader from './HomeHeader'
import HomeFeatures from './HomeFeatures'

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
