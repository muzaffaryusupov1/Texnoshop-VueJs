import BannersService from '@/service/banners'

const state = {
	data: null,
	isLoading: null,
	error: null,
}

const mutations = {
	getBannersStart(state) {
		state.isLoading = true
		state.data = null
		state.error = null
	},
	getBannersSuccess(state, payload) {
		state.isLoading = false
		state.data = payload
		state.error = null
	},
	getBannersFailure(state) {
		state.isLoading = false
		state.error = null
	},
}

const actions = {
	banners(context) {
		return new Promise(resolve => {
			context.commit('getBannersStart')
			BannersService.banners()
				.then(res => {
					context.commit('getBannersSuccess', res.data)
					resolve(res.data)
				})
				.catch(() => context.commit('getBannersFailure'))
		})
	},
}

export default { actions, mutations, state }
