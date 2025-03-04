<template>
	<div class="flex flex-col items-center gap-4 max-w-md max-md:gap-3 max-sm:gap-2">
		<div class="w-full h-full max-sm:w-64 max-sm:h-64">
			<img :src="image" alt="page image" class="w-full h-full object-contain" />
		</div>
		<h1 class="text-center text-2xl text-black font-semibold max-sm:text-lg">{{ title }}</h1>
		<p class="text-center text-base text-wrap text-gray-600 font-medium max-sm:text-sm">
			{{ description }}
		</p>
		<div class="max-w-96 max-sm:w-60">
			<Button @click="$router.push({ name: 'home' })">Bosh sahifa</Button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EmptyPage',
	props: {
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>
