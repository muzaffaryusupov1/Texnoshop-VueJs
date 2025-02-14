<template>
	<div class="flex flex-col gap-[10px] my-6">
		<div
			class="relative flex items-center rounded-xl border border-solid border-gray-400 p-[9px] bg-white"
			v-for="product in products"
			:key="product.id"
		>
			<RouterLink :to="`/product/${product.slug}`" class="w-[210px] h-[210px] mr-[10px]">
				<img :src="product.mainImage" alt="product img" class="w-full h-full object-contain" />
			</RouterLink>
			<div class="w-[700px]">
				<h2 class="font-medium text-base leading-[137%] text-black">{{ product.title }}</h2>
				<div class="flex items-center gap-x-2 py-[10px]">
					<p class="font-semibold text-xl leading-[140%] tracking-[-0.01em] text-black">
						{{ product.price.toLocaleString() }} UZS
					</p>
					<p class="font-semibold text-base line-through text-gray-500">
						{{ product.oldPrice.toLocaleString() }} UZS
					</p>
				</div>

				<div class="relative py-2">
					<div class="flex items-center">
						<div
							class="flex items-center justify-center relative after:content-[''] after:w-[6px] after:h-[6px] after:bg-white-100 after:absolute after:top-1/2 after:right-0 after:rounded-[50%] after:translate-x-0 after:translate-y-[-50%]"
						>
							<div class="flex items-center">
								<span>
									<StarIcon class="fill-orange" />
								</span>
								<span>
									<StarIcon class="fill-orange" />
								</span>
								<span>
									<StarIcon class="fill-orange" />
								</span>
								<span>
									<StarIcon class="fill-orange" />
								</span>
								<span>
									<StarIcon />
								</span>
							</div>
							<span class="font-normal text-base text-orange pt-0 pr-4 pb-0 pl-[5px]">{{
								product.rating
							}}</span>
						</div>
						<div
							class="relative after:content-[''] after:w-[6px] after:h-[6px] after:bg-white-100 after:absolute after:top-1/2 after:right-0 after:rounded-[50%] after:translate-x-0 after:translate-y-[-50%]"
						>
							<p class="font-normal text-base text-gray-500 mx-[10px] pr-2">
								{{ product.sold }} sold
							</p>
						</div>
						<p class="font-normal text-base text-green ml-[6px] pl-2">Available for sale</p>
					</div>
				</div>
				<p class="font-normal text-base leading-[150%] tracking-[-0.01em] text-gray-600 w-[80%]">
					{{ product.desc.split(' ').slice(0, 8).join(' ') }}
				</p>
				<RouterLink :to="`/product/${product.slug}`">
					<button class="font-medium text-base text-primary mt-[5px]">View details</button>
				</RouterLink>
			</div>

			<button
				class="absolute top-0 right-[-10px] m-5 p-2 border border-solid border-gray-300 rounded-md"
			>
				<HeartIcon />
			</button>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			products: state => state.categories.products,
		}),
	},
}
</script>
