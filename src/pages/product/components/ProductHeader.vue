<template>
	<div class="mt-5">
		<div class="container">
			<div class="border border-solid border-gray-300 rounded-md bg-white p-5 flex gap-x-5">
				<div class="w-[380px] mr-8">
					<SwiperImages :image="product.images" :key="product.images" />
				</div>

				<div class="flex-auto">
					<h3 class="font-semibold text-xl tracking-[-0.01em] text-black mb-2">
						{{ product?.title }}
					</h3>
					<div class="flex items-center gap-7 mb-[14px]">
						<div class="relative">
							<div class="flex items-center gap-2">
								<div class="flex items-center gap-1">
									<span class="mb-[2px]">
										<StarIcon class="fill-orange" />
									</span>
									<span class="mb-[2px]">
										<StarIcon class="fill-orange" />
									</span>
									<span class="mb-[2px]">
										<StarIcon class="fill-orange" />
									</span>
									<span class="mb-[2px]">
										<StarIcon class="fill-orange" />
									</span>
								</div>
								<span class="font-normal text-base text-orange">{{ product?.rating }} rating</span>
							</div>
						</div>

						<div class="flex items-center gap-x-2">
							<span class="w-5 h-5">
								<MessageSmallIcon />
							</span>
							<span class="font-normal text-base text-text-gray"
								>{{ product?.reviewCount }} reviews</span
							>
						</div>

						<div class="flex items-center gap-x-2">
							<span class="w-5 h-5">
								<BasketIcon />
							</span>
							<span class="font-normal text-base text-text-gray">{{ product?.sold }} sold</span>
						</div>
					</div>

					<div class="mb-2">
						<p class="text-[14px] leading-5 line-through text-orange-primary">
							{{ product?.oldPrice?.toLocaleString() }} UZS
						</p>
						<p class="font-bold text-2xl text-orange">{{ product?.price?.toLocaleString() }} UZS</p>
					</div>

					<ul
						class="py-[14px] mb-[14px] border-t-1 border-r-0 border-b-1 border-l-0 border-solid border-wheat max-w-[70%]"
					>
						<li class="flex gap-x-1 mb-1">
							<strong class="text-base leading-[110%] text-black">Brand:</strong>
							<span
								class="flex-auto border-b-2 border-t-0 border-r-0 border-l-0 border-dotted border-gray-300"
							></span>
							<span class="text-base leading-[110%] text-black">{{ product?.brand?.title }}</span>
						</li>
						<li class="flex gap-x-1 mb-1">
							<strong class="text-base leading-[110%] text-black">Model:</strong>
							<span
								class="flex-auto border-b-2 border-t-0 border-r-0 border-l-0 border-dotted border-gray-300"
							></span>
							<span class="text-base leading-[110%] text-black">{{ product?.model }}</span>
						</li>
						<li class="flex gap-x-1">
							<strong class="text-base leading-[110%] text-black">Status:</strong>
							<span
								class="flex-auto border-b-2 border-t-0 border-r-0 border-l-0 border-dotted border-gray-300"
							></span>
							<span class="text-base leading-[110%] text-black">Available for sale</span>
						</li>
					</ul>

					<div class="flex gap-x-2 max-w-[450px]">
						<Button>Add to cart</Button>
						<ButtonWhite>Shop now</ButtonWhite>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwiperImages from './SwiperImages.vue'

export default {
	components: { SwiperImages },
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
}
</script>
