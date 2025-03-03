<template>
	<div
		class="rounded-md py-6 px-5 bg-white max-md:py-4 max-md:px-4 max-sm:py-3 max-sm:px-2 max-[420px]:p-1"
	>
		<div
			class="pb-5 border-t-0 border-r-0 border-b border-l-0 border-solid border-gray-300 flex gap-x-[10px] mb-5 last:mb-0"
			v-for="item in items"
			:key="item.id"
		>
			<div
				class="border border-solid border-wheat rounded-md w-[88px] h-[88px] p-[5px] max-sm:p-0.5 max-md:w-[100px] max-md:h-[100px]"
			>
				<img :src="item.mainImage" alt="product img" class="w-full h-full object-contain" />
			</div>
			<div class="flex justify-between flex-auto">
				<div class="flex-auto flex flex-col mb-3 last:mb-0">
					<p
						class="font-medium text-base leading-[137%] text-black max-md:text-sm max-md:leading-[100%] max-sm:w-1/2 max-[420px]:w-2/3"
					>
						{{ item.title }}
					</p>
					<p
						class="font-normal text-base leading-[150%] tracking-[-0.001em] text-gray-500 max-md:text-sm max-md:leading-[120%]"
					>
						{{ item.model }}
					</p>
					<div class="w-[100px] mt-3">
						<ButtonRed class="max-sm:text-sm" @click="removeFromCart(item)">O'chirish</ButtonRed>
					</div>
				</div>
				<div>
					<p
						class="font-medium text-base leading-[137%] text-black max-md:text-sm max-md:leading-[120%]"
					>
						{{ item.price.toLocaleString() }} UZS
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		items: {
			type: Object,
			required: true,
		},
	},
	methods: {
		removeFromCart(item) {
			this.$store.commit('removeFromCart', item)
		},
	},
}
</script>
