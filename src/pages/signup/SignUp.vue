<template>
	<div class="my-12">
		<div class="container">
			<h2 class="text-center text-4xl mt-7 mb-4">Sign Up</h2>
			<form class="flex flex-col items-center justify-center m-auto gap-5 max-w-[300px]">
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
