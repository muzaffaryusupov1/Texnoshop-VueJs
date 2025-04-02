<template>
	<div class="my-6">
		<div
			class="flex items-center justify-between bg-white border border-solid border-gray-300 rounded-md py-[22px] px-[19px] max-lg:p-4 max-md:py-4 max-md:px-4 max-sm:py-3 max-sm:px-2"
		>
			<div v-if="products && categories === null">Loading...</div>
			<h2 class="font-normal text-base text-black max-md:text-sm max-sm:hidden" v-else>
				{{ products?.items.length }} ta mahsulot
				<span class="font-bold">{{ categories?.find(item => item.id == categoryId)?.title }}</span>
				da
			</h2>
			<div>
				<button
					class="hidden max-sm:flex items-center py-3 px-2 rounded-md border border-solid border-gray-300 max-md:p-1.5"
					@click="toggleModal"
				>
					Filter
					<span class="ml-2">
						<FilterIcon />
					</span>
				</button>
			</div>

			<Teleport to="#modal">
				<CategoryFilterModal v-if="modalFilter" :active="modalFilter" @close="hideModal" />
			</Teleport>

			<div class="flex items-center gap-3 max-md:gap-1.5">
				<form class="flex items-center">
					<select
						name="categories__input"
						id="select"
						class="w-[172px] py-3 px-2 rounded-md border border-solid border-gray-300 max-lg:w-[120px] max-md:p-1.5 max-md:w-[100px] max-sm:w-20"
						@change="handleAsc"
					>
						<option value="none" class="font-normal text-base text-black max-md:text-sm">
							Hech qaysi
						</option>
						<option value="asc" class="font-normal text-base text-black max-md:text-sm">
							Arzon
						</option>
						<option value="desc" class="font-normal text-base text-black max-md:text-sm">
							Qimmat
						</option>
					</select>
				</form>
				<div>
					<button
						type="button"
						class="border border-solid border-gray-300 rounded-md p-1 ml-[10px] last:ml-0 mr-2 max-sm:p-0.5 max-sm:mr-1 max-sm:ml-2"
						:class="active && 'bg-gray-300'"
						@click="handleGridView"
					>
						<GridViewIcon />
					</button>
					<button
						class="border border-solid border-gray-300 rounded-md p-1 ml-[10px] last:ml-0 max-sm:p-0.5 max-sm:mr-1 max-sm:ml-2"
						type="button"
						:class="!active && 'bg-gray-300'"
						@click="handleListView"
					>
						<ListViewIcon />
					</button>
				</div>
			</div>
		</div>

		<div class="mt-5 flex items-center gap-2 flex-wrap">
			<button
				class="flex items-center gap-x-2 py-[5px] px-[10px] border border-solid border-primary rounded-md font-normal text-base text-gray-600"
				v-for="brand in brands?.filter(item => $route.query.brand_id?.includes(item.id))"
				:key="brand.id"
				@click="handleBrandDelete(brand.id)"
			>
				<span>{{ brand.title }}</span>
				<span>
					<CloseIcon />
				</span>
			</button>
		</div>

		<div v-if="products?.length === 0">Hech narsa topilmadi</div>
		<CategoryItems v-else :active="active" />

		<div class="flex items-center justify-end gap-[10px]">
			<select
				class="w-[172px] py-3 px-2 rounded-md border border-solid border-gray-300 max-[440px]:w-full max-sm:p-1.5"
			>
				<option class="font-normal text-base text-black max-sm:text-sm">10ta ko'rsatish</option>
			</select>

			<div class="flex mr-[10px] max-sm:mr-1.5">
				<button
					class="border border-solid border-gray-400 py-1 px-2 max-sm:p-1 group disabled:border-gray-300"
					:disabled="currentPage === 1"
					@click="pageDown"
				>
					<ChevronLeftIcon :class="'group-disabled:fill-gray-300 fill-gray-600'" />
				</button>

				<button
					role="button"
					:disabled="totalPage === currentPage"
					v-for="totalPage in products?.meta?.total_pages"
					class="border border-solid border-gray-300 py-[9px] px-4 font-medium text-base text-black max-sm:py-1.5 max-sm:px-2 max-sm:text-sm disabled:cursor-not-allowed"
					:class="totalPage === currentPage && 'text-gray-500 bg-gray-400'"
					:key="totalPage"
					@click="pageChange(totalPage)"
				>
					{{ totalPage }}
				</button>

				<button
					class="border border-solid border-gray-300 py-1 px-2 max-sm:p-1 group disabled:border-gray-300"
					@click="pageUp"
					:disabled="currentPage >= products?.meta?.total_pages"
				>
					<ChevronRightIcon :class="'group-disabled:fill-gray-300 fill-gray-600'" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { getIds } from '@/utils/helpers'
import { mapState } from 'vuex'
import { CategoryItems } from '.'
import CategoryFilterModal from './CategoryFilterModal.vue'

export default {
	components: { CategoryItems, CategoryFilterModal },
	data() {
		return {
			categoryId: this.$route.params.id.split('-').at(-1),
			searchParams: new URL(window.location.href).searchParams,
			fitleredBrands: getIds(new URL(window.location.href).searchParams.get('brand_id')),
			sortBy: new URL(window.location.href).searchParams.get('sortBy'),
			query: this.$route.query,
			active: false,
			modalFilter: false,
			items: [],
			itemPerPage: 10,
			currentPage: 1,
		}
	},
	computed: {
		...mapState({
			categories: state => state.categories.categories,
			products: state => state.categories.products,
			brands: state => state.categories.brands,
		}),
	},
	methods: {
		handleAsc({ target }) {
			if (target.value !== 'none') {
				this.$router.push({ query: { sortBy: target.value } })
			} else {
				this.$router.push({ query: {} })
			}
		},
		handleBrandDelete(id) {
			this.$router.push({
				query: { brand_id: this.fitleredBrands.filter(item => item !== id).join(',') },
			})
		},
		handleGridView() {
			this.active = true
		},
		handleListView() {
			this.active = false
		},
		toggleModal() {
			this.modalFilter = !this.modalFilter
		},
		hideModal() {
			this.modalFilter = false
		},
		pageUp() {
			this.currentPage += 1
		},
		pageDown() {
			this.currentPage -= 1
		},
		pageChange(num) {
			this.currentPage = num
		},
	},
	mounted() {
		this.$store.dispatch('productsWithBrandsId', {
			category_id: this.categoryId,
			brand_arr: this.fitleredBrands,
			sortBy: this.sortBy,
			page: this.currentPage,
			limit: this.itemPerPage,
		})
	},
	watch: {
		$route({ params, query }) {
			this.$store.dispatch('productsWithBrandsId', {
				category_id: params.id.split('-').at(-1),
				brand_arr: getIds(query.brand_id),
				sortBy: query.sortBy,
			})
			this.categoryId = params.id.split('-').at(-1)
		},
		currentPage() {
			this.$store.dispatch('productsWithBrandsId', {
				category_id: this.categoryId,
				brand_arr: this.fitleredBrands,
				sortBy: this.sortBy,
				page: this.currentPage,
				limit: this.itemPerPage,
			})
		},
	},
}
</script>
