import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/FooterDiv/Footer';
//import Search from './Components/SearchDiv/Search';
import Jobs from './Components/JobDiv/Jobs';
import Value from './Components/ValueDiv/Value';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import AboutUs from './Components/AboutDiv/AboutUs';
import Blog from './Components/BlogDiv/Blog';
import Companies from './Components/CompanyDiv/Companies'

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
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Huawei', logo: 'path/to/logo' },
    { id: 2, name: 'Samsung', logo: 'path/to/logo' },
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Web Developer',
      company: 'Huawei',
      location: 'Canada',
      time: 'Now',
      desc: 'Job description here',
    },
  ]);

  const [vacancies, setVacancies] = useState({});

  const addVacancy = (companyId, title, description, logo) => {
    const companyVacancies = vacancies[companyId] || [];
    setVacancies({
      ...vacancies,
      [companyId]: [
        ...companyVacancies,
        { id: companyVacancies.length + 1, title, description, logo },
      ],
    });
  };
  return (
    <Router>
      <Routes>
        {/* Homepage with all sections */}
        <Route
          path="/"
          element={
            <Layout>
              {/* <Search /> */}
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
              <Jobs jobs={jobs} />
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
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/companies"
          element={
            <Layout>
              <Companies companies={companies} setCompanies={setCompanies}  />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
