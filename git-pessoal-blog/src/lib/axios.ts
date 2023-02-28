import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const search = axios.create({
  baseURL: 'https://api.github.com',
})
