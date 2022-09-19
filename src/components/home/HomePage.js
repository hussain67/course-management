import React from "react";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="title">
      <h1>Course Management</h1>
      <Link to="about">Learn More</Link>
    </div>
  );
};

export default HomePage;
