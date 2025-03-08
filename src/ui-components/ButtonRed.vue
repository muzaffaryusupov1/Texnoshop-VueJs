<template>
	<button
		class="relative inline-block w-full items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-red rounded-lg hover:bg-white group border border-solid border-red text-white hover:text-red max-md:px-3 max-md:py-2 max-sm:p-1 max-[420px]:text-xs max-[420px]:p-0.5"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'ButtonRed',
}
</script>
