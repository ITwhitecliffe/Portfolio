"use client";
import React, { useState } from "react";
import projects from "@/data";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(projects[0]);
  return (
    <div>
      All our projects is shown here
      {projects[0].map((p) => {
        <h1>{p.title}</h1>;
      })}
    </div>
  );
};

export default Projects;
