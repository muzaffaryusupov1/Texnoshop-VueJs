import { productWithSlug } from '@/utils/urls'
import axios from './axios'

const ProductsService = {
	products() {
		return axios.get('/products')
	},
	productsDetail(slug) {
		return axios.get(productWithSlug(slug))
	},
	recommendedProducts(id) {
		return axios.get(`/products?category_id=${id}`)
	},
}

export default ProductsService
