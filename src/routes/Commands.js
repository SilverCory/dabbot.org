import React, { Component } from 'react'
import Title from '../components/Title'
import Menu from './commands/Menu'
import View from './commands/View'

/*class ViewIndex extends Component {
  render() {
    return (
      <div>
        <CommandsViewTitle title="How to get started using dabBot!" />
        <p>
          Well you know you gotta dab here dab there my bro
        </p>
      </div>
    )
  }
}*/

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
            <View
              title="Something"
              description="Here's a nice long description of what the command does"
              usages={[
                {
                  title: "Creating a new minecraft map",
                  usage: "<else> [lol]"
                }, {
                  title: "Creates a new minecraft map and then giraffes it!!!!!",
                  usage: "<else> <lol> <tnt[, meme]>"
                }
              ]}
              examples={<p>Ya lol this is a really cool example!</p>}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Commands
