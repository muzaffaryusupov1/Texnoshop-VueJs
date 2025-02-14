<template>
	<swiper class="w-[400px] h-[350px]">
		<swiperSlide v-for="images in image" :key="image">
			<img :src="images" alt="product image" class="w-full h-full object-contain" />
		</swiperSlide>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
	components: { Swiper, SwiperSlide },
	props: {
		image: {
			type: Object,
			required: true,
		},
	},
}
</script>
