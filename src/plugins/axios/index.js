import axios from 'axios'

// const isProduction = process.env.NODE_ENV === 'production'
const baseURL = 'http://comento.cafe24.com'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
})
instance.defaults.errorHandle = true

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err)
  }
)

export default instance
