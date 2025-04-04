<template>
	<footer
		class="border-b-0 border-t border-l-0 border-r-0 border-solid border-wheat pt-5 max-md:pt-4 max-sm:pt-2"
	>
		<div class="container flex flex-col items-center justify-center">
			<RouterLink :to="{ name: 'home' }" class="flex items-center">
				<h2 class="text-xl text-black font-medium select-none">MuraShop</h2>
				<img src="/images/site-icon.png" alt="site icon" class="w-6 h-6 select-none" />
			</RouterLink>
			<div class="flex items-center gap-[11px] max-sm:gap-2 mb-5 mt-3">
				<a
					href="https://t.me/muraadev"
					target="_blank"
					class="p-2 border rounded-full bg-shadow-cc border-transparent"
				>
					<TelegramIcon />
				</a>
				<a
					href="https://github.com/muzaffaryusupov1"
					target="_blank"
					class="p-2 border rounded-full bg-shadow-cc border-transparent"
				>
					<GitHubIcon />
				</a>
				<a
					href="www.linkedin.com/in/muzaffaryusupov"
					target="_blank"
					class="p-2 border rounded-full bg-shadow-cc border-transparent"
				>
					<LinkedinIcon />
				</a>
			</div>
		</div>
		<div
			class="flex items-center justify-center gap-20 py-3 max-md:py-2 max-sm:py-1 bg-gray-200 w-full"
		>
			<p class="font-normal text-base tracking-[-0.001em] text-[#606060] max-sm:text-xs">
				© 2025 Muzaffar Yusupov.
			</p>
		</div>
	</footer>
</template>

<script>
export default {}
</script>
