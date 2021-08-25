import React from "react";
import Data from "./data";

function RightSide(props) {
  return (
    <div className="right">
      <img className="profileImage skeleton" src={Data.profile_pic} alt={Data.name} />

      <div className="socialIcons">
        <a
          href="https://github.com/bishal-ghosh900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ color: "aqua" }} className="fab fa-github"></i>
        </a>
        <a
          href="https://codepen.io/bishal-ghosh900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ color: "aqua" }} className="fab fa-codepen"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bishal-ghosh-5841401b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ color: "aqua" }} className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default RightSide;
