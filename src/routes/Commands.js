import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Title from '../components/Title'
import Menu from './commands/Menu'
import GettingStartedView from './commands/views/GettingStarted'
import AboutView from './commands/views/About'

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
            <Route path="/commands" exact component={GettingStartedView} />
            <Route path="/commands/about" component={AboutView} />
          </div>
        </div>
      </div>
    )
  }
}

export default Commands
