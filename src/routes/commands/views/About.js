import React, { Component } from 'react'
import * as view from '../View'

class AboutView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="About">
          <view.Description>Here's a nice long description of what the command does</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Finding a minecraft character">
            <code>{"!!!something <character name> [blocks]"}</code>
          </view.Usage>
          <view.Usage title="Finding a minecraft character">
            <code>{"!!!something <character name> <limit> <dabs>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default AboutView
