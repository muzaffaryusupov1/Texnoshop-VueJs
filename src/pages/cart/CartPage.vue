<template>
	<div class="pt-6 mb-6">
		<div class="container">
			<div v-if="items.length === 0" class="flex justify-center">
				<EmptyPage
					image="/images/empty-cart.webp"
					title="Savatda hozircha mahsulot yo'q."
					description="Bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali toping."
				/>
			</div>
			<div v-else>
				<h1 class="font-semibold text-2xl tracking-[-0.01em] text-black max-md:text-xl">
					Savatcha ({{ items.length }})
				</h1>
				<div class="w-full mt-6 flex max-md:flex-col">
					<CartList :items="items" />
					<CartInfo :items="items" />
				</div>
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
