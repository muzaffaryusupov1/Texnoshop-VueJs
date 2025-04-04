<template>
	<div class="hidden max-sm:block fixed max-w-full inset-0 max-h-screen z-[9999] drawer">
		<div
			class="bg-black-rgba w-full h-screen inset-0 duration-700 ease-out"
			:class="modal ? 'block' : 'hidden'"
			@click="$emit('close')"
		></div>
		<div
			class="absolute top-0 w-[300px] max-[420px]:w-72 h-full bg-white duration-200 ease-out"
			:class="modal ? 'right-0' : '-right-[100%]'"
		>
			<button
				class="absolute top-5 right-5 p-1 border border-solid border-gray-500 rounded-md group active:border-black z-30"
				@click="$emit('close')"
			>
				<CloseIcon class="fill-gray-500 group-active:fill-black" />
			</button>
			<div class="w-full h-28 bg-gray-300 p-5">
				<div class="flex flex-col justify-center gap-2">
					<span>
						<Avatar />
					</span>
					<div class="flex gap-2" v-if="!isAuth">
						<RouterLink :to="{ name: 'signin' }" @click="$emit('close')">Kirish</RouterLink>
						<span>|</span>
						<RouterLink :to="{ name: 'signup' }" @click="$emit('close')">
							Ro'yxatdan o'tish
						</RouterLink>
					</div>
					<div class="flex gap-2" v-else>
						<RouterLink :to="{ name: 'profile' }" @click="$emit('close')">{{
							user.name
						}}</RouterLink>
					</div>
				</div>
			</div>
			<div class="p-5">
				<RouterLink
					:to="{ name: 'home' }"
					class="flex items-center gap-2 py-2 px-1 mb-3"
					@click="$emit('close')"
				>
					<span>
						<HomeIcon />
					</span>
					<span class="text-base">Bosh sahifa</span>
				</RouterLink>
				<RouterLink
					:to="`/category/${categories.slug}-${categories.id}`"
					class="flex items-center gap-2 py-2 px-1 mb-3"
					@click="$emit('close')"
				>
					<span>
						<CategoryIcon />
					</span>
					<span class="text-base">Katalog</span>
				</RouterLink>
				<RouterLink
					:to="{ name: 'wishlist' }"
					class="flex items-center gap-2 py-2 px-1 mb-3"
					@click="$emit('close')"
				>
					<span>
						<HeartIcon />
					</span>
					<span class="text-base">Saralanganlar</span>
				</RouterLink>
				<RouterLink
					:to="{ name: 'cart' }"
					class="flex items-center gap-2 py-2 px-1"
					@click="$emit('close')"
				>
					<span>
						<CartIcon />
					</span>
					<span class="text-base">Savatcha</span>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	props: {
		modal: {
			type: Boolean,
			required: true,
		},
		categories: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState({
			isAuth: state => state.auth.isAuth,
			user: state => state.auth.user,
		}),
	},
}
</script>
