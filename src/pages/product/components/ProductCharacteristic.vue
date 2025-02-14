<template>
	<div class="w-full">
		<ul>
			<li
				v-for="characteristic in productCharacteristic"
				:key="characteristic"
				class="w-full flex items-center justify-between rounded-md border border-solid border-gray-600 bg-rgba-secondary mb-2 last:mb-0 py-1 px-3"
			>
				<span class="text-base text-gray-secondary max-md:text-sm">{{ characteristic.title }}</span>
				<span class="text-primary first-letter:uppercase max-md:text-sm">{{
					characteristic.value
				}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		productCharacteristic: {
			type: Array,
			required: true,
		},
	},
}
</script>
