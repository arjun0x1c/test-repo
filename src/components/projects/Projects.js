import React from "react";
import Title from "../layouts/Title";
import {
  Chaatmato,
  hackwitlogo,
  portfolio,
  pass,
  Sath,
} from "../../assets/index";
import { ProjectsCard, ProjectsCard1 } from "./ProjectsCard";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a
          href="https://drive.google.com/file/d/1Huumz-kRoVMGkyP3gwCnhVJQvGqK85Cj/view?usp=sharing"
          target="blank"
        >
          <ProjectsCard
            title="RESPONSIVE FOOD ORDER WEBSITE"
            des="•A online food ordering website developed on Jan 10th 2024. A responsive UI using HTML, CSS, JavaScript and server-side functionality with PHP.
Connected the website to a MySQL database using “phpMyAdmin” for efficient data storage and retrieval."
            git1={<BsGithub />}
            bro1={<FaGlobe />}
            src={Chaatmato}
          />
        </a>

        <a
          href="https://drive.google.com/file/d/12bbSUw0eFLwYTxNNLSLGqoN4jdv8Flhb/view?usp=sharing"
          target="blank"
        >
          <ProjectsCard1
            title2="LEAVE AUTHORIZATION WEBSITE"
            des2=" • I, worked as React Full Stack Developer on 12th Aug 2023. Collaborated as part of the React Full Stack team to develop the SIST Leave Authorization Website, automating the leave approval process within our organization."
            git2={<BsGithub />}
            bro2={<FaGlobe />}
            src2={Sath}
          />
        </a>

        <a
          href="https://drive.google.com/file/d/17fE7rLHeFo-QYzg4yrn2opgC-TYi0pv9/view?usp=sharing"
          target="blank"
        >
          <ProjectsCard1
            title2="Password Management Website"
            des2="
            •	I, Designed and Developed on Feb 2024, Built using the MERN stack and Implemented strong user authentication to securely store and recall user passwords."
            git2={<BsGithub />}
            bro2={<FaGlobe />}
            src2={pass}
          />
        </a>
        {/*
        
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
  */}
      </div>
    </section>
  );
};

export default Projects;
