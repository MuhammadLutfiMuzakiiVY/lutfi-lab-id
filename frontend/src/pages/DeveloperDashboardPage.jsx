import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SuperDeveloperDashboard from '../components/SuperDeveloperDashboard'
import Footer from '../components/Footer'

function DeveloperDashboardPage() {
    const { user, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && user) {
            if (user.role !== 'super_developer') {
                if (user.role === 'admin') {
                    navigate('/dashboard/admin', { replace: true })
                } else {
                    navigate('/dashboard/user', { replace: true })
                }
            }
        }
    }, [user, loading, navigate])

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-content">
                    <div className="loading-spinner"></div>
                    <h2>⚡ Super Developer Dashboard</h2>
                    <p>Initializing control center...</p>
                </div>
                <style>{`
                    .loading-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f0f23 100%);
                    }
                    .loading-content {
                        text-align: center;
                        color: #a5b4fc;
                    }
                    .loading-content h2 {
                        margin: 1rem 0 0.5rem;
                        font-size: 1.25rem;
                    }
                    .loading-content p {
                        color: #6b7280;
                        font-size: 0.875rem;
                    }
                    .loading-spinner {
                        width: 50px;
                        height: 50px;
                        border: 3px solid rgba(99, 102, 241, 0.2);
                        border-top-color: #6366f1;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                        margin: 0 auto;
                    }
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        )
    }

    if (user?.role !== 'super_developer') {
        return null
    }

    return (
        <div className="dashboard-page developer-dashboard-page">
            <SuperDeveloperDashboard />
            <Footer />
        </div>
    )
}

export default DeveloperDashboardPage
