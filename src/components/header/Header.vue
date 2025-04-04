<template>
	<header class="bg-white py-5 border-b-[1px] border-solid border-wheat">
		<div>
			<div class="container">
				<div class="flex items-center justify-between">
					<div class="flex">
						<RouterLink :to="{ name: 'home' }" class="flex items-center mr-8">
							<h2 class="text-xl text-black font-medium select-none">MuraShop</h2>
							<img src="/images/site-icon.png" alt="site icon" class="w-6 h-6 select-none" />
						</RouterLink>
					</div>

					<div class="relative">
						<template v-if="products === null"></template>
						<SearchModal v-else :products="products" :searchModal="searchModal" />
					</div>

					<div class="flex items-center gap-x-6 max-md:gap-4 max-sm:gap-1">
						<button
							:class="!searchModal ? 'hidden' : 'relative hidden max-md:block z-50'"
							@click="searchModal = false"
						>
							<SearchIcon />
						</button>
						<button
							:class="searchModal ? 'hidden' : 'relative z-[9999999999] hidden max-md:block'"
							@click="searchModal = true"
						>
							<CloseIcon class="fill-white" />
						</button>

						<RouterLink v-if="isAuth" :to="{ name: 'profile' }">
							<button
								class="flex max-md:flex-col items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<ProfileIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd] max-sm:hidden">{{
									user.name
								}}</span>
							</button>
						</RouterLink>

						<RouterLink v-else :to="{ name: 'signin' }">
							<button
								class="flex max-md:flex-col items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<ProfileIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd] max-sm:hidden">
									Kirish
								</span>
							</button>
						</RouterLink>

						<RouterLink :to="{ name: 'cart' }" class="max-sm:hidden">
							<button
								class="flex max-md:flex-col items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<CartIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd]"> Savatcha </span>
							</button>
						</RouterLink>

						<RouterLink :to="{ name: 'wishlist' }" class="max-sm:hidden">
							<button
								class="flex items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<HeartIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd] max-md:hidden">
									Saralangan
								</span>
							</button>
						</RouterLink>

						<button @click="toggleModal" class="w-7 h-7 hidden max-sm:block">
							<MobileIcon />
						</button>
					</div>

					<Teleport to="#modal">
						<div v-if="categories === null"></div>
						<Modal
							v-else-if="modal"
							:categories="categories[0]"
							:modal="modal"
							@close="hideModal"
						/>
					</Teleport>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '../Modal.vue'
import SearchModal from './SearchModal.vue'

export default {
	components: { Modal, SearchModal },
	data() {
		return {
			modal: false,
			searchModal: true,
		}
	},
	methods: {
		toggleModal() {
			this.modal = !this.modal
		},
		hideModal() {
			this.modal = false
		},
	},
	computed: {
		...mapState({
			categories: state => state.categories.categories,
			products: state => state.products.data,
			isAuth: state => state.auth.isAuth,
			user: state => state.auth.user,
		}),
	},
	mounted() {
		this.$store.dispatch('categories')
		this.$store.dispatch('products')
	},
}
</script>
