import axios from '../config/axios';

const userApi = {};

userApi.updateUserProfile = (body) => axios.patch('/users/updateProfile', body);
userApi.getUserProfile = () => axios.get('/users');
userApi.getUserProfileById = (userId) => axios.get(`/users/${userId}`);

export default userApi;
