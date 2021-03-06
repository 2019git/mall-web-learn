import axios from "axios"

export function request(config) {
  let instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
    }
  )
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
    }
  )

  return instance(config)
}
