<template>
	<div class="my-6">
		<div class="container">
			<div>
				<div class="mb-6">
					<h1 class="font-semibold text-2xl tracking-[-0.02px] max-md:text-xl max-sm:text-base">
						Barcha maxsulotlar
					</h1>
				</div>
				<div
					class="grid grid-cols-5 gap-1 max-[1120px]:gap-3 max-[1120px]:grid-cols-4 max-[920px]:grid-cols-3 max-[720px]:grid-cols-2 xl:gap-4"
				>
					<div
						class="bg-white border border-solid border-gray-300 shadow-lg shadow-shadow-cc relative rounded-xl"
						v-for="product in data"
						:key="product.id"
					>
						<button
							class="group transition-all border border-solid border-gray-300 p-1.5 rounded-full absolute right-4 top-4 z-50 max-[620px]:p-1"
							title="Add to Wish List"
							@click="addToFavorite(product)"
						>
							<HeartIcon />
						</button>

						<RouterLink :to="`/product/${product.slug}`" :key="product.id">
							<Cart :cart="product" />
						</RouterLink>

						<button
							class="group transition-all ease-out duration-300 border border-solid border-primary-light p-2 rounded-xl absolute right-4 bottom-4 z-50 hover:bg-primary h-10 max-[620px]:top-12 max-[620px]:right-4 max-[620px]:p-1 max-[620px]:rounded-full max-[620px]:h-fit max-sm:hover:bg-transparent"
							title="Add to Cart"
							@click="addToCart(product)"
						>
							<CartIcon
								class="fill-primary group-hover:fill-white max-sm:group-hover:fill-primary"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			data: state => state.products.data,
			isLoading: state => state.products.isLoading,
			items: state => state.cart.items,
			favoriteItems: state => state.favorites.items,
		}),
	},
	mounted() {
		this.$store.dispatch('products')
	},
	methods: {
		addToCart(product) {
			this.$store.commit('addToCart', product)
			toastify("Savatga qo'shildi", 'success')
		},
		addToFavorite(product) {
			this.$store.commit('addToFavorite', product)
			toastify("Sevimlilarga qo'shildi", 'success')
		},
	},
}
</script>
