import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Media = () => {
  return (
    <div
      className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between "
      style={{ marginTop: "2rem" }}
    >
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in.</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/godwinvino21531/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/god_of_thunder21531/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsfljdQSHLbWrPtLMsGJrJlcmFMgMRxrxGTbCcCxCkQWfHbDzsqcQXRWcffwQSNJjjqHg"
              target="_blank"
            >
              <FaMailBulk />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://leetcode.com/u/God_21531/" target="_blank">
              <SiLeetcode />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          View My Resume Here.
        </h2>
        <div className="flex gap-4">
          <span className="bannerIconR">
            <a
              href="https://drive.google.com/file/d/15_f27OMApo85EwATCjvgtJPtHjtqgJkz/view?usp=sharing"
              target="_blank"
            >
              <h6>resumé</h6>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
