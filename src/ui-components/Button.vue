<template>
	<button
		class="relative inline-block w-full items-center justify-start px-5 py-3 overflow-hidden text-base font-medium transition-all bg-primary rounded-lg hover:bg-white group border border-solid border-primary text-white hover:text-primary max-md:px-3 max-md:py-2 max-sm:p-1"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
}
</script>
