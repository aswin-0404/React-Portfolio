import React from "react";

const Projects = () => {
  const projects = [
    { title: "Clone Project(HTML-CSS)", link: "clone" },
    { title: "Pet Food E-commerce(React-Tailwind)", link: "petfood" },
    { title:"Student-Management-system(python)",link:"SLMS"},
    {title:"E-Commerce-Backend(python)",link:"ecommerce"},
  ];

  return (
    <section className="w-full h-180 bg-white py-20 px-6 md:px-20 mt-30" id="Projects">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-50">
          Latest <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="px-12 py-6 rounded-2xl bg-white shadow-lg text-gray-900 font-semibold text-xl 
                         transition transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-50"
            >
              {project.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
