<template>
	<div class="my-12 max-md:my-8 max-sm:my-6">
		<div class="container">
			<h2 class="text-center text-4xl mt-7 mb-4 max-md:text-3xl max-sm:text-2xl">
				Akkauntga kirish
			</h2>
			<form
				class="flex flex-col items-center justify-center m-auto gap-5 max-w-[300px] max-md:max-w-[240px] max-sm:max-w-[210px] max-md:gap-3 max-sm:gap-2.5"
				@submit.prevent
			>
				<Input :label="'Email'" :type="'email'" />
				<Input :label="'Parol'" :type="'password'" />

				<Button>Kirish</Button>
			</form>
			<div class="text-center mt-4">
				<p
					class="text-lg font-normal leading-[140%] tracking-[-0.01em] text-gray-600 max-md:text-base max-sm:text-sm max-sm:leading-[110%]"
				>
					Akkaunt yo'qmi?
					<span class="text-primary">
						<RouterLink :to="{ name: 'signup' }">Ro'yhatdan o'ting</RouterLink>
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>
