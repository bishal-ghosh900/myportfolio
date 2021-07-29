import React from "react";
import Data from "./data";

function RightSide(props) {
  return (
    <div className="right">
      <img className="profileImage" src={Data.profile_pic} alt={Data.name} />

      <a
        href="https://github.com/bishal-ghosh900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i style={{ color: "aqua" }} className="fab fa-github"></i>
      </a>
    </div>
  );
}

export default RightSide;
