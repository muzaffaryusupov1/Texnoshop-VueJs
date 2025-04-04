<template>
	<div
		class="w-[450px] h-[490px] flex flex-col gap-4 bg-white border border-gray-300 py-3 px-2 rounded-lg overflow-y-scroll scroll max-md:w-full max-md:h-80 max-sm:px-1 max-md:gap-2 max-sm:gap-1 max-sm:py-2"
		:class="items.length >= 2 ? 'max-[500px]:h-40' : 'max-[500px]:h-full'"
	>
		<div v-if="!!items.length">
			<div
				class="border border-gray-300 rounded-md py-5 px-2 flex items-center transition ease-in-out duration-200 hover:shadow-md cursor-pointer mb-5 last:mb-0 max-md:mb-3 max-sm:mb-1.5 max-md:py-3 max-sm:py-1.5 max-sm:px-1 max-sm:hover:shadow-none"
				v-for="product in items"
				:key="product.id"
			>
				<div class="w-32 h-20">
					<img :src="product.mainImage" :alt="product.title" class="w-full h-full object-contain" />
				</div>
				<div
					class="flex items-center justify-between gap-x-10 ml-5 w-full max-md:gap-x-5 max-sm:gap-x-2 max-sm:ml-1.5"
				>
					<div>
						<p class="text-base font-medium text-black max-sm:text-sm">{{ product.title }}</p>
						<div class="flex gap-3 max-sm:gap-1.5">
							<p class="text-base font-normal text-black max-sm:text-base">
								{{ product.price.toLocaleString() }}UZS
							</p>
							<p class="text-base font-normal text-green max-sm:text-sm">{{ product.qty }} ta</p>
						</div>
					</div>
					<button class="h-10 max-sm:h-5" @click="handleDelete(product)">
						<CloseIcon />
					</button>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center flex-col gap-5 h-full max-sm:gap-3" v-else>
			<h3 class="text-2xl font-normal text-black max-sm:text-xl">Sizda savatcha bo'sh!</h3>
			<p class="text-lg font-medium text-gray-600 text-center max-sm:text-base">
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
