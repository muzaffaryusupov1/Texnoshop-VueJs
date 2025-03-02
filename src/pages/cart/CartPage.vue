<template>
	<div class="pt-6 mb-6">
		<div class="container">
			<h1 class="font-semibold text-2xl tracking-[-0.01em] text-black max-md:text-xl">
				Savatcha (1)
			</h1>
			<div class="w-full mt-6 flex max-md:flex-col">
				<CartList />
				<CartInfo />
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
