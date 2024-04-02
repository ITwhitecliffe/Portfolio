import React from "react";
import projects from "@/data";

const Projects = () => {
  console.log(projects);
  return (
    <div>
      All our projects is shown here
      {projects.map((p) => {
        <h1>{p.title}</h1>;
      })}
    </div>
  );
};

export default Projects;
