import React, { useState } from 'react';

const Dashboard = ({ jobs }) => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleSelectJob = (job) => {
    setSelectedJobs((prev) =>
      prev.some((selectedJob) => selectedJob.id === job.id)
        ? prev.filter((selectedJob) => selectedJob.id !== job.id)
        : [...prev, job]
    );
  };

  const handleApply = () => {
    if (selectedJobs.length === 0) {
      alert('No jobs selected to apply for.');
      return;
    }
    // Simulate applying for jobs
    alert(`Successfully applied to ${selectedJobs.map((job) => job.title).join(', ')}`);
    setSelectedJobs([]); // Clear selection after applying
  };

  return (
    <div className="dashboard-container py-10">
      <h1 className="text-center text-2xl font-bold mb-6">Dashboard</h1>
      <div className="job-list grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`job-card p-4 border rounded-lg ${
              selectedJobs.some((selected) => selected.id === job.id) ? 'bg-blue-100' : ''
            }`}
          >
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="text-sm mt-2">{job.desc}</p>
            <button
              onClick={() => handleSelectJob(job)}
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
            >
              {selectedJobs.some((selected) => selected.id === job.id)
                ? 'Deselect Job'
                : 'Select Job'}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleApply}
        className="apply-button mt-8 w-full bg-green-500 text-white p-4 rounded-md"
      >
        Apply to Selected Jobs
      </button>
    </div>
  );
};

export default Dashboard;
