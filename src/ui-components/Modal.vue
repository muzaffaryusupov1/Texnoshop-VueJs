<template>
	<div
		class="absolute top-0 left-0 z-[99999] bg-black-rgba w-full h-full flex items-center justify-center modal"
	>
		<div
			class="bg-white p-8 w-[400px] max-[420px]:w-[280px] max-[420px]:p-4 h-full absolute right-0"
		>
			<h2>{{ title }}</h2>
			<p>{{ msg }}</p>
		</div>
	</div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
	title: String,
	msg: String,
})

defineEmits('close')
</script>
