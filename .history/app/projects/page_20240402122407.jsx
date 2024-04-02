"use client";
import React, { useState } from "react";
import projects from "@/data";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(projects[0]);
  return (
    <div>
      All our projects is shown here
      {projects.map((p) => {
        <h1>{info}</h1>;
      })}
    </div>
  );
};

export default Projects;
