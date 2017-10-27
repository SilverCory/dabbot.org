import React, { Component } from 'react'
import Title from '../components/Title'
import Menu from './commands/Menu'
import SomethingView from './commands/View'

class Commands extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <div className="columns">
          <div className="column is-one-quarter">
            <Menu />
          </div>
          <div className="column">
            <SomethingView />
          </div>
        </div>
      </div>
    )
  }
}

export default Commands
