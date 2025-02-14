<template>
	<section class="mt-5">
		<div class="container">
			<div
				class="rounded-md bg-white border-[1px] border-solid border-[#dee2e7] py-5 px-4 flex h-[400px] gap-x-[10px] max-[640px]:p-0 max-[620px]:h-[250px]"
			>
				<div v-if="categories === null">Loading...</div>
				<BannerCategories v-else :categories="categories" />

				<div v-if="categories === null">Loading...</div>
				<BannerSlider v-else :categories="categories" />
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import BannerCategories from './BannerCategories.vue'
import BannerSlider from './BannerSlider.vue'

export default {
	components: { BannerCategories, BannerSlider },
	computed: {
		...mapState({
			categories: state => state.categories.categories,
		}),
	},
	mounted() {
		this.$store.dispatch('categories')
		this.$store.dispatch('banners')
	},
}
</script>
