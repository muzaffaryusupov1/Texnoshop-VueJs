<template>
	<div class="my-12 relative">
		<div class="container">
			<div class="mb-6">
				<h3 class="text-2xl font-medium">Buyurtmani rasmiylashtirish</h3>
			</div>
			<div class="flex gap-5">
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
