<template>
	<div
		class="py-4 px-3 h-[390px] max-[500px]:h-[350px] flex flex-col justify-between max-md:py-3 max-md:px-4 max-sm:py-2 max-sm:px-3"
	>
		<div class="max-[640px]:py-1 py-2 max-[640px]:px-2 px-4 max-[640px]:mb-2 mb-5 w-full h-[200px]">
			<img :src="cart.mainImage" alt="image" class="w-full h-full object-contain" />
		</div>
		<div>
			<p
				class="font-normal text-sm tracking-[0.4px] text-gray-500 my-[5px] max-[500px]:my-1 max-[500px]:text-xs"
			>
				{{ cart.title.split(' ').slice(0, 10).join(' ') }}
			</p>
			<div class="flex max-sm:flex-col">
				<div class="flex">
					<StarIcon class="fill-orange" />
					<p class="font-normal text-sm tracking-[0.4px] ml-2 text-gray-500 max-[500px]:text-xs">
						{{ cart.rating }} baho
					</p>
				</div>
				<p class="font-normal text-sm tracking-[0.4px] ml-1 text-gray-500 max-[500px]:text-xs">
					({{ cart.reviewCount }} ta sharhlar)
				</p>
			</div>
		</div>
		<div
			class="max-[500px]:mt-1 mt-2 border-t border-r-0 border-b-0 border-l-0 border-solid border-gray-300 max-[500px]:pt-1 pt-4 mb-2 max-[500px]:mb-0.5"
		>
			<p
				class="font-bold text-sm text-gray-500 opacity-50 line-through mb-1 max-[500px]:mb-1 max-[500px]:text-xs"
			>
				{{ cart.oldPrice.toLocaleString() }} UZS
			</p>
			<p class="font-medium text-base max-[500px]:text-sm text-primary">
				{{ cart.price.toLocaleString() }} UZS
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Cart',
	props: {
		cart: {
			type: Object,
			required: true,
		},
	},
}
</script>
