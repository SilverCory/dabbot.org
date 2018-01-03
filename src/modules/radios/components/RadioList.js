import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RadioItem from './RadioItem';

export default class RadioList extends Component {
    static propTypes = {
        radios: PropTypes.array.isRequired,
    };

    render() {
        if(this.props.radios.length !== 0) {
            return (
                <ul className="radios-list">
                {this.props.radios.map(radio => {
                    <RadioItem key={radio.id} radio={radio} />
                })}
                </ul>
            )
        }
    }
}