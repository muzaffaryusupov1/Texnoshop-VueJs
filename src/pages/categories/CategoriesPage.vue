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
}
</script>
