import React, { Component } from 'react';
import connect from 'react-redux';

import PropTypes from 'prop-types';

import RadioList from '../components/RadioList';

export class Radio extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        error: PropTypes.string,
    };

    render() {
        return (
            <div>
                <RadioList />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        loading: isLoading(state),
        results: getResults(state),
        error: getError(state),
    }),
    (dispatch) => ({
        fetchRadios: () => dispatch(fetchAction()),
    }),
)(Radio);