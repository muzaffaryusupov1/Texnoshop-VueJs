<template>
	<div class="animate-pulse">
		<!-- image -->
		<div :class="myClass" class="h-[200px] bg-gray-300 rounded w-full max-[640px]:mb-2 mb-5"></div>
		<!-- title -->
		<div :class="myClass" class="h-6 bg-gray-300 rounded w-full my-[5px] max-[500px]:my-1"></div>
		<!-- rating -->
		<div :class="myClass" class="h-6 bg-gray-300 rounded w-full mb-4"></div>
		<!-- price && oldPrice -->
		<div
			:class="myClass"
			class="h-6 bg-gray-300 rounded w-full max-[500px]:mt-1 mt-2 mb-2 max-[500px]:mb-0.5"
		></div>
		<div
			:class="myClass"
			class="h-6 bg-gray-300 rounded w-full max-[500px]:mt-1 mt-2 mb-2 max-[500px]:mb-0.5"
		></div>
	</div>
</template>

<script>
export default {
	name: 'ProductSkeleton',
	props: ['myClass'],
}
</script>
