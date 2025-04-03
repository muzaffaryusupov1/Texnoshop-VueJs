import { CategoryMain } from '@/pages/categories/components'
import NotFoundPage from '@/pages/notFound/NotFoundPage.vue'
import ProfileOrders from '@/pages/profile/ProfileOrders.vue'
import store from '@/store'
import {
	CartViews,
	CategoryViews,
	CheckoutViews,
	HomeViews,
	ProductViews,
	SignInViews,
	SignUpViews,
	WishListViews,
} from '@/views'
import ProfileViews from '@/views/ProfileViews.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeViews,
		},
		{
			path: '/product/:slug',
			name: 'product',
			component: ProductViews,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartViews,
		},
		{
			path: '/category',
			name: 'category',
			component: CategoryViews,
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
			component: SignInViews,
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignUpViews,
		},
		{
			path: '/wishlist',
			name: 'wishlist',
			component: WishListViews,
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: CheckoutViews,
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileViews,
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
