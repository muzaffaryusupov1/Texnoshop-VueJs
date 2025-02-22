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

					<form
						class="hidden md:w-[300px] lg:w-[400px] h-10 sm:flex items-center border border-solid py-3 px-2 rounded-lg border-black"
					>
						<input
							type="text"
							class="flex-auto h-full px-2 text-base text-black font-normal"
							placeholder="Search..."
							id="input-search"
						/>
						<button type="submit" aria-label="input-search" title="Search...">
							<SearchIcon />
						</button>
					</form>

					<div class="flex items-center gap-x-6 max-md:gap-4">
						<RouterLink :to="{ name: 'signin' }">
							<button
								class="flex items-center gap-[8px] group hover:bg-primary-light p-1 lg:p-3 transition-all ease-out duration-300"
							>
								<span>
									<ProfileIcon class="group-hover:fill-primary" />
								</span>
								<span class="font-normal text-xs group-hover:text-[#0d6efd] max-md:hidden">
									Sign In
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
									WishList
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

export default {
	components: { Modal },
	data() {
		return {
			modal: false,
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
		}),
	},
	mounted() {
		this.$store.dispatch('categories')
	},
}
</script>
