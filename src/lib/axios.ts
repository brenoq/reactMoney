import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://react-money-api.vercel.app',
})
