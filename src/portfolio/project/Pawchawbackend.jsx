import React from "react";
import Navbar from "../Nav";

const Ecommercebackend = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full bg-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10">
            PawwChaw <span className="text-indigo-600">Backend</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              This ongoing e-commerce backend is built using Django and Django
               REST Framework, designed to deliver a scalable, secure, and modular 
               API architecture. It includes structured models for products, carts,
                orders, and users, with robust relational mapping and validation through
                 DRF serializers. The system supports JWT-based authentication, bulk order
                  processing, automatic cart clearance after checkout, and status-driven order
                   workflows. The API endpoints are fully optimized for real-time operations such
                    as cart updates, product retrieval, and order placement, ensuring consistent and
                     reliable data handling. The backend is engineered with clean code practices, reusable 
                     components, and a focus on high performance, making it suitable for enterprise-level e-commerce
                      applications.
            </p>

            <div className="border-t pt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">GitHub Repository</h4>
              <a
                href="https://github.com/aswin-0404/PawChaw-Backend"
                target="_blank"
                className="text-indigo-600 text-lg font-medium underline hover:text-indigo-800"
              >
                View Project on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommercebackend;