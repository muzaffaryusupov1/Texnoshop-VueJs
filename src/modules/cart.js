import { setCart } from '@/utils/helpers'

const state = {
	items: JSON.parse(localStorage.getItem('cart')) || [],
	totalPrice: 0,
	isLoading: null,
	error: null,
}

const mutations = {
	addToCart(state, payload) {
		const isContain = state.items?.some(item => item.id === payload.id)
		const newItem = isContain
			? state.items.map(item => (item.id === payload.id ? { ...item, qty: item?.qty + 1 } : item))
			: [...state.items, { ...payload, qty: 1 }]
		state.items = setCart(newItem)
	},
	removeFromCart(state, payload) {
		const newItem = state.items.filter(item => item.id !== payload.id)
		state.items = setCart(newItem)
	},
	removeAllFromCart(state) {
		state.items = setCart([])
	},
}

export default { state, mutations }
