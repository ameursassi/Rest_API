import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <h3>Book App</h3>
      <div>
        <Link to={{ pathname: "/list" }}>
          <Button className="m-2" color="success">
            Books List
          </Button>
        </Link>
        <Link to={{ pathname: "/create" }}>
          <Button className="m-2" color="primary">
            Add Book
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
