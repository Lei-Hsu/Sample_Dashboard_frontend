import axios from "axios";

export const customAxios = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  }
});

export const addAxiosHeader = (token) => {
  if (customAxios.defaults.headers) {
    customAxios.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export const clearAxiosHeader = () => {
  if (customAxios.defaults.headers) {
    customAxios.defaults.headers.Authorization = ``
  }
}