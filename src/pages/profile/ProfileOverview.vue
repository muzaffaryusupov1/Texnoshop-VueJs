<template>
	<LoadingSpinner v-if="isLoading" />

	<div v-else class="flex items-center justify-center mx-auto">
		<div class="bg-white p-5 border border-solid border-gray-600 rounded-lg w-96 h-max">
			<h1
				class="text-2xl text-black font-medium leading-7 border-b border-solid border-gray-600 pb-2"
			>
				Profile
			</h1>
			<div class="flex items-center gap-1 my-4">
				<div>
					<span
						class="relative inline-flex items-center justify-center flex-shrink-0 bg-primary rounded-full h-16 w-16 text-xl uppercase text-white"
					>
						{{ user?.name[0] }}
					</span>
				</div>
				<div>
					<p class="text-base text-gray-600">
						Ism Familiya:
						<span class="text-black font-semibold">{{ user?.name }}</span>
					</p>
					<p class="text-base text-gray-600">
						Email:
						<span class="text-black font-semibold">{{ user?.email }}</span>
					</p>
				</div>
			</div>
			<div class="w-max mt-3">
				<ButtonRed class="group flex items-center gap-1" @click="logout">
					Chiqish
					<ExitIcon :class="'fill-white group-hover:fill-red'" />
				</ButtonRed>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			user: state => state.auth.user,
			isLoading: state => state.orders.isLoading,
		}),
	},
	methods: {
		logout() {
			this.$store.dispatch('logout').then(() => {
				this.$router.push('/')
			})
		},
	},
}
</script>
