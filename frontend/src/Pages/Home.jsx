import React from "react";
import { Link } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-cyan-500 py-24">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          src="src/videos/Tea2.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay to darken video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Welcome to Our Service Page
          </h1>
          <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
            Discover how we can help you manage waste effectively.
          </p>
          <Link
            to="/register"
            className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-full text-lg shadow-lg transition duration-300"
          >
            <FaRecycle className="inline mr-2" /> Get Started
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
            Learn More About Our Offerings
          </h2>
          <p className="text-center text-gray-700">
            Here, we provide detailed insights into how we work towards
            sustainable and eco-friendly waste management solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
