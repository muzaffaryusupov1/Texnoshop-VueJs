import AuthService from '@/service/auth'
import { getLocale, setLocale } from '@/utils/helpers'

let userInitial = {
	email: '',
	password: '',
	fullName: '',
	address: '',
	phone: '',
}

let state = {
	user: JSON.parse(localStorage.getItem('user')) || userInitial,
	isAuth: (JSON.parse(localStorage.getItem('user')) && getLocale('token')) || false,
	loading: false,
	token: getLocale('token') || '',
	error: null,
}

function setUserWithLocale(user) {
	localStorage.setItem('user', JSON.stringify(user))
	return user
}

function addToken(token) {
	state.token = token
	setLocale('token', token)
}

const mutations = {
	setLoadingStart(state) {
		state.loading = true
	},
	setLoadingEnd(state) {
		state.loading = false
	},
	setIsAuth(state, payload) {
		state.isAuth = payload
	},
	setUser(state, payload) {
		state.user = setUserWithLocale(payload)
	},
	setLocale(state) {
		state.user = localStorage.removeItem('user')
		state.token = localStorage.removeItem('token')
	},
	setToken(state, payload) {
		state.token = addToken(payload)
	},
	setLoginUser(state, payload) {
		state.user = setUserWithLocale(payload)
	},
	setError(state, payload) {
		state.error = payload
	},
}

const actions = {
	register(context, user) {
		return new Promise(resolve => {
			context.commit('setLoadingStart')
			if (user.password.length < 8) {
				context.commit('setError', "Iltimos parolda 8ta dan ko'p belgi ishlating")
			} else {
				AuthService.register(user)
					.then(response => {
						if (response.data.data) {
							context.commit('setIsAuth', response.data.data)
						}
						context.commit('setUser', response.data.data)
						context.commit('setLoadingEnd')
						resolve(response.data.data)
					})
					.catch(err => {
						context.commit('setLoadingEnd')
						context.commit('setError', err.status)
						console.log(err)
					})
					.finally(() => {
						context.commit('setLoadingEnd')
					})
			}
		})
	},
	login(context, user) {
		return new Promise(resolve => {
			context.commit('setLoadingStart')
			AuthService.login(user)
				.then(response => {
					if (response.data.data) {
						context.commit('setIsAuth', response.data.data)
					}
					context.commit('setToken', response.data.token)
					context.commit('setLoginUser', response.data.data)
					context.commit('setLoadingEnd')
					resolve(response.data.token)
				})
				.catch(err => {
					console.log(err)
					context.commit('setLoadingEnd')
					context.commit('setError', err.status)
				})
				.finally(() => {
					context.commit('setLoadingEnd')
				})
		})
	},
}

export default { state, mutations, actions }
