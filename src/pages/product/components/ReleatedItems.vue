<template>
	<div class="mb-[30px]">
		<div class="container">
			<div
				role="status"
				class="text-center flex items-center justify-center mt-36"
				v-if="isLoading"
			>
				<svg
					aria-hidden="true"
					class="w-[50px] h-[50px] text-gray-200 animate-spin dark:text-gray-400 fill-black"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"
					/>
				</svg>
				<span class="sr-only">Loading...</span>
			</div>

			<div v-else>
				<div class="mb-5">
					<h1 class="font-semibold text-xl leading-[140%] tracking-[-0.01em] text-black">
						Tavsiya
					</h1>
				</div>

				<swiper
					v-if="categoryId.category?.id"
					:slidesPerView="5"
					:space-between="20"
					:breakpoints="swiperOptions.breakpoints"
					:navigation="true"
					:modules="modules"
					class="mySwiper"
				>
					<swiper-slide
						v-for="item in recommended"
						:key="item.id"
						class="bg-white border border-solid border-gray-300 shadow-lg shadow-shadow-cc relative rounded-xl"
					>
						<router-link :to="`/product/${item.slug}`">
							<Cart :cart="item" />
						</router-link>
					</swiper-slide>
				</swiper>

				<div v-else>Mahsulot topilmadi</div>
			</div>
		</div>
	</div>
</template>
<script>
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapState } from 'vuex'

export default {
	components: { Swiper, SwiperSlide },
	data() {
		return {
			swiperOptions: {
				breakpoints: {
					0: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1000: {
						slidesPerView: 4,
						spaceBetween: 40,
					},

					1200: {
						slidesPerView: 5,
						spaceBetween: 30,
					},
				},
			},
		}
	},
	props: {
		categoryId: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState({
			recommended: state => state.products.recommended,
			isLoading: state => state.products.isLoading,
		}),
	},
	mounted() {
		this.$store.dispatch('recommendedProducts', this.categoryId.category?.id)
	},
	setup() {
		return {
			modules: [Navigation],
		}
	},
}
</script>
<style></style>
