<template>
	<div class="flex-auto bg-white border border-solid border-gray-300 rounded-lg p-5">
		<CartProduct />
		<div class="flex items-center justify-between">
			<div>
				<Button @click="handleClick">
					<div class="flex items-center gap-2">
						<ArrowBackIcon class="fill-white group-hover:fill-primary" />
						<span class="text-base">To Home</span>
					</div>
				</Button>
			</div>

			<div class="w-[140px]">
				<ButtonRed>Remove All</ButtonRed>
			</div>
		</div>
	</div>
</template>

<script>
import CartProduct from './CartProduct.vue'

export default {
	components: { CartProduct },
	methods: {
		handleClick() {
			this.$router.push('/')
		},
	},
}
</script>
