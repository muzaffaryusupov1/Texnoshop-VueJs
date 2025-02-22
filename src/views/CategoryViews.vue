<template>
	<CategoriesPage />
</template>

<script>
import CategoriesPage from '@/pages/categories/CategoriesPage.vue'

export default {
	components: { CategoriesPage },
	mounted() {
		this.$store.dispatch('categories')
		this.$store.dispatch('brands')
	},
}
</script>
