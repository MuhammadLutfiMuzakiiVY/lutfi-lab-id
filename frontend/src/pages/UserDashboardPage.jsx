import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Dashboard from './Dashboard'

function UserDashboardPage() {
    const { user, loading } = useAuth()
    const navigate = useNavigate()

    // Redirect privileged users to their dashboard
    useEffect(() => {
        if (!loading && user) {
            if (user.role === 'super_developer') {
                navigate('/dashboard/developer', { replace: true })
            } else if (user.role === 'admin') {
                navigate('/dashboard/admin', { replace: true })
            }
        }
    }, [user, loading, navigate])

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Memuat Dashboard...</p>

                <style>{`
                    .loading-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
                        color: #9ca3af;
                        gap: 1rem;
                    }

                    .spinner {
                        width: 40px;
                        height: 40px;
                        border: 3px solid rgba(107, 114, 128, 0.2);
                        border-top-color: #6b7280;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        )
    }

    // Regular users stay on normal dashboard
    return <Dashboard />
}

export default UserDashboardPage
