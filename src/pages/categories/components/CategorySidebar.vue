<template>
	<div
		class="px-5 mt-6 mr-7 mb-6 ml-0 max-md:hidden max-xl:mr-5 max-lg:mr-2 max-xl:px-4 max-lg:px-2 bg-white"
	>
		<div class="py-[14px] w-[240px] max-xl:w-[220px] max-[1130px]:w-[170px] max-lg:w-[150px]">
			<div class="flex flex-col gap-2 relative max-lg:gap-1.5">
				<div class="flex items-center justify-between py-[14px] mb-[10px]">
					<h2 class="font-semibold text-base text-black">Kataloglar</h2>
					<span>
						<ArrowIcon />
					</span>
				</div>
				<div v-for="category in categories" :key="category.id">
					<RouterLink
						:to="`/category/${category.slug}-${category.id}`"
						class="font-normal text-base text-primary max-lg:text-sm"
					>
						<p class="font-normal text-base text-gray-600 py-[2px] max-lg:text-sm">
							{{ category.title }}
						</p>
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
