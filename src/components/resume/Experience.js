import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">EXPERIENCE's</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern at Hackwit Technologies Pvt Ltd"
            subTitle="as React FullStack Developer "
            result="22nd Jan - 30th Jan 2024"
            des="During this internship, I has closely worked as the React Full stack developer
by carrying out the project entitled 'Password Management Website.'"
          />

          <ResumeCard
            title="NPTEL Exam"
            subTitle="Programming in JAVA - IIT Kanpur"
            result="July - Oct 2023"
            des="I, successfully completed a 12-week NPTEL course on ’Programming in Java,’ by IIT Kanpur. Attaining a solid grasp of Java fundamentals, 
data structures, algorithms and secured 60%."
          />

          <ResumeCard
            title="Intern at Hackwit Technologies Pvt Ltd"
            subTitle="as MERN Stack Developer"
            result="8th July - 12th Aug 2023"
            des="During this internship, I has closely worked as a part of the React Full stack
by carrying out the project entitled 'SIST Leave Authorization Website."
          />
          {/*
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
  */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
