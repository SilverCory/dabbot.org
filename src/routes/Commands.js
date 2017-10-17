import React, { Component } from 'react'
import Title from '../components/Title'

class CommandsMenuItem extends Component {
  render() {
    return (
      <li><a>{this.props.name}</a></li>
    )
  }
}

class CommandsMenu extends Component {
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <CommandsMenuItem name="Something" />
          <CommandsMenuItem name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <CommandsMenuItem name="Something" />
          <CommandsMenuItem name="Else" />
          <CommandsMenuItem name="Something" />
          <CommandsMenuItem name="Else" />
        </ul>
        <p className="menu-label">
          Some category
        </p>
        <ul className="menu-list">
          <CommandsMenuItem name="Something" />
        </ul>
      </aside>
    )
  }
}

class CommandsViewTitle extends Component {
  render() {
    return (
      <h3 className="title is-5">{this.props.title}</h3>
    )
  }
}

class CommandsViewDescription extends Component {
  render() {
    return (
      <p>{this.props.description}</p>
    )
  }
}


class CommandsViewUsage extends Component {
  render() {
    const usages = this.props.usages.map((usage, index) => {
      return (
        <div key={index}>
          <p>{usage.title}</p>
          <p style={{ fontFamily: "monospace" }}>
            !!!{this.props.command} {usage.usage}
          </p>
          <br />
        </div>
      )
    })

    return (
      <div>
        <h4 className="title is-6">Usage</h4>
        <div>
          {usages}
        </div>
      </div>
    )
  }
}

class CommandsViewExamples extends Component {
  render() {
    return (
      <div>
        <h4 className="title is-6">Examples</h4>
        <p>ya lol this is a big fuck-off example</p>
      </div>
    )
  }
}

class CommandsView extends Component {
  render() {
    return (
      <div>
        <CommandsViewTitle title={this.props.title} />
        <CommandsViewDescription description={this.props.description} />
        <hr />
        <CommandsViewUsage command="something" usages={this.props.usages} />
        <br />
        <CommandsViewExamples />
      </div>
    )
  }
}

class CommandsViewIndex extends Component {
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
}

class Commands extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <div className="columns">
          <div className="column is-one-quarter">
            <CommandsMenu />
          </div>
          <div className="column">
            <CommandsView
              title="Something"
              description="Here's a nice long description of what the command does"
              usages={[{
                title: "Creating a new minecraft map",
                usage: "<else> [lol]"
              }, {
                title: "Creates a new minecraft map and then giraffes it!!!!!",
                usage: "<else> <lol> <tnt[, meme]>"
              }]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Commands
