"use client";
import React, { useState } from "react";
import projects from "@/data";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(info);
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
