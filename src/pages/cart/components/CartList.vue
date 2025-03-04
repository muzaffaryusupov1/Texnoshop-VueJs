<template>
	<div
		class="w-full bg-white border border-solid border-gray-300 rounded-lg p-5 max-md:p-4 max-sm:p-3 max-[420px]:py-3 max-[420px]:px-1.5"
	>
		<div>
			<CartProduct :items="items" />
		</div>

		<div class="flex items-center justify-between mt-4 max-sm:mt-1.5">
			<div>
				<Button @click="handleClick">
					<div class="flex items-center gap-2">
						<ArrowBackIcon class="fill-white group-hover:fill-primary" />
						<span class="text-base max-sm:text-sm">Bosh Sahifa</span>
					</div>
				</Button>
			</div>

			<div class="w-[200px] max-sm:w-[120px]">
				<ButtonRed @click="removeAllFromCart">Savatchani tozalash</ButtonRed>
			</div>
		</div>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
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
		removeAllFromCart() {
			this.$store.commit('removeAllFromCart')
			toastify('Savatcha tozalandi', 'error')
		},
	},
}
</script>
