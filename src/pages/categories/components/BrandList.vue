<template>
	<div
		class="flex flex-col border-t border-r-0 border-b-0 border-l-0 border-solid border-gray-300 my-4"
	>
		<div class="flex items-center justify-between py-[14px] mb-[10px]">
			<h2 class="font-semibold text-base text-black">Brands</h2>
			<span>
				<ArrowIcon />
			</span>
		</div>
		<form class="max-h-[400px] overflow-y-scroll scroll">
			<div
				className="flex items-center pt-[5px] mb-[10px]"
				v-for="item in readMore ? brands : brands?.slice(0, 4)"
				:key="item.id"
			>
				<input
					type="checkbox"
					:id="item.id"
					:checked="filteredList.some(item2 => item2 === item.id)"
					@change="handleBrand(item.id, $event)"
					className="mr-[6px] border-2 border-solid border-gray-smoke rounded-md w-5 h-5"
				/>
				<label
					:for="item.id"
					className="font-normal text-base text-black select-none cursor-pointer"
				>
					{{ item.title }}
				</label>
			</div>
		</form>
		<div class="mt-5 max-w-48">
			<button @click="showToggle">{{ readMore ? 'Less' : 'More' }}</button>
		</div>
	</div>
</template>

<script>
import { getIds } from '@/utils/helpers'
import { mapState } from 'vuex'
export default {
	data() {
		return {
			readMore: false,
			params: new URL(window.location.href).searchParams,
			filteredList: getIds(new URL(window.location.href).searchParams.get('brand_id')),
		}
	},
	computed: {
		...mapState({
			brands: state => state.categories.brands,
		}),
	},
	methods: {
		showToggle() {
			this.readMore = !this.readMore
		},
		handleBrand(id, { target }) {
			if (target.checked) {
				if (this.params.get('brand_id')) {
					this.params.set('brand_id', this.params.get('brand_id') + ',' + id)
					this.$router.push({
						query: { brand_id: this.params.get('brand_id') + ',' + id },
					})
				} else {
					this.$router.push({ query: { brand_id: id } })
				}
			} else {
				this.$router.push({
					query: {
						brand_id: getIds(this.params.get('brand_id'))
							.filter(item => item !== id)
							.join(','),
					},
				})
			}
		},
	},
}
</script>
