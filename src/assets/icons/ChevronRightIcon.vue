<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
		<path
			fill="#000"
			fillRule="evenodd"
			:class="class"
			d="M8.355 5.368a1.277 1.277 0 0 0 0 1.768l4.714 4.865-4.714 4.864a1.277 1.277 0 0 0 0 1.768c.474.49 1.24.49 1.713 0l5.577-5.755a1.277 1.277 0 0 0 0-1.767l-5.577-5.755a1.194 1.194 0 0 0-1.713.012Z"
			clipRule="evenodd"
		/>
	</svg>
</template>

<script>
export default {
	name: 'ChevronRightIcon',
	props: ['class'],
}
</script>
