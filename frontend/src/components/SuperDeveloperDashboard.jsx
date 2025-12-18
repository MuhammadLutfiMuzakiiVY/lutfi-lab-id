import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

// Icons
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
)

const ServerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
)

const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
)

const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
)

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
)

const TerminalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
)

const GitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="1.05" y1="12" x2="7" y2="12"></line>
        <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
    </svg>
)

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    </svg>
)

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
)

function SuperDeveloperDashboard() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const [systemStats, setSystemStats] = useState({
        cpuUsage: 42, memoryUsage: 68, diskUsage: 54, networkLatency: 23,
        activeConnections: 156, requestsPerSecond: 847
    })

    const [apiHealth] = useState([
        { name: 'Auth Service', status: 'healthy', latency: 12, uptime: 99.9 },
        { name: 'User Service', status: 'healthy', latency: 8, uptime: 99.95 },
        { name: 'Database', status: 'healthy', latency: 5, uptime: 100 },
        { name: 'Email Service', status: 'warning', latency: 156, uptime: 98.5 },
        { name: 'Storage', status: 'healthy', latency: 23, uptime: 99.8 }
    ])

    const [debugLogs] = useState([
        { time: '14:32:01', level: 'INFO', message: 'User authentication successful', source: 'auth.service' },
        { time: '14:31:58', level: 'DEBUG', message: 'JWT token generated', source: 'auth.service' },
        { time: '14:31:45', level: 'WARN', message: 'High memory usage detected (68%)', source: 'system.monitor' },
        { time: '14:31:30', level: 'INFO', message: 'Database connection pool refreshed', source: 'db.pool' },
        { time: '14:31:15', level: 'ERROR', message: 'Email delivery failed: timeout', source: 'email.service' }
    ])

    const [deployments] = useState([
        { id: 1, version: 'v2.4.1', env: 'Production', status: 'deployed', time: '2 hours ago', commit: 'a1b2c3d' },
        { id: 2, version: 'v2.4.2-beta', env: 'Staging', status: 'deploying', time: '5 min ago', commit: 'e4f5g6h' },
        { id: 3, version: 'v2.4.0', env: 'Development', status: 'deployed', time: '1 day ago', commit: 'i7j8k9l' }
    ])

    const [featureFlags] = useState([
        { name: 'dark_mode_v2', enabled: true, users: 'All Users' },
        { name: 'new_dashboard', enabled: true, users: '50% Rollout' },
        { name: 'ai_assistant', enabled: false, users: 'Beta Testers' },
        { name: 'advanced_analytics', enabled: true, users: 'Premium Only' }
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            setSystemStats(prev => ({
                ...prev,
                cpuUsage: Math.min(100, Math.max(10, prev.cpuUsage + (Math.random() - 0.5) * 10)),
                memoryUsage: Math.min(100, Math.max(30, prev.memoryUsage + (Math.random() - 0.5) * 5)),
                networkLatency: Math.max(5, prev.networkLatency + (Math.random() - 0.5) * 8),
                requestsPerSecond: Math.max(100, prev.requestsPerSecond + Math.floor((Math.random() - 0.5) * 100))
            }))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'healthy': case 'deployed': return '#10b981'
            case 'warning': case 'deploying': return '#f59e0b'
            case 'error': case 'failed': return '#ef4444'
            default: return '#6b7280'
        }
    }

    const getLogLevelColor = (level) => {
        switch (level) {
            case 'INFO': return '#3b82f6'
            case 'DEBUG': return '#8b5cf6'
            case 'WARN': return '#f59e0b'
            case 'ERROR': return '#ef4444'
            default: return '#6b7280'
        }
    }

    return (
        <div className="super-dev-dashboard">
            {/* Header */}
            <div className="dev-header">
                <div className="dev-header-left">
                    <div className="dev-badge"><CodeIcon /><span>⚡ SUPER DEVELOPER</span></div>
                    <h1>Developer Control Center</h1>
                </div>
                <div className="dev-header-right">
                    <span className="dev-user">👤 {user?.name || user?.email}</span>
                    <span className="dev-time">{new Date().toLocaleTimeString()}</span>
                    <button className="logout-btn" onClick={handleLogout}><LogoutIcon /> Logout</button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
                <div className="quick-stat"><span className="qs-value">{systemStats.cpuUsage.toFixed(0)}%</span><span className="qs-label">CPU</span></div>
                <div className="quick-stat"><span className="qs-value">{systemStats.memoryUsage.toFixed(0)}%</span><span className="qs-label">Memory</span></div>
                <div className="quick-stat"><span className="qs-value">{systemStats.networkLatency.toFixed(0)}ms</span><span className="qs-label">Latency</span></div>
                <div className="quick-stat"><span className="qs-value">{systemStats.requestsPerSecond}</span><span className="qs-label">Req/s</span></div>
                <div className="quick-stat"><span className="qs-value">{systemStats.activeConnections}</span><span className="qs-label">Connections</span></div>
            </div>

            {/* System Monitoring */}
            <div className="dev-section">
                <h2><ServerIcon /> System Monitoring</h2>
                <div className="dev-stats-grid">
                    {[
                        { label: 'CPU Usage', value: systemStats.cpuUsage, color: systemStats.cpuUsage > 80 ? '#ef4444' : '#6366f1' },
                        { label: 'Memory Usage', value: systemStats.memoryUsage, color: systemStats.memoryUsage > 85 ? '#ef4444' : '#8b5cf6' },
                        { label: 'Disk Usage', value: systemStats.diskUsage, color: '#10b981' }
                    ].map((stat, i) => (
                        <div key={i} className="dev-stat-card">
                            <div className="stat-header"><span>{stat.label}</span><span className="stat-value">{stat.value.toFixed(1)}%</span></div>
                            <div className="stat-bar"><div className="stat-fill" style={{ width: `${stat.value}%`, background: stat.color }}></div></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* API Health & Deployments */}
            <div className="dev-split-section">
                <div className="dev-panel">
                    <h2><ActivityIcon /> API Health</h2>
                    <div className="api-health-list">
                        {apiHealth.map((api, i) => (
                            <div key={i} className="api-health-item">
                                <div className="api-status">
                                    <span className="status-dot" style={{ background: getStatusColor(api.status) }}></span>
                                    <span className="api-name">{api.name}</span>
                                </div>
                                <div className="api-metrics">
                                    <span>{api.latency}ms</span>
                                    <span>{api.uptime}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dev-panel">
                    <h2><RocketIcon /> Deployments</h2>
                    <div className="deployments-list">
                        {deployments.map(dep => (
                            <div key={dep.id} className="deployment-item">
                                <div className="dep-info">
                                    <span className="dep-version">{dep.version}</span>
                                    <span className="dep-env">{dep.env}</span>
                                </div>
                                <div className="dep-meta">
                                    <span className="dep-status" style={{ color: getStatusColor(dep.status) }}>{dep.status}</span>
                                    <span className="dep-commit">#{dep.commit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Debug Console & Feature Flags */}
            <div className="dev-split-section">
                <div className="dev-panel debug-console">
                    <h2><TerminalIcon /> Debug Console</h2>
                    <div className="debug-logs">
                        {debugLogs.map((log, i) => (
                            <div key={i} className="debug-log-item">
                                <span className="log-time">{log.time}</span>
                                <span className="log-level" style={{ color: getLogLevelColor(log.level) }}>[{log.level}]</span>
                                <span className="log-source">{log.source}</span>
                                <span className="log-message">{log.message}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dev-panel">
                    <h2><GitIcon /> Feature Flags</h2>
                    <div className="feature-flags-list">
                        {featureFlags.map((flag, i) => (
                            <div key={i} className="feature-flag-item">
                                <div className="flag-info">
                                    <span className="flag-name">{flag.name}</span>
                                    <span className="flag-users">{flag.users}</span>
                                </div>
                                <div className={`flag-toggle ${flag.enabled ? 'enabled' : ''}`}>
                                    <div className="toggle-slider"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="dev-section">
                <h2>⚡ Quick Actions</h2>
                <div className="dev-actions-grid">
                    <button className="dev-action-btn"><DatabaseIcon /> Clear Cache</button>
                    <button className="dev-action-btn"><ServerIcon /> Restart Services</button>
                    <button className="dev-action-btn"><TerminalIcon /> View Full Logs</button>
                    <button className="dev-action-btn"><RocketIcon /> Deploy to Prod</button>
                    <button className="dev-action-btn danger"><ShieldIcon /> Emergency Lockdown</button>
                </div>
            </div>

            <style>{`
                .super-dev-dashboard { padding: 1.5rem; min-height: 100vh; background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f0f23 100%); }
                .dev-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15)); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 16px; margin-bottom: 1.5rem; }
                .dev-header-left { display: flex; align-items: center; gap: 1rem; }
                .dev-badge { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 20px; color: white; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.05em; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4); }
                .dev-header h1 { margin: 0; font-size: 1.5rem; color: #e5e7eb; }
                .dev-header-right { display: flex; align-items: center; gap: 1.5rem; color: #9ca3af; font-size: 0.875rem; }
                .logout-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; color: #fca5a5; cursor: pointer; transition: all 0.2s; }
                .logout-btn:hover { background: rgba(239, 68, 68, 0.2); }

                .quick-stats { display: flex; gap: 1rem; margin-bottom: 1.5rem; overflow-x: auto; }
                .quick-stat { flex: 1; min-width: 100px; padding: 1rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; text-align: center; }
                .qs-value { display: block; font-size: 1.5rem; font-weight: 700; color: #a5b4fc; }
                .qs-label { font-size: 0.75rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }

                .dev-section { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; }
                .dev-section h2 { display: flex; align-items: center; gap: 0.5rem; margin: 0 0 1rem 0; font-size: 1rem; color: #e5e7eb; }
                .dev-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
                .dev-stat-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 1rem; }
                .stat-header { display: flex; justify-content: space-between; margin-bottom: 0.75rem; font-size: 0.875rem; color: #9ca3af; }
                .stat-value { font-weight: 600; color: #e5e7eb; }
                .stat-bar { height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; overflow: hidden; }
                .stat-fill { height: 100%; border-radius: 4px; transition: width 0.5s ease; }

                .dev-split-section { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
                .dev-panel { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 1.5rem; }
                .dev-panel h2 { display: flex; align-items: center; gap: 0.5rem; margin: 0 0 1rem 0; font-size: 1rem; color: #e5e7eb; }

                .api-health-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .api-health-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; }
                .api-status { display: flex; align-items: center; gap: 0.5rem; }
                .status-dot { width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 8px currentColor; }
                .api-name { font-size: 0.875rem; color: #e5e7eb; }
                .api-metrics { display: flex; gap: 1rem; font-size: 0.75rem; color: #6b7280; }

                .deployments-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .deployment-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; }
                .dep-info { display: flex; flex-direction: column; gap: 0.25rem; }
                .dep-version { font-weight: 600; color: #e5e7eb; }
                .dep-env { font-size: 0.75rem; color: #6b7280; }
                .dep-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem; }
                .dep-status { font-size: 0.75rem; font-weight: 600; text-transform: capitalize; }
                .dep-commit { font-size: 0.7rem; color: #6b7280; font-family: monospace; }

                .debug-console { background: #0d1117; border-color: rgba(99, 102, 241, 0.2); }
                .debug-logs { font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.75rem; max-height: 200px; overflow-y: auto; }
                .debug-log-item { display: flex; gap: 0.75rem; padding: 0.4rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
                .log-time { color: #6b7280; }
                .log-level { font-weight: 600; min-width: 50px; }
                .log-source { color: #8b5cf6; }
                .log-message { color: #e5e7eb; flex: 1; }

                .feature-flags-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .feature-flag-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; }
                .flag-info { display: flex; flex-direction: column; gap: 0.25rem; }
                .flag-name { font-size: 0.875rem; color: #e5e7eb; font-family: monospace; }
                .flag-users { font-size: 0.7rem; color: #6b7280; }
                .flag-toggle { width: 44px; height: 24px; background: rgba(107, 114, 128, 0.3); border-radius: 12px; position: relative; cursor: pointer; transition: all 0.3s; }
                .flag-toggle.enabled { background: rgba(99, 102, 241, 0.5); }
                .toggle-slider { position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: #6b7280; border-radius: 50%; transition: all 0.3s; }
                .flag-toggle.enabled .toggle-slider { left: 22px; background: #6366f1; box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }

                .dev-actions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
                .dev-action-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; color: #a5b4fc; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
                .dev-action-btn:hover { background: rgba(99, 102, 241, 0.2); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2); }
                .dev-action-btn.danger { background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: #fca5a5; }
                .dev-action-btn.danger:hover { background: rgba(239, 68, 68, 0.2); }

                @media (max-width: 768px) {
                    .dev-split-section { grid-template-columns: 1fr; }
                    .dev-header { flex-direction: column; gap: 1rem; text-align: center; }
                    .dev-header-right { flex-wrap: wrap; justify-content: center; }
                }
            `}</style>
        </div>
    )
}

export default SuperDeveloperDashboard
