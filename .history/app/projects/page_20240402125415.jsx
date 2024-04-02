"use client";
import React, { useState } from "react";
import projects from "@/data";
import Project from "@/components/Project";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(info);
  return (
    <div>
      All our projects is shown here
      {info.map((p) => {
        <h1 key={p.id} className="flex">
          {p.title}
          {/* <Project {...p} /> */}
        </h1>;
      })}
    </div>
  );
};

export default Projects;
