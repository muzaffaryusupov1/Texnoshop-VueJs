<template>
	<div class="mb-[30px]">
		<div class="container">
			<div>
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

				<p v-else class="text-2xl">MahsulotLar topilmadi</p>
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
