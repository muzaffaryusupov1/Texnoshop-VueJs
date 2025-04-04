<template>
	<div class="categories-page">
		<div class="container">
			<div class="flex">
				<CategorySidebar />
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import { CategorySidebar } from './components'

export default {
	components: { CategorySidebar },
	mounted() {
		this.$store.dispatch('categories')
		this.$store.dispatch('brands')
	},
}
</script>
