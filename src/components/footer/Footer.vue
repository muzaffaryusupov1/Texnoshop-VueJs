<template>
	<footer
		class="border-b-0 border-t border-l-0 border-r-0 border-solid border-wheat pt-8 max-md:pt-7 max-sm:pt-3"
	>
		<div class="container">
			<div class="flex justify-between mb-10 max-lg:mb-7 max-md:mb-4 max-sm:flex-col">
				<div class="w-[276px] flex flex-col gap-[15px] max-md:gap-2 max-sm:w-full">
					<RouterLink :to="{ name: 'home' }">
						<img src="/images/logo.png" alt="site logo" class="w-40 h-12 max-sm:w-28 max-sm:h-8" />
					</RouterLink>
					<p class="font-normal text-base tracking-[-0.001em] text-gray-600 max-sm:text-xs">
						Bu saytni men portfolio uchun ishlab chiqdim va bu saytda men mahsulotlarni sotmayman.
					</p>
					<div class="flex items-center gap-[11px] max-sm:gap-2">
						<a
							href="https://www.instagram.com/muraxpp/"
							target="_blank"
							class="p-2 border rounded-full bg-shadow-cc border-transparent"
							><InstagramIcon
						/></a>
						<a
							href="https://t.me/mysticmura"
							target="_blank"
							class="p-2 border rounded-full bg-shadow-cc border-transparent"
							><TelegramIcon
						/></a>
						<a
							href="https://www.youtube.com/@muraxpp"
							target="_blank"
							class="p-2 border rounded-full bg-shadow-cc border-transparent"
							><YoutubeIcon
						/></a>
					</div>
				</div>

				<div
					class="grid grid-cols-4 gap-14 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-2 max-sm:my-3"
				>
					<div class="flex flex-col gap-[6px] max-sm:gap-1" v-for="link in list" :key="link.id">
						<h3 class="font-medium text-base text-black mb-[10px] max-sm:mb-2 max-sm:text-sm">
							{{ link.title }}
						</h3>
						<RouterLink
							:to="{ name: 'home' }"
							class="font-normal text-base tracking-[-0.001em] text-gray-600 max-sm:text-xs"
							>{{ link.subtitle }}
						</RouterLink>
						<RouterLink
							:to="{ name: 'home' }"
							class="font-normal text-base tracking-[-0.001em] text-gray-600 max-sm:text-xs"
							>{{ link.subtitle1 }}
						</RouterLink>
						<RouterLink
							:to="{ name: 'home' }"
							class="font-normal text-base tracking-[-0.001em] text-gray-600 max-sm:text-xs"
							>{{ link.subtitle2 }}
						</RouterLink>
						<RouterLink
							:to="{ name: 'home' }"
							class="font-normal text-base tracking-[-0.001em] text-gray-600 max-sm:text-xs"
							>{{ link.subtitle3 }}
						</RouterLink>
					</div>
				</div>

				<div>
					<h2 class="font-medium text-base text-black mb-[15px] max-sm:mb-3 max-sm:text-sm">
						Get app
					</h2>
					<div class="max-sm:flex max-sm:gap-2 max-sm:items-center">
						<div
							class="flex items-center justify-center rounded-[6px] w-32 h-11 bg-black mb-[10px] hover:bg-gray-300 cursor-pointer max-sm:w-32 max-sm:h-8 max-sm:mb-1"
						>
							<img
								src="/images/footer/app-store.png"
								alt="site logo"
								class="w-full h-full object-scale-down"
							/>
						</div>
						<div
							class="flex items-center justify-center rounded-[6px] w-32 h-11 bg-black hover:bg-gray-300 cursor-pointer max-sm:w-32 max-sm:h-8 max-sm:mb-1"
						>
							<img
								src="/images/footer/google-play.png"
								alt="site logo"
								class="w-full h-full object-scale-down"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<FooterBottom />
	</footer>
</template>

<script>
import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue'
import FooterBottom from './FooterBottom.vue'

export default {
	components: { FooterBottom },
	data() {
		return {
			list: [
				{
					id: 1,
					title: 'About',
					subtitle: 'About Us',
					subtitle1: 'Find store',
					subtitle2: 'Categories',
					subtitle3: 'Blogs',
				},
				{
					id: 2,
					title: 'Partnership',
					subtitle: 'About Us',
					subtitle1: 'Find store',
					subtitle2: 'Categories',
					subtitle3: 'Blogs',
				},
				{
					id: 3,
					title: 'Information',
					subtitle: 'Help Center',
					subtitle1: 'Money Refund',
					subtitle2: 'Shipping',
					subtitle3: 'Contact us',
				},
				{
					id: 4,
					title: 'For users',
					subtitle: 'Login',
					subtitle1: 'Register',
					subtitle2: 'Settings',
					subtitle3: 'My Orders',
				},
			],
		}
	},
}
</script>

<style></style>
