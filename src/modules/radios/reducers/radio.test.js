import reducer from './radio';

import { RADIO_FETCH_SUCCEED, RADIO_FETCH_REQUESTED, RADIO_FETCH_FAILED } from '../actions/radio';

const state = {
    results: [],
    loading: false,
    error: null
};

const fetchAction = { type: RADIO_FETCH_REQUESTED };
const succeedAction = { type: RADIO_FETCH_SUCCEED };
const failAction = { type: RADIO_FETCH_FAILED };

describe('when calling the radio reducer', () => {
    test('it should return the correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(state);
    });

    test('it should update the loading indicator', () => {
       expect(reducer(state, fetchAction).loading).toEqual(true);
       expect(reducer(state, succeedAction).loading).toEqual(false);
       expect(reducer(state, failAction).loading).toEqual(false);
    });

    test('it should update the error message', () => {
        expect(reducer(state, fetchAction).error).toEqual(null);
        expect(reducer(state, failAction).error).toEqual(failAction.error);
    })
})