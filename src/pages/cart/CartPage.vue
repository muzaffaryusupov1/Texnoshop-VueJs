<template>
	<div class="pt-6 mb-6">
		<div class="container">
			<h1 class="font-semibold text-2xl tracking-[-0.01em] text-black">My Cart (1)</h1>
			<div class="mt-6 flex items-start gap-x-5">
				<CartList />
				<div>
					<CartInfo />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { CartInfo, CartList } from './components'

export default {
	components: { CartInfo, CartList },
}
</script>
