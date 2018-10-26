import {
  getClientsInfo,
  selectedClientUpdate,
  searchUpdate
} from "../../logic/app/actions";

export function mapStateToProps(state) {
  return {
    ...state.app
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getData(data) {
      dispatch(getClientsInfo(data));
    },
    onSelect(client) {
      dispatch(selectedClientUpdate(client));
    },
    onInputChange(data) {
      console.log(data);
      dispatch(searchUpdate(data));
    }
  };
}
