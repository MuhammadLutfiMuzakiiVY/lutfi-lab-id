import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const KanbanBoard = () => {
    const { t } = useLanguage()
    const [columns, setColumns] = useState(() => {
        const saved = localStorage.getItem('kanban_columns')
        return saved ? JSON.parse(saved) : {
            todo: {
                id: 'todo',
                title: '📋 To Do',
                color: '#6366f1',
                cards: [
                    { id: 1, title: 'Research project requirements', priority: 'high', labels: ['research'] },
                    { id: 2, title: 'Design system architecture', priority: 'medium', labels: ['design'] }
                ]
            },
            inProgress: {
                id: 'inProgress',
                title: '🔄 In Progress',
                color: '#f59e0b',
                cards: [
                    { id: 3, title: 'Implement user authentication', priority: 'high', labels: ['backend'] }
                ]
            },
            review: {
                id: 'review',
                title: '👀 Review',
                color: '#a855f7',
                cards: []
            },
            done: {
                id: 'done',
                title: '✅ Done',
                color: '#22c55e',
                cards: [
                    { id: 4, title: 'Setup project structure', priority: 'low', labels: ['setup'] }
                ]
            }
        }
    })

    const [draggedCard, setDraggedCard] = useState(null)
    const [draggedFromColumn, setDraggedFromColumn] = useState(null)
    const [editingCard, setEditingCard] = useState(null)
    const [showAddCard, setShowAddCard] = useState(null)
    const [newCardTitle, setNewCardTitle] = useState('')
    const [newCardPriority, setNewCardPriority] = useState('medium')
    const [searchQuery, setSearchQuery] = useState('')
    const [filterPriority, setFilterPriority] = useState('all')

    const priorities = [
        { value: 'low', label: 'Low', color: '#22c55e' },
        { value: 'medium', label: 'Medium', color: '#f59e0b' },
        { value: 'high', label: 'High', color: '#ef4444' }
    ]

    const labels = ['frontend', 'backend', 'design', 'research', 'bug', 'feature', 'setup', 'docs']

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('kanban_columns', JSON.stringify(columns))
    }, [columns])

    // Drag handlers
    const handleDragStart = (e, card, columnId) => {
        setDraggedCard(card)
        setDraggedFromColumn(columnId)
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const handleDrop = (e, targetColumnId) => {
        e.preventDefault()

        if (!draggedCard || draggedFromColumn === targetColumnId) {
            setDraggedCard(null)
            setDraggedFromColumn(null)
            return
        }

        setColumns(prev => {
            const newColumns = { ...prev }

            // Remove from source column
            newColumns[draggedFromColumn] = {
                ...newColumns[draggedFromColumn],
                cards: newColumns[draggedFromColumn].cards.filter(c => c.id !== draggedCard.id)
            }

            // Add to target column
            newColumns[targetColumnId] = {
                ...newColumns[targetColumnId],
                cards: [...newColumns[targetColumnId].cards, draggedCard]
            }

            return newColumns
        })

        setDraggedCard(null)
        setDraggedFromColumn(null)
    }

    // Add new card
    const addCard = (columnId) => {
        if (!newCardTitle.trim()) return

        const newCard = {
            id: Date.now(),
            title: newCardTitle.trim(),
            priority: newCardPriority,
            labels: [],
            createdAt: new Date().toISOString()
        }

        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                cards: [...prev[columnId].cards, newCard]
            }
        }))

        setNewCardTitle('')
        setNewCardPriority('medium')
        setShowAddCard(null)
    }

    // Delete card
    const deleteCard = (columnId, cardId) => {
        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                cards: prev[columnId].cards.filter(c => c.id !== cardId)
            }
        }))
    }

    // Update card
    const updateCard = (columnId, cardId, updates) => {
        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                cards: prev[columnId].cards.map(c =>
                    c.id === cardId ? { ...c, ...updates } : c
                )
            }
        }))
    }

    // Toggle label
    const toggleLabel = (columnId, cardId, label) => {
        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                cards: prev[columnId].cards.map(c => {
                    if (c.id === cardId) {
                        const newLabels = c.labels.includes(label)
                            ? c.labels.filter(l => l !== label)
                            : [...c.labels, label]
                        return { ...c, labels: newLabels }
                    }
                    return c
                })
            }
        }))
    }

    // Filter cards
    const getFilteredCards = (cards) => {
        return cards.filter(card => {
            const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.labels.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()))
            const matchesPriority = filterPriority === 'all' || card.priority === filterPriority
            return matchesSearch && matchesPriority
        })
    }

    // Get statistics
    const getStats = () => {
        const allCards = Object.values(columns).flatMap(col => col.cards)
        return {
            total: allCards.length,
            todo: columns.todo.cards.length,
            inProgress: columns.inProgress.cards.length,
            done: columns.done.cards.length,
            highPriority: allCards.filter(c => c.priority === 'high').length
        }
    }

    const stats = getStats()

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>📌 Kanban Board</h2>
                <p style={styles.subtitle}>Organize your tasks visually</p>
            </div>

            {/* Stats Bar */}
            <div style={styles.statsBar}>
                <div style={styles.stat}>
                    <span style={styles.statNum}>{stats.total}</span>
                    <span style={styles.statLabel}>Total</span>
                </div>
                <div style={styles.stat}>
                    <span style={{ ...styles.statNum, color: '#6366f1' }}>{stats.todo}</span>
                    <span style={styles.statLabel}>To Do</span>
                </div>
                <div style={styles.stat}>
                    <span style={{ ...styles.statNum, color: '#f59e0b' }}>{stats.inProgress}</span>
                    <span style={styles.statLabel}>In Progress</span>
                </div>
                <div style={styles.stat}>
                    <span style={{ ...styles.statNum, color: '#22c55e' }}>{stats.done}</span>
                    <span style={styles.statLabel}>Done</span>
                </div>
            </div>

            {/* Filters */}
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={styles.searchInput}
                />
                <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    style={styles.filterSelect}
                >
                    <option value="all">All Priorities</option>
                    {priorities.map(p => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                </select>
            </div>

            {/* Kanban Columns */}
            <div style={styles.board}>
                {Object.values(columns).map(column => (
                    <div
                        key={column.id}
                        style={styles.column}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, column.id)}
                    >
                        <div style={{ ...styles.columnHeader, borderTopColor: column.color }}>
                            <span style={styles.columnTitle}>{column.title}</span>
                            <span style={styles.cardCount}>{column.cards.length}</span>
                        </div>

                        <div style={styles.cardList}>
                            {getFilteredCards(column.cards).map(card => (
                                <div
                                    key={card.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, card, column.id)}
                                    style={{
                                        ...styles.card,
                                        borderLeftColor: priorities.find(p => p.value === card.priority)?.color,
                                        opacity: draggedCard?.id === card.id ? 0.5 : 1
                                    }}
                                >
                                    {editingCard === card.id ? (
                                        <div style={styles.editForm}>
                                            <input
                                                type="text"
                                                value={card.title}
                                                onChange={(e) => updateCard(column.id, card.id, { title: e.target.value })}
                                                style={styles.editInput}
                                                autoFocus
                                            />
                                            <select
                                                value={card.priority}
                                                onChange={(e) => updateCard(column.id, card.id, { priority: e.target.value })}
                                                style={styles.editSelect}
                                            >
                                                {priorities.map(p => (
                                                    <option key={p.value} value={p.value}>{p.label}</option>
                                                ))}
                                            </select>
                                            <div style={styles.labelPicker}>
                                                {labels.map(label => (
                                                    <button
                                                        key={label}
                                                        onClick={() => toggleLabel(column.id, card.id, label)}
                                                        style={{
                                                            ...styles.labelBtn,
                                                            background: card.labels.includes(label)
                                                                ? 'rgba(99, 102, 241, 0.4)'
                                                                : 'rgba(255, 255, 255, 0.1)'
                                                        }}
                                                    >
                                                        {label}
                                                    </button>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => setEditingCard(null)}
                                                style={styles.saveBtn}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div style={styles.cardHeader}>
                                                <span style={styles.cardTitle}>{card.title}</span>
                                                <div style={styles.cardActions}>
                                                    <button
                                                        onClick={() => setEditingCard(card.id)}
                                                        style={styles.actionBtn}
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        onClick={() => deleteCard(column.id, card.id)}
                                                        style={styles.actionBtn}
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </div>

                                            {card.labels.length > 0 && (
                                                <div style={styles.cardLabels}>
                                                    {card.labels.map(label => (
                                                        <span key={label} style={styles.cardLabel}>{label}</span>
                                                    ))}
                                                </div>
                                            )}

                                            <div style={styles.cardFooter}>
                                                <span style={{
                                                    ...styles.priorityBadge,
                                                    background: priorities.find(p => p.value === card.priority)?.color + '33',
                                                    color: priorities.find(p => p.value === card.priority)?.color
                                                }}>
                                                    {card.priority}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Add Card Form */}
                        {showAddCard === column.id ? (
                            <div style={styles.addCardForm}>
                                <input
                                    type="text"
                                    placeholder="Enter card title..."
                                    value={newCardTitle}
                                    onChange={(e) => setNewCardTitle(e.target.value)}
                                    style={styles.addCardInput}
                                    autoFocus
                                    onKeyDown={(e) => e.key === 'Enter' && addCard(column.id)}
                                />
                                <select
                                    value={newCardPriority}
                                    onChange={(e) => setNewCardPriority(e.target.value)}
                                    style={styles.prioritySelect}
                                >
                                    {priorities.map(p => (
                                        <option key={p.value} value={p.value}>{p.label}</option>
                                    ))}
                                </select>
                                <div style={styles.addCardActions}>
                                    <button onClick={() => addCard(column.id)} style={styles.addConfirmBtn}>
                                        Add
                                    </button>
                                    <button onClick={() => setShowAddCard(null)} style={styles.addCancelBtn}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setShowAddCard(column.id)}
                                style={styles.addCardBtn}
                            >
                                + Add Card
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

const styles = {
    container: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
        borderRadius: '20px',
        padding: '25px',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        overflowX: 'auto'
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    subtitle: {
        color: '#94a3b8',
        fontSize: '14px',
        marginTop: '5px'
    },
    statsBar: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginBottom: '20px',
        padding: '15px',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px'
    },
    stat: {
        textAlign: 'center'
    },
    statNum: {
        display: 'block',
        fontSize: '24px',
        fontWeight: '700',
        color: '#fff'
    },
    statLabel: {
        fontSize: '12px',
        color: '#64748b'
    },
    filters: {
        display: 'flex',
        gap: '12px',
        marginBottom: '20px'
    },
    searchInput: {
        flex: 1,
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '10px',
        padding: '12px 15px',
        color: '#fff',
        fontSize: '14px',
        outline: 'none'
    },
    filterSelect: {
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '10px',
        padding: '12px 15px',
        color: '#fff',
        fontSize: '14px',
        outline: 'none',
        cursor: 'pointer'
    },
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        gap: '15px',
        minWidth: 'max-content'
    },
    column: {
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        padding: '12px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column'
    },
    columnHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        paddingBottom: '10px',
        borderTop: '3px solid',
        paddingTop: '10px'
    },
    columnTitle: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600'
    },
    cardCount: {
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#94a3b8',
        padding: '2px 8px',
        borderRadius: '10px',
        fontSize: '12px'
    },
    cardList: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    card: {
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '10px',
        padding: '12px',
        borderLeft: '3px solid',
        cursor: 'grab',
        transition: 'all 0.2s'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '8px'
    },
    cardTitle: {
        color: '#fff',
        fontSize: '14px',
        lineHeight: '1.4',
        flex: 1
    },
    cardActions: {
        display: 'flex',
        gap: '4px',
        opacity: 0.5,
        transition: 'opacity 0.2s'
    },
    actionBtn: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        padding: '2px'
    },
    cardLabels: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        marginBottom: '8px'
    },
    cardLabel: {
        background: 'rgba(99, 102, 241, 0.3)',
        color: '#a5b4fc',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '10px'
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    priorityBadge: {
        padding: '3px 8px',
        borderRadius: '4px',
        fontSize: '10px',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    editForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    editInput: {
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '6px',
        padding: '8px',
        color: '#fff',
        fontSize: '13px',
        outline: 'none'
    },
    editSelect: {
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '6px',
        padding: '8px',
        color: '#fff',
        fontSize: '12px',
        outline: 'none'
    },
    labelPicker: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px'
    },
    labelBtn: {
        border: 'none',
        padding: '3px 8px',
        borderRadius: '4px',
        fontSize: '10px',
        color: '#fff',
        cursor: 'pointer'
    },
    saveBtn: {
        background: '#6366f1',
        color: '#fff',
        border: 'none',
        padding: '8px',
        borderRadius: '6px',
        fontSize: '12px',
        cursor: 'pointer'
    },
    addCardForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '10px'
    },
    addCardInput: {
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '8px',
        padding: '10px',
        color: '#fff',
        fontSize: '13px',
        outline: 'none'
    },
    prioritySelect: {
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '8px',
        padding: '8px',
        color: '#fff',
        fontSize: '12px',
        outline: 'none'
    },
    addCardActions: {
        display: 'flex',
        gap: '8px'
    },
    addConfirmBtn: {
        flex: 1,
        background: '#6366f1',
        color: '#fff',
        border: 'none',
        padding: '8px',
        borderRadius: '6px',
        fontSize: '12px',
        cursor: 'pointer'
    },
    addCancelBtn: {
        flex: 1,
        background: 'rgba(148, 163, 184, 0.2)',
        color: '#94a3b8',
        border: 'none',
        padding: '8px',
        borderRadius: '6px',
        fontSize: '12px',
        cursor: 'pointer'
    },
    addCardBtn: {
        background: 'transparent',
        border: '2px dashed rgba(99, 102, 241, 0.3)',
        borderRadius: '8px',
        padding: '10px',
        color: '#64748b',
        fontSize: '13px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'all 0.2s'
    }
}

export default KanbanBoard
