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
		return axios.get(productsFilter(brand_arr, page, limit), {
			params: {
				category_id,
				sortBy: sortBy === 'asc' ? 'price' : sortBy === 'desc' ? '-price' : null,
			},
		})
	},
}

export default CategoriesService
