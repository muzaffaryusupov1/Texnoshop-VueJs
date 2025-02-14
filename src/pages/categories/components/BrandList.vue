<template>
	<div
		class="flex flex-col border-t border-r-0 border-b-0 border-l-0 border-solid border-gray-300 my-4"
	>
		<div class="flex items-center justify-between py-[14px] mb-[10px]">
			<h2 class="font-semibold text-base text-black">Brands</h2>
			<span>
				<ArrowIcon />
			</span>
		</div>
		<form>
			<div className="flex items-center pt-[5px] mb-[10px]">
				<input
					type="checkbox"
					id="form__item1"
					className="mr-[6px] border-2 border-solid border-gray-smoke rounded-md w-5 h-5"
				/>
				<label htmlFor="form__item1" className="font-normal text-base text-black">{title}</label>
			</div>
		</form>
	</div>
</template>

<script>
export default {}
</script>
