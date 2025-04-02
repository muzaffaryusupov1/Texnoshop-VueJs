import { orderPost, userOrders } from '@/utils/urls'
import axios from './axios'

const OrdersService = {
	orders(data) {
		return axios.post(orderPost, data)
	},
	userOrders() {
		return axios.get(userOrders)
	},
}

export default OrdersService
