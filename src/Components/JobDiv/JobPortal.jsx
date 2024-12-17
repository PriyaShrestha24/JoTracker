// import React, { useState } from 'react';
// import Jobs from './Jobs';
// import Dashboard from './Dashboard';

// const JobPortal = () => {
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   const applyJob = (job) => {
//     // Avoid duplicates
//     if (!appliedJobs.find((appliedJob) => appliedJob.id === job.id)) {
//       setAppliedJobs([...appliedJobs, job]);
//     } else {
//       alert("You have already applied for this job.");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold py-4">Job Portal</h1>
//       <div className="flex flex-col items-center">
//         <h2 className="text-xl font-semibold my-4">Available Jobs</h2>
//         <Jobs applyJob={applyJob} />
//         <h2 className="text-xl font-semibold my-4">Applied Jobs</h2>
//         <Dashboard appliedJobs={appliedJobs} />
//       </div>
//     </div>
//   );
// };

// export default JobPortal;
