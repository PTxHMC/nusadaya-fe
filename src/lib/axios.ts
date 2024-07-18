import axios from 'axios';
import { BASE_URL } from '@/datas/config';
import { AuthService } from '@/services/auth';

const fetcher = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true
});

const fetcherAuth = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true
});

fetcher.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

fetcherAuth.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

fetcherAuth.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const status = error.response.status;
    if ((status === 403 || status === 401) && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await AuthService.getAccessToken();
      localStorage.setItem('access_token', newAccessToken.data.access_token);
      originalRequest.headers.Authorization = `Bearer ${newAccessToken.data.access_token}`;
      return fetcherAuth(originalRequest);
    }
    return Promise.reject(error);
  }
);

export { fetcher, fetcherAuth };
