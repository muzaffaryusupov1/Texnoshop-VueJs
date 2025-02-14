import banners from '@/modules/banners'
import categories from '@/modules/categories'
import products from '@/modules/products'
import { createStore } from 'vuex'

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { banners, products, categories },
})

export default store
