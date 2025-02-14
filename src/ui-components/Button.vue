<template>
	<button
		class="relative inline-block w-full items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-primary rounded-lg hover:bg-white group border border-solid border-primary text-white hover:text-primary"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
}
</script>
