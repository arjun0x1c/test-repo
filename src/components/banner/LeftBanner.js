import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import "./leftbanner.css";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Programming Languages: JAVA, JavaScript, Php.",
      "Database: MySQL, MongoDB.",
      "Web Technologies: HTML, CSS, XML, React.js.",
      "Tools: Git, GitHub, Postman, Canva, Figma.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 4000,
  });
  return (
    <div className="done">
      <div
        className="fle
      x flex-col gap-5"
      >
        <h4 className=" text-lg font-normal ">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi EveryOne!, <span style={{ fontSize: "2rem" }}>Myself </span>{" "}
          <span
            className="text-designColor capitalize"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {" "}
            Godwin Vino
          </span>
        </h1>

        <h2 className="text-4xl font-bold text-white">
          <p
            className="text-base font-bodyFont leading-6 tracking-wide text-white"
            style={{ fontWeight: "normal" }}
          >
            {" "}
            "I'm a web developer with a versatile skills that includes
          </p>
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          <br />
          Greetings!, I am a final-year Information Technology student at
          Sathyabama University, Chennai, with a strong desire to build a
          successful career in a dynamic and growing company. My goal is to
          enhance my knowledge and contribute meaningfully to the company's
          objectives. I am eager to embrace any challenges that come my way on
          my career path, showcasing my dedication and adaptability.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
