import ProductsService from '@/service/products'

const state = {
	data: null,
	isLoading: null,
	error: null,
	recommended: null,
	product: null,
}

const mutations = {
	getProductsStart(state) {
		state.isLoading = true
		state.data = null
		state.error = null
		state.recommended = null
		state.product = null
	},
	getProductsSuccess(state, payload) {
		state.isLoading = false
		state.data = payload
	},
	getProductsFailure(state) {
		state.isLoading = false
	},
	getProductsDetailStart(state) {
		state.isLoading = true
		state.error = null
		state.product = null
	},
	getProductsDetailSuccess(state, payload) {
		state.isLoading = false
		state.product = payload
	},
	getProductsDetailFailure(state) {
		state.isLoading = false
	},
	getRecommendedProductsStart(state) {
		state.isLoading = true
		state.error = null
		state.recommended = null
	},
	getRecommendedProductsSuccess(state, payload) {
		state.isLoading = false
		state.recommended = payload
	},
	getRecommendedProductsFailure(state) {
		state.isLoading = false
	},
}

const actions = {
	products(context) {
		return new Promise(resovle => {
			context.commit('getProductsStart')
			ProductsService.products()
				.then(response => {
					context.commit('getProductsSuccess', response.data)
					resovle(response.data)
				})
				.catch(() => context.commit('getProductsFailure'))
		})
	},
	productsDetail(context, slug) {
		return new Promise(resolve => {
			context.commit('getProductsDetailStart')
			ProductsService.productsDetail(slug)
				.then(response => {
					context.commit('getProductsDetailSuccess', response.data)
					resolve(response.data)
				})
				.catch(err => {
					console.log('ERROR', err)
					context.commit('getProductsDetailFailure')
				})
		})
	},
	recommendedProducts(context, id) {
		return new Promise((resolve, reject) => {
			context.commit('getRecommendedProductsStart')
			ProductsService.recommendedProducts(id)
				.then(response => {
					context.commit('getRecommendedProductsSuccess', response.data)
					resolve(response.data)
				})
				.catch(err => {
					context.commit('getRecommendedProductsFailure')
					reject(err)
					console.log(err)
				})
		})
	},
}

export default { actions, mutations, state }
