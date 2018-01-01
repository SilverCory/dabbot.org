import React, { Component } from 'react';
import { API, RadioState } from './API';
import { List } from './List';

class Browser extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      pageSize: 10,
      pages: 1,
      radios: [],
      state: RadioState.Valid,
    };
    this.api = new API();
  }

  componentDidMount() {
    const s = this.state;
    // don't get pages yet the API is very broken
    /*this.api.getItems(this.api.state)
    .then(r => r.json().then(v => {
      let pages = Math.ceil(v.items / this.state.pageSize);
      this.setState(prev => ({
        ...prev,
        pages
      }));
    }))
    .catch(e => console.error(e));*/

    this.api.getRadios(s.state, s.page, s.pageSize)
    .then(r => r.json().then(radios => {
      this.setState(prev => ({
        ...prev,
        radios
      }));
    }))
    .catch(e => console.error(e));
  }

  render() {
    return (
      <List radios={this.state.radios}/>
    );
  }
}

export default Browser;
