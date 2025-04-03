<template>
	<section class="my-6 max-md:my-3">
		<div class="container">
			<div class="rounded-md border border-solid border-gray-300 shadow shadow-shadow-cc bg-white">
				<TabsNavbar
					:tabs="['Mahsulot tavsifi', 'Xususiyatlari']"
					:selected="selected"
					@selected="setSelected"
					v-for="product in products"
					:key="product.id"
				>
					<Tab :is-selected="selected === 'Mahsulot tavsifi'">
						<ProductDescription :product-description="product.desc" />
					</Tab>
					<Tab :is-selected="selected === 'Xususiyatlari'">
						<ProductCharacteristic :product-characteristic="product.attributes" />
					</Tab>
				</TabsNavbar>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import { ProductCharacteristic, ProductDescription } from '..'
import Tab from './Tab.vue'
import TabsNavbar from './TabsNavbar.vue'

export default {
	components: { TabsNavbar, Tab, ProductCharacteristic, ProductDescription },
	data() {
		return {
			selected: 'Mahsulot tavsifi',
		}
	},
	methods: {
		setSelected(tab) {
			this.selected = tab
		},
	},
	computed: {
		...mapState({
			products: state => state.products.product,
			isLoading: state => state.products.isLoading,
		}),
	},
}
</script>
