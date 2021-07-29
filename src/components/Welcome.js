import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
function Welcome(props) {
  return (
    <div id="welcome" className="s1">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Welcome;
