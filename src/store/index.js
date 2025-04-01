import auth from '@/modules/auth'
import banners from '@/modules/banners'
import cart from '@/modules/cart'
import categories from '@/modules/categories'
import favorites from '@/modules/favorites'
import orders from '@/modules/orders'
import products from '@/modules/products'
import { createStore } from 'vuex'

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { banners, products, categories, cart, favorites, auth, orders },
})

export default store
