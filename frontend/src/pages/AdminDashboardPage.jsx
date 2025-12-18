import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AdminDashboard from '../components/AdminDashboard'
import Footer from '../components/Footer'

function AdminDashboardPage() {
    const { user, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && user) {
            if (user.role !== 'admin' && user.role !== 'super_developer') {
                navigate('/dashboard/user', { replace: true })
            }
            if (user.role === 'super_developer') {
                navigate('/dashboard/developer', { replace: true })
            }
        }
    }, [user, loading, navigate])

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-content">
                    <div className="loading-spinner"></div>
                    <h2>🛡️ Admin Dashboard</h2>
                    <p>Loading control panel...</p>
                </div>
                <style>{`
                    .loading-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1a25 100%);
                    }
                    .loading-content {
                        text-align: center;
                        color: #6ee7b7;
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
                        border: 3px solid rgba(16, 185, 129, 0.2);
                        border-top-color: #10b981;
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

    if (user?.role !== 'admin') {
        return null
    }

    return (
        <div className="dashboard-page admin-dashboard-page">
            <AdminDashboard />
            <Footer />
        </div>
    )
}

export default AdminDashboardPage
