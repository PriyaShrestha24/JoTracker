import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    const { fullName, email, password, confirmPassword } = formData;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Strong password regex
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validation logic
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error('All fields are required.');
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 8 characters long, include one letter, one number, and one special character.'
      );
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return false;
    }

    toast.success('Signup successful!');
    return true; // Allow navigation
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Create Account
        </h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm Password"
            />
          </div>
          <Link
            to="/login"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium text-sm hover:bg-blue-600 transition block text-center"
            onClick={(e) => {
              if (!handleSignup()) e.preventDefault(); // Prevent navigation if validation fails
            }}
          >
            Signup
          </Link>
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
