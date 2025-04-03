<template>
	<div className="product-page">
		<Teleport v-if="isLoading" to="#modal">
			<div class="loader-wrapper">
				<LoadingSpinner />
			</div>
		</Teleport>

		<ProductHeader v-else v-for="products in product" :key="products.id" :product="products" />
		<TabMenu />
		<ReleatedItems v-for="categoryId in product" :key="categoryId.id" :category-id="categoryId" />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { ProductHeader, ReleatedItems } from './components'
import { TabMenu } from './components/tabs'

export default {
	components: { ProductHeader, ReleatedItems, TabMenu },
	computed: {
		...mapState({
			product: state => state.products.product,
			isLoading: state => state.products.isLoading,
		}),
	},
	mounted() {
		this.$store.dispatch('productsDetail', this.$route.params.slug)
	},
}
</script>
