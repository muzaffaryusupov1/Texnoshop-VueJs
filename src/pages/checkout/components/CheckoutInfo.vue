<template>
	<div class="bg-white border border-solid border-gray-300 w-[600px] h-fit p-10 rounded-lg">
		<form class="checkout-info__form" @submit="handleSubmit($event)">
			<div class="flex flex-col">
				<label htmlFor="checkout-name" class="my-2 text-base font-medium text-black">
					Ism va Familiya
				</label>
				<input
					class="border border-solid border-gray-400 focus:border-gray-600 shadow-sm p-3 rounded-md"
					type="text"
					placeholder="Ism va Familiya"
					id="checkout-name"
					:value="user.name"
					name="fullName"
				/>
			</div>
			<div class="flex flex-col">
				<label htmlFor="checkout-num" class="my-2 text-base font-medium text-black"
					>Telefon raqami
				</label>
				<div class="border border-gray-400 flex overflow-hidden">
					<span class="bg-gray-400 flex items-center justify-center p-1">+998</span>
					<input
						type="tel"
						name="tel"
						id="checkout-num"
						class="flex-auto my-1 rounded-md py-2 px-3"
						placeholder="99 123 45 67"
						maxLength="9"
						pattern="[0-9]{9}"
						required
					/>
				</div>
			</div>
			<div class="flex flex-col">
				<label htmlFor="checkout-addres" class="my-2 text-base font-medium text-black">
					Address
				</label>
				<textarea
					id="checkout-addres"
					name="address"
					class="flex-auto border border-primary border-solid my-1 rounded-md py-2 px-3"
					cols="10"
					rows="2"
					required
				></textarea>
			</div>
			<p class="my-2 text-base font-medium text-black">Toʻlov turi</p>
			<div class="flex flex-col gap-4 mt-3">
				<div class="checkout-info__col">
					<input
						@change="handleChange($event)"
						type="radio"
						id="checkout-price"
						name="payment"
						defaultChecked
						class="ml-[10px] border border-solid border-primary w-8 h-5"
					/>
					<label htmlFor="checkout-cash" class="my-2 text-base font-medium text-black">
						Naqd pul
					</label>
					<input
						type="radio"
						id="checkout-cash"
						name="payment"
						disabled
						class="ml-[10px] border border-solid border-primary w-8 h-5"
					/>
					<label htmlFor="checkout-price" class="my-2 text-base font-medium text-black">
						Karta Orqali To'lash
					</label>
				</div>

				<!-- <div class="checkout-info__card">
					<label htmlFor="number"
						>Card Number
						<input class="checkout-info__card__num" id="number" />
					</label>
					<label htmlFor="number"
						>Expiration
						<input class="checkout-info__card__year" type="tel" id="year" />
					</label>
				</div> -->

				<div class="flex items-center justify-between">
					<div class="w-60">
						<Button @click="$router.push('/')">Bosh sahifaga qaytish</Button>
					</div>
					<div class="w-60">
						<Button type="submit">To'lovni qilish</Button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { toastify } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
	data() {
		return {
			data: {},
			pay: false,
		}
	},
	computed: {
		...mapState({
			user: state => state.auth.user,
			items: state => state.cart.items,
		}),
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault()
			const { target } = e

			if (this.items.length <= 0) {
				toastify("Savatcha bo'sh", 'error')
				return null
			}
			if (this.items.length > 1) {
				toastify('Faqat bitta tovar harid qilishingiz mumkin!', 'info')
				return null
			}

			this.data.product_id = this.items[0].id
			this.data.user_id = this.user.id

			for (let el of Object.keys(target).slice(0, 3)) {
				let item = target[el]
				if (item.name === 'tel') {
					this.data[item.name] = '+998' + item.value
				} else {
					this.data[item.name] = item.value
				}
			}

			if (!!this.data.product_id && !!this.data.user_id) {
				try {
					this.$store
						.dispatch('orders', this.data)
						.then(response => {
							if (response) {
								this.$router.push('/')
								toastify('Haridingiz qabul qilindi', 'success')
								this.$store.commit('removeAllFromCart')
							}
						})
						.catch(err => {
							console.log(err)
						})
				} catch (error) {
					console.log(error)
				}
			}
		},
	},
}
</script>
