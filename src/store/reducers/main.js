import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    numberOfReservations: "",
    orderedItems: [
    ],
    fullPrice: 0,
    windowWidth: undefined,
    language: "pl"
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
    return updateObject(state, { loading: false, numberOfReservations: action.numberOfReservations });
};
const addItem = (state, action) => {
    let newItem = { item: action.item, price: action.price,amount:1 },found=false;
    const newPrice = Number(action.price) + state.fullPrice;
    const updatedOrderedItems = state.orderedItems.map(obj=>{
        if(obj.item===action.item){
            obj.amount=obj.amount+1;
            found=true;
            return obj; 
        }
        return obj;
    });
    if(found){
        return updateObject(state, {
            orderedItems: updatedOrderedItems,
            fullPrice: newPrice
        });
    }
    else{
        return updateObject(state, {
            orderedItems: state.orderedItems.concat(newItem),
            fullPrice: newPrice
        });
    }
    // while(i<state.orderedItems.length)
    // {
    //     if(state.orderedItems[i].item === action.item)
    //     {
    //         if(state.orderedItems[i].amount>=1)
    //         {
    //             let newamount = state.orderedItems[i].amount+1;

    //             // return updateObject(state, {
    //             //     orderedItems: {...state.orderedItems,...state.orderedItems[i].amount},
    //             //     fullPrice: newPrice
    //             // });
    //             newItem = { item: action.item, price: action.price,amount:newamount};
    //             console.log(newItem);
    //             return update(state, { 
    //                 orderedItems: { 
    //                     [i]: {
    //                         amount:{
    //                             $set:newamount
    //                         }
    //                   }
    //                 },fullPrice: newPrice
    //               });
    //         }
    //     }
    //     i++;
    // }
    // console.log("hello there");
    // return updateObject(state, {
    //     orderedItems: state.orderedItems.concat(newItem),
    //     fullPrice: newPrice
    // });
};

const screenResize = (state, action) => {
    const newWidth = action.width;
    console.log(newWidth);
    return updateObject(state, {
        windowWidth: newWidth
    });
};

const deleteItem = (state, action) => {
    let newState = [...state.orderedItems];
    const newPrice = state.fullPrice - Number(action.price);
    newState.splice(action.item, 1);
    return {
        ...state, orderedItems: newState, fullPrice: newPrice
    };
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
        case actionTypes.ADD_ITEM: return addItem(state, action);
        case actionTypes.DELETE_ITEM: return deleteItem(state, action);
        case actionTypes.SCREEN_RESIZE: return screenResize(state, action);
        default: return state;
    }
};

export default reducer;