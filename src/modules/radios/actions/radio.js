export const RADIO_FETCH_SUCCEED = 'radio/FETCH_SUCCEED';
export const RADIO_FETCH_REQUESTED = 'radio/FETCH_REQUEST';
export const RADIO_FETCH_FAILED = 'radio/FETCH_FAIL';

export const fetchAction = () => ({ type: RADIO_FETCH_REQUESTED });
export const fetchFailed = (e) => ({ type: RADIO_FETCH_FAILED, e });