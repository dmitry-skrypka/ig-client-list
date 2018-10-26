import {
	GET_CLIENTS_INFO,
} from './actionTypes';


export function getClientsInfo(payload) {
    return {
        type: GET_CLIENTS_INFO,
        payload
    };
}

