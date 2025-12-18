import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth()

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a0f1a'
            }}>
                <div style={{ color: '#6366f1', fontFamily: 'monospace' }}>Loading...</div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
