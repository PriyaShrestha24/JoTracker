import React from "react";
import office from "../../Assets/office.jpg";

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-green-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl">
            Stay updated with the latest tips, news, and insights to elevate your job search journey.
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={office}
                alt="Blog Post"
                className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500">
                  10 Tips to Ace Your Job Interviews
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the best practices to leave a lasting impression in your interviews.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={office}
                alt="Blog Post"
                className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500">
                  How to Organize Your Job Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to efficiently track and organize your job search efforts.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={office}
                alt="Blog Post"
                className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500">
                  The Future of Job Tracking Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore upcoming innovations that will transform job search processes.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Want to Contribute?</h2>
          <p className="text-lg mb-6">
            Share your expertise and experiences to help others in their job search journey.
          </p>
          <a
            href="#"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-200 transition-colors duration-300"
          >
            Write for Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
