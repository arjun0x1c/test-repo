import React from "react";
import { FaInstagram, FaMailBulk, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Godwin Vino I</h3>
        <p className="text-lg font-normal text-gray-400">
          An Information Technology Student
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Chennai-600126,TamilNadu,India.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9841480035</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">joshua21531@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
