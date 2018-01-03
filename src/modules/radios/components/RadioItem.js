import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class RadioItem extends Component {
    static propTypes = {
        radio: PropTypes.object.isRequired,
    };

    render() {
        return (
            <li>
                <h2>{radio.name}</h2>
            </li>
        )
    }
}