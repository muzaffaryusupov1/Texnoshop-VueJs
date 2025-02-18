<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
		<path
			fill="#8B96A5"
			:class="class"
			d="m15.833 5.342-1.175-1.175L10 8.825 5.342 4.167 4.167 5.342 8.825 10l-4.658 4.658 1.175 1.175L10 11.175l4.658 4.658 1.175-1.175L11.175 10l4.658-4.658Z"
		/>
	</svg>
</template>

<script>
export default {
	name: 'CloseIcon',
	props: ['class'],
}
</script>
