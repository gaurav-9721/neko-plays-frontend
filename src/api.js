import axios from 'axios'

axios.defaults.withCredentials = true
export default axios.create({
    baseURL: "https://neko-plays-api.onrender.com"
  });