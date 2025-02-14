<template>
	<div class="hidden max-sm:block fixed max-w-full inset-0 max-h-screen z-[9999] drawer">
		<div
			class="bg-black-rgba w-full h-screen inset-0 duration-700 ease-out"
			:class="modal ? 'block' : 'hidden'"
		></div>
		<div
			class="absolute top-0 w-[300px] max-[420px]:w-72 h-full bg-white duration-700 ease-out py-7 px-5 max-[420px]:py-3 max-[420px]:px-4"
			:class="modal ? 'right-0' : '-right-[100%]'"
		>
			<ul class="mt-5">
				<h2 class="font-medium text-xl text-black leading-7 tracking-tight max-[420px]:text-base">
					Categories
				</h2>
				<li v-for="item in categories" :key="item.id">
					<RouterLink
						:to="`/category/${item.slug}-${item.id}`"
						@click="$emit('close')"
						class="block rounded-md p-[10px] font-normal text-base text-gray-600 max-[420px]:text-xs"
					>
						{{ item.title }}
					</RouterLink>
				</li>
			</ul>
			<div
				class="border-t border-r-0 border-b-0 border-l-0 border-solid border-gray-400 mt-3 pt-2 max-[420px]:mt-1.5 max-[420px]:pt-1.5"
			>
				<h2
					class="font-medium text-xl text-black mb-3 leading-7 tracking-tight max-[420px]:text-base"
				>
					Nav
				</h2>
				<div class="flex items-center justify-center gap-x-2.5 max-[420px]:gap-1.5">
					<RouterLink :to="{ name: 'signin' }">
						<button
							class="flex items-center gap-2 max-[420px]:gap-1.5 bg-primary-light p-1.5 max-[420px]:p-1 w-full h-10 max-[420px]:h-8"
						>
							<span>
								<ProfileIcon />
							</span>
							<span class="font-normal text-xs">Sign In</span>
						</button>
					</RouterLink>

					<RouterLink :to="{ name: 'wishlist' }">
						<button
							class="flex items-center gap-2 max-[420px]:gap-1.5 bg-primary-light p-1.5 max-[420px]:p-1 w-full h-10 max-[420px]:h-8"
						>
							<span>
								<HeartIcon />
							</span>
							<span class="font-normal text-xs">WishList</span>
						</button>
					</RouterLink>

					<RouterLink :to="{ name: 'cart' }">
						<button
							class="flex items-center gap-2 max-[420px]:gap-1.5 bg-primary-light p-1.5 max-[420px]:p-1 w-full h-10 max-[420px]:h-8"
						>
							<span>
								<CartIcon />
							</span>
							<span class="font-normal text-xs">Cart</span>
						</button>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			required: true,
		},
		modal: {
			type: Boolean,
			required: true,
		},
	},
}
</script>
