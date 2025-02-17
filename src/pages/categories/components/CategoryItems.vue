<template>
	<div
		class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[10px] my-6 max-md:my-4 max-sm:my-2"
	>
		<div
			v-for="product in products"
			class="relative rounded-xl border border-solid border-gray-400 p-[9px] bg-white max-sm:p-1"
			:key="product.id"
		>
			<RouterLink :to="`/product/${product.slug}`">
				<Cart :cart="product" />
			</RouterLink>

			<button
				class="absolute top-0 right-[-10px] m-5 p-2 border border-solid border-gray-300 rounded-md"
			>
				<HeartIcon />
			</button>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			products: state => state.categories.products,
		}),
	},
}
</script>
