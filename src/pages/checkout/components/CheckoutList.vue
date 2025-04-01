<template>
	<div
		class="w-[450px] h-[490px] flex flex-col gap-4 bg-white border border-gray-300 py-3 px-2 rounded-lg overflow-y-scroll scroll"
	>
		<div v-if="!!items.length">
			<div
				class="border border-gray-300 rounded-md py-5 px-2 flex items-center transition ease-in-out duration-200 hover:shadow-md cursor-pointer mb-5 last:mb-0"
				v-for="product in items"
				:key="product.id"
			>
				<div class="w-32 h-20">
					<img :src="product.mainImage" :alt="product.title" class="w-full h-full object-contain" />
				</div>
				<div class="flex items-center justify-between gap-x-10 ml-5 w-full">
					<div>
						<p class="text-base font-medium text-black">{{ product.title }}</p>
						<div class="flex gap-3">
							<p class="text-base font-normal text-black">
								{{ product.price.toLocaleString() }}UZS
							</p>
							<p class="text-base font-normal text-green">{{ product.qty }} ta</p>
						</div>
					</div>
					<button class="h-10" @click="handleDelete(product)">
						<CloseIcon />
					</button>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center flex-col gap-5 h-full" v-else>
			<h3 class="text-2xl font-normal text-black">Sizda savatcha bo'sh!</h3>
			<p class="text-lg font-medium text-gray-600 text-center">
				Mahsulot Qo'shish uchun bosh sahifaga qayting
			</p>
			<Button @click="$router.push('/')">Bosh Sahifa</Button>
		</div>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			items: state => state.cart.items,
		}),
	},
	methods: {
		handleDelete(item) {
			this.$store.commit('removeFromCart', item)
			toastify("Savatdan o'chirildi", 'error')
		},
	},
}
</script>
