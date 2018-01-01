import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Title from '../components/Title';
import Browser from './radios/Browser';

class Radios extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />
        <div>
          <Route pathname="/radios" exact component={Browser} />
        </div>
      </div>
    )
  }
}

export default Radios
