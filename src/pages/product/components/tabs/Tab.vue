<template>
	<div v-if="isSelected" class="p-5 text-xl font-medium leading-[150%]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		isSelected: {
			type: Boolean,
		},
	},
}
</script>
