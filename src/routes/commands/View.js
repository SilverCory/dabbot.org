import React, { Component } from 'react'

class Title extends Component {
  render() {
    return (
      <h3 className="title is-5">
        {this.props.children}
      </h3>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <div className="commands-view">
        <p>{this.props.description}</p>
      </div>
    )
  }
}


class Usage extends Component {
  render() {
    const usages = this.props.usages.map((usage, index) => {
      return (
        <div className="commands-view" key={index}>
          <p>{usage.title}</p>
          <p>
            <code>
              !!!{this.props.command} {usage.usage}
            </code>
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

class Examples extends Component {
  render() {
    return (
      <div className="commands-view">
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
        <Title>{this.props.title}</Title>
        <Description description={this.props.description} />
        <hr />
        <Usage command="something" usages={this.props.usages} />
        <br />
        <Examples examples={this.props.examples} />
      </div>
    )
  }
}

export default View
