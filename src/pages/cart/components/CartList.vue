<template>
	<div
		class="w-full bg-white border border-solid border-gray-300 rounded-lg p-5 max-md:p-4 max-sm:p-3 max-[420px]:py-3 max-[420px]:px-1"
	>
		<div>
			<CartProduct :items="items" />
		</div>

		<div class="flex items-center justify-between">
			<div>
				<Button @click="handleClick">
					<div class="flex items-center gap-2">
						<ArrowBackIcon class="fill-white group-hover:fill-primary" />
						<span class="text-base max-sm:text-sm">Bosh Sahifa</span>
					</div>
				</Button>
			</div>

			<div class="w-[200px]">
				<ButtonRed @click="$store.commit('removeAllFromCart')">Savatchani tozalash</ButtonRed>
			</div>
		</div>
	</div>
</template>

<script>
import CartProduct from './CartProduct.vue'

export default {
	components: { CartProduct },
	props: {
		items: {
			type: Object,
			required: true,
		},
	},
	methods: {
		handleClick() {
			this.$router.push('/')
		},
	},
}
</script>
