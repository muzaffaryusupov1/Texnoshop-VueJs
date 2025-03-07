<template>
	<header class="bg-white py-5 border-b-[1px] border-solid border-wheat">
		<div>
			<div class="container">
				<div class="flex items-center justify-between">
					<div class="flex">
						<button @click="toggleModal" class="w-7 h-7 hidden max-sm:block">
							<MobileIcon />
						</button>
						<RouterLink :to="{ name: 'home' }">
							<img src="/images/logo.png" alt="site logo" class="w-28 h-8 lg:w-40 lg:h-12" />
						</RouterLink>
					</div>

					<div v-if="products === null">Loading...</div>
					<SearchModal :searchModal="searchModal" :products="products" v-else />

					<div class="flex items-center gap-x-6 max-md:gap-4">
						<button
							type="button"
							aria-label="input-search"
							title="Search..."
							@click="searchModal = !searchModal"
							class="max-sm:block hidden"
						>
							<SearchIcon />
						</button>

						<RouterLink :to="{ name: 'signin' }">
							<button
								class="flex items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<ProfileIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd] max-md:hidden">
									Kirish
								</span>
							</button>
						</RouterLink>

						<RouterLink :to="{ name: 'cart' }" class="max-sm:hidden">
							<button
								class="flex items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<CartIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd] max-md:hidden">
									Savatcha
								</span>
							</button>
						</RouterLink>

						<RouterLink :to="{ name: 'wishlist' }">
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
					</div>

					<Teleport to="#modal">
						<div v-if="categories === null">Loading...</div>
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
			searchModal: false,
			search: '',
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
		}),
	},
	mounted() {
		this.$store.dispatch('categories')
		this.$store.dispatch('products')
	},
}
</script>
