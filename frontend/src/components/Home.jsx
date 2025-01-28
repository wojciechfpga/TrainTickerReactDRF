// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Train App</h1>
      <p>Click on "Trains" to see the list of trains.</p>
      <Link to="/trains">Go to Train List</Link>
    </div>
  );
};

export default Home;
