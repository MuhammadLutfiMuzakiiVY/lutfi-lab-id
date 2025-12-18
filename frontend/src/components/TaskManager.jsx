import { useState, useCallback, useEffect } from 'react'

// Task Manager Component - Complete Task & Productivity Management System
const TaskManager = () => {
    // ═══════════════════════════════════════════════════════════
    // STATE MANAGEMENT
    // ═══════════════════════════════════════════════════════════

    // Tasks state with sample data
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Review Security Vulnerabilities',
            description: 'Analyze and document all security vulnerabilities from the latest penetration test.',
            deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            category: 'work',
            priority: 'critical',
            status: 'in-progress',
            subtasks: [
                { id: 1, text: 'Review network scan results', completed: true },
                { id: 2, text: 'Document SQL injection findings', completed: true },
                { id: 3, text: 'Create remediation plan', completed: false },
                { id: 4, text: 'Prepare executive summary', completed: false }
            ],
            attachments: [],
            links: ['https://owasp.org/Top10'],
            estimatedDuration: 240,
            comments: [],
            colorTag: '#ef4444',
            assignee: null,
            location: null,
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            updatedAt: new Date()
        },
        {
            id: 2,
            title: 'Update Firewall Rules',
            description: 'Configure new firewall rules for the production environment.',
            deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            category: 'work',
            priority: 'high',
            status: 'todo',
            subtasks: [
                { id: 1, text: 'Backup current configuration', completed: false },
                { id: 2, text: 'Add new IP whitelist', completed: false },
                { id: 3, text: 'Test connectivity', completed: false }
            ],
            attachments: [],
            links: [],
            estimatedDuration: 120,
            comments: [],
            colorTag: '#f59e0b',
            assignee: null,
            location: null,
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            updatedAt: new Date()
        },
        {
            id: 3,
            title: 'Complete React Course',
            description: 'Finish the advanced React patterns course on Udemy.',
            deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            category: 'campus',
            priority: 'medium',
            status: 'todo',
            subtasks: [
                { id: 1, text: 'Watch Module 5', completed: false },
                { id: 2, text: 'Complete practice exercises', completed: false },
                { id: 3, text: 'Build mini project', completed: false }
            ],
            attachments: [],
            links: ['https://udemy.com'],
            estimatedDuration: 480,
            comments: [],
            colorTag: '#6366f1',
            assignee: null,
            location: null,
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            updatedAt: new Date()
        },
        {
            id: 4,
            title: 'Team Meeting Preparation',
            description: 'Prepare presentation slides for the weekly security review meeting.',
            deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            category: 'work',
            priority: 'high',
            status: 'review',
            subtasks: [
                { id: 1, text: 'Create presentation outline', completed: true },
                { id: 2, text: 'Add security metrics', completed: true },
                { id: 3, text: 'Review with manager', completed: false }
            ],
            attachments: [],
            links: [],
            estimatedDuration: 90,
            comments: [],
            colorTag: '#10b981',
            assignee: null,
            location: 'Conference Room A',
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            updatedAt: new Date()
        },
        {
            id: 5,
            title: 'Setup Personal VPN',
            description: 'Configure personal VPN server for secure browsing.',
            deadline: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            category: 'personal',
            priority: 'low',
            status: 'done',
            subtasks: [
                { id: 1, text: 'Choose VPN provider', completed: true },
                { id: 2, text: 'Configure server', completed: true },
                { id: 3, text: 'Test connection', completed: true }
            ],
            attachments: [],
            links: [],
            estimatedDuration: 60,
            comments: [],
            colorTag: '#8b5cf6',
            assignee: null,
            location: null,
            createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
            updatedAt: new Date(),
            completedAt: new Date()
        }
    ])

    // UI State
    const [showTaskModal, setShowTaskModal] = useState(false)
    const [editingTask, setEditingTask] = useState(null)
    const [viewMode, setViewMode] = useState('list') // 'list', 'kanban', 'grid'
    const [draggedTask, setDraggedTask] = useState(null)
    const [expandedTasks, setExpandedTasks] = useState(new Set())

    // Filter & Sort State
    const [filters, setFilters] = useState({
        status: 'all',
        priority: 'all',
        category: 'all',
        search: '',
        colorTag: 'all'
    })
    const [sortBy, setSortBy] = useState('deadline') // 'deadline', 'priority', 'created', 'title'
    const [sortOrder, setSortOrder] = useState('asc')

    // New Task Form State
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        deadline: '',
        category: 'work',
        priority: 'medium',
        status: 'todo',
        subtasks: [],
        links: [],
        estimatedDuration: 60,
        colorTag: '#6366f1',
        location: ''
    })
    const [newSubtask, setNewSubtask] = useState('')
    const [newLink, setNewLink] = useState('')

    // Categories and priorities configuration
    const categories = [
        { id: 'work', label: 'Kerja', icon: '💼' },
        { id: 'campus', label: 'Kampus', icon: '🎓' },
        { id: 'project', label: 'Project', icon: '🚀' },
        { id: 'personal', label: 'Pribadi', icon: '👤' },
        { id: 'other', label: 'Lainnya', icon: '📌' }
    ]

    const priorities = [
        { id: 'low', label: 'Low', color: '#6b7280', icon: '▽' },
        { id: 'medium', label: 'Medium', color: '#3b82f6', icon: '◇' },
        { id: 'high', label: 'High', color: '#f59e0b', icon: '△' },
        { id: 'critical', label: 'Critical', color: '#ef4444', icon: '⚠' }
    ]

    const statuses = [
        { id: 'todo', label: 'To-Do', color: '#6b7280' },
        { id: 'in-progress', label: 'In Progress', color: '#3b82f6' },
        { id: 'review', label: 'Review', color: '#f59e0b' },
        { id: 'done', label: 'Done', color: '#10b981' }
    ]

    const colorTags = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#6b7280']

    // ═══════════════════════════════════════════════════════════
    // HELPER FUNCTIONS
    // ═══════════════════════════════════════════════════════════

    const getSubtaskProgress = (subtasks) => {
        if (!subtasks || subtasks.length === 0) return 0
        const completed = subtasks.filter(s => s.completed).length
        return Math.round((completed / subtasks.length) * 100)
    }

    const getDeadlineStatus = (deadline) => {
        const now = new Date()
        const diff = deadline - now
        const hoursLeft = diff / (1000 * 60 * 60)

        if (hoursLeft < 0) return { status: 'overdue', label: 'Overdue', color: '#ef4444' }
        if (hoursLeft < 24) return { status: 'critical', label: 'Today', color: '#ef4444' }
        if (hoursLeft < 72) return { status: 'soon', label: 'Soon', color: '#f59e0b' }
        return { status: 'safe', label: 'On Track', color: '#10b981' }
    }

    const formatDeadline = (deadline) => {
        const now = new Date()
        const diff = deadline - now

        if (diff < 0) {
            const daysAgo = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24))
            return daysAgo === 0 ? 'Today' : `${daysAgo}d ago`
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        if (days === 0) return `${hours}h`
        return `${days}d ${hours}h`
    }

    const formatDuration = (minutes) => {
        const hrs = Math.floor(minutes / 60)
        const mins = minutes % 60
        if (hrs === 0) return `${mins}m`
        if (mins === 0) return `${hrs}h`
        return `${hrs}h ${mins}m`
    }

    // ═══════════════════════════════════════════════════════════
    // FILTER & SORT
    // ═══════════════════════════════════════════════════════════

    const filteredAndSortedTasks = useCallback(() => {
        let result = [...tasks]

        // Apply filters
        if (filters.status !== 'all') {
            result = result.filter(t => t.status === filters.status)
        }
        if (filters.priority !== 'all') {
            result = result.filter(t => t.priority === filters.priority)
        }
        if (filters.category !== 'all') {
            result = result.filter(t => t.category === filters.category)
        }
        if (filters.colorTag !== 'all') {
            result = result.filter(t => t.colorTag === filters.colorTag)
        }
        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            result = result.filter(t =>
                t.title.toLowerCase().includes(searchLower) ||
                t.description.toLowerCase().includes(searchLower)
            )
        }

        // Apply sorting
        result.sort((a, b) => {
            let comparison = 0
            switch (sortBy) {
                case 'deadline':
                    comparison = new Date(a.deadline) - new Date(b.deadline)
                    break
                case 'priority':
                    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
                    comparison = priorityOrder[a.priority] - priorityOrder[b.priority]
                    break
                case 'created':
                    comparison = new Date(a.createdAt) - new Date(b.createdAt)
                    break
                case 'title':
                    comparison = a.title.localeCompare(b.title)
                    break
                default:
                    break
            }
            return sortOrder === 'asc' ? comparison : -comparison
        })

        return result
    }, [tasks, filters, sortBy, sortOrder])

    // ═══════════════════════════════════════════════════════════
    // TASK CRUD OPERATIONS
    // ═══════════════════════════════════════════════════════════

    const createTask = () => {
        if (!newTask.title.trim()) return

        const task = {
            id: Date.now(),
            ...newTask,
            deadline: newTask.deadline ? new Date(newTask.deadline) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            attachments: [],
            comments: [],
            assignee: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        setTasks([...tasks, task])
        resetNewTask()
        setShowTaskModal(false)
    }

    const updateTask = (id, updates) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
        ))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const resetNewTask = () => {
        setNewTask({
            title: '',
            description: '',
            deadline: '',
            category: 'work',
            priority: 'medium',
            status: 'todo',
            subtasks: [],
            links: [],
            estimatedDuration: 60,
            colorTag: '#6366f1',
            location: ''
        })
        setNewSubtask('')
        setNewLink('')
    }

    // Subtask operations
    const addSubtask = () => {
        if (!newSubtask.trim()) return
        setNewTask({
            ...newTask,
            subtasks: [...newTask.subtasks, { id: Date.now(), text: newSubtask, completed: false }]
        })
        setNewSubtask('')
    }

    const removeSubtask = (subtaskId) => {
        setNewTask({
            ...newTask,
            subtasks: newTask.subtasks.filter(s => s.id !== subtaskId)
        })
    }

    const toggleSubtask = (taskId, subtaskId) => {
        setTasks(tasks.map(t => {
            if (t.id !== taskId) return t
            return {
                ...t,
                subtasks: t.subtasks.map(s =>
                    s.id === subtaskId ? { ...s, completed: !s.completed } : s
                ),
                updatedAt: new Date()
            }
        }))
    }

    // Link operations
    const addLink = () => {
        if (!newLink.trim()) return
        setNewTask({
            ...newTask,
            links: [...newTask.links, newLink]
        })
        setNewLink('')
    }

    const removeLink = (index) => {
        setNewTask({
            ...newTask,
            links: newTask.links.filter((_, i) => i !== index)
        })
    }

    // Status change
    const changeTaskStatus = (taskId, newStatus) => {
        updateTask(taskId, {
            status: newStatus,
            ...(newStatus === 'done' ? { completedAt: new Date() } : { completedAt: null })
        })
    }

    // Drag & Drop
    const handleDragStart = (e, task) => {
        setDraggedTask(task)
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const handleDrop = (e, targetStatus) => {
        e.preventDefault()
        if (draggedTask && draggedTask.status !== targetStatus) {
            changeTaskStatus(draggedTask.id, targetStatus)
        }
        setDraggedTask(null)
    }

    const toggleTaskExpand = (taskId) => {
        const newExpanded = new Set(expandedTasks)
        if (newExpanded.has(taskId)) {
            newExpanded.delete(taskId)
        } else {
            newExpanded.add(taskId)
        }
        setExpandedTasks(newExpanded)
    }

    // ═══════════════════════════════════════════════════════════
    // RENDER
    // ═══════════════════════════════════════════════════════════

    const renderTaskCard = (task) => {
        const subtaskProgress = getSubtaskProgress(task.subtasks)
        const deadlineInfo = getDeadlineStatus(new Date(task.deadline))
        const priority = priorities.find(p => p.id === task.priority)
        const category = categories.find(c => c.id === task.category)
        const isExpanded = expandedTasks.has(task.id)

        return (
            <div
                key={task.id}
                className={`task-card ${task.status} ${draggedTask?.id === task.id ? 'dragging' : ''}`}
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
                style={{ borderLeftColor: task.colorTag }}
            >
                <div className="task-card-header">
                    <div className="task-meta-row">
                        <span className="category-badge" title={category?.label}>
                            {category?.icon}
                        </span>
                        <span
                            className={`priority-indicator ${task.priority}`}
                            style={{ color: priority?.color }}
                            title={priority?.label}
                        >
                            {priority?.icon} {priority?.label}
                        </span>
                        <span
                            className={`deadline-badge ${deadlineInfo.status}`}
                            style={{ color: deadlineInfo.color }}
                        >
                            ⏰ {formatDeadline(new Date(task.deadline))}
                        </span>
                    </div>
                    <div className="task-actions">
                        <button
                            className="task-action-btn expand"
                            onClick={() => toggleTaskExpand(task.id)}
                            title={isExpanded ? 'Collapse' : 'Expand'}
                        >
                            {isExpanded ? '▲' : '▼'}
                        </button>
                        <button
                            className="task-action-btn delete"
                            onClick={() => deleteTask(task.id)}
                            title="Delete"
                        >
                            ×
                        </button>
                    </div>
                </div>

                <h4 className="task-title">{task.title}</h4>

                {task.description && (
                    <p className="task-description">{task.description}</p>
                )}

                {/* Progress Bar */}
                {task.subtasks.length > 0 && (
                    <div className="task-progress">
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${subtaskProgress}%`, background: task.colorTag }}
                            ></div>
                        </div>
                        <span className="progress-text">{subtaskProgress}%</span>
                    </div>
                )}

                {/* Subtasks (expandable) */}
                {isExpanded && task.subtasks.length > 0 && (
                    <div className="task-subtasks">
                        {task.subtasks.map(subtask => (
                            <div
                                key={subtask.id}
                                className={`subtask-item ${subtask.completed ? 'completed' : ''}`}
                                onClick={() => toggleSubtask(task.id, subtask.id)}
                            >
                                <span className="subtask-check">
                                    {subtask.completed ? '✓' : '○'}
                                </span>
                                <span className="subtask-text">{subtask.text}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Quick Info */}
                <div className="task-footer">
                    <div className="task-info-row">
                        {task.estimatedDuration && (
                            <span className="info-tag duration" title="Estimated Duration">
                                ⏱ {formatDuration(task.estimatedDuration)}
                            </span>
                        )}
                        {task.subtasks.length > 0 && (
                            <span className="info-tag subtasks" title="Subtasks">
                                ☑ {task.subtasks.filter(s => s.completed).length}/{task.subtasks.length}
                            </span>
                        )}
                        {task.links.length > 0 && (
                            <span className="info-tag links" title="Links">
                                🔗 {task.links.length}
                            </span>
                        )}
                        {task.location && (
                            <span className="info-tag location" title="Location">
                                📍 {task.location}
                            </span>
                        )}
                    </div>

                    {/* Status Dropdown */}
                    <select
                        className="status-select"
                        value={task.status}
                        onChange={(e) => changeTaskStatus(task.id, e.target.value)}
                        style={{ borderColor: statuses.find(s => s.id === task.status)?.color }}
                    >
                        {statuses.map(s => (
                            <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }

    const renderKanbanView = () => {
        return (
            <div className="kanban-board">
                {statuses.map(status => {
                    const statusTasks = filteredAndSortedTasks().filter(t => t.status === status.id)
                    return (
                        <div
                            key={status.id}
                            className={`kanban-column ${draggedTask ? 'drop-target' : ''}`}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, status.id)}
                        >
                            <div className="kanban-column-header" style={{ borderTopColor: status.color }}>
                                <h3>{status.label}</h3>
                                <span className="task-count">{statusTasks.length}</span>
                            </div>
                            <div className="kanban-column-content">
                                {statusTasks.map(task => renderTaskCard(task))}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderListView = () => {
        return (
            <div className="task-list">
                {filteredAndSortedTasks().map(task => renderTaskCard(task))}
            </div>
        )
    }

    // Task Stats
    const stats = {
        total: tasks.length,
        todo: tasks.filter(t => t.status === 'todo').length,
        inProgress: tasks.filter(t => t.status === 'in-progress').length,
        review: tasks.filter(t => t.status === 'review').length,
        done: tasks.filter(t => t.status === 'done').length,
        overdue: tasks.filter(t => new Date(t.deadline) < new Date() && t.status !== 'done').length
    }

    return (
        <div className="task-manager">
            {/* Header */}
            <div className="task-manager-header">
                <div className="header-left">
                    <h2>📋 Task Manager</h2>
                    <p className="task-summary">
                        {stats.total} tasks • {stats.done} completed • {stats.overdue > 0 && <span className="overdue-count">⚠ {stats.overdue} overdue</span>}
                    </p>
                </div>
                <div className="header-right">
                    <div className="view-toggles">
                        <button
                            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                            onClick={() => setViewMode('list')}
                            title="List View"
                        >
                            ≡
                        </button>
                        <button
                            className={`view-btn ${viewMode === 'kanban' ? 'active' : ''}`}
                            onClick={() => setViewMode('kanban')}
                            title="Kanban View"
                        >
                            ⊞
                        </button>
                    </div>
                    <button className="add-task-btn" onClick={() => setShowTaskModal(true)}>
                        + New Task
                    </button>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="stats-bar">
                {statuses.map(s => (
                    <div key={s.id} className="stat-item" style={{ '--stat-color': s.color }}>
                        <span className="stat-value">{stats[s.id === 'in-progress' ? 'inProgress' : s.id]}</span>
                        <span className="stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="filters-bar">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                </div>

                <div className="filter-group">
                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    >
                        <option value="all">All Status</option>
                        {statuses.map(s => (
                            <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                    </select>

                    <select
                        value={filters.priority}
                        onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                    >
                        <option value="all">All Priority</option>
                        {priorities.map(p => (
                            <option key={p.id} value={p.id}>{p.icon} {p.label}</option>
                        ))}
                    </select>

                    <select
                        value={filters.category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    >
                        <option value="all">All Categories</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="deadline">Sort: Deadline</option>
                        <option value="priority">Sort: Priority</option>
                        <option value="created">Sort: Created</option>
                        <option value="title">Sort: Title</option>
                    </select>

                    <button
                        className="sort-order-btn"
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                    >
                        {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                </div>
            </div>

            {/* Task Content */}
            <div className="task-content">
                {viewMode === 'kanban' ? renderKanbanView() : renderListView()}
            </div>

            {/* Create/Edit Task Modal */}
            {showTaskModal && (
                <div className="modal-overlay" onClick={() => setShowTaskModal(false)}>
                    <div className="task-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{editingTask ? 'Edit Task' : '✨ Create New Task'}</h3>
                            <button className="close-modal" onClick={() => setShowTaskModal(false)}>×</button>
                        </div>

                        <div className="modal-body">
                            {/* Title */}
                            <div className="form-group">
                                <label>✏️ Title *</label>
                                <input
                                    type="text"
                                    placeholder="Enter task title..."
                                    value={newTask.title}
                                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                    autoFocus
                                />
                            </div>

                            {/* Description */}
                            <div className="form-group">
                                <label>📄 Description</label>
                                <textarea
                                    placeholder="Enter task description..."
                                    value={newTask.description}
                                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                    rows={3}
                                />
                            </div>

                            <div className="form-row">
                                {/* Deadline */}
                                <div className="form-group">
                                    <label>📆 Deadline</label>
                                    <input
                                        type="datetime-local"
                                        value={newTask.deadline}
                                        onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                                    />
                                </div>

                                {/* Estimated Duration */}
                                <div className="form-group">
                                    <label>🎯 Duration (minutes)</label>
                                    <input
                                        type="number"
                                        min="5"
                                        step="5"
                                        value={newTask.estimatedDuration}
                                        onChange={(e) => setNewTask({ ...newTask, estimatedDuration: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                {/* Category */}
                                <div className="form-group">
                                    <label>🏷️ Category</label>
                                    <select
                                        value={newTask.category}
                                        onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                                    >
                                        {categories.map(c => (
                                            <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Priority */}
                                <div className="form-group">
                                    <label>🔥 Priority</label>
                                    <select
                                        value={newTask.priority}
                                        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                                    >
                                        {priorities.map(p => (
                                            <option key={p.id} value={p.id}>{p.icon} {p.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Color Tag */}
                            <div className="form-group">
                                <label>🖼️ Color Tag</label>
                                <div className="color-tags">
                                    {colorTags.map(color => (
                                        <button
                                            key={color}
                                            className={`color-tag-btn ${newTask.colorTag === color ? 'active' : ''}`}
                                            style={{ background: color }}
                                            onClick={() => setNewTask({ ...newTask, colorTag: color })}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="form-group">
                                <label>📍 Location (optional)</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Conference Room A"
                                    value={newTask.location}
                                    onChange={(e) => setNewTask({ ...newTask, location: e.target.value })}
                                />
                            </div>

                            {/* Subtasks */}
                            <div className="form-group">
                                <label>🧩 Subtasks / Checklist</label>
                                <div className="add-subtask-row">
                                    <input
                                        type="text"
                                        placeholder="Add a subtask..."
                                        value={newSubtask}
                                        onChange={(e) => setNewSubtask(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addSubtask()}
                                    />
                                    <button onClick={addSubtask}>+</button>
                                </div>
                                {newTask.subtasks.length > 0 && (
                                    <div className="subtask-list">
                                        {newTask.subtasks.map(s => (
                                            <div key={s.id} className="subtask-preview">
                                                <span>○ {s.text}</span>
                                                <button onClick={() => removeSubtask(s.id)}>×</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Links */}
                            <div className="form-group">
                                <label>🔗 Important Links</label>
                                <div className="add-link-row">
                                    <input
                                        type="url"
                                        placeholder="https://..."
                                        value={newLink}
                                        onChange={(e) => setNewLink(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addLink()}
                                    />
                                    <button onClick={addLink}>+</button>
                                </div>
                                {newTask.links.length > 0 && (
                                    <div className="link-list">
                                        {newTask.links.map((link, i) => (
                                            <div key={i} className="link-preview">
                                                <span>🔗 {link}</span>
                                                <button onClick={() => removeLink(i)}>×</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="cancel-btn" onClick={() => setShowTaskModal(false)}>
                                Cancel
                            </button>
                            <button className="save-btn" onClick={createTask} disabled={!newTask.title.trim()}>
                                {editingTask ? 'Update Task' : 'Create Task'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .task-manager {
                    padding: 0;
                }

                .task-manager-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.75rem;
                    color: #fff;
                }

                .task-summary {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                    margin: 0;
                }

                .overdue-count {
                    color: #ef4444;
                    font-weight: 600;
                }

                .header-right {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }

                .view-toggles {
                    display: flex;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    padding: 4px;
                }

                .view-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1.25rem;
                    width: 36px;
                    height: 32px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .view-btn.active {
                    background: rgba(99, 102, 241, 0.3);
                    color: #fff;
                }

                .add-task-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-task-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                }

                /* Stats Bar */
                .stats-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .stat-item {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 0.75rem 1.25rem;
                    border-radius: 10px;
                    border-left: 3px solid var(--stat-color);
                    display: flex;
                    flex-direction: column;
                    min-width: 80px;
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Filters */
                .filters-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 0 1rem;
                    flex: 1;
                    min-width: 200px;
                }

                .search-box .search-icon {
                    margin-right: 0.5rem;
                }

                .search-box input {
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.75rem 0;
                    width: 100%;
                    font-size: 0.9rem;
                }

                .search-box input:focus {
                    outline: none;
                }

                .filter-group {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .filter-group select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    padding: 0.6rem 0.75rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    cursor: pointer;
                }

                .sort-order-btn {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .sort-order-btn:hover {
                    background: rgba(99, 102, 241, 0.2);
                }

                /* Task Content */
                .task-content {
                    min-height: 300px;
                }

                /* List View */
                .task-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                /* Kanban View */
                .kanban-board {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                    overflow-x: auto;
                }

                .kanban-column {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 12px;
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                }

                .kanban-column.drop-target {
                    background: rgba(99, 102, 241, 0.1);
                }

                .kanban-column-header {
                    padding: 1rem;
                    border-top: 3px solid transparent;
                    border-radius: 12px 12px 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.2);
                }

                .kanban-column-header h3 {
                    margin: 0;
                    font-size: 0.9rem;
                    color: #fff;
                }

                .task-count {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .kanban-column-content {
                    padding: 0.75rem;
                    flex: 1;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                /* Task Card */
                .task-card {
                    background: rgba(30, 30, 50, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-left: 4px solid #6366f1;
                    border-radius: 12px;
                    padding: 1rem;
                    cursor: grab;
                    transition: all 0.2s ease;
                }

                .task-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                .task-card.dragging {
                    opacity: 0.5;
                    cursor: grabbing;
                }

                .task-card.done {
                    opacity: 0.7;
                }

                .task-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.5rem;
                }

                .task-meta-row {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .category-badge {
                    font-size: 1rem;
                }

                .priority-indicator {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    background: rgba(0, 0, 0, 0.3);
                }

                .priority-indicator.critical {
                    animation: pulse-priority 1.5s infinite;
                }

                @keyframes pulse-priority {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; }
                }

                .deadline-badge {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    background: rgba(0, 0, 0, 0.3);
                }

                .task-actions {
                    display: flex;
                    gap: 0.25rem;
                }

                .task-action-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.9rem;
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .task-action-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                }

                .task-action-btn.delete:hover {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                }

                .task-title {
                    margin: 0 0 0.5rem 0;
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 600;
                }

                .task-description {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.6);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Progress */
                .task-progress {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.75rem;
                }

                .progress-bar-container {
                    flex: 1;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .progress-bar-fill {
                    height: 100%;
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .progress-text {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    min-width: 35px;
                    text-align: right;
                }

                /* Subtasks */
                .task-subtasks {
                    margin-bottom: 0.75rem;
                    padding: 0.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                }

                .subtask-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.375rem 0;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .subtask-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                    margin: 0 -0.5rem;
                    padding: 0.375rem 0.5rem;
                    border-radius: 4px;
                }

                .subtask-check {
                    color: rgba(255, 255, 255, 0.4);
                }

                .subtask-item.completed .subtask-check {
                    color: #10b981;
                }

                .subtask-item.completed .subtask-text {
                    text-decoration: line-through;
                    color: rgba(255, 255, 255, 0.4);
                }

                .subtask-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                /* Footer */
                .task-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .task-info-row {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .info-tag {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                }

                .status-select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid;
                    color: #fff;
                    padding: 0.4rem 0.6rem;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    cursor: pointer;
                }

                /* Modal */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 1rem;
                }

                .task-modal {
                    background: linear-gradient(135deg, rgba(30, 30, 50, 0.95), rgba(20, 20, 40, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    width: 100%;
                    max-width: 600px;
                    max-height: 90vh;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
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
                    color: #fff;
                    font-size: 1.25rem;
                }

                .close-modal {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1.5rem;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                }

                .close-modal:hover {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                }

                .modal-body {
                    padding: 1.25rem;
                    overflow-y: auto;
                    flex: 1;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group textarea,
                .form-group select {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    padding: 0.75rem;
                    border-radius: 8px;
                    font-size: 0.9rem;
                }

                .form-group input:focus,
                .form-group textarea:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .color-tags {
                    display: flex;
                    gap: 0.5rem;
                }

                .color-tag-btn {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .color-tag-btn:hover,
                .color-tag-btn.active {
                    transform: scale(1.2);
                    border-color: #fff;
                }

                .add-subtask-row,
                .add-link-row {
                    display: flex;
                    gap: 0.5rem;
                }

                .add-subtask-row button,
                .add-link-row button {
                    background: rgba(99, 102, 241, 0.3);
                    border: none;
                    color: #fff;
                    width: 40px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1.25rem;
                }

                .subtask-list,
                .link-list {
                    margin-top: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .subtask-preview,
                .link-preview {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.5rem 0.75rem;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                .subtask-preview button,
                .link-preview button {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.4);
                    cursor: pointer;
                    font-size: 1rem;
                    padding: 0;
                }

                .subtask-preview button:hover,
                .link-preview button:hover {
                    color: #ef4444;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    padding: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .cancel-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .cancel-btn:hover {
                    background: rgba(255, 255, 255, 0.15);
                }

                .save-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .save-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                }

                .save-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Responsive */
                @media (max-width: 1200px) {
                    .kanban-board {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .task-manager-header {
                        flex-direction: column;
                    }

                    .header-right {
                        width: 100%;
                        justify-content: space-between;
                    }

                    .filters-bar {
                        flex-direction: column;
                    }

                    .filter-group {
                        width: 100%;
                    }

                    .filter-group select {
                        flex: 1;
                    }

                    .kanban-board {
                        grid-template-columns: 1fr;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                    }

                    .stats-bar {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 480px) {
                    .stats-bar {
                        grid-template-columns: 1fr;
                    }

                    .task-meta-row {
                        flex-direction: column;
                        gap: 0.25rem;
                    }

                    .task-footer {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .status-select {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default TaskManager
