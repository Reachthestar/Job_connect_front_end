import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import jobApi from '../apis/job';
import jobApplicationApi from '../apis/jobApplication';

export const JobContext = createContext();

export default function JobContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const fetchJobData = async () => {
    try {
      const jobData = await jobApi.getAllJobs();

      setJobs(jobData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchJobApplicationData = async () => {
    try {
      const data = await jobApplicationApi.getAllJobApplicationByUserId();

      setApplications(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyJob = async (jobId, userId) => {
    try {
      const data = { jobId, userId };

      await jobApplicationApi.createJobApplication(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteApplication = async (applicationId) => {
    try {
      await jobApplicationApi.deleteJobApplicationByApplicationId(
        applicationId
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await jobApi.deleteJob(jobId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        fetchJobData,
        applyJob,
        deleteApplication,
        applications,
        setApplications,
        fetchJobApplicationData,
        deleteJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
