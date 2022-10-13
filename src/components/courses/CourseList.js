import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
let path = "/course";
const CourseList = ({ courses }) => {
	console.log(courses);
	return (
		<>
			<ul>
				<li className="course-list course-list-header">
					<p className="item item-dot">.</p>
					<p className="item">Title</p>
					<p className="item-3">Author</p>
					<p className="item">Category</p>
				</li>
				{courses.map(course => {
					return (
						<li className="course-list" key={course.id}>
							<p className="item">Watch</p>
							<p className="item">
								<NavLink to="/course">{course.title}</NavLink>
							</p>
							<p className="item-3">{course.authorName}</p>
							<p className="item">{course.category}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};
CourseList.propTypes = {
	courses: PropTypes.array.isRequired
};
export default CourseList;
