import axios from 'axios';

// «Вытаскиваем» переменные окружения без скобок
const { VITE_API_BASE_URL, VITE_API_AUTH_TOKEN } = import.meta.env;

const api = axios.create({
	baseURL: VITE_API_BASE_URL,        // вместо import.meta.env.[VITE_API_BASE_URL]
	headers: {
		'Content-Type': 'application/json',
	},
});

if (VITE_API_AUTH_TOKEN) {
	api.defaults.headers.common['Authorization'] = `Bearer ${VITE_API_AUTH_TOKEN}`;
}

api.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error('API error:', error.response?.data || error.message);
		return Promise.reject(error);
	}
);

export default api;
