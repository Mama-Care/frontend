
import * as StorageService from '@src/services/storage';
import Axios, { AxiosResponse } from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'https://localhost:5173',
  headers: {
    'Content-Type': 'application/json',
    mode: 'cors'
  },
  timeout: 70000
});


export const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const session = StorageService.getItem('session-token');
    if (session && session.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export function getInstance() {
  if (
    StorageService.getItem('session-token') &&
    StorageService.getItem('session-token').accessToken
  ) {
    setAuthorizationHeader(StorageService.getItem('session-token').accessToken);
  }

  return axiosInstance;
}