import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function loadCourseSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
	return { type: types.CREATE_COURSE_SUCCESS, course };
}
export function updateCourseSuccess(course) {
	return { type: types.UPDATE_COURSE_SUCCESS, course };
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
export function saveCourse(course) {
	// Redux-thunk will inject dispatch
	return function (dispatch, getState) {
		return courseApi
			.saveCourse(course)
			.then(savedCourse => {
				course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
			})
			.catch(error => {
				throw error;
			});
	};
}
