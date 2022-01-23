import React from "react";
import { ReactComponent as CaretDown } from "../../assets/vectors/caret-down.svg";

const ProjectsColumn = () => {
  return (
    <div>
      <div className="project-column">
        <h2 className="heading-4-bold">Candidates list</h2>
        <div className="project-column__filter">
          <div className="project-column__filter-body">
            <p className="body-text-5-semibold">Filter by category</p>
            <div className="project-column__filter-icon">
              <CaretDown />
            </div>
          </div>
        </div>
        <div className="project-column__left">
          <h2 className="heading-6-semibold">Showing 1 - 8 of 8</h2>
        </div>
        <div className="project-column__right">
          <a
            href="#"
            className="project-column__right-previous round"
            style={{ fontSize: "25px" }}
          >
            &#8249;
          </a>
          <span className="project-column__right-space"></span>
          <a
            href="#"
            className="project-column__right-next round"
            style={{ fontSize: "25px" }}
          >
            &#8250;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsColumn;
