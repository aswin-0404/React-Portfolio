import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JAVA SCRIPT",
    "BOOTSTRAP",
    "TAILWIND",
    "REACT",
    "REDUX",
    "Learning New Technologies",
  ];

  return (
    <section className="w-full bg-white py-20 pt-20 px-6 md:px-20 "id="Skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-10 mb-6">
          My <span className="text-indigo-600">Skills</span>
        </h2>
        <p className="text-gray-700 text-lg mt-10 mb-12">
          I combine technical expertise and soft skills to deliver impactful results and collaborate effectively.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-15 mt-30">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl shadow-lg py-6 px-4 flex justify-center items-center text-gray-800 font-semibold text-center 
                         transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
