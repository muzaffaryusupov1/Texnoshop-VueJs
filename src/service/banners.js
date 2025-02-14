import axios from './axios'

const BannersService = {
	banners() {
		return axios.get('/banner')
	},
}

export default BannersService
