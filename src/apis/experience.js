import axios from '../config/axios';

const experienceService = {};

experienceService.createExperience = (body) =>
  axios.post('/experiences/create', body);

export default experienceService;
