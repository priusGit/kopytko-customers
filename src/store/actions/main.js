import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const sendMessageStart = () => {
    return {
        type: actionTypes.SEND_MESSAGE_START
    };
};

export const sendMessageSuccess = () => {
    return {
        type: actionTypes.SEND_MESSAGE_SUCCESS
    };
};

export const sendMessageFail = (error) => {
    return {
        type: actionTypes.SEND_MESSAGE_FAIL,
        error: error
    };
}

export const sendMessage = (messageData) => {
    return dispatch => {
        dispatch(sendMessageStart());
        axios.post('/messages.json', messageData)
            .then(response => {
                dispatch(sendMessageSuccess());
            })
            .catch(error => {
                dispatch(sendMessageFail(error));
            });
    };
};

export const sendReservationStart = () => {

    return {
        type: actionTypes.SEND_RESERVATION_START
    };
};

export const sendReservationSuccess = () => {

    return {
        type: actionTypes.SEND_RESERVATION_SUCCESS
    };
};

export const sendReservationFail = (error) => {

    return {
        type: actionTypes.SEND_RESERVATION_FAIL,
        error: error
    };
}

export const sendReservation = (reservationData) => {
    return dispatch => {
        let link = reservationData.reservationDate;
        dispatch(sendReservationStart());
        axios.post('/reservations/' + link + '.json', reservationData)
            .then(response => {
                dispatch(sendReservationSuccess());
                dispatch(fetchReservations());
            })
            .catch(error => {
                dispatch(sendReservationFail(error));
            });
    };
};

export const fetchReservationStart = () => {

    return {
        type: actionTypes.FETCH_RESERVATION_START
    };
};

export const fetchReservationSuccess = (numberOfReservations) => {

    return {
        type: actionTypes.FETCH_RESERVATION_SUCCESS,
        numberOfReservations: numberOfReservations
    };
};

export const fetchReservationFail = (error) => {
    return {
        type: actionTypes.FETCH_RESERVATION_FAIL,
        numberOfReservations: 0,
        error: error
    };
}

export const fetchReservations = (link) => {
    return dispatch => {
        dispatch(fetchReservationStart());
        axios.get('/reservations/' + link + '.json')
            .then(res => {
                let numberOfReservations = Object.keys(res.data).length;
                dispatch(fetchReservationSuccess(numberOfReservations));
            })
            .catch(err => {
                dispatch(fetchReservationFail(err));
            });
    }
}
