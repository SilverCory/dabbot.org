import React, { Component } from 'react'

class ViewTitle extends Component {
  render() {
    return (
      <h3 className="title is-5">{this.props.title}</h3>
    )
  }
}

class ViewDescription extends Component {
  render() {
    return (
      <p>{this.props.description}</p>
    )
  }
}


class ViewUsage extends Component {
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

class ViewExamples extends Component {
  render() {
    return (
      <div>
        <h4 className="title is-6">Examples</h4>
        {this.props.examples}
      </div>
    )
  }
}

class View extends Component {
  render() {
    return (
      <div>
        <ViewTitle title={this.props.title} />
        <ViewDescription description={this.props.description} />
        <hr />
        <ViewUsage command="something" usages={this.props.usages} />
        <br />
        <ViewExamples examples={this.props.examples} />
      </div>
    )
  }
}

export default View
