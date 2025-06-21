import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // O la URL de tu backend
});

export default instance;
