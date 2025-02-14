<template>
	<swiper class="w-[calc(100%-250px)] flex-auto h-full" :slides-per-view="1">
		<swiperSlide class="slider-slide" v-for="banners in data" :key="banners.id">
			<div class="absolute w-full h-full">
				<img :src="banners.image" alt="banner img" class="w-full h-full object-cover" />
			</div>
			<div class="w-full h-full relative p-12">
				<RouterLink
					v-for="category in categories"
					:key="category.id"
					:to="
						category.slug === banners.categorySlug
							? `/category/${category.slug}-${category.id}`
							: ''
					"
				>
					<h3 class="font-bold text-4xl text-black mb-4 max-md:text-2xl max-sm:text-xl">
						{{ category.slug === banners.categorySlug ? banners.title : null }}
					</h3>
				</RouterLink>
			</div>
		</swiperSlide>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapState } from 'vuex'

export default {
	components: { Swiper, SwiperSlide },
	props: {
		categories: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState({
			data: state => state.banners.data,
		}),
	},
}
</script>
