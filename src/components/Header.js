import React, { Component } from 'react'

import Brand from './header/Brand'
import Navbar from './header/Navbar'

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
