import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Load stored auth data on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const storedAccessToken = localStorage.getItem('accessToken')
        const storedRefreshToken = localStorage.getItem('refreshToken')

        if (storedUser && storedAccessToken) {
            setUser(JSON.parse(storedUser))
            setAccessToken(storedAccessToken)
            setRefreshToken(storedRefreshToken)
        }
        setLoading(false)
    }, [])

    const login = async (email, password) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.message || 'Login failed')

            // DEV MODE: If response includes tokens directly (no verification needed)
            if (data.accessToken && data.user) {
                setUser(data.user)
                setAccessToken(data.accessToken)
                setRefreshToken(data.refreshToken)
                localStorage.setItem('user', JSON.stringify(data.user))
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                return { ...data, devMode: true }
            }

            return data // Returns { requiresVerification: true, email }
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const verifyCode = async (email, code) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('/api/auth/verify-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, code })
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.message || 'Verification failed')

            setUser(data.user)
            setAccessToken(data.accessToken)
            setRefreshToken(data.refreshToken)
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)

            return data
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const register = async (email, password, name) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name })
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.message || 'Registration failed')
            return data
        } catch (err) {
            setError(err.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        setLoading(true)
        try {
            if (accessToken) {
                await fetch('/api/auth/logout', {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${accessToken}` }
                })
            }
        } catch (err) {
            console.error('Logout error:', err)
        } finally {
            setUser(null)
            setAccessToken(null)
            setRefreshToken(null)
            localStorage.removeItem('user')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            setLoading(false)
        }
    }

    const refreshAccessToken = async () => {
        if (!refreshToken) return null
        try {
            const response = await fetch('/api/auth/refresh', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refreshToken })
            })
            const data = await response.json()
            if (!response.ok) throw new Error('Token refresh failed')

            setAccessToken(data.accessToken)
            setRefreshToken(data.refreshToken)
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)

            return data.accessToken
        } catch (err) {
            logout()
            return null
        }
    }

    const value = {
        user,
        setUser,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        loading,
        error,
        login,
        verifyCode,
        register,
        logout,
        refreshAccessToken,
        isAuthenticated: !!user
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
