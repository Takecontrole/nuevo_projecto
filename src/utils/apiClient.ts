import axios from 'axios'

const apiClient = axios.create({
  baseURL:
     'https://fakestoreapi.com/',
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
