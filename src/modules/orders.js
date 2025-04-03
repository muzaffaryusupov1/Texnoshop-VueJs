import OrdersService from '@/service/orders'

const state = {
	isLoading: false,
	error: null,
	orders: null,
	userOrders: null,
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
	getUserOrdersStart(state) {
		state.isLoading = true
		state.error = null
		state.userOrders = null
	},
	getUserOrdersSuccess(state, payload) {
		state.isLoading = false
		state.userOrders = payload
	},
	getUserOrdersFailure(state) {
		state.isLoading = false
	},
}

const actions = {
	orders(context, data) {
		return new Promise(resolve => {
			context.commit('loadingStart')
			OrdersService.orders(data)
				.then(response => {
					context.commit('loadingEnd')
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
	getUserOrders(context, userId) {
		return new Promise(resolve => {
			context.commit('getUserOrdersStart')
			OrdersService.userOrders()
				.then(response => {
					context.commit(
						'getUserOrdersSuccess',
						response.data.filter(id => userId === id.user_id)
					)
					resolve(response.data)
				})
				.catch(error => {
					context.commit('getUserOrdersFailure')
					console.log(error)
				})
		})
	},
}

export default { state, actions, mutations }
