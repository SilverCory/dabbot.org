import React, { Component } from 'react'

import Brand from './Brand'
import Navbar from './Navbar'

class Header extends Component {
  render() {
    return (
      <section className="hero is-dark">
        <Brand />
        <Navbar />
      </section>
    )
  }
}

export default Header
