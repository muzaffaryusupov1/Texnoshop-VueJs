<template>
	<div v-if="isLoading" class="flex items-center justify-center h-96 max-sm:h-32">
		<LoadingSpinner />
	</div>

	<div
		class="my-6 max-md:my-4 max-sm:my-2"
		:class="
			active
				? 'grid grid-cols-4 gap-[10px] max-[1130px]:grid-cols-3 max-[600px]:grid-cols-2'
				: 'w-full'
		"
		v-else
	>
		<div
			v-for="product in products"
			class="relative rounded-xl border border-solid border-gray-400 p-[9px] bg-white max-sm:p-1"
			:class="!active && 'mb-5 last:mb-0'"
			:key="product.id"
		>
			<RouterLink :to="`/product/${product.slug}`" v-auto-animate>
				<!-- CART -->
				<Cart v-if="active" :cart="product" :key="product.id" />
				<!-- CARTLIST -->
				<CartList v-if="!active" :cart="product" :key="product.id" />
			</RouterLink>

			<button
				class="absolute top-0 right-[-10px] m-5 p-2 border border-solid border-gray-300 rounded-full max-[540px]:p-0.5 max-[540px]:m-0 max-[540px]:right-3 max-[540px]:top-3"
				@click="addToFavorite(product)"
			>
				<HeartIcon />
			</button>
			<button
				class="group transition-all ease-out duration-300 hover:bg-primary absolute bottom-0 right-[-10px] m-5 p-1.5 border border-solid border-gray-300 rounded-md max-[540px]:p-0.5 max-[540px]:m-0 max-[540px]:right-3 max-[540px]:top-10 max-[540px]:bottom-auto max-sm:hover:bg-transparent"
				@click="addToCart(product)"
			>
				<CartIcon
					class="fill-primary group-hover:fill-white max-sm:group-hover:fill-gray-500 max-sm:fill-gray-500"
				/>
			</button>
		</div>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			products: state => state.categories.products?.items,
			isLoading: state => state.categories.isLoading,
		}),
	},
	props: {
		active: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		addToFavorite(product) {
			this.$store.commit('addToFavorite', product)
			toastify("Sevimlilarga qo'shildi", 'success')
		},
		addToCart(product) {
			this.$store.commit('addToCart', product)
			toastify("Savatga qo'shildi", 'success')
		},
	},
}
</script>
