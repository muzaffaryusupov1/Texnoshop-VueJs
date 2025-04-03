import { brandsList, productsFilter } from '@/utils/urls'
import axios from './axios'

const CategoriesService = {
	categories() {
		return axios.get('/categorys')
	},
	categoryProducts(id) {
		return axios.get(`/products?category_id=${id}`)
	},
	brands() {
		return axios.get(brandsList)
	},
	productsFilterWithBrandId({ category_id, brand_arr, sortBy, page, limit }) {
		console.log(brand_arr)
		return axios.get(productsFilter(brand_arr, page, limit), {
			params: {
				category_id,
				sortBy: sortBy === 'asc' ? 'price' : sortBy === 'desc' ? '-price' : null,
			},
		})
	},
}

export default CategoriesService
