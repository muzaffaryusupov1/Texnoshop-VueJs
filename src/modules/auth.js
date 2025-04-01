import AuthService from '@/service/auth'
import { getLocale, setLocale } from '@/utils/helpers'

let userInitial = {
	email: '',
	password: '',
	name: '',
	surname: '',
	address: '',
	phone: '',
}

let state = {
	user: JSON.parse(localStorage.getItem('user')) || userInitial,
	isAuth: !!JSON.parse(localStorage.getItem('user'))?.email || false,
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
	setIsAuth(state, { payload }) {
		state.isAuth = payload
	},
	setUser(state, payload) {
		state.user = setUserWithLocale(payload)
	},
	setLocale(state) {
		state.user = setUserWithLocale([])
		state.ещлут = setLocale([])
	},
	setToken(state, payload) {
		state.token = addToken(payload)
	},
	setLoginUser(state, payload) {
		state.user = payload
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
						context.commit('setIsAuth', user)
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
