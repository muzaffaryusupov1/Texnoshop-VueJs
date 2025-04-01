<template>
	<div>{{ user }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			user: state => state.auth.user,
		}),
	},
}
</script>
