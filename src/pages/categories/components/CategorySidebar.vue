<template>
	<div class="px-5 mt-6 mr-7 mb-6 ml-0">
		<div class="border-t border-r-0 border-b-0 border-l-0 border-solid border-gray-300 py-[14px]">
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between py-[14px] mb-[10px]">
					<h2 class="font-semibold text-base text-black">Categories</h2>
					<span>
						<ArrowIcon />
					</span>
				</div>
				<div v-for="category in categories" :key="category.id">
					<RouterLink
						:to="`/category/${category.slug}-${category.id}`"
						class="font-normal text-base text-primary"
					>
						<p class="font-normal text-base text-gray-600 py-[2px]">{{ category.title }}</p>
					</RouterLink>
				</div>
			</div>
			<BrandList />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import BrandList from './BrandList.vue'

export default {
	components: { BrandList },
	computed: {
		...mapState({
			categories: state => state.categories.categories,
		}),
	},
}
</script>
