import React, { Component } from 'react'

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
        {this.props.examples}
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
        <CommandsViewExamples examples={this.props.examples} />
      </div>
    )
  }
}

export default CommandsView
