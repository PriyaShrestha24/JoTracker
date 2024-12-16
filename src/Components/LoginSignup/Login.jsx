import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error('Both email and password are required.', {
        position: 'top-right',
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.warning('Please enter a valid email address.', {
        position: 'top-right',
      });
      return;
    }

    if (!validatePassword(password)) {
      toast.info('Password must be at least 8 characters, include a number and an uppercase letter.', {
        position: 'top-right',
      });
      return;
    }

    toast.success('Login successful!', {
      position: 'top-right',
    });

    // Simulate a successful login and navigate
    setTimeout(() => {
      navigate('/jobs');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome Back!</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium text-sm hover:bg-blue-600 transition"
          >
            Login
          </button>
          <p className="text-center text-gray-600 text-sm">
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
