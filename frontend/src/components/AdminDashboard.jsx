import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

// Icons
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
)

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
)

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
)

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
)

const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
)

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
)

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
)

const BanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
)

function AdminDashboard() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const [userStats] = useState({ totalUsers: 1247, activeToday: 89, newThisWeek: 34, bannedUsers: 5 })

    const [recentActivities] = useState([
        { id: 1, action: 'User registered', user: 'john.doe@example.com', time: '2 min ago', type: 'success' },
        { id: 2, action: 'Login attempt failed', user: 'unknown@test.com', time: '5 min ago', type: 'warning' },
        { id: 3, action: 'Password changed', user: 'admin@lutfi-lab.id', time: '12 min ago', type: 'info' },
        { id: 4, action: 'User banned', user: 'spammer@bad.com', time: '1 hour ago', type: 'danger' },
        { id: 5, action: 'New content published', user: 'editor@lutfi-lab.id', time: '2 hours ago', type: 'success' }
    ])

    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'user', status: 'active', joined: '2 hours ago' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user', status: 'pending', joined: '5 hours ago' },
        { id: 3, name: 'Bob Wilson', email: 'bob.wilson@example.com', role: 'admin', status: 'active', joined: '1 day ago' },
        { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'user', status: 'banned', joined: '3 days ago' },
        { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'user', status: 'active', joined: '1 week ago' }
    ])

    const [contentQueue] = useState([
        { id: 1, title: 'New Security Tutorial', author: 'admin', type: 'Article', submitted: '1 hour ago' },
        { id: 2, title: 'Network Basics Video', author: 'editor1', type: 'Video', submitted: '3 hours ago' },
        { id: 3, title: 'CTF Challenge #45', author: 'ctf_team', type: 'Challenge', submitted: '5 hours ago' }
    ])

    const [alerts] = useState([
        { id: 1, title: 'High Traffic Detected', message: 'Server load is above 80%', severity: 'warning', time: '5 min ago' },
        { id: 2, title: 'Security Update Available', message: 'New security patch ready to install', severity: 'info', time: '1 hour ago' }
    ])

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    const toggleUserStatus = (userId) => {
        setUsers(users.map(u => {
            if (u.id === userId) {
                return { ...u, status: u.status === 'banned' ? 'active' : 'banned' }
            }
            return u
        }))
    }

    const getActivityTypeStyles = (type) => {
        switch (type) {
            case 'success': return { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: 'rgba(16, 185, 129, 0.3)' }
            case 'warning': return { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' }
            case 'danger': return { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.3)' }
            case 'info': return { bg: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' }
            default: return { bg: 'rgba(107, 114, 128, 0.15)', color: '#6b7280', border: 'rgba(107, 114, 128, 0.3)' }
        }
    }

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <div className="admin-header">
                <div className="admin-header-left">
                    <div className="admin-badge"><ShieldIcon /><span>🛡️ ADMINISTRATOR</span></div>
                    <h1>Admin Control Panel</h1>
                </div>
                <div className="admin-header-right">
                    <span className="admin-user">👤 {user?.name || user?.email}</span>
                    <button className="logout-btn" onClick={handleLogout}><LogoutIcon /> Logout</button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="admin-stats-grid">
                {[
                    { icon: <UsersIcon />, value: userStats.totalUsers.toLocaleString(), label: 'Total Users', iconClass: 'users' },
                    { icon: <ChartIcon />, value: userStats.activeToday, label: 'Active Today', iconClass: 'active' },
                    { icon: <BellIcon />, value: `+${userStats.newThisWeek}`, label: 'New This Week', iconClass: 'new' },
                    { icon: <ShieldIcon />, value: userStats.bannedUsers, label: 'Banned Users', iconClass: 'banned' }
                ].map((stat, i) => (
                    <div key={i} className="admin-stat-card">
                        <div className={`stat-icon ${stat.iconClass}`}>{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* User Management */}
            <div className="admin-section">
                <div className="section-header">
                    <h2><UsersIcon /> User Management</h2>
                    <button className="add-btn">+ Add User</button>
                </div>
                <div className="users-table">
                    <div className="table-header">
                        <span>User</span><span>Role</span><span>Status</span><span>Joined</span><span>Actions</span>
                    </div>
                    {users.map(u => (
                        <div key={u.id} className="table-row">
                            <div className="user-cell">
                                <div className="user-avatar">{u.name.charAt(0)}</div>
                                <div className="user-details">
                                    <span className="user-name">{u.name}</span>
                                    <span className="user-email">{u.email}</span>
                                </div>
                            </div>
                            <span className={`role-badge ${u.role}`}>{u.role}</span>
                            <span className={`status-badge ${u.status}`}>{u.status}</span>
                            <span className="joined-date">{u.joined}</span>
                            <div className="action-btns">
                                <button className="action-btn edit">Edit</button>
                                <button className={`action-btn ${u.status === 'banned' ? 'unban' : 'ban'}`} onClick={() => toggleUserStatus(u.id)}>
                                    {u.status === 'banned' ? <><CheckIcon /> Unban</> : <><BanIcon /> Ban</>}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content & Activities */}
            <div className="admin-split-section">
                <div className="admin-panel">
                    <h2><FileTextIcon /> Content Moderation Queue</h2>
                    <div className="content-queue">
                        {contentQueue.map(item => (
                            <div key={item.id} className="queue-item">
                                <div className="queue-info">
                                    <span className="queue-title">{item.title}</span>
                                    <span className="queue-meta">{item.type} by {item.author} • {item.submitted}</span>
                                </div>
                                <div className="queue-actions">
                                    <button className="approve-btn">✓ Approve</button>
                                    <button className="reject-btn">✕ Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="admin-panel">
                    <h2><FileTextIcon /> Recent Activities</h2>
                    <div className="activities-list">
                        {recentActivities.map(activity => {
                            const styles = getActivityTypeStyles(activity.type)
                            return (
                                <div key={activity.id} className="activity-item" style={{ background: styles.bg, borderColor: styles.border }}>
                                    <div className="activity-content">
                                        <span className="activity-action" style={{ color: styles.color }}>{activity.action}</span>
                                        <span className="activity-user">{activity.user}</span>
                                    </div>
                                    <span className="activity-time">{activity.time}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
                <div className="admin-alerts">
                    <h2><BellIcon /> System Alerts</h2>
                    <div className="alerts-list">
                        {alerts.map(alert => (
                            <div key={alert.id} className={`alert-item ${alert.severity}`}>
                                <div className="alert-content">
                                    <span className="alert-title">{alert.title}</span>
                                    <span className="alert-message">{alert.message}</span>
                                </div>
                                <span className="alert-time">{alert.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick Actions */}
            <div className="admin-actions">
                <h2><SettingsIcon /> Quick Actions</h2>
                <div className="actions-grid">
                    <button className="action-btn-large"><UsersIcon /> Manage Users</button>
                    <button className="action-btn-large"><FileTextIcon /> View Reports</button>
                    <button className="action-btn-large"><ShieldIcon /> Security Settings</button>
                    <button className="action-btn-large"><SettingsIcon /> System Config</button>
                </div>
            </div>

            <style>{`
                .admin-dashboard { padding: 1.5rem; min-height: 100vh; background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f1a25 100%); }
                .admin-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 16px; margin-bottom: 1.5rem; }
                .admin-header-left { display: flex; align-items: center; gap: 1rem; }
                .admin-badge { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: linear-gradient(135deg, #10b981, #3b82f6); border-radius: 20px; color: white; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.05em; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); }
                .admin-header h1 { margin: 0; font-size: 1.5rem; color: #e5e7eb; }
                .admin-header-right { display: flex; align-items: center; gap: 1.5rem; color: #9ca3af; }
                .logout-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; color: #fca5a5; cursor: pointer; transition: all 0.2s; }
                .logout-btn:hover { background: rgba(239, 68, 68, 0.2); }

                .admin-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
                .admin-stat-card { display: flex; align-items: center; gap: 1rem; padding: 1.25rem; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; }
                .stat-icon { width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; }
                .stat-icon.users { background: rgba(99, 102, 241, 0.15); color: #6366f1; }
                .stat-icon.active { background: rgba(16, 185, 129, 0.15); color: #10b981; }
                .stat-icon.new { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
                .stat-icon.banned { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
                .stat-info { display: flex; flex-direction: column; }
                .stat-info .stat-value { font-size: 1.75rem; font-weight: 700; color: #e5e7eb; }
                .stat-info .stat-label { font-size: 0.875rem; color: #9ca3af; }

                .admin-section { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; }
                .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
                .section-header h2 { display: flex; align-items: center; gap: 0.5rem; margin: 0; font-size: 1rem; color: #e5e7eb; }
                .add-btn { padding: 0.5rem 1rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; color: #6ee7b7; cursor: pointer; transition: all 0.2s; }
                .add-btn:hover { background: rgba(16, 185, 129, 0.2); }

                .users-table { font-size: 0.875rem; }
                .table-header { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr; gap: 1rem; padding: 0.75rem 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px; font-weight: 600; color: #9ca3af; margin-bottom: 0.5rem; }
                .table-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr; gap: 1rem; padding: 0.75rem 1rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); align-items: center; }
                .user-cell { display: flex; align-items: center; gap: 0.75rem; }
                .user-avatar { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 50%; color: white; font-weight: 600; font-size: 0.875rem; }
                .user-details { display: flex; flex-direction: column; }
                .user-name { color: #e5e7eb; font-weight: 500; }
                .user-email { font-size: 0.75rem; color: #6b7280; }
                .role-badge, .status-badge { padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize; }
                .role-badge.user { background: rgba(107, 114, 128, 0.2); color: #9ca3af; }
                .role-badge.admin { background: rgba(99, 102, 241, 0.2); color: #a5b4fc; }
                .status-badge.active { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
                .status-badge.pending { background: rgba(245, 158, 11, 0.2); color: #fcd34d; }
                .status-badge.banned { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }
                .joined-date { color: #6b7280; }
                .action-btns { display: flex; gap: 0.5rem; }
                .action-btns .action-btn { padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 0.25rem; }
                .action-btn.edit { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); color: #a5b4fc; }
                .action-btn.ban { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; }
                .action-btn.unban { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #6ee7b7; }

                .admin-split-section { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
                .admin-panel { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 1.5rem; }
                .admin-panel h2 { display: flex; align-items: center; gap: 0.5rem; margin: 0 0 1rem 0; font-size: 1rem; color: #e5e7eb; }

                .content-queue { display: flex; flex-direction: column; gap: 0.75rem; }
                .queue-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; }
                .queue-info { display: flex; flex-direction: column; gap: 0.25rem; }
                .queue-title { font-weight: 500; color: #e5e7eb; }
                .queue-meta { font-size: 0.75rem; color: #6b7280; }
                .queue-actions { display: flex; gap: 0.5rem; }
                .approve-btn, .reject-btn { padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer; border: none; }
                .approve-btn { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
                .reject-btn { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }

                .activities-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .activity-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid; }
                .activity-content { display: flex; flex-direction: column; gap: 0.25rem; }
                .activity-action { font-weight: 500; font-size: 0.875rem; }
                .activity-user { font-size: 0.75rem; color: #6b7280; }
                .activity-time { font-size: 0.75rem; color: #6b7280; }

                .admin-alerts, .admin-actions { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; }
                .admin-alerts h2, .admin-actions h2 { display: flex; align-items: center; gap: 0.5rem; margin: 0 0 1rem 0; font-size: 1rem; color: #e5e7eb; }
                .alerts-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .alert-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; border-radius: 8px; }
                .alert-item.warning { background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); }
                .alert-item.info { background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); }
                .alert-content { display: flex; flex-direction: column; gap: 0.25rem; }
                .alert-title { font-weight: 600; font-size: 0.875rem; color: #e5e7eb; }
                .alert-message { font-size: 0.75rem; color: #9ca3af; }
                .alert-time { font-size: 0.75rem; color: #6b7280; }

                .actions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
                .action-btn-large { display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; color: #6ee7b7; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
                .action-btn-large:hover { background: rgba(16, 185, 129, 0.2); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); }

                @media (max-width: 768px) {
                    .admin-split-section { grid-template-columns: 1fr; }
                    .admin-header { flex-direction: column; gap: 1rem; text-align: center; }
                    .table-header, .table-row { grid-template-columns: 1fr 1fr; }
                    .table-header span:nth-child(4), .table-row .joined-date { display: none; }
                }
            `}</style>
        </div>
    )
}

export default AdminDashboard
