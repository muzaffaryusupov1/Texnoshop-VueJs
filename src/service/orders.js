import { orderPost } from '@/utils/urls'
import axios from './axios'

const OrdersService = {
	orders(data) {
		return axios.post(orderPost, data)
	},
}

export default OrdersService
