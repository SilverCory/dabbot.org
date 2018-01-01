import React, { Component } from 'react';

export class List extends Component {
  render() {
    const rows = this.props.radios.map(radio => {
      return (
        <tr>
          <td>{radio.id}</td>
          <td>{radio.name}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        {rows}
      </table>
    );
  }
}
