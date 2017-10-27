import React, { Component } from 'react'

class Usage extends Component {
  render() {
    return (
      <div className="column is-half-tablet is-one-third-fullhd">
        <p>{this.props.title}</p>
        <p>
          {this.props.children}
        </p>
        <br />
      </div>
    )
  }
}

class UsageList extends Component {
  render() {
    return (
      <div className="commands-view">
        <h4 className="title is-6">Usage</h4>
        <div className="columns is-multiline">
          {this.props.children}
        </div>
        <br />
      </div>
    )
  }
}

class ExampleList extends Component {
  render() {
    return (
      <div className="commands-view">
        <h4 className="title is-6">Examples</h4>
        {this.props.children}
      </div>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <div className="commands-view">
        {this.props.children}
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h3 className="title is-5">
          {this.props.command}
        </h3>
        <p>{this.props.children}</p>
        <hr />
      </div>
    )
  }
}

class Command extends Component {
  render() {
    return (
      <div className="command-view">
        {this.props.children}
      </div>
    )
  }
}

class SomethingView extends Component {
  render() {
    return (
      <Command>
        <Header command="Something">
          <Description>Here's a nice long description of what the command does</Description>
        </Header>
        <UsageList>
          <Usage title="Finding a minecraft character">
            <code>{"!!!something <character name> [blocks]"}</code>
          </Usage>
          <Usage title="Finding a minecraft character">
            <code>{"!!!something <character name> <limit> <dabs>"}</code>
          </Usage>
        </UsageList>
        <ExampleList>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
        </ExampleList>
      </Command>
    )
  }
}

export default SomethingView
