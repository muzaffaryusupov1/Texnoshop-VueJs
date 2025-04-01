import OrdersService from '@/service/orders'

const state = {
	isLoading: false,
	error: null,
	orders: null,
}

const mutations = {
	loadingStart(state) {
		state.isLoading = true
	},
	loadingEnd(state) {
		state.isLoading = false
	},
	createOrder(state, payload) {
		state.orders = payload
	},
}

const actions = {
	orders(context, data) {
		return new Promise(resolve => {
			context.commit('loadingStart')
			OrdersService.orders(data)
				.then(response => {
					context.commit('loadingEnd')
					console.log(response)
					context.commit('createOrder', response.data)
					resolve(response.data)
				})
				.catch(error => {
					console.log(error)
					context.commit('loadingEnd')
				})
				.finally(() => {
					context.commit('loadingEnd')
				})
		})
	},
}

export default { state, actions, mutations }
