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
		<form>
			<div
				className="flex items-center pt-[5px] mb-[10px]"
				v-for="item in readMore ? brands : brands?.slice(0, 4)"
				:key="item.id"
			>
				<input
					type="checkbox"
					:id="item.id"
					className="mr-[6px] border-2 border-solid border-gray-smoke rounded-md w-5 h-5"
				/>
				<label
					:for="item.id"
					className="font-normal text-base text-black select-none cursor-pointer"
					>{{ item.title }}</label
				>
			</div>
			<div class="mt-5 max-w-48">
				<button
					@click="showLess"
					v-if="readMore"
					class="bg-primary py-1 px-3 rounded-md text-base text-white text-center font-normal w-full"
				>
					Kamroq
				</button>
				<button
					@click="showMore"
					v-if="!readMore"
					class="bg-primary py-1 px-3 rounded-md text-base text-white text-center font-normal w-full"
				>
					Ko'proq
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			readMore: false,
		}
	},
	computed: {
		...mapState({
			brands: state => state.categories.brands,
		}),
	},
	methods: {
		showMore() {
			this.readMore = true
		},
		showLess() {
			this.readMore = false
		},
	},
}
</script>
