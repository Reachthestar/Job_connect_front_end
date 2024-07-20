import axios from '../config/axios';

const jobApi = {};

jobApi.getAllJobs = () => axios.get('/jobs');
jobApi.createJob = (body) => axios.post('/jobs/create', body);
jobApi.getMyJobs = () => axios.get('/myJobs');
jobApi.deleteJob = (jobId) => axios.delete(`/jobs/${jobId}`);

export default jobApi;
