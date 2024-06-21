import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://dramatheatre.pythonanywhere.com/api/v1/',
})



instance.interceptors.request.use((respon) => {
	let token = localStorage.getItem('tokenDram')
	if (token) {
		respon.headers.Authorization = token
	}
	return respon
})


instance.interceptors.response.use((res) => {
	return Promise.resolve(res)
}, (error) => {
	if (error.response && error.response.status === 401) {
		localStorage.removeItem('tokenDram')
	}
	return Promise.reject(error)
})
