import * as types from "./actionTypes";

import * as authorApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusActions.Js";

export function loadAuthorsSuccess(authors) {
	return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
	// Redux-thunk will inject dispatch
	return function (dispatch) {
		dispatch(beginApiCall());
		return authorApi
			.getAuthors()
			.then(authors => {
				dispatch(loadAuthorsSuccess(authors));
			})
			.catch(error => {
				throw error;
			});
	};
}
