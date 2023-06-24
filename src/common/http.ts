import axios from "axios";

// const api = axios.create({
//   baseURL: 'https://decision-help-system.onrender.com/api/v1/',
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
