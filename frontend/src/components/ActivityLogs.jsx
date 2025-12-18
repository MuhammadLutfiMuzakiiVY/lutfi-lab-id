import { useState, useMemo } from 'react'

// Activity Logs - Professional logging system
const ActivityLogs = () => {
    // Sample activity data
    const [logs] = useState([
        { id: 1, type: 'login', user: 'Muhammad Lutfi', action: 'User logged in', ip: '192.168.1.100', device: 'Chrome/Windows', timestamp: new Date(Date.now() - 5 * 60 * 1000) },
        { id: 2, type: 'data', user: 'Muhammad Lutfi', action: 'Created new task: Review Security', ip: '192.168.1.100', device: 'Chrome/Windows', timestamp: new Date(Date.now() - 15 * 60 * 1000) },
        { id: 3, type: 'data', user: 'Muhammad Lutfi', action: 'Updated project status to Active', ip: '192.168.1.100', device: 'Chrome/Windows', timestamp: new Date(Date.now() - 30 * 60 * 1000) },
        { id: 4, type: 'system', user: 'System', action: 'Backup completed successfully', ip: 'localhost', device: 'Server', timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000) },
        { id: 5, type: 'error', user: 'System', action: 'Failed to connect to API endpoint', ip: 'localhost', device: 'Server', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) },
        { id: 6, type: 'security', user: 'Unknown', action: 'Failed login attempt detected', ip: '45.33.32.156', device: 'Unknown', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000) },
        { id: 7, type: 'login', user: 'Admin', action: 'Admin user logged in', ip: '192.168.1.1', device: 'Firefox/MacOS', timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000) },
        { id: 8, type: 'logout', user: 'Admin', action: 'Admin user logged out', ip: '192.168.1.1', device: 'Firefox/MacOS', timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000) },
        { id: 9, type: 'data', user: 'Muhammad Lutfi', action: 'Deleted old archived items (5 items)', ip: '192.168.1.100', device: 'Chrome/Windows', timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        { id: 10, type: 'system', user: 'System', action: 'Scheduled maintenance completed', ip: 'localhost', device: 'Server', timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000) }
    ])

    const [filterType, setFilterType] = useState('all')
    const [filterUser, setFilterUser] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [dateRange, setDateRange] = useState('all')

    const logTypes = [
        { id: 'all', label: 'All', icon: '📋', color: '#6366f1' },
        { id: 'login', label: 'Login', icon: '🔑', color: '#10b981' },
        { id: 'logout', label: 'Logout', icon: '🚪', color: '#f59e0b' },
        { id: 'data', label: 'Data', icon: '📊', color: '#8b5cf6' },
        { id: 'system', label: 'System', icon: '⚙️', color: '#22d3ee' },
        { id: 'error', label: 'Error', icon: '❌', color: '#ef4444' },
        { id: 'security', label: 'Security', icon: '🛡️', color: '#ec4899' }
    ]

    const dateRanges = [
        { id: 'all', label: 'All Time' },
        { id: 'today', label: 'Today' },
        { id: 'week', label: 'This Week' },
        { id: 'month', label: 'This Month' }
    ]

    // Get unique users
    const users = useMemo(() => {
        const userSet = new Set(logs.map(l => l.user))
        return ['all', ...Array.from(userSet)]
    }, [logs])

    // Filter logs
    const filteredLogs = useMemo(() => {
        return logs.filter(log => {
            // Type filter
            if (filterType !== 'all' && log.type !== filterType) return false

            // User filter
            if (filterUser !== 'all' && log.user !== filterUser) return false

            // Search filter
            if (searchQuery && !log.action.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !log.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !log.ip.includes(searchQuery)) return false

            // Date filter
            const now = new Date()
            const logDate = new Date(log.timestamp)
            if (dateRange === 'today') {
                if (logDate.toDateString() !== now.toDateString()) return false
            } else if (dateRange === 'week') {
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
                if (logDate < weekAgo) return false
            } else if (dateRange === 'month') {
                const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
                if (logDate < monthAgo) return false
            }

            return true
        }).sort((a, b) => b.timestamp - a.timestamp)
    }, [logs, filterType, filterUser, searchQuery, dateRange])

    const formatTime = (date) => {
        const now = new Date()
        const diff = now - date

        if (diff < 60 * 1000) return 'Just now'
        if (diff < 60 * 60 * 1000) return `${Math.floor(diff / (60 * 1000))}m ago`
        if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / (60 * 60 * 1000))}h ago`
        if (diff < 48 * 60 * 60 * 1000) return 'Yesterday'

        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const getTypeStyle = (type) => {
        const typeInfo = logTypes.find(t => t.id === type)
        return {
            bg: typeInfo?.color + '20',
            color: typeInfo?.color,
            icon: typeInfo?.icon
        }
    }

    const getStats = () => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        return {
            total: logs.length,
            today: logs.filter(l => new Date(l.timestamp) >= today).length,
            errors: logs.filter(l => l.type === 'error').length,
            security: logs.filter(l => l.type === 'security').length
        }
    }

    const stats = getStats()

    return (
        <div className="activity-logs">
            <div className="logs-header">
                <div className="header-left">
                    <h2>📋 Activity Logs</h2>
                    <p>Monitor all system activities</p>
                </div>
                <button className="export-btn">📥 Export Logs</button>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-icon">📊</span>
                    <div className="stat-info">
                        <span className="stat-value">{stats.total}</span>
                        <span className="stat-label">Total Logs</span>
                    </div>
                </div>
                <div className="stat-card">
                    <span className="stat-icon">📅</span>
                    <div className="stat-info">
                        <span className="stat-value">{stats.today}</span>
                        <span className="stat-label">Today</span>
                    </div>
                </div>
                <div className="stat-card warning">
                    <span className="stat-icon">❌</span>
                    <div className="stat-info">
                        <span className="stat-value">{stats.errors}</span>
                        <span className="stat-label">Errors</span>
                    </div>
                </div>
                <div className="stat-card danger">
                    <span className="stat-icon">🛡️</span>
                    <div className="stat-info">
                        <span className="stat-value">{stats.security}</span>
                        <span className="stat-label">Security</span>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="filters-bar">
                <div className="type-filters">
                    {logTypes.map(type => (
                        <button
                            key={type.id}
                            className={`type-btn ${filterType === type.id ? 'active' : ''}`}
                            onClick={() => setFilterType(type.id)}
                            style={{ '--type-color': type.color }}
                        >
                            <span>{type.icon}</span>
                            <span className="type-label">{type.label}</span>
                        </button>
                    ))}
                </div>

                <div className="filter-controls">
                    <div className="search-box">
                        <span>🔍</span>
                        <input
                            type="text"
                            placeholder="Search logs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <select value={filterUser} onChange={(e) => setFilterUser(e.target.value)}>
                        {users.map(user => (
                            <option key={user} value={user}>
                                {user === 'all' ? 'All Users' : user}
                            </option>
                        ))}
                    </select>

                    <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                        {dateRanges.map(range => (
                            <option key={range.id} value={range.id}>{range.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Logs List */}
            <div className="logs-list">
                {filteredLogs.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">📋</span>
                        <p>No logs found</p>
                    </div>
                ) : (
                    filteredLogs.map(log => {
                        const typeStyle = getTypeStyle(log.type)
                        return (
                            <div key={log.id} className="log-item">
                                <div
                                    className="log-type"
                                    style={{ background: typeStyle.bg, color: typeStyle.color }}
                                >
                                    {typeStyle.icon}
                                </div>
                                <div className="log-content">
                                    <div className="log-main">
                                        <span className="log-action">{log.action}</span>
                                        <span className="log-time">{formatTime(log.timestamp)}</span>
                                    </div>
                                    <div className="log-meta">
                                        <span className="meta-item">
                                            <span className="meta-icon">👤</span>
                                            {log.user}
                                        </span>
                                        <span className="meta-item">
                                            <span className="meta-icon">🌐</span>
                                            {log.ip}
                                        </span>
                                        <span className="meta-item">
                                            <span className="meta-icon">💻</span>
                                            {log.device}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

            <style>{`
                .activity-logs {
                    padding: 0;
                }

                .logs-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .header-left p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .export-btn {
                    background: rgba(99, 102, 241, 0.2);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    color: #a5b4fc;
                    padding: 0.6rem 1.25rem;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .export-btn:hover {
                    background: rgba(99, 102, 241, 0.3);
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                }

                .stat-card.warning {
                    border-color: rgba(245, 158, 11, 0.3);
                }

                .stat-card.danger {
                    border-color: rgba(239, 68, 68, 0.3);
                }

                .stat-icon {
                    font-size: 1.5rem;
                }

                .stat-info {
                    display: flex;
                    flex-direction: column;
                }

                .stat-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Filters */
                .filters-bar {
                    margin-bottom: 1.5rem;
                }

                .type-filters {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }

                .type-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    padding: 0.4rem 0.75rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                }

                .type-btn:hover {
                    border-color: var(--type-color);
                }

                .type-btn.active {
                    background: rgba(99, 102, 241, 0.2);
                    border-color: var(--type-color);
                    color: #fff;
                }

                .type-label {
                    display: none;
                }

                @media (min-width: 768px) {
                    .type-label {
                        display: inline;
                    }
                }

                .filter-controls {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }

                .search-box {
                    flex: 1;
                    min-width: 200px;
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0 0.75rem;
                }

                .search-box input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.6rem 0;
                    margin-left: 0.5rem;
                    font-size: 0.9rem;
                }

                .search-box input:focus { outline: none; }

                .filter-controls select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    padding: 0.6rem 1rem;
                    font-size: 0.9rem;
                }

                /* Logs List */
                .logs-list {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .log-item {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    transition: background 0.15s ease;
                }

                .log-item:hover {
                    background: rgba(99, 102, 241, 0.05);
                }

                .log-item:last-child {
                    border-bottom: none;
                }

                .log-type {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                }

                .log-content {
                    flex: 1;
                    min-width: 0;
                }

                .log-main {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 0.375rem;
                }

                .log-action {
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .log-time {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;
                    white-space: nowrap;
                }

                .log-meta {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                }

                .meta-icon {
                    font-size: 0.7rem;
                }

                /* Empty State */
                .empty-state {
                    text-align: center;
                    padding: 3rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .empty-icon {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 1rem;
                    opacity: 0.5;
                }

                /* Responsive */
                @media (max-width: 600px) {
                    .logs-header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .export-btn {
                        width: 100%;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .log-main {
                        flex-direction: column;
                        gap: 0.25rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default ActivityLogs
