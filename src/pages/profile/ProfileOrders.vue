<template>
	<div class="w-full">
		<h1 class="text-2xl text-black font-medium mb-5 max-sm:mb-2.5 max-sm:text-xl">Buyurtmalarim</h1>

		<div v-if="isLoading">
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
		</div>

		<div v-else>
			<div v-if="userOrders?.length === 0 || userOrders?.orders === null" class="my-10">
				<h1 class="text-2xl text-center my-2">Hali buyurtmalaringiz yo'q</h1>
				<p class="my-2 text-xl">Buyurtma berish uchun bosh sahifaga qayting!</p>
				<div class="flex justify-center items-center">
					<Button class="w-max" @click="$router.push('/')">Bosh sahifa</Button>
				</div>
			</div>
			<div
				class="border border-solid border-gray-600 rounded-xl p-2 mb-4 last:mb-0 bg-white"
				v-for="order in userOrders"
				:key="order.id"
			>
				<RouterLink :to="`/product/${order.product.slug}`">
					<CartList :cart="order.product" />
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			userOrders: state => state.orders.userOrders,
			isLoading: state => state.orders.isLoading,
			user: state => state.auth.user,
		}),
	},
	mounted() {
		this.$store.dispatch('getUserOrders', this.user.id)
	},
}
</script>
