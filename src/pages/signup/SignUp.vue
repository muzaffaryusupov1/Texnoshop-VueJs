<template>
	<div class="my-12 max-md:my-8 max-sm:my-6">
		<div class="container">
			<h2 class="text-center text-4xl mt-7 mb-4 max-md:text-3xl max-sm:text-2xl">Sign Up</h2>
			<form
				class="flex flex-col items-center justify-center m-auto gap-5 max-w-[300px] max-md:max-w-[240px] max-sm:max-w-[210px] max-md:gap-3 max-sm:gap-2.5"
				@submit.prevent
			>
				<Input :label="'Name'" :type="'text'" />
				<Input :label="'Email'" :type="'email'" />
				<Input :label="'Password'" :type="'password'" />

				<Button>Enter</Button>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
</script>
