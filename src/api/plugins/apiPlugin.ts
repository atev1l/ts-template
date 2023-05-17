import { apiClient } from 'api/services/apiClient';
import axios, { AxiosError } from 'axios';
import { rootStore } from 'stores/RootStore';

import { LocalStorageKeys } from '../../constants';

const baseURL = process.env.REACT_APP_API_HOST;

export const apiPlugin = axios.create({
  baseURL,
  withCredentials: false,
});

apiPlugin.interceptors.request.use(config => {
  config.headers.Authorization =
    'Bearer ' + localStorage.getItem(LocalStorageKeys.JWT);
  return config;
});

apiPlugin.interceptors.response.use(
  config => config,
  async error => {
    if (error.response.status == 401) {
      const response = await apiClient.auth.refreshToken({
        token: localStorage.getItem(LocalStorageKeys.JWT),
      });
      if (response instanceof AxiosError) rootStore.authStore.setIsAuth(false);
      else rootStore.authStore.setIsAuth(true);
    }
  }
);
