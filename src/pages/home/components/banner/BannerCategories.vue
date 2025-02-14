<template>
	<div class="hidden w-[170px] h-full lg:w-[250px] md:block">
		<div
			v-if="categories === null"
			class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-48 mb-4"
		></div>
		<ul v-for="category in categories" v-else :key="category.id">
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
		}),
	},
}
</script>
