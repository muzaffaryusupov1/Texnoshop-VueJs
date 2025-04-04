<template>
	<div class="my-12 max-md:my-8 max-sm:my-6">
		<div class="container">
			<h2 class="text-center text-4xl mt-7 mb-4 max-md:text-3xl max-sm:text-2xl">
				Akkauntga kirish
			</h2>

			<div class="flex items-center justify-center mb-4">
				<h1
					v-if="error === 401"
					class="text-red bg-red-primary p-2 rounded-lg text-center transition ease-in-out duration-200 w-max"
				>
					Email yoki parol noto'g'ri
				</h1>
			</div>

			<form
				class="flex flex-col items-center justify-center m-auto gap-5 max-w-[300px] max-md:max-w-[240px] max-sm:max-w-[210px] max-md:gap-3 max-sm:gap-2.5"
				@submit="onFinish"
			>
				<Input v-model="data.email" :label="'Email'" :type="'email'" name="email" />
				<Input v-model="data.password" :label="'Parol'" name="password" :type="'password'" />

				<Button :disabled="loading">
					<div class="flex items-center justify-center" v-if="loading"><LoadingSpinner /></div>
					<span v-else>Kirish</span>
				</Button>
			</form>
			<div class="text-center mt-4">
				<p
					class="text-lg font-normal leading-[140%] tracking-[-0.01em] text-gray-600 max-md:text-base max-sm:text-sm max-sm:leading-[110%]"
				>
					Akkaunt yo'qmi?
					<span class="text-primary">
						<RouterLink :to="{ name: 'signup' }">Ro'yhatdan o'ting</RouterLink>
					</span>
				</p>
			</div>
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
			user: state => state.auth.user,
			loading: state => state.auth.loading,
			error: state => state.auth.error,
		}),
	},
	methods: {
		onFinish(e) {
			e.preventDefault()
			this.$store
				.dispatch('login', this.data)
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
