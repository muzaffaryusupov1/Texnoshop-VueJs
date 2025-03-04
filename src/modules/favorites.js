const state = {
	items: JSON.parse(localStorage.getItem('favorites')) || [],
}

function setFavorites(arr) {
	localStorage.setItem('favorites', JSON.stringify(arr))
	return arr
}

const mutations = {
	addToFavorite(state, payload) {
		const isContain = state.items.some(item => item.id === payload.id)
		const newItems = isContain
			? state.items.map(item => (item.id === payload.id ? { ...item, qty: item.qty + 1 } : item))
			: [...state.items, { ...payload, qty: 1 }]
		state.items = setFavorites(newItems)
	},
	removeFromFavorite(state, payload) {
		const newItems = state.items.filter(item => item.id !== payload.id)
		state.items = setFavorites(newItems)
	},
}

export default { state, mutations }
