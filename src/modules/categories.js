import CategoriesService from '@/service/categories'

const state = {
	categories: null,
	isLoading: null,
	error: null,
	products: null,
	brands: null,
}

const mutations = {
	getCategoriesStart(state) {
		state.isLoading = true
		state.categories = null
		state.error = null
	},
	getCategoriesSuccess(state, payload) {
		state.isLoading = false
		state.categories = payload
	},
	getCategoriesFailure(state) {
		state.isLoading = false
	},
	getCategoryProductsStart(state) {
		state.isLoading = true
		state.products = null
		state.error = null
	},
	getCategoryProductsSuccess(state, payload) {
		state.isLoading = false
		state.products = payload
	},
	getCategoryProductsFailure(state) {
		state.isLoading = false
	},
	getBrandsStart(state) {
		state.isLoading = true
		state.brands = null
		state.error = null
	},
	getBrandsSuccess(state, payload) {
		state.isLoading = false
		state.brands = payload
	},
	getBrandsFailure(state) {
		state.isLoading = false
	},
}

const actions = {
	categories(context) {
		return new Promise(resolve => {
			context.commit('getCategoriesStart')
			CategoriesService.categories()
				.then(response => {
					context.commit('getCategoriesSuccess', response.data)
					resolve(response.data)
				})
				.catch(() => context.commit('getCategoriesFailure'))
		})
	},
	categoryProducts(context, id) {
		return new Promise(resolve => {
			context.commit('getCategoryProductsStart')
			CategoriesService.categoryProducts(id)
				.then(response => {
					context.commit('getCategoryProductsSuccess', response.data)
					resolve(response.data)
				})
				.catch(() => context.commit('getCategoryProductsFailure'))
		})
	},
	brands(context) {
		return new Promise(resolve => {
			context.commit('getBrandsStart')
			CategoriesService.brands()
				.then(response => {
					context.commit('getBrandsSuccess', response.data)
					resolve(response.data)
				})
				.catch(() => context.commit('getBrandsFailure'))
		})
	},
}

export default { actions, mutations, state }
