<template>
	<div class="my-12 relative">
		<div class="container">
			<div class="mb-6">
				<h3 class="text-2xl font-medium max-md:text-xl max-sm:text-lg">
					Buyurtmani Rasmiylashtirish
				</h3>
			</div>
			<div class="flex gap-5 max-md:flex-col-reverse">
				<CheckoutInfo />
				<CheckoutList />
			</div>
		</div>
	</div>
</template>

<script>
import CheckoutInfo from './components/CheckoutInfo.vue'
import CheckoutList from './components/CheckoutList.vue'

export default {
	components: { CheckoutInfo, CheckoutList },
}
</script>
