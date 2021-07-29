import React from "react";
import { Link } from "react-scroll";
function Header(props) {
  return (
    <nav className="nav">
      <ul className="ul">
        <Link
          to="welcome"
          smooth={true}
          duration={500}
          className="li liWelcome"
        >
          Welcome
        </Link>

        <Link to="skills" smooth={true} duration={500} className="li liSkills">
          About
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="li liProjects"
        >
          Projects
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
