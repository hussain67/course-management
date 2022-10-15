import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const ManageCoursePage = ({ courses, authors, loadAuthors, loadCourses, saveCourse, history, ...props }) => {
	const [course, setCourse] = useState({ ...props.course });
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (courses.length === 0) {
			//Avoid unnecessary api call
			loadCourses().catch(error => {
				alert("Loading course failed" + error);
			});
		} else {
			setCourse({ ...props.course });
		}
		if (authors.length === 0) {
			loadAuthors().catch(error => {
				alert("Loading authors failed" + error);
			});
		}
	}, [props.course]);
	function handleChange(event) {
		const { name, value } = event.target; //It is important to destructure

		setCourse(course => ({
			...course,
			[name]: name === "authorId" ? parseInt(value, 10) : value
		}));
	}

	function handleSave(event) {
		event.preventDefault();
		//Call to the saveCourse thunk return a promise hence .then can be chained
		//Any component rendered through react-router-dom, history object automatically get pussed in
		saveCourse(course).then(() => {
			history.push("/courses");
		});
	}
	return <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} />;
};

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	loadAuthors: PropTypes.func.isRequired,
	loadCourses: PropTypes.func.isRequired,
	saveCourse: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};
function getCourseBySlug(courses, slug) {
	return courses.find(course => course.slug === slug) || null;
}

//ownProps lets us access the component's props. We can use this to read the URL data injected on props by React Router
//maStateToProps run every time store updates
function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;
	const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
	return {
		course,
		courses: state.courses,
		authors: state.authors
	};
}

const mapDispatchToProps = {
	loadCourses,
	loadAuthors,
	saveCourse
};

/*
// When declared mapDispatchToProps as an object each property will automatically be bound to dispatch.
*/

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
