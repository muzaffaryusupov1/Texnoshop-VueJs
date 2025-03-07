<template>
	<div :class="searchModal ? 'absolute' : ''">
		<form
			:class="
				searchModal
					? 'absolute top-5 left-16 p-4 border bg-white z-[9999] rounded-lg '
					: 'hidden md:w-[300px] lg:w-[400px] h-10 sm:flex items-center border border-solid py-3 px-2 rounded-lg border-black'
			"
		>
			<input
				type="text"
				class="flex-auto h-full px-2 text-base text-black font-normal bg-white"
				placeholder="Qidirish..."
				id="input-search"
				v-model="search"
			/>
			<button
				type="button"
				aria-label="input-search"
				title="Search..."
				:class="searchModal && 'hidden'"
			>
				<SearchIcon />
			</button>
		</form>
	</div>

	<div
		:class="
			!active || search === ''
				? 'hidden'
				: `absolute ${
						searchModal ? 'top-28' : 'top-20'
				  } max-xl:left-72 max-lg:left-60 max-[920px]:left-[200px] left-[460px] w-[400px] max-lg:w-80 max-md:w-96 max-md:left-28 max-[520px]:w-[300px] max-[520px]:left-20 max-[420px]:left-14 h-72 bg-white flex flex-col z-[999999999] overflow-y-scroll scroll`
		"
	>
		<div
			class="py-3 px-5 border border-gray-400"
			v-for="product in filteredProducts"
			:key="product.id"
		>
			<RouterLink :to="`/product/${product.slug}`" :key="product.id" class="flex">
				<div class="mr-3">
					<img :src="product.mainImage" :alt="product.title" class="w-20 h-20 object-contain" />
				</div>
				<div>
					<p
						class="font-normal text-sm tracking-[0.4px] text-gray-500 my-[5px] max-[500px]:my-1 max-[500px]:text-xs"
					>
						{{ product.title.substring(0, 50) }}
					</p>
					<p class="font-medium text-base max-[500px]:text-sm text-black">
						{{ product.price.toLocaleString() }} UZS
					</p>
				</div>
			</RouterLink>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			search: '',
			active: true,
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
