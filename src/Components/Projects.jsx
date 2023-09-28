import React, { useEffect, useState } from "react";
import "../Stylesheets/Projects.css";
import { projects } from "../constants";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Header from "./Header";
import Card from "./Card";
import parse from "html-react-parser";
import github_logo from "../assets/icons8-github-48 (1).png";
import youtube_icon from "../assets/YouTube-Icon-Full-Color-Logo.wine.svg";

export default function Projects({ projectsRef }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleResize = () => {
    if(window.innerWidth < 640){
        setIsSmallScreen(true);
    }else{
      setIsSmallScreen(false);
    };
  }
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    })
  return (
    <>
      <div className="projects flex flex-col gap-4" ref={projectsRef}>
        <Header headerName="Featured Projects" />
        <div className="timeline mx-auto">
          <Timeline position={isSmallScreen ? "left" : "alternate"}>
            {projects.map((project, index) => {
              return (
                <TimelineItem key={index} className="mb-2">
                  <TimelineOppositeContent>
                    <div className="project-container flex flex-col rounded-[14px] p-6 content-center bg-white gap-3 text-left">
                      <img
                        className="rounded-lg"
                        src={project.img}
                        alt={project.alt}
                      />
                      <span className="project-title font-bold">
                        {project.name}
                      </span>
                      <span className="project-description text-sm">
                        {parse(project.description)}
                      </span>
                      <p className="project-tech text-xs flex flex-row gap-2 flex-wrap">
                        {project.stack.map((stack) => {
                          return <Card text={stack} />;
                        })}
                      </p>
                      <div className="flex flex-row gap-2">
                        <a href={project.link}>
                          <img
                            className="w-[36px] h-[36px]"
                            src={github_logo}
                            alt="github link to project"
                          />
                        </a>
                        {project?.demo && (
                          <a href={project.demo}>
                            <img
                              className="w-[36px] h-[36px]"
                              src={youtube_icon}
                              alt="project demo link"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="sm:block hidden">
                    <i>{project.date}</i>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </div>
    </>
  );
}
