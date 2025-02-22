<template>
	<div class="max-[500px]:h-[300px] flex">
		<div class="max-[640px]:mb-2 mb-5 w-[200px] h-[200px] mr-5">
			<img :src="cart.mainImage" alt="image" class="w-full h-full object-contain" />
		</div>
		<div class="max-[500px]:mt-1 mt-3 mb-2 max-[500px]:mb-0.5 w-full">
			<div>
				<p
					class="font-medium text-xl tracking-[0.4px] text-black my-[5px] max-[500px]:my-1 max-[500px]:text-xs"
				>
					{{ cart.title.split(' ').slice(0, 10).join(' ') }}
				</p>
			</div>
			<div class="flex items-start gap-2">
				<p class="font-medium text-base max-[500px]:text-sm text-primary">
					{{ cart.price.toLocaleString() }} UZS
				</p>
				<p
					class="font-bold text-sm text-gray-500 opacity-50 line-through mb-4 max-[500px]:mb-1 max-[500px]:text-xs"
				>
					{{ cart.oldPrice.toLocaleString() }} UZS
				</p>
			</div>
			<div class="flex items-center gap-3 w-full">
				<div class="flex items-center gap-2">
					<div class="flex gap-0.5">
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
					</div>
					<div class="mr-1">
						<p class="text-base leading-3 text-orange">{{ cart.rating }}</p>
					</div>
				</div>

				<p class="text-base text-black leading-3 font-medium">{{ cart.reviewcount }} reviews</p>
				<p v-if="cart.sold" class="text-base text-green leading-3 font-medium">
					Available for sale
				</p>
			</div>
			<p class="text-base text-black font-medium mt-3">{{ cart.desc.substring(0, 200) }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CartList',
	props: {
		cart: {
			type: Object,
			required: true,
		},
	},
}
</script>
