<template>
	<div class="flex items-center gap-x-1.5 border border-gray-300 rounded-md">
		<button class="px-4 py-1 border border-solid border-gray-300" @click="onDecrement">
			<span class="text-2xl select-none">-</span>
		</button>

		<span class="text-base font-medium text-black max-md:text-sm max-sm:text-xs mx-2">{{
			count
		}}</span>

		<button class="px-4 py-1 border border-solid border-gray-300" @click="onIncrement">
			<span class="text-2xl select-none">+</span>
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
