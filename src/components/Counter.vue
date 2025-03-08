<template>
	<div class="flex items-center gap-x-1.5 border border-gray-300 p-1 rounded-md w-20">
		<button class="w-6 h-6 max-sm:w-5 max-sm:h-5" @click="onDecrement">
			<MinusIcon class="w-full h-full" />
		</button>
		<span class="text-base font-medium text-black max-md:text-sm max-sm:text-xs">{{ count }}</span>
		<button class="w-6 h-6 max-sm:w-5 max-sm:h-5" @click="onIncrement">
			<PlusIcon class="w-full h-full" />
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
