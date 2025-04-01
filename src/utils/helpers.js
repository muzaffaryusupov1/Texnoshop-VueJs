import { toast } from 'vue3-toastify'

export const getLocale = key => localStorage.getItem(key)
export const setLocale = (key, value) => localStorage.setItem(key, value)

export const unslugify = slug =>
	slug
		.replace(/\-/g, ' ')
		.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())

export function buildBuilder(builder, request, name) {
	builder
		.addCase(request.pending, state => {
			state[name].loading = true
		})
		.addCase(request.fulfilled, (state, { payload }) => {
			state[name].loading = false
			state[name].list = payload
		})
		.addCase(request.rejected, state => {
			state[name].loading = false
		})
}

export const getIds = arr => (arr && !!arr.length ? arr.split(',').map(item => Number(item)) : [])

export function setCart(arr) {
	localStorage.setItem('cart', JSON.stringify(arr))
	return arr
}

// TOASTIFY

export function toastify(message, type = 'default') {
	toast(message, {
		theme: 'colored',
		type: type,
		position: 'top-center',
		autoClose: 1000,
		hideProgressBar: true,
		transition: 'slide',
		dangerouslyHTMLString: true,
	})
}
