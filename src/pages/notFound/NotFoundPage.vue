<template>
	<div class="flex items-center justify-center relative h-full">
		<div class="relative z-10">
			<div class="flex gap-3 justify-center">
				<p class="text-3xl">Xato</p>
				<span class="border border-solid border-black"></span>
				<p class="text-3xl">404</p>
			</div>
			<h1 class="text-3xl text-black font-medium text-center mt-10">Sahifa topilmadi!</h1>
			<p class="text-base text-gray-600 font-normal mt-2">
				Kechirasiz, biz siz qidirayotgan sahifani topa olmadik.
			</p>
			<div class="flex items-center justify-center mt-3" @click="$router.push('/')">
				<Button class="group w-max flex items-center justify-center gap-2">
					<ArrowBackIcon class="fill-white group-hover:fill-primary" />
					Bosh sahifa
				</Button>
			</div>
		</div>
	</div>
</template>
