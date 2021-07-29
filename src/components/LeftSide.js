import React from "react";
import { Link } from "react-scroll";

function LeftSide(props) {
  return (
    <div className="left">
      <div className="intro">
        <h2 className="h2Style">&lt; Hi! /&gt;</h2>
        <h1 className="h1Style">&lt; I am Bishal /&gt;</h1>
        <Link
          smooth={true}
          duration={1000}
          to="skills"
          className="btn btn-aqua"
        >
          Scroll down
        </Link>
      </div>
    </div>
  );
}

export default LeftSide;
