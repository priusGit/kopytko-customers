import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    numberOfReservations: 0
};

const sendMessageStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const sendMessageSuccess = (state, action) => {
    return updateObject(state, { loading: false });
};

const sendMessageFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const sendReservationStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const sendReservationSuccess = (state, action) => {
    return updateObject(state, { loading: false });
};

const sendReservationFail = (state, action) => {
    return updateObject(state, { loading: false });
};
const fetchReservationStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchReservationSuccess = (state, action) => {
    return updateObject(state, { loading: false, numberOfReservations: action.numberOfReservations });
};

const fetchReservationFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_MESSAGE_START: return sendMessageStart(state, action);
        case actionTypes.SEND_MESSAGE_SUCCESS: return sendMessageSuccess(state, action);
        case actionTypes.SEND_MESSAGE_FAIL: return sendMessageFail(state, action);
        case actionTypes.SEND_RESERVATION_START: return sendReservationStart(state, action);
        case actionTypes.SEND_RESERVATION_SUCCESS: return sendReservationSuccess(state, action);
        case actionTypes.SEND_RESERVATION_FAIL: return sendReservationFail(state, action);
        case actionTypes.FETCH_RESERVATION_START: return fetchReservationStart(state, action);
        case actionTypes.FETCH_RESERVATION_SUCCESS: return fetchReservationSuccess(state, action);
        case actionTypes.FETCH_RESERVATION_FAIL: return fetchReservationFail(state, action);
        default: return state;
    }
};

export default reducer;