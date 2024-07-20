import axios from '../config/axios';

const jobApplicationApi = {};

jobApplicationApi.createJobApplication = (body) =>
  axios.post('/job-applications/create', body);

jobApplicationApi.getAllJobApplicationByUserId = () =>
  axios.get('/job-applications');

jobApplicationApi.deleteJobApplicationByApplicationId = (applicationId) =>
  axios.delete(`/job-applications/${applicationId}`);

jobApplicationApi.getJobAndApplicantByJobId = (jobId) =>
  axios.get(`/job-applications/${jobId}`);

export default jobApplicationApi;
