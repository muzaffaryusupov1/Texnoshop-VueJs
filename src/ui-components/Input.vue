<template>
	<div class="relative">
		<input
			:type="type"
			:id="label"
			class="block px-2.5 pb-2.5 pt-4 w-[300px] max-sm:px-1.5 max-sm:pb-1.5 max-md:pt-3 max-sm:pt-1.5 text-sm text-gray-600 bg-transparent rounded-lg border-1 border-gray-500 border-solid appearance-none dark:text-black dark:border-gray-400 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer ease-in-out duration-300"
			placeholder=" "
			@input="updateInput"
			:value="modelValue"
		/>
		<label
			:for="label"
			class="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 dark:bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ease-in-out duration-300"
		>
			{{ label }}
		</label>
	</div>
</template>

<script>
export default {
	name: 'Input',
	props: {
		label: String,
		type: String,
		modelValue: [String, Number],
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>
