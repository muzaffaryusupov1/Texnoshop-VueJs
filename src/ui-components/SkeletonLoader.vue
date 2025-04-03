<template>
	<div class="animate-pulse">
		<div :class="myClass" class="h-6 bg-gray-300 rounded w-full mb-4"></div>
	</div>
</template>

<script>
export default {
	name: 'SkeletonLoader',
	props: ['myClass'],
}
</script>
