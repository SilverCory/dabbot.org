import React, { Component } from 'react'

export class Usage extends Component {
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

export class UsageList extends Component {
  render() {
    return (
      <div className="commands-view">
        <h4 className="title is-6">Usage</h4>
        <div className="columns is-multiline">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export class ExampleList extends Component {
  render() {
    return (
      <div className="commands-view">
        <h4 className="title is-6">Examples</h4>
        {this.props.children}
      </div>
    )
  }
}

export class Description extends Component {
  render() {
    return (
      <div className="commands-view">
        {this.props.children}
      </div>
    )
  }
}

export class Header extends Component {
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

export class Command extends Component {
  render() {
    return (
      <div className="command-view">
        {this.props.children}
      </div>
    )
  }
}
