<template>
	<CategoriesPage />
</template>

<script>
import CategoriesPage from '@/pages/categories/CategoriesPage.vue'

export default {
	components: { CategoriesPage },
	mounted() {
		this.$store.dispatch('categoryProducts', this.$route.params.id.split('-').at(-1))
		this.$store.dispatch('categories')
	},
}
</script>
