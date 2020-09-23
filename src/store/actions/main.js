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
        console.log(messageData);
        axios.post('/messages.json', messageData)
            .then(response => {
                console.log("success");
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
        dispatch(sendMessageStart());
        console.log(reservationData);
        axios.post('/reservations.json', reservationData)
            .then(response => {
                console.log("success");
                dispatch(sendMessageSuccess());
            })
            .catch(error => {
                dispatch(sendMessageFail(error));
            });
    };
};

export const fetchReservationStart = () => {
    return {
        type: actionTypes.SEND_RESERVATION_START
    };
};

export const fetchReservationSuccess = () => {
    return {
        type: actionTypes.SEND_RESERVATION_SUCCESS
    };
};

export const fetchReservationFail = (error) => {
    return {
        type: actionTypes.SEND_RESERVATION_FAIL,
        error: error
    };
}

export const fetchReservations = () => {
    return dispatch => {
        dispatch(fetchReservationStart());
        axios.get('/reservations.json')
            .then(res => {
                let numberOfReservations;
                for (let key in res.data) {
                    numberOfReservations++;
                }
                dispatch(fetchReservationSuccess(numberOfReservations));
            })
            .catch(err => {
                dispatch(fetchReservationFail(err));
            });
    }
}

