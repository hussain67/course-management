import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends Component {
	componentDidMount() {
		const { courses, authors, loadAuthors, loadCourses } = this.props;
		if (courses.length === 0) {
			//Avoid unnecessary api call
			loadCourses().catch(error => {
				alert("Loading course failed" + error);
			});
		}
		if (authors.length === 0) {
			loadAuthors().catch(error => {
				alert("Loading authors failed" + error);
			});
		}
	}

	render() {
		return (
			<>
				<h2>Manage Course</h2>
			</>
		);
	}
}

ManageCoursePage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	loadAuthors: PropTypes.func.isRequired,
	loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		courses: state.courses,
		authors: state.authors
	};
}

const mapDispatchToProps = {
	loadCourses,
	loadAuthors
};

/*
// When declared mapDispatchToProps as an object each property will automatically be bound to dispatch.
*/

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
