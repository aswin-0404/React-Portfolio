import React from "react";
import Navbar from "./Nav";

const About = () => {
  return (
    <div>
    <section className="w-full bg-white from-gray-50 to-white py-20 px-6 md:px-20" id="About">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Aswin Shivdhas</span>, a
            passionate <span className="font-medium">Full Stack Developer</span> with
            strong skills in{" "}
            <span className="text-indigo-600 font-semibold">
              JavaScript, React, Redux, Python, Django, SQL, And PSQL
            </span>
            . I enjoy building seamless, user-friendly applications and
            constantly improving my craft by learning new technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond coding, I love to{" "}
            <span className="font-medium">communicate, collaborate, and coordinate</span>{" "}
            with teams, ensuring smooth execution and impactful results. I thrive
            in environments that challenge me to grow and inspire me to push the
            boundaries of what’s possible.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="Aswin React Resume.pdf"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium shadow hover:bg-gray-100 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition duration-500">
              <img
                src="images/aswin.jpg" 
                alt="Aswin Shivdhas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-md px-6 py-2 rounded-xl text-sm font-medium text-gray-700">
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
