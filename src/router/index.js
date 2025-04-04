import {
	CartPage,
	CategoriesPage,
	CheckoutPage,
	HomePage,
	NotFoundPage,
	Product,
	Profile,
	SignIn,
	SignUp,
	WishList,
} from '@/pages'
import { CategoryMain } from '@/pages/categories/components'
import ProfileOrders from '@/pages/profile/ProfileOrders.vue'
import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/product/:slug',
			name: 'product',
			component: Product,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartPage,
		},
		{
			path: '/category',
			name: 'category',
			component: CategoriesPage,
			children: [
				{
					path: ':id',
					component: CategoryMain,
				},
			],
		},
		{
			path: '/signin',
			name: 'signin',
			component: SignIn,
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignUp,
		},
		{
			path: '/wishlist',
			name: 'wishlist',
			component: WishList,
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: CheckoutPage,
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
			children: [
				{
					path: '/profile/orders',
					component: ProfileOrders,
				},
			],
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			component: NotFoundPage,
		},
	],
})

router.beforeEach((to, from, next) => {
	if ((to.path === '/signin') | (to.path === '/signup') && store.state.auth.token) {
		next('/')
	} else if ((to.path === '/signin') | (to.path === '/signup') && store.state.auth.isAuth) {
		next('/')
	} else if (
		(to.path === '/profile') | (to.path === '/profile/orders') &&
		!store.state.auth.isAuth
	) {
		next('/')
	} else if (to.path === '/checkout' && !store.state.auth.isAuth) {
		next('/')
	} else {
		next()
	}
})

export default router
