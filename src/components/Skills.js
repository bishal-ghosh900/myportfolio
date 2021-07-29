import React from "react";
import { Link } from "react-scroll";
import Data from "./data";

function Skills(props) {
  return (
    <div id="skills" className="s2">
      <h1 className="skillHeading">My Skills</h1>
      <div className="skillOptions">
        {Data.skills.map((v) => {
          return (
            <div key={v.toString()} className="skillNames">
              {v}
            </div>
          );
        })}
      </div>
      <div className="myInfo">
        Hi devs! My name is Bishal Ghosh. Currently I am a student of Future
        Institute of Engineering & Management. I am wishing to be a fullStack
        web developer in future. I love to learn new technologies and implement
        it to my new projects.
      </div>

      <div className="scrollDown">
        <Link
          smooth={true}
          duration={1000}
          to="projects"
          className="btn btn-chartreuse"
        >
          Scroll down
        </Link>
      </div>
    </div>
  );
}

export default Skills;
