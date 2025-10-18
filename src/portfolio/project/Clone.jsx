import React from "react";
import Navbar from "../Nav";

const CloneProject = () => {
  return (
    <div>
      <Navbar/>
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-25">
          Clone <span className="text-indigo-600">Project</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
         
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
              <img
                src="images/nav.png" 
                alt="Clone Project"
                className="w-full h-80 "
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Project Overview
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              This project is a full clone of the W3C School navigation bar,
              meticulously recreated using HTML and CSS. It demonstrates my
              ability to replicate responsive layouts, precise styling, and
              interactive navigation elements without relying on frameworks. The
              project showcases attention to detail in spacing and colors,
              providing a seamless and visually appealing user experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 pt-30">
            <div className="overflow-hidden rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
              <img
                src="images/website.jpg" 
                alt="Clone Project"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mt-30">
              Project Overview
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed ">
              This project is a small part clone of the EaseMyTrip website, built
              entirely with HTML and CSS. It demonstrates my skills in
              recreating real-world web layouts with responsive design, and interactive UI elements.
               The project emphasizes
              attention to detail in styling, spacing, and user experience,
              replicating the look and feel of the original site while
              maintaining fully functional structure.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CloneProject;
