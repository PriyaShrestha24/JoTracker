import React from "react";
//import priya from "../../Assets/priya.png"
import chopper from "../../Assets/chopper.jpeg";
import marceline from "../../Assets/marceline.jpeg";
import luffy from "../../Assets/luffy.png";
import bleach from "../../Assets/bleach.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Empowering job seekers with a seamless way to track their career journey.
          </p>
        </div>
      </header>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Job Tracker, our mission is to simplify job tracking for individuals by providing
            an intuitive platform to organize applications, monitor progress, and stay motivated
            throughout the job search process.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="text-indigo-500 text-4xl mb-4">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Applications</h3>
              <p className="text-gray-600">
                Keep all your job applications organized and accessible with a user-friendly interface.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="text-purple-500 text-4xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitor Progress</h3>
              <p className="text-gray-600">
                Gain insights into your job search by tracking interview schedules, feedback, and statuses.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="text-pink-500 text-4xl mb-4">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Stay Motivated</h3>
              <p className="text-gray-600">
                Stay focused and motivated with reminders, tips, and a personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={chopper}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Priya</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={bleach}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Tenzing</h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={marceline}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Apreskha</h3>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={luffy}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Aayushree</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
