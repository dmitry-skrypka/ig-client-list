import defaultState from '../defaultState';
import {GET_CLIENTS_INFO } from './actionTypes';


function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CLIENTS_INFO: {

            return {
				...state,
				clients_info: action.payload,
				data_to_render: action.payload

            };
        }


        default: {
            return state;
        }
    }
}

export default rootReducer;
