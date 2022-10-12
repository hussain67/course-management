import React from "react";

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
							<p className="item">{course.title}</p>
							<p className="item-3">{course.authorId}</p>
							<p className="item">{course.category}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CourseList;
