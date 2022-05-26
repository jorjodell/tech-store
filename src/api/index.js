import axios from 'axios';

const request = axios.create({
  baseURL: 'https://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default request;