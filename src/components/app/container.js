import {getClientsInfo} from "../../logic/app/actions";


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

	};
}
