import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["About", "Skills", "Projects", "Contact"];
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 150; 
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (name) => {
    setActive(name);
    navigate("/");
  };

  const linkStyle = (name) =>
    `px-2 py-1 rounded-full relative transition-all duration-300 hover:scale-105 ${
      active === name
        ? "text-green-600 border-b-2 border-green-500" 
        : "text-gray-800 hover:text-green-600 border-b-2 border-transparent"
    }`;

  return (
    <nav
      className={`w-full py-4 flex justify-center text-sm md:text-base sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-white/60 border-b border-white/30 shadow-lg"
          : "bg-white/30 border-b border-transparent"
      }`}
    >
      <ul className="flex items-center gap-6 font-medium text-gray-800">
        <li>
          <a href="#About" onClick={() => navigateTo("About")} className={linkStyle("About")}>
            About
          </a>
        </li>
        <span className="text-gray-400">|</span>

        <li>
          <a href="#Skills" onClick={() => navigateTo("Skills")} className={linkStyle("Skills")}>
            Skills
          </a>
        </li>
        <span className="text-gray-400">|</span>

        <li>
          <a href="#Projects" onClick={() => navigateTo("Projects")} className={linkStyle("Projects")}>
            Projects
          </a>
        </li>
        <span className="text-gray-400">|</span>

        <li>
          <a href="#Contact" onClick={() => navigateTo("Contact")} className={linkStyle("Contact")}>
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
