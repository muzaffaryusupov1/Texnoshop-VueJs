<template>
	<div>
		<div
			class="flex border-b border-t-0 border-r-0 border-l-0 border-solid border-gray-300 px-5 max-md:px-3"
		>
			<div v-for="tab in tabs" :key="tab">
				<button
					class="flex items-center justify-center w-[130px] h-12 font-medium text-base transition-all ease-out duration-300 max-md:w-24 max-md:h-8 max-md:text-sm"
					:class="
						tab === selected
							? 'text-primary pt-[6px] border-t-0 border-r-0 border-b-2 border-l-0 border-solid border-primary max-sm:text-sm'
							: ''
					"
					@click="setTab(tab)"
				>
					{{ tab }}
				</button>
			</div>
		</div>

		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		tabs: {
			type: Array,
			required: true,
		},
		selected: {
			type: String,
			required: true,
		},
	},
	methods: {
		setTab(tab) {
			this.$emit('selected', tab)
		},
	},
}
</script>
