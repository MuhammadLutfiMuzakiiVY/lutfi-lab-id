import { useState, useEffect, useRef, useCallback } from 'react'

// Global Search (Omni Search) - Spotlight-style search
const GlobalSearch = ({ isOpen, onClose, onNavigate }) => {
    const [query, setQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)
    const inputRef = useRef(null)

    // Sample data for search - in real app, this would come from context/state
    const searchData = {
        tasks: [
            { id: 1, type: 'task', title: 'Review Security Vulnerabilities', status: 'in-progress', icon: '📋' },
            { id: 2, type: 'task', title: 'Update Firewall Rules', status: 'todo', icon: '📋' },
            { id: 3, type: 'task', title: 'Complete React Course', status: 'todo', icon: '📋' },
            { id: 4, type: 'task', title: 'Team Meeting Preparation', status: 'review', icon: '📋' }
        ],
        projects: [
            { id: 1, type: 'project', title: 'Lutfi-Lab.ID Dashboard', status: 'active', icon: '🚀' },
            { id: 2, type: 'project', title: 'Security Audit 2024', status: 'active', icon: '🚀' },
            { id: 3, type: 'project', title: 'Portfolio Website', status: 'completed', icon: '🚀' }
        ],
        notes: [
            { id: 1, type: 'note', title: 'Meeting Notes - Sprint Planning', icon: '📝' },
            { id: 2, type: 'note', title: 'Ideas for New Features', icon: '📝' },
            { id: 3, type: 'note', title: 'Learning Resources', icon: '📝' }
        ],
        events: [
            { id: 1, type: 'event', title: 'Team Standup', date: 'Today 10:00', icon: '📅' },
            { id: 2, type: 'event', title: 'Client Meeting', date: 'Tomorrow 14:00', icon: '📅' },
            { id: 3, type: 'event', title: 'Workshop React', date: 'Fri 09:00', icon: '📅' }
        ],
        settings: [
            { id: 1, type: 'setting', title: 'Account Settings', action: 'settings', icon: '⚙️' },
            { id: 2, type: 'setting', title: 'Theme & Appearance', action: 'settings', icon: '🎨' },
            { id: 3, type: 'setting', title: 'Notifications', action: 'settings', icon: '🔔' },
            { id: 4, type: 'setting', title: 'Privacy & Security', action: 'settings', icon: '🔒' }
        ],
        actions: [
            { id: 1, type: 'action', title: 'Create New Task', action: 'create-task', icon: '➕' },
            { id: 2, type: 'action', title: 'Create New Project', action: 'create-project', icon: '📁' },
            { id: 3, type: 'action', title: 'Start Focus Timer', action: 'start-focus', icon: '⏱️' },
            { id: 4, type: 'action', title: 'Add Calendar Event', action: 'create-event', icon: '📆' }
        ]
    }

    // Get all searchable items
    const getAllItems = useCallback(() => {
        return [
            ...searchData.actions,
            ...searchData.tasks,
            ...searchData.projects,
            ...searchData.notes,
            ...searchData.events,
            ...searchData.settings
        ]
    }, [])

    // Filter results based on query
    const getFilteredResults = useCallback(() => {
        if (!query.trim()) {
            // Show quick actions when empty
            return searchData.actions
        }

        const searchLower = query.toLowerCase()
        const allItems = getAllItems()

        return allItems.filter(item =>
            item.title.toLowerCase().includes(searchLower) ||
            item.type.toLowerCase().includes(searchLower)
        )
    }, [query, getAllItems])

    const results = getFilteredResults()

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
            setQuery('')
            setActiveIndex(0)
        }
    }, [isOpen])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault()
                    setActiveIndex(prev => Math.min(prev + 1, results.length - 1))
                    break
                case 'ArrowUp':
                    e.preventDefault()
                    setActiveIndex(prev => Math.max(prev - 1, 0))
                    break
                case 'Enter':
                    e.preventDefault()
                    if (results[activeIndex]) {
                        handleSelect(results[activeIndex])
                    }
                    break
                case 'Escape':
                    onClose()
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, results, activeIndex, onClose])

    const handleSelect = (item) => {
        if (item.action) {
            onNavigate(item.action)
        } else if (item.type === 'task') {
            onNavigate('tasks')
        } else if (item.type === 'project') {
            onNavigate('overview')
        } else if (item.type === 'note') {
            onNavigate('overview')
        } else if (item.type === 'event') {
            onNavigate('overview')
        } else if (item.type === 'setting') {
            onNavigate('settings')
        }
        onClose()
    }

    const getTypeLabel = (type) => {
        const labels = {
            task: 'Task',
            project: 'Project',
            note: 'Note',
            event: 'Event',
            setting: 'Setting',
            action: 'Quick Action'
        }
        return labels[type] || type
    }

    const getTypeColor = (type) => {
        const colors = {
            task: '#6366f1',
            project: '#10b981',
            note: '#f59e0b',
            event: '#ec4899',
            setting: '#8b5cf6',
            action: '#22d3ee'
        }
        return colors[type] || '#6b7280'
    }

    if (!isOpen) return null

    return (
        <div className="global-search-overlay" onClick={onClose}>
            <div className="global-search-modal" onClick={(e) => e.stopPropagation()}>
                {/* Search Input */}
                <div className="search-input-container">
                    <span className="search-icon">🔍</span>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search tasks, projects, notes, settings... (Esc to close)"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                            setActiveIndex(0)
                        }}
                        className="search-input"
                    />
                    <div className="search-shortcut">
                        <kbd>Ctrl</kbd>
                        <span>+</span>
                        <kbd>K</kbd>
                    </div>
                </div>

                {/* Results */}
                <div className="search-results">
                    {results.length === 0 ? (
                        <div className="no-results">
                            <span className="no-results-icon">🔎</span>
                            <p>No results found for "{query}"</p>
                            <span className="no-results-hint">Try different keywords</span>
                        </div>
                    ) : (
                        <>
                            {!query && (
                                <div className="results-section-label">Quick Actions</div>
                            )}
                            {results.map((item, index) => (
                                <div
                                    key={`${item.type}-${item.id}`}
                                    className={`search-result-item ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleSelect(item)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <span className="result-icon">{item.icon}</span>
                                    <div className="result-content">
                                        <span className="result-title">{item.title}</span>
                                        <span
                                            className="result-type"
                                            style={{ color: getTypeColor(item.type) }}
                                        >
                                            {getTypeLabel(item.type)}
                                            {item.status && ` • ${item.status}`}
                                            {item.date && ` • ${item.date}`}
                                        </span>
                                    </div>
                                    {index === activeIndex && (
                                        <span className="result-enter">↵ Enter</span>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="search-footer">
                    <div className="search-tips">
                        <span><kbd>↑↓</kbd> Navigate</span>
                        <span><kbd>↵</kbd> Select</span>
                        <span><kbd>Esc</kbd> Close</span>
                    </div>
                </div>
            </div>

            <style>{`
                .global-search-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 15vh;
                    z-index: 9999;
                    animation: fadeIn 0.15s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .global-search-modal {
                    width: 100%;
                    max-width: 640px;
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.15);
                    overflow: hidden;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from { 
                        opacity: 0;
                        transform: translateY(-20px) scale(0.98);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .search-input-container {
                    display: flex;
                    align-items: center;
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    gap: 0.75rem;
                }

                .search-icon {
                    font-size: 1.25rem;
                }

                .search-input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 1.1rem;
                    outline: none;
                }

                .search-input::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .search-shortcut {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.75rem;
                }

                .search-shortcut kbd {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    padding: 0.15rem 0.4rem;
                    font-family: inherit;
                }

                .search-results {
                    max-height: 400px;
                    overflow-y: auto;
                    padding: 0.5rem;
                }

                .results-section-label {
                    padding: 0.5rem 0.75rem;
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.4);
                    letter-spacing: 0.5px;
                }

                .search-result-item {
                    display: flex;
                    align-items: center;
                    gap: 0.875rem;
                    padding: 0.75rem;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }

                .search-result-item:hover,
                .search-result-item.active {
                    background: rgba(99, 102, 241, 0.15);
                }

                .search-result-item.active {
                    border-left: 3px solid #6366f1;
                    margin-left: -3px;
                }

                .result-icon {
                    font-size: 1.25rem;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                }

                .result-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .result-title {
                    color: #fff;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .result-type {
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .result-enter {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                    background: rgba(99, 102, 241, 0.2);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }

                .no-results {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    text-align: center;
                }

                .no-results-icon {
                    font-size: 2.5rem;
                    margin-bottom: 0.75rem;
                    opacity: 0.5;
                }

                .no-results p {
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0;
                }

                .no-results-hint {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.85rem;
                    margin-top: 0.25rem;
                }

                .search-footer {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.75rem 1rem;
                }

                .search-tips {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .search-tips kbd {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    padding: 0.1rem 0.3rem;
                    margin-right: 0.25rem;
                }

                @media (max-width: 768px) {
                    .global-search-overlay {
                        padding: 1rem;
                        padding-top: 10vh;
                    }

                    .global-search-modal {
                        max-width: 100%;
                    }

                    .search-shortcut {
                        display: none;
                    }

                    .search-tips {
                        gap: 0.75rem;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </div>
    )
}

export default GlobalSearch
