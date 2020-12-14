import axios from 'axios';

const token = localStorage.getItem('app-token');

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Authorization': `token ${token}`,
    'Accept': 'application/json',
  }
});

export default api;
