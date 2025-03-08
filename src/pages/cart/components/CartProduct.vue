p
<template>
	<div
		class="rounded-md py-6 px-5 bg-white max-md:py-4 max-md:px-4 max-sm:py-3 max-sm:px-2 max-[420px]:p-0"
		v-auto-animate
	>
		<div
			class="pb-5 border-t-0 border-r-0 border-b border-l-0 border-solid border-gray-300 flex gap-x-[10px] mb-5 last:mb-0 max-sm:pb-3"
			v-for="item in items"
			:key="item.id"
		>
			<RouterLink :to="`/product/${item.slug}`">
				<div
					class="border border-solid border-wheat rounded-md w-[88px] h-[88px] p-[5px] max-sm:p-0.5 max-md:w-[100px] max-md:h-[100px]"
				>
					<img :src="item.mainImage" alt="product img" class="w-full h-full object-contain" />
				</div>
			</RouterLink>
			<div class="flex-auto">
				<p
					class="font-medium text-base leading-[137%] text-black max-md:text-sm max-md:leading-[100%] mr-3 max-[420px]:text-xs"
				>
					{{ item.title }}
				</p>
				<p
					class="font-normal text-base leading-[150%] tracking-[-0.001em] text-gray-500 max-md:text-sm max-md:leading-[120%] max-[420px]:text-xs"
				>
					{{ item.model }}
				</p>
				<div class="w-[100px] mt-3 max-sm:w-[80px]">
					<ButtonRed class="max-sm:text-sm" @click="removeFromCart(item)">O'chirish</ButtonRed>
				</div>
			</div>
			<div class="flex flex-col items-end max-sm:justify-end">
				<p
					class="font-medium text-base leading-[137%] mb-3 max-sm:mb-1 text-black max-md:text-sm max-md:leading-[120%] max-[420px]:text-xs"
				>
					{{ item.price.toLocaleString() }} UZS
				</p>
				<Counter
					:count="item?.qty"
					:onIncrement="() => handleIncrement(item?.id)"
					:onDecrement="() => handleDecrement(item?.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { Counter } from '@/components'
import { toastify } from '@/utils/helpers'

export default {
	components: { Counter },
	props: {
		items: {
			type: Object,
			required: true,
		},
	},
	methods: {
		removeFromCart(item) {
			this.$store.commit('removeFromCart', item)
			toastify("Savatdan o'chirildi", 'error')
		},
		handleIncrement(id) {
			this.$store.commit('increment', id)
		},
		handleDecrement(id) {
			this.$store.commit('decrement', id)
		},
	},
}
</script>
