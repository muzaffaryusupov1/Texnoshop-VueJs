<template>
	<button
		class="relative inline-block w-full items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-primary group border border-solid border-primary text-primary hover:text-white"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'ButtonWhite',
}
</script>
