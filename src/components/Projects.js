import React from "react";
import Data from "./data";

function Projects(props) {
  return (
    <div id="projects" className="s3">
      <h1 className="projectHeading">My Projects</h1>
      <div className="projectBody">
        {Data.projects.map((v) => {
          return (
            <a
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectWrapper"
            >
              <img src={v.img} alt={v.name} className="projectImage" />
              <div className="projectInfo">
                <h1 className="name">{v.name}</h1>
                <h3 className="info">{v.info}</h3>
                {v.techs.map((t) => {
                  return <div className="techs">{t}</div>;
                })}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
