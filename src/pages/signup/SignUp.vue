<template>
	<div class="my-12 max-md:my-8 max-sm:my-6">
		<div class="container">
			<h2 class="text-center text-4xl mt-7 mb-4 max-md:text-3xl max-sm:text-2xl">
				Ro'yhatdan o'tish
			</h2>
			<div class="flex items-center justify-center mb-4">
				<h1
					v-if="error"
					class="text-red bg-red-primary p-2 rounded-lg text-center transition ease-in-out duration-200 w-max"
				>
					<span v-if="error === 401">Bunday email allaqachon ishlatilgan</span>
					<span v-else>{{ error }}</span>
				</h1>
			</div>
			<form
				class="flex flex-col items-center justify-center m-auto gap-5 max-w-[300px] max-md:max-w-[240px] max-sm:max-w-[210px] max-md:gap-3 max-sm:gap-2.5"
				@submit="handleFinish"
			>
				<Input v-model="data.name" :label="'Ism'" :type="'Ism'" />
				<Input v-model="data.email" :label="'Email'" :type="'email'" />
				<Input v-model="data.password" :label="'Parol'" :type="'password'" />

				<Button type="submit">Ro'yhatdan o'tish</Button>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			data: {},
		}
	},
	computed: {
		...mapState({
			loading: state => state.auth.loading,
			error: state => state.auth.error,
		}),
	},
	methods: {
		handleFinish(e) {
			e.preventDefault()

			if (this.data.password.length < 8) {
				console.log('Error')
			}

			this.$store
				.dispatch('register', this.data)
				.then(response => {
					if (response) {
						this.$router.push('/')
					}
				})
				.catch(err => {
					console.log(err)
				})
		},
	},
}
</script>
