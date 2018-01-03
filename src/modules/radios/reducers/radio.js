import { combineReducers } from 'redux';

import { RADIO_FETCH_SUCCEED, RADIO_FETCH_REQUESTED, RADIO_FETCH_FAILED } from '../actions/radio';

function resultReducer(state = [], action) {
    switch (action.type) {
        case RADIO_FETCH_SUCCEED: return action.results;
        default: return state;
    }
}

function errorReducer(state = null, action) {
    switch (action.type) {
        case RADIO_FETCH_REQUESTED: return null;
        case RADIO_FETCH_FAILED: return action.error;
        default: return state;
    }
}

function loadingReducer(state = false, action) {
    switch (action.type) {
        case RADIO_FETCH_REQUESTED: return true;
        case RADIO_FETCH_SUCCEED: return false;
        case RADIO_FETCH_FAILED: return false;
        default: return state;
    }
}

export default combineReducers({
    results: resultReducer,
    error: errorReducer,
    loading: loadingReducer,
})

