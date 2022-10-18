import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

test("should add course when passed CREATE_COURSE_SUCCESS", () => {
	//arrange
	const initialState = [
		{
			title: "A"
		},
		{
			title: "B"
		}
	];

	const newCourse = {
		title: "C"
	};
	const action = actions.createCourseSuccess(newCourse);

	//act
	const newState = courseReducer(initialState, action);

	//assert
	expect(newState.length).toBe(3);
	expect(newState[2].title).toBe("C");
});

test("should update course when passed UPDATE_COURSE_SUCCESS", () => {
	//arrange
	const initialState = [
		{ id: 1, title: "A" },
		{ id: 2, title: "B" },
		{ id: 3, title: "C" }
	];

	const course = { id: 2, title: "New title" };
	const action = actions.updateCourseSuccess(course);

	//act
	const newState = courseReducer(initialState, action);

	//assert
	expect(newState.length).toBe(3);
	expect(newState[1].title).toBe("New title");
});
