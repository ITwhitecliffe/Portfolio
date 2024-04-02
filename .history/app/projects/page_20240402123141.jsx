"use client";
import React, { useState } from "react";
import projects from "@/data";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(projects);
  return (
    <div>
      All our projects is shown here
      {info.map((p, id) => {
        <h1 key={id}>{p.title}</h1>;
      })}
    </div>
  );
};

export default Projects;
