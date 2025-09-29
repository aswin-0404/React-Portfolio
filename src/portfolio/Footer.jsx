import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="flex flex-col items-center">

        <div className="flex space-x-6 mb-4">
          {[ 
            { icon: <FaGithub />, link: "https://github.com/aswin-0404", color: "hover:bg-gray-800" },
            { icon: <FaLinkedin />, link: "", color: "hover:bg-blue-600" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/asw.inn___/", color: "hover:bg-pink-500" },
            { icon: <FaFacebook />, link: "", color: "hover:bg-blue-700" },
            { icon: <FaTwitter />, link: "", color: "hover:bg-blue-400" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 ${social.color} text-white shadow-md`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Aswin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
