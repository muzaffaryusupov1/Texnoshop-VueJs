<template>
	<div class="flex items-center gap-x-1.5">
		<button
			class="px-4 py-1 max-sm:px-2 max-sm:py-0 border border-solid border-gray-300"
			@click="onDecrement"
		>
			<span class="text-2xl select-none max-sm:text-base">-</span>
		</button>

		<span class="text-base font-medium text-black max-md:text-sm max-sm:text-xs mx-2 max-sm:mx-1">{{
			count
		}}</span>

		<button
			class="px-4 py-1 max-sm:px-2 max-sm:py-0 border border-solid border-gray-300"
			@click="onIncrement"
		>
			<span class="text-2xl select-none max-sm:text-base">+</span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		count: {
			type: Number,
			required: true,
		},
		onIncrement: {
			type: Function,
			required: true,
		},
		onDecrement: {
			type: Function,
			required: true,
		},
	},
}
</script>
