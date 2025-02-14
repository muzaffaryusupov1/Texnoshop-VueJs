<template>
	<div>
		<p class="font-medium text-base leading-[176%] text-black">
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
