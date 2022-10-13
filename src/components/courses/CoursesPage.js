import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
	componentDidMount() {
		this.props.actions.loadCourses().catch(error => {
			alert("Loading course failed" + error);
		});
		this.props.actions.loadAuthors().catch(error => {
			alert("Loading authors failed" + error);
		});
	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<CourseList courses={this.props.courses} />
			</>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	let courseArray;
	if (state.authors.length === 0) {
		courseArray = [];
	} else {
		courseArray = state.courses.map(course => {
			return {
				...course,
				authorName: state.authors.find(author => author.id === course.authorId).name
			};
		});
	}
	return {
		courses: courseArray,
		authors: state.authors
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
		}
	};
}

/*
// When declared as object each property is automatically bound to dispatch
const mapDispatchToProps = {
  createCourse: courseActions.createCourse
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

/*
state = {
		course: {
			title: ""
		}
	};

	handleChange = event => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course });
	};

	handleSuibmit = event => {
		event.preventDefault();
		this.props.actions.createCourse(this.state.course);
	};

		<form onSubmit={this.handleSuibmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text" onChange={this.handleChange} value={this.state.course.title} />
				<input type="submit" value="Save" />

				{this.props.courses.map(course => (
					<div key={course.title}>{course.title}</div>
				))}
			</form>
*/
