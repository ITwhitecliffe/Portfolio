"use client";
import React, { useState } from "react";
import projects from "@/data";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(info);
  return (
    <div>
      All our projects is shown here
      {info.map((p) => {
        <h1>{p[0].title}</h1>;
      })}
    </div>
  );
};

export default Projects;
