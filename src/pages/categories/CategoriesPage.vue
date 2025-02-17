<template>
	<div class="categories-page">
		<div class="container">
			<div class="flex">
				<CategorySidebar />
				<div class="my-6">
					<div
						class="flex items-center justify-between border border-solid border-gray-300 rounded-md py-[22px] px-[19px]"
					>
						<h2 class="font-normal text-base text-black">title 9</h2>

						<form class="flex items-center">
							<select
								name="categories__input"
								id="select"
								class="w-[172px] py-3 px-2 rounded-md border border-solid border-gray-300"
							>
								<option value="none" class="font-normal text-base text-black">None</option>
								<option value="asc" class="font-normal text-base text-black">Cheap</option>
								<option value="desc" class="font-normal text-base text-black">Expensive</option>
							</select>
							<button
								type="button"
								class="border border-solid border-gray-300 rounded-md p-1 ml-[10px] last:ml-0 bg-gray-300"
							>
								<GridViewIcon />
							</button>
							<button
								class="border border-solid border-gray-300 rounded-md p-1 ml-[10px] last:ml-0"
								type="button"
							>
								<ListViewIcon />
							</button>
						</form>
					</div>

					<div class="mt-5 flex items-center gap-2 flex-wrap">
						<button
							class="flex items-center gap-x-2 py-[5px] px-[10px] border border-solid border-primary rounded-md font-normal text-base text-gray-600"
						>
							item title
							<span>
								<CloseIcon />
							</span>
						</button>
					</div>

					<CategoryItems />

					<div class="flex items-center justify-end gap-[10px]">
						<select
							class="w-[172px] py-3 px-2 rounded-md border border-solid border-gray-300 max-[440px]:w-full max-sm:p-1.5"
						>
							<option class="font-normal text-base text-black max-sm:text-sm">Show 10</option>
						</select>

						<div class="flex mr-[10px] max-sm:mr-1.5">
							<button class="border border-solid border-gray-300 py-1 px-2 max-sm:p-1">
								<ChevronLeftIcon />
							</button>
							<span
								class="border border-solid border-gray-300 py-[9px] px-4 font-medium text-base text-gray-500 bg-gray-400 max-sm:py-1.5 max-sm:px-2 max-sm:text-sm"
							>
								1
							</span>
							<span
								class="border border-solid border-gray-300 py-[9px] px-4 font-medium text-base text-black max-sm:py-1.5 max-sm:px-2 max-sm:text-sm"
							>
								2
							</span>
							<span
								class="border border-solid border-gray-300 py-[9px] px-4 font-medium text-base text-black max-sm:py-1.5 max-sm:px-2 max-sm:text-sm"
							>
								3
							</span>

							<button class="border border-solid border-gray-300 py-1 px-2 max-sm:p-1">
								<ChevronRightIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { CategoryItems, CategorySidebar } from './components'

export default {
	components: { CategoryItems, CategorySidebar },
}
</script>
