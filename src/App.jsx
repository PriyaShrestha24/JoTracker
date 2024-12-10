import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/FooterDiv/Footer';
import Search from './Components/SearchDiv/Search';
import Jobs from './Components/JobDiv/Jobs';
import Value from './Components/ValueDiv/Value';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';

const Layout = ({ children }) => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage with all sections */}
        <Route
          path="/"
          element={
            <Layout>
              <Search />
              <Jobs />
              <Value />
            </Layout>
          }
        />
        {/* Individual routes */}
        <Route
          path="/jobs"
          element={
            <Layout>
              <Jobs />
            </Layout>
          }
        />
        <Route
          path="/value"
          element={
            <Layout>
              <Value />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
