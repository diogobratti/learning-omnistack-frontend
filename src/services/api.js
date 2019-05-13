import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dbratti-omnistack-backend.herokuapp.com',
});

export default api;