import {
  GET_CLIENTS_INFO,
  SELECTED_CLIENT_UPDATE,
  SEARCH_UPDATE
} from "./actionTypes";

export function getClientsInfo(payload) {
  return {
    type: GET_CLIENTS_INFO,
    payload
  };
}
export function selectedClientUpdate(payload) {
  return {
    type: SELECTED_CLIENT_UPDATE,
    payload
  };
}
export function searchUpdate(payload) {
  return {
    type: SEARCH_UPDATE,
    payload
  };
}
