<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
		<path
			fill="#8B96A5"
			:class="class"
			d="M14.442 13.067h-.724l-.257-.248a5.932 5.932 0 0 0 1.44-3.877A5.958 5.958 0 1 0 8.94 14.9c1.477 0 2.833-.54 3.878-1.439l.248.257v.724l4.583 4.574 1.366-1.366-4.574-4.583Zm-5.5 0a4.12 4.12 0 0 1-4.125-4.125 4.12 4.12 0 0 1 4.125-4.125 4.12 4.12 0 0 1 4.125 4.125 4.12 4.12 0 0 1-4.125 4.125Z"
		/>
	</svg>
</template>

<script>
export default {
	name: 'SearchIcon',
	props: ['class'],
}
</script>
