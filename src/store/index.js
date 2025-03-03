import banners from '@/modules/banners'
import cart from '@/modules/cart'
import categories from '@/modules/categories'
import products from '@/modules/products'
import { createStore } from 'vuex'

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { banners, products, categories, cart },
})

export default store
