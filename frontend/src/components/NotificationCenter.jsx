import { useState, useRef, useEffect } from 'react'

// Notification Center - Enhanced alerts and reminders
const NotificationCenter = ({ notifications = [], onMarkRead, onDismissAll, onNotificationClick }) => {
    const [isOpen, setIsOpen] = useState(false)
    const panelRef = useRef(null)

    // Default sample notifications if none provided
    const defaultNotifications = [
        {
            id: 1,
            type: 'deadline',
            title: 'Task Deadline',
            message: 'Review Security Vulnerabilities - due in 2 hours',
            time: '2 hours ago',
            read: false,
            priority: 'high'
        },
        {
            id: 2,
            type: 'reminder',
            title: 'Meeting Reminder',
            message: 'Team Standup starts in 30 minutes',
            time: '30 min',
            read: false,
            priority: 'medium'
        },
        {
            id: 3,
            type: 'focus',
            title: 'Focus Timer Complete',
            message: 'You completed 25 minutes of focus time! 🎉',
            time: '1 hour ago',
            read: false,
            priority: 'low'
        },
        {
            id: 4,
            type: 'system',
            title: 'Task Completed',
            message: 'Setup Personal VPN has been marked as done',
            time: '3 hours ago',
            read: true,
            priority: 'low'
        },
        {
            id: 5,
            type: 'deadline',
            title: 'Overdue Task',
            message: 'Update Firewall Rules is overdue!',
            time: '1 day ago',
            read: false,
            priority: 'critical'
        }
    ]

    const notifList = notifications.length > 0 ? notifications : defaultNotifications
    const unreadCount = notifList.filter(n => !n.read).length

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    const getTypeIcon = (type) => {
        const icons = {
            deadline: '⏰',
            reminder: '🔔',
            focus: '⏱️',
            system: '💻',
            task: '📋',
            project: '🚀'
        }
        return icons[type] || '📌'
    }

    const getTypeColor = (type) => {
        const colors = {
            deadline: '#ef4444',
            reminder: '#f59e0b',
            focus: '#10b981',
            system: '#6366f1',
            task: '#8b5cf6',
            project: '#22d3ee'
        }
        return colors[type] || '#6b7280'
    }

    const getPriorityStyle = (priority) => {
        if (priority === 'critical') return { borderLeft: '3px solid #ef4444', background: 'rgba(239, 68, 68, 0.1)' }
        if (priority === 'high') return { borderLeft: '3px solid #f59e0b' }
        return {}
    }

    const handleNotificationClick = (notif) => {
        if (onNotificationClick) {
            onNotificationClick(notif)
        }
        if (onMarkRead) {
            onMarkRead(notif.id)
        }
    }

    return (
        <div className="notification-center" ref={panelRef}>
            {/* Bell Button */}
            <button
                className={`notification-bell ${unreadCount > 0 ? 'has-unread' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title="Notifications"
            >
                <span className="bell-icon">🔔</span>
                {unreadCount > 0 && (
                    <span className="badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
                )}
            </button>

            {/* Notification Panel */}
            {isOpen && (
                <div className="notification-panel">
                    <div className="panel-header">
                        <h3>Notifications</h3>
                        {unreadCount > 0 && (
                            <button
                                className="mark-all-btn"
                                onClick={() => onDismissAll && onDismissAll()}
                            >
                                Clear All
                            </button>
                        )}
                    </div>

                    <div className="notification-list">
                        {notifList.length === 0 ? (
                            <div className="empty-state">
                                <span className="empty-icon">🔕</span>
                                <p>No notifications</p>
                            </div>
                        ) : (
                            notifList.map((notif) => (
                                <div
                                    key={notif.id}
                                    className={`notification-item ${notif.read ? 'read' : 'unread'}`}
                                    style={getPriorityStyle(notif.priority)}
                                    onClick={() => handleNotificationClick(notif)}
                                >
                                    <div
                                        className="notif-icon"
                                        style={{ background: `${getTypeColor(notif.type)}20`, color: getTypeColor(notif.type) }}
                                    >
                                        {getTypeIcon(notif.type)}
                                    </div>
                                    <div className="notif-content">
                                        <div className="notif-header">
                                            <span className="notif-title">{notif.title}</span>
                                            <span className="notif-time">{notif.time}</span>
                                        </div>
                                        <p className="notif-message">{notif.message}</p>
                                    </div>
                                    {!notif.read && <div className="unread-dot"></div>}
                                </div>
                            ))
                        )}
                    </div>

                    <div className="panel-footer">
                        <button className="view-all-btn">View All Notifications</button>
                    </div>
                </div>
            )}

            <style>{`
                .notification-center {
                    position: relative;
                }

                .notification-bell {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 10px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.2s ease;
                }

                .notification-bell:hover {
                    background: rgba(99, 102, 241, 0.2);
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .notification-bell.has-unread .bell-icon {
                    animation: bellShake 0.5s ease-in-out infinite;
                }

                @keyframes bellShake {
                    0%, 100% { transform: rotate(0); }
                    25% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                }

                .bell-icon {
                    font-size: 1.1rem;
                }

                .badge {
                    position: absolute;
                    top: -4px;
                    right: -4px;
                    background: linear-gradient(135deg, #ef4444, #f97316);
                    color: #fff;
                    font-size: 0.65rem;
                    font-weight: 700;
                    min-width: 18px;
                    height: 18px;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 4px;
                    animation: popIn 0.3s ease;
                }

                @keyframes popIn {
                    from { transform: scale(0); }
                    to { transform: scale(1); }
                }

                .notification-panel {
                    position: absolute;
                    top: 50px;
                    right: 0;
                    width: 360px;
                    max-height: 480px;
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                    z-index: 1000;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .panel-header h3 {
                    margin: 0;
                    font-size: 1rem;
                    color: #fff;
                }

                .mark-all-btn {
                    background: transparent;
                    border: none;
                    color: #6366f1;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: color 0.2s ease;
                }

                .mark-all-btn:hover {
                    color: #818cf8;
                }

                .notification-list {
                    max-height: 340px;
                    overflow-y: auto;
                }

                .notification-item {
                    display: flex;
                    gap: 0.75rem;
                    padding: 0.875rem 1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    position: relative;
                }

                .notification-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .notification-item.read {
                    opacity: 0.6;
                }

                .notif-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                }

                .notif-content {
                    flex: 1;
                    min-width: 0;
                }

                .notif-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.25rem;
                }

                .notif-title {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #fff;
                }

                .notif-time {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .notif-message {
                    margin: 0;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.7);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .unread-dot {
                    width: 8px;
                    height: 8px;
                    background: #6366f1;
                    border-radius: 50%;
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .empty-icon {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    opacity: 0.5;
                }

                .empty-state p {
                    margin: 0;
                }

                .panel-footer {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.75rem;
                }

                .view-all-btn {
                    width: 100%;
                    background: rgba(99, 102, 241, 0.15);
                    border: none;
                    color: #a5b4fc;
                    padding: 0.625rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .view-all-btn:hover {
                    background: rgba(99, 102, 241, 0.25);
                }

                @media (max-width: 768px) {
                    .notification-panel {
                        position: fixed;
                        top: 60px;
                        right: 10px;
                        left: 10px;
                        width: auto;
                    }
                }
            `}</style>
        </div>
    )
}

export default NotificationCenter
