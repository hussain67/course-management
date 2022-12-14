import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
let path = "/course";
const CourseList = ({ courses, onDeleteClick }) => {
	console.log(courses);
	return (
		<>
			<ul>
				<li className="course-list course-list-header">
					<p className="item item-dot">.</p>
					<p className="item">Title</p>
					<p className="item-3">Author</p>
					<p className="item">Category</p>
					<p className="item item-dot">.</p>
				</li>
				{courses.map(course => {
					return (
						<li className="course-list" key={course.id}>
							<p className="item">Watch</p>
							<p className="item">
								<Link to={"/course/" + course.slug}>{course.title}</Link>
							</p>
							<p className="item-3">{course.authorName}</p>
							<p className="item">{course.category}</p>
							<p className="btn btn-outline-danger" onClick={() => onDeleteClick(course)}>
								Delete
							</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};
CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};
export default CourseList;
