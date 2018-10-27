import {
  GET_CLIENTS_INFO,
  SELECTED_CLIENT_UPDATE,
  DATA_TO_RENDER_UPDATE
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
export function dataUpdate(payload) {
  return {
    type: DATA_TO_RENDER_UPDATE,
    payload
  };
}
