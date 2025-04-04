<template>
	<div class="hidden max-sm:block fixed max-w-full inset-0 max-h-screen z-[9999] filterModal">
		<div
			class="bg-black-rgba w-full h-screen inset-0 duration-700 ease-out"
			:class="active ? 'block' : 'hidden'"
			@click="$emit('close')"
		></div>
		<div
			class="absolute top-0 w-[400px] max-[420px]:w-[250px] h-full bg-white duration-200 ease-out"
			:class="active ? 'right-0' : '-right-[100%]'"
		>
			<div class="p-4 mb-3">
				<div class="mb-4">
					<h2 class="text-xl font-medium text-black">Katalog</h2>
				</div>
				<div v-for="category in categories" :key="category" class="mb-3 last:mb-0">
					<RouterLink :to="`${category.slug}-${category.id}`">{{ category.title }}</RouterLink>
				</div>
				<div class="flex items-center justify-between py-[14px] mb-[10px]">
					<h2 class="font-semibold text-base text-black">Brandlar</h2>
					<span>
						<ArrowIcon />
					</span>
				</div>
				<form class="h-[200px] overflow-y-scroll scroll">
					<div
						className="flex items-center pt-[5px] mb-[10px]"
						v-for="item in brands"
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
			</div>
		</div>
	</div>
</template>

<script>
import { getIds } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
	data() {
		return {
			params: new URL(window.location.href).searchParams,
			brand_id: this.$route.query.brand_id,
		}
	},
	props: {
		active: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		...mapState({
			categories: state => state.categories.categories,
			brands: state => state.categories.brands,
		}),
		filteredList() {
			return getIds(this.$route.query.brand_id)
		},
	},
	methods: {
		handleBrand(id, { target }) {
			const current = getIds(this.$route.query.brand_id)

			let updated = []

			if (target.checked) {
				updated = [...new Set([...current, id])]
			} else {
				updated = current.filter(item => item !== id)
			}

			this.$router.replace({
				query: {
					...this.$route.query,
					brand_id: updated.join(','),
				},
			})
		},
	},
	watch: {
		$route({ query }) {
			this.brand_id = query.brand_id
		},
	},
}
</script>
