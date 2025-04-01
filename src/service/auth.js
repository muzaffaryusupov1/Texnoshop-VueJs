import axios from './axios'

const AuthService = {
	register(data) {
		return axios.post('/register', data)
	},
	login(data) {
		return axios.post('/auth', data)
	},
}

export default AuthService
