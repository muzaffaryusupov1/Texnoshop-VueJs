<template>
	<div>
		<div class="flex items-center">
			<input
				type="text"
				id="search"
				placeholder="Qidirish..."
				v-model="search"
				:class="
					!searchModal
						? 'top-0 w-[400px] absolute bg-white -left-52 py-6 px-7 pr-12 rounded-xl max-md:-left-64 max-[520px]:w-[300px] max-[520px]:top-4 max-[520px]:-left-48 z-[999999]'
						: 'w-[500px] max-[1060px]:w-80 max-[800px]:w-[300px] max-md:hidden max-[574px]:w-[200px] py-4 px-7 pr-12 bg-slate-950 border border-solid border-slate-700 rounded-2xl focus:border-sky-500 ease-out duration-300'
				"
			/>
			<div
				:class="
					!searchModal
						? 'fixed w-screen h-screen top-0 z-[99999] left-0 bg-black/55 md:hidden'
						: 'hidden'
				"
			></div>
			<label htmlFor="search" class="absolute right-0 p-3 cursor-pointer max-md:hidden">
				<SearchIcon />
			</label>
		</div>
		<div
			:class="
				search.length === 0 || search.length < 1
					? 'hidden opacity-0'
					: 'absolute inline-block top-full z-[999999] w-[calc(100%+10px)] max-md:w-[400px] max-md:-left-64 p-0 m-0 text-black max-h-[500px] max-md:top-[85px] overflow-y-auto overflow-x-hidden bg-white max-[520px]:w-[300px] max-[520px]:-left-48 max-[520px]:h-[300px]'
			"
		>
			<div v-for="item in filteredProducts" :key="item.id" class="[&:not(:last-child)]:mb-3 p-3">
				<RouterLink :to="`/product/${item.slug}`" @click="search = ''">
					<div class="flex">
						<div class="w-20 h-20 overflow-hidden">
							<img :src="item.mainImage" :alt="item.slug" class="object-contain w-full h-full" />
						</div>
						<div class="ml-5">
							<p class="mb-1 text-lg font-semibold max-lg:text-sm">
								{{ item.title.split(' ').slice(0, 3).join(' ') }}
							</p>
							<p class="text-base font-normal max-lg:text-xs">
								{{ item.price.toLocaleString() }} Uzs
							</p>
						</div>
					</div>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			search: '',
		}
	},
	computed: {
		...mapState({
			filteredProducts() {
				return this.products?.filter(p => {
					return p.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
				})
			},
		}),
	},
	props: {
		products: {
			type: Object,
			required: true,
		},
		searchModal: {
			type: Boolean,
			required: true,
		},
	},
}
</script>
