import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'

// Icons
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
)

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
)

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
)

const BanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
)

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
)

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
)

const RefreshIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
)

const API_URL = '/api/users'

function UserManagement() {
    const { accessToken, user: currentUser } = useAuth()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [stats, setStats] = useState(null)

    // Pagination
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [total, setTotal] = useState(0)

    // Filters
    const [search, setSearch] = useState('')
    const [roleFilter, setRoleFilter] = useState('')
    const [statusFilter, setStatusFilter] = useState('')

    // Modal states
    const [editModal, setEditModal] = useState(null)
    const [deleteModal, setDeleteModal] = useState(null)
    const [banModal, setBanModal] = useState(null)

    // Edit form
    const [editForm, setEditForm] = useState({ name: '', email: '', role: '', isVerified: false })
    const [banReason, setBanReason] = useState('')

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        setError('')
        try {
            const params = new URLSearchParams({
                page: page.toString(),
                limit: '10',
            })
            if (search) params.append('search', search)
            if (roleFilter) params.append('role', roleFilter)
            if (statusFilter) params.append('status', statusFilter)

            const res = await fetch(`${API_URL}?${params}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            })

            if (!res.ok) throw new Error('Failed to fetch users')

            const data = await res.json()
            setUsers(data.users)
            setTotalPages(data.totalPages)
            setTotal(data.total)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [accessToken, page, search, roleFilter, statusFilter])

    const fetchStats = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/stats`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            })
            if (res.ok) {
                const data = await res.json()
                setStats(data)
            }
        } catch (err) {
            console.error('Failed to fetch stats:', err)
        }
    }, [accessToken])

    useEffect(() => {
        fetchUsers()
        fetchStats()
    }, [fetchUsers, fetchStats])

    const handleEdit = (user) => {
        setEditForm({
            name: user.name,
            email: user.email,
            role: user.role,
            isVerified: user.isVerified
        })
        setEditModal(user)
    }

    const handleSaveEdit = async () => {
        try {
            const res = await fetch(`${API_URL}/${editModal._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(editForm)
            })

            if (!res.ok) throw new Error('Failed to update user')

            setEditModal(null)
            fetchUsers()
            fetchStats()
        } catch (err) {
            setError(err.message)
        }
    }

    const handleDelete = async () => {
        try {
            const res = await fetch(`${API_URL}/${deleteModal._id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` }
            })

            if (!res.ok) throw new Error('Failed to delete user')

            setDeleteModal(null)
            fetchUsers()
            fetchStats()
        } catch (err) {
            setError(err.message)
        }
    }

    const handleBan = async () => {
        try {
            const res = await fetch(`${API_URL}/${banModal._id}/ban`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({ reason: banReason })
            })

            if (!res.ok) throw new Error('Failed to ban user')

            setBanModal(null)
            setBanReason('')
            fetchUsers()
            fetchStats()
        } catch (err) {
            setError(err.message)
        }
    }

    const handleUnban = async (userId) => {
        try {
            const res = await fetch(`${API_URL}/${userId}/unban`, {
                method: 'PATCH',
                headers: { Authorization: `Bearer ${accessToken}` }
            })

            if (!res.ok) throw new Error('Failed to unban user')

            fetchUsers()
            fetchStats()
        } catch (err) {
            setError(err.message)
        }
    }

    const formatDate = (date) => {
        if (!date) return 'Never'
        return new Date(date).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const getRoleBadge = (role) => {
        const colors = {
            admin: 'badge-admin',
            user: 'badge-user',
            guest: 'badge-guest'
        }
        return colors[role] || 'badge-user'
    }

    return (
        <div className="user-management">
            {/* Stats Cards */}
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">{stats.total}</div>
                        <div className="stat-label">Total Users</div>
                    </div>
                    <div className="stat-card verified">
                        <div className="stat-value">{stats.verified}</div>
                        <div className="stat-label">Verified</div>
                    </div>
                    <div className="stat-card banned">
                        <div className="stat-value">{stats.banned}</div>
                        <div className="stat-label">Banned</div>
                    </div>
                    <div className="stat-card active">
                        <div className="stat-value">{stats.activeToday}</div>
                        <div className="stat-label">Active Today</div>
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className="filters-bar">
                <div className="search-box">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                    />
                </div>
                <select value={roleFilter} onChange={(e) => { setRoleFilter(e.target.value); setPage(1) }}>
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
                <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}>
                    <option value="">All Status</option>
                    <option value="verified">Verified</option>
                    <option value="unverified">Unverified</option>
                    <option value="banned">Banned</option>
                </select>
                <button className="btn-icon" onClick={() => { fetchUsers(); fetchStats() }}>
                    <RefreshIcon />
                </button>
            </div>

            {/* Error */}
            {error && <div className="alert alert-error">{error}</div>}

            {/* Users Table */}
            <div className="table-container">
                {loading ? (
                    <div className="loading-state">Loading...</div>
                ) : users.length === 0 ? (
                    <div className="empty-state">No users found</div>
                ) : (
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Verified</th>
                                <th>Last Login</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className={user.isBanned ? 'banned-row' : ''}>
                                    <td>
                                        <div className="user-cell">
                                            <div className="user-avatar">
                                                {user.avatar ? (
                                                    <img src={user.avatar} alt={user.name} />
                                                ) : (
                                                    <span>{user.name?.charAt(0)?.toUpperCase()}</span>
                                                )}
                                            </div>
                                            <div className="user-info">
                                                <div className="user-name">{user.name}</div>
                                                <div className="user-email">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`badge ${getRoleBadge(user.role)}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td>
                                        {user.isBanned ? (
                                            <span className="status-banned">🚫 Banned</span>
                                        ) : user.isActive ? (
                                            <span className="status-active">✅ Active</span>
                                        ) : (
                                            <span className="status-inactive">⏸️ Inactive</span>
                                        )}
                                    </td>
                                    <td>
                                        {user.isVerified ? (
                                            <span className="verified-yes">✓ Verified</span>
                                        ) : (
                                            <span className="verified-no">✗ Unverified</span>
                                        )}
                                    </td>
                                    <td className="date-cell">{formatDate(user.lastLogin)}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-action edit" onClick={() => handleEdit(user)} title="Edit">
                                                <EditIcon />
                                            </button>
                                            {user.isBanned ? (
                                                <button className="btn-action unban" onClick={() => handleUnban(user._id)} title="Unban">
                                                    <CheckCircleIcon />
                                                </button>
                                            ) : (
                                                <button className="btn-action ban" onClick={() => setBanModal(user)} title="Ban" disabled={user._id === currentUser?.id}>
                                                    <BanIcon />
                                                </button>
                                            )}
                                            <button className="btn-action delete" onClick={() => setDeleteModal(user)} title="Delete" disabled={user._id === currentUser?.id}>
                                                <TrashIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Previous</button>
                    <span>Page {page} of {totalPages} ({total} users)</span>
                    <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
                </div>
            )}

            {/* Edit Modal */}
            {editModal && (
                <div className="modal-overlay" onClick={() => setEditModal(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Edit User</h3>
                            <button className="modal-close" onClick={() => setEditModal(null)}><XIcon /></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" value={editForm.email} onChange={e => setEditForm({ ...editForm, email: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select value={editForm.role} onChange={e => setEditForm({ ...editForm, role: e.target.value })}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="guest">Guest</option>
                                </select>
                            </div>
                            <div className="form-group checkbox">
                                <label>
                                    <input type="checkbox" checked={editForm.isVerified} onChange={e => setEditForm({ ...editForm, isVerified: e.target.checked })} />
                                    Verified
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => setEditModal(null)}>Cancel</button>
                            <button className="btn-primary" onClick={handleSaveEdit}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteModal && (
                <div className="modal-overlay" onClick={() => setDeleteModal(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Delete User</h3>
                            <button className="modal-close" onClick={() => setDeleteModal(null)}><XIcon /></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete <strong>{deleteModal.name}</strong>?</p>
                            <p className="warning-text">This action cannot be undone.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => setDeleteModal(null)}>Cancel</button>
                            <button className="btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Ban Modal */}
            {banModal && (
                <div className="modal-overlay" onClick={() => setBanModal(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Ban User</h3>
                            <button className="modal-close" onClick={() => setBanModal(null)}><XIcon /></button>
                        </div>
                        <div className="modal-body">
                            <p>Ban <strong>{banModal.name}</strong>?</p>
                            <div className="form-group">
                                <label>Reason (optional)</label>
                                <textarea value={banReason} onChange={e => setBanReason(e.target.value)} placeholder="Enter ban reason..." />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => setBanModal(null)}>Cancel</button>
                            <button className="btn-danger" onClick={handleBan}>Ban User</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Styles */}
            <style>{`
                .user-management {
                    padding: 1.5rem;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .stat-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1.25rem;
                    text-align: center;
                }
                
                .stat-card.verified { border-color: rgba(52, 211, 153, 0.3); background: rgba(52, 211, 153, 0.1); }
                .stat-card.banned { border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.1); }
                .stat-card.active { border-color: rgba(99, 102, 241, 0.3); background: rgba(99, 102, 241, 0.1); }
                
                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                
                .stat-label {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    margin-top: 0.25rem;
                }
                
                .filters-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }
                
                .search-box {
                    flex: 1;
                    min-width: 200px;
                    position: relative;
                }
                
                .search-box svg {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-muted);
                }
                
                .search-box input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 2.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }
                
                .search-box input:focus {
                    outline: none;
                    border-color: var(--primary);
                }
                
                .filters-bar select {
                    padding: 0.75rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    cursor: pointer;
                }
                
                .btn-icon {
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .btn-icon:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                
                .table-container {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                }
                
                .users-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .users-table th,
                .users-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .users-table th {
                    background: rgba(255, 255, 255, 0.05);
                    font-weight: 600;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-secondary);
                }
                
                .users-table tbody tr:hover {
                    background: rgba(255, 255, 255, 0.03);
                }
                
                .banned-row {
                    opacity: 0.6;
                    background: rgba(239, 68, 68, 0.05);
                }
                
                .user-cell {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    color: white;
                    overflow: hidden;
                }
                
                .user-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-name {
                    font-weight: 500;
                    color: var(--text-primary);
                }
                
                .user-email {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }
                
                .badge {
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: capitalize;
                }
                
                .badge-admin { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
                .badge-user { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
                .badge-guest { background: rgba(156, 163, 175, 0.2); color: #9ca3af; }
                
                .status-active { color: #34d399; }
                .status-inactive { color: #9ca3af; }
                .status-banned { color: #f87171; }
                
                .verified-yes { color: #34d399; }
                .verified-no { color: #f87171; }
                
                .date-cell {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .btn-action {
                    padding: 0.5rem;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .btn-action:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }
                
                .btn-action.edit { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
                .btn-action.edit:hover:not(:disabled) { background: rgba(59, 130, 246, 0.3); }
                
                .btn-action.ban { background: rgba(251, 191, 36, 0.2); color: #fbbf24; }
                .btn-action.ban:hover:not(:disabled) { background: rgba(251, 191, 36, 0.3); }
                
                .btn-action.unban { background: rgba(52, 211, 153, 0.2); color: #34d399; }
                .btn-action.unban:hover:not(:disabled) { background: rgba(52, 211, 153, 0.3); }
                
                .btn-action.delete { background: rgba(239, 68, 68, 0.2); color: #f87171; }
                .btn-action.delete:hover:not(:disabled) { background: rgba(239, 68, 68, 0.3); }
                
                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .pagination button {
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    color: var(--text-primary);
                    cursor: pointer;
                }
                
                .pagination button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .pagination span {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }
                
                .loading-state,
                .empty-state {
                    text-align: center;
                    padding: 3rem;
                    color: var(--text-muted);
                }
                
                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                
                .modal {
                    background: var(--bg-secondary);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    width: 100%;
                    max-width: 420px;
                    margin: 1rem;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .modal-header h3 {
                    margin: 0;
                    font-size: 1.125rem;
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    cursor: pointer;
                    padding: 0.25rem;
                }
                
                .modal-body {
                    padding: 1.25rem;
                }
                
                .modal-body .form-group {
                    margin-bottom: 1rem;
                }
                
                .modal-body label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }
                
                .modal-body input,
                .modal-body select,
                .modal-body textarea {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }
                
                .modal-body textarea {
                    min-height: 80px;
                    resize: vertical;
                }
                
                .form-group.checkbox label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                }
                
                .form-group.checkbox input {
                    width: auto;
                }
                
                .warning-text {
                    color: #f87171;
                    font-size: 0.875rem;
                }
                
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.75rem;
                    padding: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .btn-secondary {
                    padding: 0.75rem 1.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                }
                
                .btn-primary {
                    padding: 0.75rem 1.5rem;
                    background: var(--primary);
                    border: none;
                    border-radius: 8px;
                    color: white;
                    cursor: pointer;
                }
                
                .btn-danger {
                    padding: 0.75rem 1.5rem;
                    background: #ef4444;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    cursor: pointer;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .user-management {
                        padding: 1rem;
                    }

                    .users-table {
                        display: block;
                        overflow-x: auto;
                    }
                    
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.75rem;
                    }

                    .stat-card {
                        padding: 1rem;
                    }

                    .stat-value {
                        font-size: 1.5rem;
                    }

                    .filters-bar {
                        gap: 0.75rem;
                    }

                    .filters-bar select {
                        padding: 0.625rem 0.75rem;
                        font-size: 0.8rem;
                    }

                    .search-box {
                        min-width: 100%;
                    }

                    .pagination {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .pagination button {
                        width: 100%;
                    }
                }

                @media (max-width: 500px) {
                    .user-management {
                        padding: 0.75rem;
                    }

                    .stats-grid {
                        gap: 0.5rem;
                    }

                    .stat-card {
                        padding: 0.75rem;
                    }

                    .stat-value {
                        font-size: 1.25rem;
                    }

                    .stat-label {
                        font-size: 0.75rem;
                    }

                    .users-table th,
                    .users-table td {
                        padding: 0.75rem 0.5rem;
                        font-size: 0.8rem;
                    }

                    .user-cell {
                        min-width: 150px;
                    }

                    .user-avatar {
                        width: 32px;
                        height: 32px;
                        font-size: 0.75rem;
                    }

                    .user-name {
                        font-size: 0.875rem;
                    }

                    .user-email {
                        font-size: 0.7rem;
                    }

                    .date-cell {
                        font-size: 0.75rem;
                        white-space: nowrap;
                    }

                    .action-buttons {
                        gap: 0.25rem;
                    }

                    .btn-action {
                        padding: 0.375rem;
                    }

                    .modal {
                        margin: 0.5rem;
                        max-width: calc(100vw - 1rem);
                    }

                    .modal-header {
                        padding: 1rem;
                    }

                    .modal-body {
                        padding: 1rem;
                    }

                    .modal-footer {
                        padding: 1rem;
                        flex-direction: column;
                    }

                    .modal-footer button {
                        width: 100%;
                    }
                }

                @media (max-width: 375px) {
                    .stat-value {
                        font-size: 1.1rem;
                    }

                    .users-table th,
                    .users-table td {
                        padding: 0.5rem 0.375rem;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default UserManagement
