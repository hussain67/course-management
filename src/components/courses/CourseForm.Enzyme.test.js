import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCourseForm(args) {
	let defaultProps = {
		authors: [],
		course: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};
	const props = { ...defaultProps, ...args };
	return shallow(<CourseForm {...props} />);
}

test("It render form and header", () => {
	const wrapper = renderCourseForm();
	expect(wrapper.find("form").length).toBe(1);
	expect(wrapper.find("h2").text()).toEqual("Add Course");
});

test("labels save button as 'Save' when not saving", () => {
	const wrapper = renderCourseForm();
	expect(wrapper.find("button").text()).toEqual("Save");
});
test("labels save button as 'Saving...' when saving", () => {
	const wrapper = renderCourseForm({ saving: true });
	expect(wrapper.find("button").text()).toEqual("Saving...");
});
