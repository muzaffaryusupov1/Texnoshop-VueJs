<template>
	<swiper class="w-[400px] h-[350px] max-md:w-full max-md:h-[500px] max-sm:h-[430px]">
		<swiperSlide v-for="images in image" :key="images">
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
