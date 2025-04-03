import axios from './axios'

const AuthService = {
	register(data) {
		return axios.post('/register', data)
	},
	login(data) {
		return axios.post('/auth', data)
	},
	getUser() {
		return axios.get('/users')
	},
}

export default AuthService
