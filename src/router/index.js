import { CategoryMain } from '@/pages/categories/components'
import {
	CartViews,
	CategoryViews,
	HomeViews,
	ProductViews,
	SignInViews,
	SignUpViews,
	WishListViews,
} from '@/views'
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
	],
})

export default router
