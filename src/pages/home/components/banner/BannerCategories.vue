<template>
	<div class="hidden w-[170px] h-full lg:w-[250px] md:block">
		<div v-if="isLoading">
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
		</div>
		<ul v-for="category in categories" :key="category.id" v-else>
			<li>
				<RouterLink
					:to="`/category/${category.slug}-${category.id}`"
					class="block rounded-md p-[10px] font-normal text-base text-gray-600 hover:bg-primary-light hover:font-medium hover:text-black"
				>
					{{ category.title }}
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			categories: state => state.categories.categories,
			isLoading: state => state.categories.isLoading,
		}),
	},
}
</script>
