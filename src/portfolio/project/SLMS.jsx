import React, { useState } from "react";
import Navbar from "../Nav";

const Slms = () => {
  const images = [
    "/lms-images/Reg.png",
    "/lms-images/log.png",
    "/lms-images/userdash.png",
    "/lms-images/userprof.png",
    "/lms-images/admindash.png",
    "/lms-images/admincrud.png",
  ];
  const videos = ["/lms-videos/userlog.mp4", "/lms-videos/adminlog.mp4"];

  const [activeTab, setActiveTab] = useState("Images");
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <Navbar />
      <section className="w-full bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Python{" "}
            <span className="text-indigo-600">Student-Managemnt-System</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="flex justify-center mb-6 gap-4 mt-15">
                {["Images", "Videos"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full font-medium transition ${
                      activeTab === tab
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "bg-white text-gray-800 shadow hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Images" ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={images[currentImage]}
                      alt={`Pet Food ${currentImage + 1}`}
                      className="w-full h-80 "
                    />
                  </div>

                  <div className="flex justify-center gap-4 mt-2 flex-wrap">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-20 h-20  rounded-lg cursor-pointer border-2 transition ${
                          currentImage === idx
                            ? "border-indigo-600 scale-105"
                            : "border-gray-200 hover:scale-105"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <video
                      key={index}
                      src={video}
                      controls
                      className="w-full rounded-2xl shadow-lg"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1 space-y-6 mt-15">
              <h3 className="text-3xl font-bold text-gray-900">
                Project Overview
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                I developed a Student Learning Management System (LMS) using
                Django, featuring a secure session-based authentication
                workflow. The platform allows students to log in, view their
                personal profile, and update their information through Django
                Forms with full server-side validation. The system also includes
                a custom admin panel with complete CRUD functionality, enabling
                administrative users to efficiently manage student records. This
                project leverages Django Models, Templates, and ORM interactions
                to ensure clean data handling, modular design, and maintainable
                backend logic. The LMS showcases my ability to build robust,
                data-driven applications with a strong focus on authentication,
                role-based access, and user experience.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  GitHub Repository
                </h4>
                <a
                  href="https://github.com/aswin-0404/student-management"
                  target="_blank"
                  className="text-indigo-600 text-lg font-medium underline hover:text-indigo-800"
                >
                  View Source Code on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slms;
