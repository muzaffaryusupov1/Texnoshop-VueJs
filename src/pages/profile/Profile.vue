<template>
	<div class="container">
		<div class="flex max-sm:flex-col my-7 max-sm:my-2">
			<div class="flex flex-col w- rounded-xl mr-5 py-3 px-1.5 gap-3">
				<RouterLink
					to="/profile"
					class="text-base font-normal px-2 py-0.5 transition w-min max-sm:px-0 max-sm:text-sm"
					:class="$route.path === '/profile' && ' text-primary'"
				>
					PROFILE
				</RouterLink>
				<RouterLink
					to="/profile/orders"
					class="text-base font-normal px-2 py-0.5 transition w-min max-sm:px-0 max-sm:text-sm"
					:class="$route.path === '/profile/orders' && ' text-primary'"
				>
					BUYURTMALAR
				</RouterLink>
			</div>

			<ProfileOverview v-if="$route.path === '/profile'" />

			<router-view />
		</div>
	</div>
</template>

<script>
import ProfileOverview from './ProfileOverview.vue'

export default {
	components: { ProfileOverview },
}
</script>
