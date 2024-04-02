import React from "react";
import projects from "@/data";
const Projects = () => {
  return (
    <div>
      All our projects is shown here
      {projects.map((p) => {
        p.title;
      })}
    </div>
  );
};

export default Projects;
