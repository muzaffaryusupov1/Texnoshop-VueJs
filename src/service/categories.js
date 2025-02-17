import { brandsList } from '@/utils/urls'
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
}

export default CategoriesService
