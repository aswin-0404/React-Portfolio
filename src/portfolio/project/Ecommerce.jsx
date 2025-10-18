import React, { useState } from "react";
import Navbar from "../Nav";

const PetFoodEcommerce = () => {
  const images = [
    "images/paw1.png",
    "images/paw2.png",
    "images/paw3.png",
    "images/pawwish.png",
    "images/pawcart.png",
  ];
  const videos = ["videos/pawuserlog.mp4", "videos/pawpayment.mp4", "videos/pawadminlog.mp4"];

  const [activeTab, setActiveTab] = useState("Images"); 
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <Navbar/>
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Pet Food <span className="text-indigo-600">E-commerce</span>
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
              This is a fully functional Pet Food E-commerce website built with
              React and Tailwind CSS, featuring a complete online shopping
              experience. Users can browse products by categories, use the
              search bar, add items to the cart or wishlist, and complete
              purchases through an integrated payment system. The platform
              includes an admin panel with a comprehensive dashboard that
              displays sales, revenue, and user analytics. Admins can manage
              users, deactivate accounts, and handle orders including shipping,
              cancellation, and delivery. Additionally, the admin can perform
              full product management, including adding, editing, deactivating,
              or soft-deleting products. This project demonstrates advanced
              frontend development skills, seamless UI/UX, and complete
              e-commerce functionality
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default PetFoodEcommerce;
