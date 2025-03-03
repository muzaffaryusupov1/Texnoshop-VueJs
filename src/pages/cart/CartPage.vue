<template>
	<div class="pt-6 mb-6">
		<div class="container">
			<h1 class="font-semibold text-2xl tracking-[-0.01em] text-black max-md:text-xl">
				Savatcha ({{ items.length }})
			</h1>
			<div v-if="items.length === 0">Savatcha bo'sh</div>
			<div class="w-full mt-6 flex max-md:flex-col" v-else>
				<CartList :items="items" />
				<CartInfo :items="items" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { CartInfo, CartList } from './components'

export default {
	components: { CartInfo, CartList },
	computed: {
		...mapState({
			items: state => state.cart.items,
		}),
	},
}
</script>
