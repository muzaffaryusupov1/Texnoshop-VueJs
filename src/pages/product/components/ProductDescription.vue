<template>
	<div>
		<p
			class="font-medium text-base leading-[176%] text-black max-lg:text-sm max-md:text-xs max-md:leading-[180%]"
		>
			{{ productDescription }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		productDescription: {
			type: String,
			required: true,
		},
	},
}
</script>
