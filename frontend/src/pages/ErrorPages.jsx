import { useNavigate } from 'react-router-dom'

// 404 Not Found Page
export const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.glitchContainer}>
                    <h1 style={styles.errorCode} data-text="404">404</h1>
                </div>

                <div style={styles.iconContainer}>
                    <svg viewBox="0 0 24 24" style={styles.icon}>
                        <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            style={{ opacity: 0.2 }}
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        />
                    </svg>
                </div>

                <h2 style={styles.title}>Page Not Found</h2>
                <p style={styles.description}>
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                <div style={styles.actions}>
                    <button onClick={() => navigate(-1)} style={styles.backBtn}>
                        ← Go Back
                    </button>
                    <button onClick={() => navigate('/dashboard')} style={styles.homeBtn}>
                        🏠 Dashboard
                    </button>
                </div>

                <div style={styles.terminal}>
                    <div style={styles.terminalHeader}>
                        <span style={styles.terminalDot}></span>
                        <span style={{ ...styles.terminalDot, background: '#fbbf24' }}></span>
                        <span style={{ ...styles.terminalDot, background: '#22c55e' }}></span>
                    </div>
                    <div style={styles.terminalBody}>
                        <p><span style={styles.prompt}>$</span> fetch('/page')</p>
                        <p style={styles.error}>Error: 404 - Resource not found</p>
                        <p><span style={styles.prompt}>$</span> <span style={styles.cursor}>_</span></p>
                    </div>
                </div>
            </div>

            {/* Floating particles */}
            <div style={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            ...styles.particle,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

// 500 Server Error Page
export const ServerErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div style={{ ...styles.container, background: 'linear-gradient(135deg, #1a0a0a 0%, #2a1515 100%)' }}>
            <div style={styles.content}>
                <div style={styles.glitchContainer}>
                    <h1 style={{ ...styles.errorCode, color: '#ef4444' }} data-text="500">500</h1>
                </div>

                <div style={{ ...styles.iconContainer, color: '#ef4444' }}>
                    <svg viewBox="0 0 24 24" style={styles.icon}>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>

                <h2 style={styles.title}>Server Error</h2>
                <p style={styles.description}>
                    Something went wrong on our end. Our team has been notified and is working on it.
                </p>

                <div style={styles.actions}>
                    <button onClick={() => window.location.reload()} style={{ ...styles.backBtn, background: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                        🔄 Retry
                    </button>
                    <button onClick={() => navigate('/dashboard')} style={styles.homeBtn}>
                        🏠 Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

// 403 Forbidden Page
export const ForbiddenPage = () => {
    const navigate = useNavigate()

    return (
        <div style={{ ...styles.container, background: 'linear-gradient(135deg, #0a1a0a 0%, #152515 100%)' }}>
            <div style={styles.content}>
                <div style={styles.glitchContainer}>
                    <h1 style={{ ...styles.errorCode, color: '#f59e0b' }} data-text="403">403</h1>
                </div>

                <div style={{ ...styles.iconContainer, color: '#f59e0b' }}>
                    <svg viewBox="0 0 24 24" style={styles.icon}>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                </div>

                <h2 style={styles.title}>Access Forbidden</h2>
                <p style={styles.description}>
                    You don't have permission to access this resource. Please contact an administrator.
                </p>

                <div style={styles.actions}>
                    <button onClick={() => navigate(-1)} style={{ ...styles.backBtn, background: 'rgba(245, 158, 11, 0.2)', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                        ← Go Back
                    </button>
                    <button onClick={() => navigate('/login')} style={styles.homeBtn}>
                        🔐 Login
                    </button>
                </div>
            </div>
        </div>
    )
}

// Maintenance Page
export const MaintenancePage = () => {
    return (
        <div style={{ ...styles.container, background: 'linear-gradient(135deg, #0a0a1a 0%, #151525 100%)' }}>
            <div style={styles.content}>
                <div style={{ ...styles.iconContainer, color: '#6366f1' }}>
                    <svg viewBox="0 0 24 24" style={{ ...styles.icon, width: '120px', height: '120px' }}>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </div>

                <h2 style={styles.title}>Under Maintenance</h2>
                <p style={styles.description}>
                    We're performing scheduled maintenance. Please check back soon!
                </p>

                <div style={styles.estimatedTime}>
                    <span style={styles.estimatedLabel}>Estimated completion:</span>
                    <span style={styles.estimatedValue}>~30 minutes</span>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px'
    },
    content: {
        textAlign: 'center',
        zIndex: 1,
        maxWidth: '500px'
    },
    glitchContainer: {
        marginBottom: '20px'
    },
    errorCode: {
        fontSize: '120px',
        fontWeight: '900',
        color: '#6366f1',
        textShadow: '0 0 40px rgba(99, 102, 241, 0.5)',
        margin: 0,
        lineHeight: 1,
        fontFamily: 'monospace',
        animation: 'glitch 2s infinite'
    },
    iconContainer: {
        color: '#6366f1',
        marginBottom: '25px'
    },
    icon: {
        width: '80px',
        height: '80px'
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '15px'
    },
    description: {
        fontSize: '16px',
        color: '#94a3b8',
        marginBottom: '30px',
        lineHeight: '1.6'
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '40px',
        flexWrap: 'wrap'
    },
    backBtn: {
        background: 'rgba(99, 102, 241, 0.2)',
        color: '#a5b4fc',
        border: '1px solid rgba(99, 102, 241, 0.4)',
        padding: '12px 25px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s'
    },
    homeBtn: {
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: '#fff',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
        transition: 'all 0.3s'
    },
    terminal: {
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '12px',
        overflow: 'hidden',
        textAlign: 'left',
        border: '1px solid rgba(99, 102, 241, 0.3)'
    },
    terminalHeader: {
        display: 'flex',
        gap: '8px',
        padding: '12px 15px',
        background: 'rgba(0, 0, 0, 0.3)'
    },
    terminalDot: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: '#ef4444'
    },
    terminalBody: {
        padding: '15px',
        fontFamily: 'monospace',
        fontSize: '13px',
        color: '#94a3b8'
    },
    prompt: {
        color: '#22c55e'
    },
    error: {
        color: '#ef4444'
    },
    cursor: {
        animation: 'blink 1s infinite'
    },
    particles: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
    },
    particle: {
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: 'rgba(99, 102, 241, 0.5)',
        borderRadius: '50%',
        animation: 'float 5s ease-in-out infinite'
    },
    estimatedTime: {
        background: 'rgba(99, 102, 241, 0.1)',
        borderRadius: '10px',
        padding: '15px 25px',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '5px'
    },
    estimatedLabel: {
        fontSize: '12px',
        color: '#64748b'
    },
    estimatedValue: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#a5b4fc'
    }
}

// Add animation keyframes
const styleSheet = document.createElement('style')
styleSheet.textContent = `
    @keyframes glitch {
        0%, 100% { text-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
        25% { text-shadow: -3px 0 40px rgba(255, 0, 255, 0.5), 3px 0 40px rgba(0, 255, 255, 0.5); }
        50% { text-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
        75% { text-shadow: 3px 0 40px rgba(255, 0, 255, 0.5), -3px 0 40px rgba(0, 255, 255, 0.5); }
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
`
if (!document.getElementById('error-page-styles')) {
    styleSheet.id = 'error-page-styles'
    document.head.appendChild(styleSheet)
}

export default NotFoundPage
