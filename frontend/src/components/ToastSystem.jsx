import { createContext, useContext, useState, useCallback } from 'react'

// Toast Context
const ToastContext = createContext()

// Toast types configuration
const toastTypes = {
    success: {
        icon: '✅',
        bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95))',
        border: 'rgba(16, 185, 129, 0.5)'
    },
    error: {
        icon: '❌',
        bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(185, 28, 28, 0.95))',
        border: 'rgba(239, 68, 68, 0.5)'
    },
    warning: {
        icon: '⚠️',
        bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.95), rgba(217, 119, 6, 0.95))',
        border: 'rgba(245, 158, 11, 0.5)'
    },
    info: {
        icon: 'ℹ️',
        bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(79, 70, 229, 0.95))',
        border: 'rgba(99, 102, 241, 0.5)'
    }
}

// Toast Provider Component
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message, type = 'info', duration = 4000) => {
        const id = Date.now()
        const toast = { id, message, type, duration }

        setToasts(prev => [...prev, toast])

        // Auto remove after duration
        if (duration > 0) {
            setTimeout(() => {
                removeToast(id)
            }, duration)
        }

        return id
    }, [])

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }, [])

    // Convenience methods
    const success = useCallback((message, duration) => addToast(message, 'success', duration), [addToast])
    const error = useCallback((message, duration) => addToast(message, 'error', duration), [addToast])
    const warning = useCallback((message, duration) => addToast(message, 'warning', duration), [addToast])
    const info = useCallback((message, duration) => addToast(message, 'info', duration), [addToast])

    return (
        <ToastContext.Provider value={{ addToast, removeToast, success, error, warning, info }}>
            {children}

            {/* Toast Container */}
            <div className="toast-container">
                {toasts.map((toast, index) => (
                    <div
                        key={toast.id}
                        className="toast"
                        style={{
                            background: toastTypes[toast.type].bg,
                            borderColor: toastTypes[toast.type].border,
                            '--index': index
                        }}
                    >
                        <span className="toast-icon">{toastTypes[toast.type].icon}</span>
                        <span className="toast-message">{toast.message}</span>
                        <button
                            className="toast-close"
                            onClick={() => removeToast(toast.id)}
                        >
                            ×
                        </button>
                        <div
                            className="toast-progress"
                            style={{
                                animationDuration: `${toast.duration}ms`,
                                background: toastTypes[toast.type].border
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            <style>{`
                .toast-container {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 99999;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    max-width: 380px;
                    pointer-events: none;
                }

                .toast {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 1.25rem;
                    border-radius: 12px;
                    border: 1px solid;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                    pointer-events: auto;
                    animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    position: relative;
                    overflow: hidden;
                }

                @keyframes toastSlideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .toast-icon {
                    font-size: 1.25rem;
                    flex-shrink: 0;
                }

                .toast-message {
                    flex: 1;
                    color: #fff;
                    font-size: 0.9rem;
                    font-weight: 500;
                    line-height: 1.4;
                }

                .toast-close {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: #fff;
                    width: 24px;
                    height: 24px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s ease;
                    flex-shrink: 0;
                }

                .toast-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }

                .toast-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    width: 100%;
                    animation: toastProgress linear forwards;
                }

                @keyframes toastProgress {
                    from { width: 100%; }
                    to { width: 0; }
                }

                @media (max-width: 480px) {
                    .toast-container {
                        left: 10px;
                        right: 10px;
                        max-width: none;
                    }
                }
            `}</style>
        </ToastContext.Provider>
    )
}

// Custom Hook
export const useToast = () => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within ToastProvider')
    }
    return context
}

// Standalone Toast Component (for testing/demo)
const ToastDemo = () => {
    const { success, error, warning, info } = useToast()

    return (
        <div className="toast-demo">
            <h3>🔔 Toast Notifications</h3>
            <p>Click to test different toast types:</p>
            <div className="toast-buttons">
                <button
                    className="demo-btn success"
                    onClick={() => success('Task completed successfully!')}
                >
                    ✅ Success
                </button>
                <button
                    className="demo-btn error"
                    onClick={() => error('Failed to save changes')}
                >
                    ❌ Error
                </button>
                <button
                    className="demo-btn warning"
                    onClick={() => warning('Your session will expire soon')}
                >
                    ⚠️ Warning
                </button>
                <button
                    className="demo-btn info"
                    onClick={() => info('New update available')}
                >
                    ℹ️ Info
                </button>
            </div>

            <style>{`
                .toast-demo {
                    padding: 1.5rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                }

                .toast-demo h3 {
                    margin: 0 0 0.5rem 0;
                    color: #fff;
                }

                .toast-demo p {
                    margin: 0 0 1rem 0;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                }

                .toast-buttons {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }

                .demo-btn {
                    padding: 0.75rem 1.25rem;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    color: #fff;
                }

                .demo-btn.success {
                    background: linear-gradient(135deg, #10b981, #059669);
                }

                .demo-btn.error {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                }

                .demo-btn.warning {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                }

                .demo-btn.info {
                    background: linear-gradient(135deg, #6366f1, #4f46e5);
                }

                .demo-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }
            `}</style>
        </div>
    )
}

export default ToastDemo
