import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
	return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function loadCourses() {
	// Redux-thunk will inject dispatch
	return function (dispatch) {
		return courseApi
			.getCourse()
			.then(courses => {
				dispatch(loadCourseSuccess(courses));
			})
			.catch(error => {
				throw error;
			});
	};
}
