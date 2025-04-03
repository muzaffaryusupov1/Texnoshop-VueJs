import { getLocale } from '@/utils/helpers'
import axios from 'axios'

axios.defaults.baseURL = 'https://145dd1657bd461a2.mokky.dev'

axios.interceptors.request.use(config => {
	const token = getLocale('token')
	const authorization = token ? `Token ${token}` : ''
	config.headers.Authorization = authorization
	return config
})

export default axios
