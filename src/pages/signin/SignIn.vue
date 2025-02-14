<template>
	<div class="my-12">
		<div class="container">
			<h2 class="text-center text-4xl mt-7 mb-4">Sign In</h2>
			<form class="flex flex-col items-center justify-center m-auto gap-5 max-w-[300px]">
				<Input :label="'Email'" :type="'email'" />
				<Input :label="'Password'" :type="'password'" />

				<Button>Enter</Button>
				<p class="text-lg font-normal leading-[140%] tracking-[-0.01em] text-gray-600">
					Don't have a account?
					<span class="text-primary">
						<RouterLink :to="{ name: 'signup' }">Sign Up</RouterLink>
					</span>
				</p>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
</script>
