"use client";
import React, { useState } from "react";
import projects from "@/data";
import Project from "@/components/Project";

const Projects = () => {
  const [info, setInfo] = useState(projects);

  console.log(info[0].title);
  return (
    <div>
      All our projects is shown here
      {info.map((p, id) => {
        <h1 className="flex" key={id}>
          {p.title}
          {/* <Project {...p} /> */}
        </h1>;
      })}
    </div>
  );
};

export default Projects;
