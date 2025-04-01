<template>
	<div
		class="w-full max-w-[300px] h-max max-md:max-w-full max-md:mt-4 max-md:ml-0 max-md:py-4 border border-solid border-gray-300 rounded-md bg-white shadow-sm shadow-shadow-cc py-2 px-4 ml-5"
	>
		<div
			class="border-t-0 border-r-0 border-b border-l-0 border-solid border-gray-300 py-[17px] max-md:py-1.5"
		>
			<div class="flex items-center justify-between p-1">
				<p
					class="font-normal text-base leading-[150%] tracking-[-0.01em] text-gray-600 max-md:leading-[100%] max-sm:text-sm"
				>
					Summasi:
				</p>
				<span
					class="font-normal text-base leading-[150%] tracking-[-0.01em] text-right text-gray-600 max-md:leading-[100%] max-sm:text-sm"
				>
					{{ subtotal.toLocaleString() }} UZS
				</span>
			</div>
			<div class="flex items-center justify-between p-1">
				<p
					class="font-normal text-base leading-[150%] tracking-[-0.01em] text-gray-600 max-md:leading-[100%] max-sm:text-sm"
				>
					Chegirma:
				</p>
				<span
					class="font-normal text-base leading-[150%] tracking-[-0.01em] text-right text-red max-md:leading-[100%] max-sm:text-sm"
				>
					- {{ discount.toLocaleString() }} UZS
				</span>
			</div>
		</div>
		<div
			class="flex items-center justify-between p-1 pt-[17px] max-md:p-0.5 max-md:pt-3.5 max-sm:pt-2.5"
		>
			<p class="font-semibold text-base text-black max-sm:text-sm">Jami:</p>
			<span
				class="font-semibold text-xl leading-[140%] tracking-[-0.01em] text-green max-sm:text-base"
			>
				{{ total.toLocaleString() }} UZS
			</span>
		</div>

		<Button class="mt-3" @click="handleCheckout">Buyurtma berish</Button>

		<div class="flex gap-2 p-5 max-md:hidden">
			<span>
				<img src="/images/cart-checkout/americanexpress.svg" alt="americanexpress icon" />
			</span>
			<span>
				<img src="/images/cart-checkout/mastercard.svg" alt="mastercard icon" />
			</span>
			<span>
				<img src="/images/cart-checkout/paypal.svg" alt="paypal icon" />
			</span>
			<span>
				<img src="/images/cart-checkout/visa.svg" alt="visa icon" />
			</span>
			<span>
				<img src="/images/cart-checkout/apple-pay.svg" alt="apple-pay icon" />
			</span>
		</div>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
	data() {
		return {
			subtotal: this.items.reduce((a, b) => a + b.oldPrice * b.qty, 0),
			discount: this.items.reduce((a, b) => a + (b.oldPrice - b.price) * b.qty, 0),
			total: this.items.reduce((a, b) => a + b.price * b.qty, 0),
		}
	},
	props: {
		items: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState({
			user: state => state.auth.user,
		}),
	},
	watch: {
		items(obj) {
			const subtotal = (this.subtotal = obj.reduce((a, b) => a + b.oldPrice * b.qty, 0))
			const discount = (this.discount = obj.reduce((a, b) => a + (b.oldPrice - b.price) * b.qty, 0))
			const total = (this.total = obj.reduce((a, b) => a + b.price * b.qty, 0))
		},
	},
	methods: {
		handleCheckout() {
			if (this.user) {
				console.log(this.user)

				this.$router.push('/checkout')
			} else {
				this.$router.push('/signin')
				toastify("Ro'yxatdan o'tmagansiz", 'error')
			}
		},
	},
}
</script>
