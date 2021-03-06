import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://10.0.0.115:5000/",
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
  validateStatus: function (status) {
    return status < 500;
  },
});

export default axiosInstance;
