import defaultState from '../defaultState';
import {GET_CLIENTS_INFO } from './actionTypes';


function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CLIENTS_INFO: {

            return {


            };
        }


        default: {
            return state;
        }
    }
}

export default rootReducer;
