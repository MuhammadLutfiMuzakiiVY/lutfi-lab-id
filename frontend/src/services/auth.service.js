import axios from 'axios'

const API_URL = '/api/auth'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

// Request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// Response interceptor for token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const refreshToken = localStorage.getItem('refreshToken')
                const response = await axios.post(`${API_URL}/refresh`, { refreshToken })

                const { accessToken, refreshToken: newRefreshToken } = response.data
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', newRefreshToken)

                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                return api(originalRequest)
            } catch (refreshError) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('user')
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

const authService = {
    async login(email, password) {
        const response = await api.post('/login', { email, password })
        return response.data
    },

    async register(email, password, name) {
        const response = await api.post('/register', { email, password, name })
        return response.data
    },

    async logout() {
        const response = await api.post('/logout')
        return response.data
    },

    async refreshToken(token) {
        const response = await api.post('/refresh', { refreshToken: token })
        return response.data
    },

    async getProfile() {
        const response = await api.get('/profile')
        return response.data
    }
}

export default authService
