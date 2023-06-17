import axios from "axios";

// const api = axios.create({
//   baseURL: 'http://10.15.220.97:6808/api/v1/',
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

const api = axios.create({
  baseURL: "http://127.0.0.1:6808/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
