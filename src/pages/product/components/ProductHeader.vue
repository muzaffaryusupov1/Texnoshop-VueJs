<template>
	<div class="mt-5 max-md:mt-3">
		<div class="container">
			<div
				class="border border-solid border-gray-300 rounded-md bg-white p-5 flex gap-x-5 max-lg:p-3 max-lg:gap-x-4 max-[870px]:p-2 max-[870px]:gap-x-2.5 max-md:flex-col max-[870px]:items-center max-md:w-full"
			>
				<div class="w-[380px] mr-8 max-[870px]:mr-2 max-md:w-full max-md:mb-6">
					<SwiperImages :image="product.images" :key="product.images" />
				</div>

				<div class="flex-auto max-md:w-full max-md:px-3 max-md:pb-3 max-sm:px-1">
					<h3
						class="font-semibold text-xl tracking-[-0.01em] text-black mb-2 max-[870px]:mb-1.5 max-[870px]:text-base"
					>
						{{ product?.title }}
					</h3>
					<div
						class="flex items-center gap-7 mb-[14px] max-[870px]:gap-4 max-[870px]:mb-2 max-sm:gap-2"
					>
						<div class="relative">
							<div class="flex items-center gap-2 max-[870px]:gap-1">
								<div class="flex items-center gap-1 max-[870px]:gap-0.5 max-sm:gap-0">
									<span class="mb-1">
										<StarIcon class="fill-orange" />
									</span>
								</div>
								<span class="font-normal text-base text-orange max-[870px]:text-sm max-sm:text-xs">
									{{ product?.rating }} baho
								</span>
							</div>
						</div>

						<div class="flex items-center gap-x-2 max-[870px]:gap-x-1">
							<span class="w-5 h-5">
								<MessageSmallIcon />
							</span>
							<span class="font-normal text-base text-text-gray max-[870px]:text-sm max-sm:text-xs">
								{{ product?.reviewCount }} ta sharhlar
							</span>
						</div>

						<div class="flex items-center gap-x-2 max-[870px]:gap-x-1">
							<span class="w-5 h-5">
								<BasketIcon />
							</span>
							<span class="font-normal text-base text-text-gray max-[870px]:text-sm max-sm:text-xs">
								{{ product?.sold }} ta sotilgan
							</span>
						</div>
					</div>

					<div class="mb-2">
						<p class="text-[14px] leading-5 line-through text-gray-600 max-[870px]:text-xs">
							{{ product?.oldPrice?.toLocaleString() }} UZS
						</p>
						<p class="font-bold text-2xl text-orange max-[870px]:text-xl">
							{{ product?.price?.toLocaleString() }} UZS
						</p>
					</div>

					<ul
						class="py-[14px] mb-[14px] max-[870px]:py-2 max-[870px]:mb-2 border-t-1 border-r-0 border-b-1 border-l-0 border-solid border-wheat max-w-[70%] max-[870px]:max-w-full max-md:m-0 max-md:pt-2 max-md:pb-0 flex flex-col gap-2 max-sm:gap-1"
					>
						<li class="flex gap-x-1 mb-1">
							<strong class="text-base leading-[110%] text-black max-[870px]:text-sm"
								>Brendi:</strong
							>
							<span
								class="flex-auto border-b-2 border-t-0 border-r-0 border-l-0 border-dotted border-gray-300"
							></span>
							<span class="text-base leading-[110%] text-black max-[870px]:text-sm">{{
								product?.brand?.title
							}}</span>
						</li>
						<li class="flex gap-x-1 mb-1">
							<strong class="text-base leading-[110%] text-black max-[870px]:text-sm">
								Modeli:
							</strong>
							<span
								class="flex-auto border-b-2 border-t-0 border-r-0 border-l-0 border-dotted border-gray-300"
							></span>
							<span class="text-base leading-[110%] text-black max-[870px]:text-sm">{{
								product?.model
							}}</span>
						</li>
						<li class="flex gap-x-1">
							<strong class="text-base leading-[110%] text-black max-[870px]:text-sm">
								Holati:
							</strong>
							<span
								class="flex-auto border-b-2 border-t-0 border-r-0 border-l-0 border-dotted border-gray-300"
							></span>
							<span class="text-base leading-[110%] text-green max-[870px]:text-sm">
								Sotuvda bor
							</span>
						</li>
					</ul>

					<div
						class="flex gap-x-2 max-w-[450px] max-[870px]:max-w-[300px] max-[870px]:gap-x-1 max-md:max-w-full max-md:hidden"
					>
						<Button @click="addToCart">Savatga qo'shish</Button>
						<ButtonWhite>Hozir harid olish</ButtonWhite>
					</div>
				</div>
				<div
					class="hidden fixed bottom-0 bg-white w-full h-16 max-md:flex items-center justify-between px-4 py-2 border border-solid border-gray-400 z-50 shadow-[0px_-5px_17px_1px] shadow-shadow-cc"
				>
					<div>
						<p class="font-normal text-sm line-through text-gray-600 max-sm:text-xs">
							{{ product?.oldPrice?.toLocaleString() }} UZS
						</p>
						<p class="font-semibold text-2xl text-black max-sm:text-base">
							{{ product?.price?.toLocaleString() }} UZS
						</p>
					</div>
					<div class="w-64 max-sm:w-40">
						<Button class="max-[420px]:p-1" @click="addToCart">Savatga qo'shish</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
import { mapState } from 'vuex'
import SwiperImages from './SwiperImages.vue'

export default {
	components: { SwiperImages },
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState({
			items: state => state.cart.items,
		}),
	},
	methods: {
		addToCart() {
			this.$store.commit('addToCart', this.product)
			toastify("Savatga qo'shildi", 'success')
		},
	},
	watch: {
		$route({ params }) {
			this.$store.dispatch('productsDetail', params.slug)
		},
	},
}
</script>
