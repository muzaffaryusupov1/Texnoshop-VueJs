<template>
	<div class="container">
		<div class="my-7 border-b border-t-0 border-r-0 border-l-0 border-solid border-gray-400 pb-4">
			<h3 class="text-3xl font-medium text-black leading-[140%]">My Wishlist</h3>
		</div>
		<div class="grid grid-cols-5 gap-4 mb-7">
			<div
				v-for="items of products"
				:key="items.id"
				class="bg-white border border-solid border-gray-300 shadow-lg shadow-shadow-cc relative rounded-xl"
			>
				<button
					class="group transition-all ease-out duration-300 border border-solid border-gray-300 p-1.5 rounded-full absolute right-4 top-4 z-50"
				>
					<HeartIcon class="fill-red" />
				</button>
				<RouterLink to="/product">
					<Cart :cart="items" />
				</RouterLink>
				<button
					class="group transition-all ease-out duration-300 border border-solid border-primary-light p-2 rounded-xl absolute right-4 bottom-4 z-50 hover:bg-primary"
				>
					<CartIcon class="fill-primary group-hover:fill-white" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { products } from '@/utils/data'

export default {
	data() {
		return {
			products,
		}
	},
}
</script>
