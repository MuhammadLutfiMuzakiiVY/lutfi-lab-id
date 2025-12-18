import { useState, useRef, useEffect } from 'react'

// Quick Actions Menu - Fast shortcut menu
const QuickActions = ({ onAction }) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const actions = [
        {
            id: 'create-task',
            label: 'Add Task',
            icon: '📋',
            shortcut: 'T',
            color: '#6366f1'
        },
        {
            id: 'create-event',
            label: 'Add Event',
            icon: '📅',
            shortcut: 'E',
            color: '#ec4899'
        },
        {
            id: 'create-note',
            label: 'New Note',
            icon: '📝',
            shortcut: 'N',
            color: '#f59e0b'
        },
        {
            id: 'create-project',
            label: 'New Project',
            icon: '🚀',
            shortcut: 'P',
            color: '#10b981'
        },
        {
            id: 'start-focus',
            label: 'Start Focus',
            icon: '⏱️',
            shortcut: 'F',
            color: '#8b5cf6'
        },
        {
            id: 'upload-file',
            label: 'Upload File',
            icon: '📁',
            shortcut: 'U',
            color: '#22d3ee'
        }
    ]

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Only when not typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

            if (isOpen) {
                const action = actions.find(a => a.shortcut.toLowerCase() === e.key.toLowerCase())
                if (action) {
                    e.preventDefault()
                    handleAction(action.id)
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    const handleAction = (actionId) => {
        setIsOpen(false)
        if (onAction) {
            onAction(actionId)
        }
    }

    return (
        <div className="quick-actions-container" ref={menuRef}>
            {/* Floating Action Button */}
            <button
                className={`fab-button ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title="Quick Actions (Click to open)"
            >
                <span className="fab-icon">{isOpen ? '×' : '+'}</span>
            </button>

            {/* Actions Menu */}
            {isOpen && (
                <div className="quick-actions-menu">
                    <div className="menu-header">
                        <span className="menu-title">Quick Actions</span>
                        <span className="menu-hint">Press letter key</span>
                    </div>
                    <div className="menu-items">
                        {actions.map((action, index) => (
                            <button
                                key={action.id}
                                className="action-item"
                                onClick={() => handleAction(action.id)}
                                style={{
                                    '--action-color': action.color,
                                    animationDelay: `${index * 0.05}s`
                                }}
                            >
                                <span className="action-icon">{action.icon}</span>
                                <span className="action-label">{action.label}</span>
                                <kbd className="action-shortcut">{action.shortcut}</kbd>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                .quick-actions-container {
                    position: fixed;
                    bottom: 80px;
                    right: 24px;
                    z-index: 999;
                }

                .fab-button {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    font-size: 1.75rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .fab-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 30px rgba(99, 102, 241, 0.5);
                }

                .fab-button.active {
                    background: linear-gradient(135deg, #ef4444, #f97316);
                    transform: rotate(45deg);
                }

                .fab-icon {
                    transition: transform 0.3s ease;
                    line-height: 1;
                }

                .quick-actions-menu {
                    position: absolute;
                    bottom: 70px;
                    right: 0;
                    width: 240px;
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                    animation: slideUp 0.2s ease;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .menu-title {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #fff;
                }

                .menu-hint {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .menu-items {
                    padding: 0.5rem;
                }

                .action-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.625rem 0.75rem;
                    background: transparent;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    animation: fadeInAction 0.2s ease forwards;
                    opacity: 0;
                }

                @keyframes fadeInAction {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .action-item:hover {
                    background: rgba(99, 102, 241, 0.15);
                }

                .action-icon {
                    font-size: 1.1rem;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    border-left: 3px solid var(--action-color);
                }

                .action-label {
                    flex: 1;
                    text-align: left;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .action-shortcut {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 4px;
                    padding: 0.15rem 0.4rem;
                    font-size: 0.7rem;
                    font-family: inherit;
                    color: rgba(255, 255, 255, 0.5);
                }

                @media (max-width: 768px) {
                    .quick-actions-container {
                        bottom: 100px;
                        right: 16px;
                    }

                    .fab-button {
                        width: 48px;
                        height: 48px;
                        font-size: 1.5rem;
                    }

                    .quick-actions-menu {
                        width: 200px;
                        right: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default QuickActions
