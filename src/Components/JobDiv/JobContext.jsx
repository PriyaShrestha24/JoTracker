// import React, { createContext, useContext, useState } from 'react';

// const JobContext = createContext();

// export const JobProvider = ({ children }) => {
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: 'Web Developer',
//       company: 'Huawei',
//       location: 'Canada',
//       time: 'Now',
//       desc: 'Job description here',
//       image: '/path/to/logo', // Example path to company logo
//     },
//   ]);

//   const [selectedJob, setSelectedJob] = useState(null);

//   return (
//     <JobContext.Provider value={{ jobs, setJobs, selectedJob, setSelectedJob }}>
//       {children}
//     </JobContext.Provider>
//   );
// };

// export const useJob = () => useContext(JobContext);
