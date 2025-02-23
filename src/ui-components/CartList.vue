<template>
	<div class="flex">
		<div
			class="max-[640px]:mb-2 mb-5 w-[200px] h-[200px] max-[500px]:w-[150px] max-[500px]:h-[150px] mr-5 max-[420px]:mr-1.5 max-[420px]:mb-0 max-[420px]:w-[140px] max-[420px]:h-[140px]"
		>
			<img :src="cart.mainImage" alt="image" class="w-full h-full object-contain" />
		</div>
		<div class="mt-3 mb-2 w-full max-[420px]:mb-1">
			<div>
				<p
					class="font-medium text-xl tracking-[0.4px] text-black my-[5px] max-[500px]:text-base max-[420px]:text-xs"
				>
					{{ cart.title.split(' ').slice(0, 10).join(' ') }}
				</p>
			</div>
			<div class="flex items-start gap-2 max-[420px]:gap-0">
				<p
					class="font-medium text-base max-[980px]:text-sm text-primary max-[500px]:text-xs max-[420px]:mr-1.5"
				>
					{{ cart.price.toLocaleString() }} UZS
				</p>
				<p
					class="font-bold text-sm text-gray-500 opacity-50 line-through mb-4 max-[500px]:text-xs max-[500px]:mb-2"
				>
					{{ cart.oldPrice.toLocaleString() }} UZS
				</p>
			</div>
			<div
				class="flex items-center gap-3 w-full max-[980px]:gap-2 max-sm:gap-4 max-[420px]:gap-1.5"
			>
				<div class="flex items-center gap-2 max-sm:gap-4 max-[420px]:gap-1.5">
					<div class="flex gap-0.5">
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
						<StarIcon class="fill-orange" />
					</div>
					<div class="mr-1">
						<p class="text-base leading-3 text-orange max-[980px]:text-sm">{{ cart.rating }}</p>
					</div>
				</div>

				<p class="text-base text-black leading-3 font-medium max-[980px]:text-sm">
					{{ cart.reviewcount }} reviews
				</p>
				<p
					v-if="cart.sold"
					class="text-base text-green leading-3 font-medium max-[980px]:text-sm max-sm:hidden"
				>
					Available for sale
				</p>
			</div>
			<p
				v-if="cart.sold"
				class="text-base text-green leading-3 font-medium max-[980px]:text-sm hidden max-sm:block mt-5 max-[500px]:mt-2"
			>
				Available for sale
			</p>
			<p
				class="text-base text-black font-medium mt-3 max-[980px]:text-sm max-sm:hidden max-[500px]:mt-1"
			>
				{{ cart.desc.substring(0, 200) }}
			</p>
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
