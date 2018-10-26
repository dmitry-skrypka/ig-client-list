import defaultState from "../defaultState";
import {
  GET_CLIENTS_INFO,
  SELECTED_CLIENT_UPDATE,
  SEARCH_UPDATE
} from "./actionTypes";

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_CLIENTS_INFO: {
      return {
        ...state,
        data: action.payload,
        data_to_render: action.payload
      };
    }
    case SELECTED_CLIENT_UPDATE: {
      return {
        ...state,
        selected: action.payload
      };
    }
    case SEARCH_UPDATE: {
      return {
        ...state,
        data_to_render: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
