import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Footer from '../components/Footer'
import '../styles/login.css'

function OAuthCallback() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const { setUser, setAccessToken, setRefreshToken } = useAuth()

    useEffect(() => {
        const token = searchParams.get('token')
        const refresh = searchParams.get('refresh')
        const error = searchParams.get('error')

        if (error) {
            navigate('/login?error=oauth_failed')
            return
        }

        if (token && refresh) {
            // Save tokens
            setAccessToken(token)
            setRefreshToken(refresh)
            localStorage.setItem('accessToken', token)
            localStorage.setItem('refreshToken', refresh)

            // Fetch user profile
            fetch('/api/auth/profile', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(res => res.json())
                .then(user => {
                    setUser(user)
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate('/dashboard')
                })
                .catch(() => {
                    navigate('/login?error=profile_failed')
                })
        } else {
            navigate('/login?error=missing_tokens')
        }
    }, [searchParams, navigate, setUser, setAccessToken, setRefreshToken])

    return (
        <div className="login-container">
            <div className="animated-bg"></div>
            <div className="grid-overlay"></div>
            <div className="orbs">
                <div className="orb"></div>
                <div className="orb"></div>
            </div>
            <div className="particles">
                {[...Array(8)].map((_, i) => <div key={i} className="particle"></div>)}
            </div>

            <div className="glass-card login-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <div className="spinner" style={{ width: 40, height: 40, margin: '0 auto 1.5rem', borderWidth: 3 }}></div>
                <h2 style={{ marginBottom: '0.5rem' }}>Memproses Login...</h2>
                <p style={{ color: 'var(--text-muted)' }}>Mohon tunggu sebentar</p>
            </div>

            <Footer />
        </div>
    )
}

export default OAuthCallback
