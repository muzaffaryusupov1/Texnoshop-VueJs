<template>
	<div
		class="w-[280px] border border-solid border-gray-300 rounded-md bg-white shadow-sm shadow-shadow-cc pt-0 pr-4 pb-5 pl-4"
	>
		<div class="border-t-0 border-r-0 border-b border-l-0 border-solid border-gray-300 py-[17px]">
			<div class="flex items-center justify-between p-1">
				<p class="font-normal text-base leading-[150%] tracking-[-0.01em] text-gray-600">Amount:</p>
				<span
					class="font-normal text-base leading-[150%] tracking-[-0.01em] text-right text-gray-600"
				>
					1111111 UZS
				</span>
			</div>
			<div class="flex items-center justify-between p-1">
				<p class="font-normal text-base leading-[150%] tracking-[-0.01em] text-gray-600">
					Discount:
				</p>
				<span class="font-normal text-base leading-[150%] tracking-[-0.01em] text-right text-red">
					- 67803 UZS
				</span>
			</div>
		</div>
		<div class="flex items-center justify-between p-1 pt-[17px]">
			<p class="font-semibold text-base text-black">Total:</p>
			<span class="font-semibold text-xl leading-[140%] tracking-[-0.01em] text-green">
				67687678 UZS
			</span>
		</div>

		<Button>Checkout</Button>

		<div class="flex gap-2 p-5">
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
export default {}
</script>
