import { useState } from 'react'

// Archive Center - Store old tasks, projects, notes
const ArchiveCenter = () => {
    // ═══════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════
    const [archives, setArchives] = useState([
        { id: 1, type: 'task', title: 'Complete React Course', archivedDate: '2024-11-15', originalDate: '2024-10-01', status: 'completed' },
        { id: 2, type: 'project', title: 'Portfolio Website v1', archivedDate: '2024-11-10', originalDate: '2024-08-15', status: 'completed' },
        { id: 3, type: 'note', title: 'Meeting Notes - Q3 Planning', archivedDate: '2024-10-28', originalDate: '2024-09-20', status: 'archived' },
        { id: 4, type: 'task', title: 'Setup Development Environment', archivedDate: '2024-10-20', originalDate: '2024-10-05', status: 'completed' },
        { id: 5, type: 'project', title: 'E-commerce Prototype', archivedDate: '2024-09-30', originalDate: '2024-07-01', status: 'cancelled' },
        { id: 6, type: 'note', title: 'Research - Cybersecurity Trends', archivedDate: '2024-09-15', originalDate: '2024-09-01', status: 'archived' },
        { id: 7, type: 'task', title: 'Database Migration Script', archivedDate: '2024-08-25', originalDate: '2024-08-10', status: 'completed' },
        { id: 8, type: 'project', title: 'Internal Dashboard v1', archivedDate: '2024-08-10', originalDate: '2024-05-01', status: 'completed' }
    ])

    const [activeType, setActiveType] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('archivedDate')
    const [sortOrder, setSortOrder] = useState('desc')
    const [selectedItems, setSelectedItems] = useState([])

    const types = [
        { id: 'all', label: 'All', icon: '📦', color: '#6366f1' },
        { id: 'task', label: 'Tasks', icon: '✅', color: '#10b981' },
        { id: 'project', label: 'Projects', icon: '🚀', color: '#f59e0b' },
        { id: 'note', label: 'Notes', icon: '📝', color: '#ec4899' }
    ]

    const statusStyles = {
        completed: { bg: 'rgba(16, 185, 129, 0.2)', color: '#10b981', label: 'Completed' },
        archived: { bg: 'rgba(99, 102, 241, 0.2)', color: '#6366f1', label: 'Archived' },
        cancelled: { bg: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', label: 'Cancelled' }
    }

    // ═══════════════════════════════════════════════════════════
    // OPERATIONS
    // ═══════════════════════════════════════════════════════════
    const restoreItem = (id) => {
        // In real app, would move back to active
        setArchives(archives.filter(a => a.id !== id))
    }

    const deleteItem = (id) => {
        setArchives(archives.filter(a => a.id !== id))
    }

    const deleteSelected = () => {
        setArchives(archives.filter(a => !selectedItems.includes(a.id)))
        setSelectedItems([])
    }

    const toggleSelect = (id) => {
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const selectAll = () => {
        if (selectedItems.length === filteredArchives.length) {
            setSelectedItems([])
        } else {
            setSelectedItems(filteredArchives.map(a => a.id))
        }
    }

    // ═══════════════════════════════════════════════════════════
    // FILTERING & SORTING
    // ═══════════════════════════════════════════════════════════
    const filteredArchives = archives
        .filter(item => {
            const matchesType = activeType === 'all' || item.type === activeType
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesType && matchesSearch
        })
        .sort((a, b) => {
            const aVal = sortBy === 'title' ? a.title : a[sortBy]
            const bVal = sortBy === 'title' ? b.title : b[sortBy]
            if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
            return aVal < bVal ? 1 : -1
        })

    const getTypeStats = (typeId) => {
        if (typeId === 'all') return archives.length
        return archives.filter(a => a.type === typeId).length
    }

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    }

    // ═══════════════════════════════════════════════════════════
    // RENDER
    // ═══════════════════════════════════════════════════════════
    return (
        <div className="archive-center">
            <div className="archive-header">
                <div className="header-left">
                    <h2>🗂️ Archive Center</h2>
                    <p>{archives.length} items archived</p>
                </div>
                {selectedItems.length > 0 && (
                    <div className="bulk-actions">
                        <span className="selected-count">{selectedItems.length} selected</span>
                        <button className="danger-btn" onClick={deleteSelected}>🗑️ Delete Selected</button>
                    </div>
                )}
            </div>

            {/* Type Filters */}
            <div className="type-filters">
                {types.map(type => (
                    <button
                        key={type.id}
                        className={`type-btn ${activeType === type.id ? 'active' : ''}`}
                        onClick={() => setActiveType(type.id)}
                        style={{ '--type-color': type.color }}
                    >
                        <span className="type-icon">{type.icon}</span>
                        <span className="type-label">{type.label}</span>
                        <span className="type-count">{getTypeStats(type.id)}</span>
                    </button>
                ))}
            </div>

            {/* Search & Sort */}
            <div className="controls-bar">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search archives..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="sort-controls">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="archivedDate">Archived Date</option>
                        <option value="originalDate">Original Date</option>
                        <option value="title">Title</option>
                    </select>
                    <button
                        className="sort-order-btn"
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    >
                        {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                </div>
            </div>

            {/* Archive List */}
            <div className="archive-list">
                {filteredArchives.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">📦</span>
                        <p>No archived items found</p>
                    </div>
                ) : (
                    <>
                        <div className="list-header">
                            <label className="checkbox-cell">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.length === filteredArchives.length && filteredArchives.length > 0}
                                    onChange={selectAll}
                                />
                            </label>
                            <span className="col-title">Title</span>
                            <span className="col-type">Type</span>
                            <span className="col-status">Status</span>
                            <span className="col-date">Archived</span>
                            <span className="col-actions">Actions</span>
                        </div>
                        {filteredArchives.map(item => (
                            <div
                                key={item.id}
                                className={`archive-item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
                            >
                                <label className="checkbox-cell">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => toggleSelect(item.id)}
                                    />
                                </label>
                                <div className="col-title">
                                    <span className="item-icon">
                                        {types.find(t => t.id === item.type)?.icon}
                                    </span>
                                    <span className="item-title">{item.title}</span>
                                </div>
                                <span className="col-type">
                                    <span
                                        className="type-badge"
                                        style={{ background: types.find(t => t.id === item.type)?.color + '20' }}
                                    >
                                        {item.type}
                                    </span>
                                </span>
                                <span className="col-status">
                                    <span
                                        className="status-badge"
                                        style={{
                                            background: statusStyles[item.status].bg,
                                            color: statusStyles[item.status].color
                                        }}
                                    >
                                        {statusStyles[item.status].label}
                                    </span>
                                </span>
                                <span className="col-date">{formatDate(item.archivedDate)}</span>
                                <div className="col-actions">
                                    <button
                                        className="action-btn restore"
                                        onClick={() => restoreItem(item.id)}
                                        title="Restore"
                                    >
                                        ↩️
                                    </button>
                                    <button
                                        className="action-btn delete"
                                        onClick={() => deleteItem(item.id)}
                                        title="Delete Permanently"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>

            {/* Storage Info */}
            <div className="storage-info">
                <div className="storage-bar">
                    <div className="storage-used" style={{ width: `${(archives.length / 100) * 100}%` }}></div>
                </div>
                <span className="storage-text">{archives.length} of 100 archive slots used</span>
            </div>

            <style>{`
                .archive-center {
                    padding: 0;
                }

                .archive-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
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

                .bulk-actions {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .selected-count {
                    color: #6366f1;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .danger-btn {
                    background: rgba(239, 68, 68, 0.2);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #ef4444;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .danger-btn:hover {
                    background: rgba(239, 68, 68, 0.3);
                }

                /* Type Filters */
                .type-filters {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }

                .type-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .type-btn:hover {
                    border-color: var(--type-color);
                }

                .type-btn.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                    border-color: var(--type-color);
                    color: #fff;
                }

                .type-icon { font-size: 1rem; }
                .type-label { font-size: 0.85rem; font-weight: 500; }
                .type-count {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.15rem 0.5rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                }

                /* Controls */
                .controls-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .search-box {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 0 1rem;
                }

                .search-box .search-icon {
                    margin-right: 0.5rem;
                }

                .search-box input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.75rem 0;
                    font-size: 0.95rem;
                }

                .search-box input:focus { outline: none; }

                .sort-controls {
                    display: flex;
                    gap: 0.5rem;
                }

                .sort-controls select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    padding: 0.5rem 1rem;
                }

                .sort-order-btn {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    padding: 0.5rem 0.75rem;
                    cursor: pointer;
                    font-size: 1rem;
                }

                /* Archive List */
                .archive-list {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .list-header {
                    display: grid;
                    grid-template-columns: 40px 1fr 100px 100px 120px 100px;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .archive-item {
                    display: grid;
                    grid-template-columns: 40px 1fr 100px 100px 120px 100px;
                    padding: 0.75rem 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    align-items: center;
                    transition: all 0.15s ease;
                }

                .archive-item:hover {
                    background: rgba(99, 102, 241, 0.05);
                }

                .archive-item.selected {
                    background: rgba(99, 102, 241, 0.1);
                }

                .checkbox-cell {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .checkbox-cell input[type="checkbox"] {
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                }

                .col-title {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .item-icon { font-size: 1.1rem; }
                .item-title {
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .type-badge, .status-badge {
                    font-size: 0.75rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    text-transform: capitalize;
                }

                .col-date {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.85rem;
                }

                .col-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .action-btn {
                    background: transparent;
                    border: none;
                    font-size: 1rem;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: all 0.2s ease;
                }

                .action-btn:hover {
                    opacity: 1;
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

                /* Storage Info */
                .storage-info {
                    margin-top: 1.5rem;
                    text-align: center;
                }

                .storage-bar {
                    height: 6px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 0.5rem;
                }

                .storage-used {
                    height: 100%;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .storage-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .list-header,
                    .archive-item {
                        grid-template-columns: 40px 1fr 80px 80px;
                    }

                    .col-date,
                    .col-type {
                        display: none;
                    }
                }

                @media (max-width: 600px) {
                    .controls-bar {
                        flex-direction: column;
                    }

                    .type-filters {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 0.5rem;
                    }

                    .type-btn {
                        flex-shrink: 0;
                    }

                    .type-label {
                        display: none;
                    }

                    .list-header,
                    .archive-item {
                        grid-template-columns: 40px 1fr 80px;
                    }

                    .col-status {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}

export default ArchiveCenter
