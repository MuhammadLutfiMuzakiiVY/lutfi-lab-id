import { useState, useEffect } from 'react'

// Link Manager - Bookmark Manager for important links
const LinkManager = () => {
    // ═══════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════
    const [links, setLinks] = useState([
        { id: 1, url: 'https://github.com', title: 'GitHub', category: 'tools', favorite: true, icon: '🐱' },
        { id: 2, url: 'https://stackoverflow.com', title: 'Stack Overflow', category: 'tools', favorite: true, icon: '📚' },
        { id: 3, url: 'https://notion.so', title: 'Notion', category: 'work', favorite: false, icon: '📝' },
        { id: 4, url: 'https://udemy.com', title: 'Udemy', category: 'study', favorite: true, icon: '🎓' },
        { id: 5, url: 'https://figma.com', title: 'Figma', category: 'tools', favorite: false, icon: '🎨' },
        { id: 6, url: 'https://vercel.com', title: 'Vercel', category: 'tools', favorite: false, icon: '▲' },
        { id: 7, url: 'https://docs.google.com', title: 'Google Docs', category: 'work', favorite: true, icon: '📄' },
        { id: 8, url: 'https://chatgpt.com', title: 'ChatGPT', category: 'tools', favorite: true, icon: '🤖' }
    ])

    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [showAddModal, setShowAddModal] = useState(false)
    const [editingLink, setEditingLink] = useState(null)

    // New link form
    const [newLink, setNewLink] = useState({
        url: '',
        title: '',
        category: 'tools',
        icon: '🔗'
    })

    const categories = [
        { id: 'all', label: 'All Links', icon: '📌', color: '#6366f1' },
        { id: 'work', label: 'Work', icon: '💼', color: '#10b981' },
        { id: 'study', label: 'Study', icon: '🎓', color: '#f59e0b' },
        { id: 'tools', label: 'Tools', icon: '🔧', color: '#8b5cf6' },
        { id: 'favorite', label: 'Favorites', icon: '⭐', color: '#ec4899' }
    ]

    const emojis = ['🔗', '📌', '💻', '🚀', '📚', '🎨', '🎯', '💡', '🔥', '⚡', '🌐', '📱', '🎬', '🎵', '📊', '✨']

    // ═══════════════════════════════════════════════════════════
    // CRUD OPERATIONS
    // ═══════════════════════════════════════════════════════════
    const addLink = () => {
        if (!newLink.url.trim() || !newLink.title.trim()) return

        const link = {
            id: Date.now(),
            ...newLink,
            favorite: false
        }

        setLinks([...links, link])
        setNewLink({ url: '', title: '', category: 'tools', icon: '🔗' })
        setShowAddModal(false)
    }

    const updateLink = () => {
        if (!editingLink) return
        setLinks(links.map(l => l.id === editingLink.id ? editingLink : l))
        setEditingLink(null)
    }

    const deleteLink = (id) => {
        setLinks(links.filter(l => l.id !== id))
    }

    const toggleFavorite = (id) => {
        setLinks(links.map(l => l.id === id ? { ...l, favorite: !l.favorite } : l))
    }

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    // ═══════════════════════════════════════════════════════════
    // FILTERING
    // ═══════════════════════════════════════════════════════════
    const filteredLinks = links.filter(link => {
        const matchesCategory = activeCategory === 'all'
            || (activeCategory === 'favorite' ? link.favorite : link.category === activeCategory)
        const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase())
            || link.url.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const getCategoryStats = (catId) => {
        if (catId === 'all') return links.length
        if (catId === 'favorite') return links.filter(l => l.favorite).length
        return links.filter(l => l.category === catId).length
    }

    // ═══════════════════════════════════════════════════════════
    // RENDER
    // ═══════════════════════════════════════════════════════════
    return (
        <div className="link-manager">
            <div className="manager-header">
                <div className="header-left">
                    <h2>🔗 Link Manager</h2>
                    <p>{links.length} bookmarks saved</p>
                </div>
                <button className="add-btn" onClick={() => setShowAddModal(true)}>
                    + Add Link
                </button>
            </div>

            {/* Categories */}
            <div className="categories-bar">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{ '--cat-color': cat.color }}
                    >
                        <span className="cat-icon">{cat.icon}</span>
                        <span className="cat-label">{cat.label}</span>
                        <span className="cat-count">{getCategoryStats(cat.id)}</span>
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Search links..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Links Grid */}
            <div className="links-grid">
                {filteredLinks.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">🔗</span>
                        <p>No links found</p>
                        <button onClick={() => setShowAddModal(true)}>Add your first link</button>
                    </div>
                ) : (
                    filteredLinks.map(link => (
                        <div key={link.id} className="link-card">
                            <div className="link-header">
                                <span className="link-icon">{link.icon}</span>
                                <button
                                    className={`favorite-btn ${link.favorite ? 'active' : ''}`}
                                    onClick={() => toggleFavorite(link.id)}
                                    title={link.favorite ? 'Remove from favorites' : 'Add to favorites'}
                                >
                                    {link.favorite ? '⭐' : '☆'}
                                </button>
                            </div>
                            <h3 className="link-title">{link.title}</h3>
                            <p className="link-url">{link.url.replace(/^https?:\/\//, '').split('/')[0]}</p>
                            <div className="link-footer">
                                <span
                                    className="category-tag"
                                    style={{ background: categories.find(c => c.id === link.category)?.color + '20' }}
                                >
                                    {categories.find(c => c.id === link.category)?.icon} {link.category}
                                </span>
                                <div className="link-actions">
                                    <button onClick={() => openLink(link.url)} title="Open">🔗</button>
                                    <button onClick={() => setEditingLink(link)} title="Edit">✏️</button>
                                    <button onClick={() => deleteLink(link.id)} title="Delete">🗑️</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add/Edit Modal */}
            {(showAddModal || editingLink) && (
                <div className="modal-overlay" onClick={() => { setShowAddModal(false); setEditingLink(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{editingLink ? '✏️ Edit Link' : '➕ Add New Link'}</h3>
                            <button className="close-btn" onClick={() => { setShowAddModal(false); setEditingLink(null); }}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>URL *</label>
                                <input
                                    type="url"
                                    placeholder="https://example.com"
                                    value={editingLink ? editingLink.url : newLink.url}
                                    onChange={(e) => editingLink
                                        ? setEditingLink({ ...editingLink, url: e.target.value })
                                        : setNewLink({ ...newLink, url: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Title *</label>
                                <input
                                    type="text"
                                    placeholder="Link title"
                                    value={editingLink ? editingLink.title : newLink.title}
                                    onChange={(e) => editingLink
                                        ? setEditingLink({ ...editingLink, title: e.target.value })
                                        : setNewLink({ ...newLink, title: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select
                                    value={editingLink ? editingLink.category : newLink.category}
                                    onChange={(e) => editingLink
                                        ? setEditingLink({ ...editingLink, category: e.target.value })
                                        : setNewLink({ ...newLink, category: e.target.value })
                                    }
                                >
                                    {categories.filter(c => c.id !== 'all' && c.id !== 'favorite').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.icon} {cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Icon</label>
                                <div className="emoji-picker">
                                    {emojis.map(emoji => (
                                        <button
                                            key={emoji}
                                            type="button"
                                            className={`emoji-btn ${(editingLink ? editingLink.icon : newLink.icon) === emoji ? 'active' : ''}`}
                                            onClick={() => editingLink
                                                ? setEditingLink({ ...editingLink, icon: emoji })
                                                : setNewLink({ ...newLink, icon: emoji })
                                            }
                                        >
                                            {emoji}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="cancel-btn" onClick={() => { setShowAddModal(false); setEditingLink(null); }}>
                                Cancel
                            </button>
                            <button
                                className="save-btn"
                                onClick={editingLink ? updateLink : addLink}
                                disabled={editingLink
                                    ? !editingLink.url.trim() || !editingLink.title.trim()
                                    : !newLink.url.trim() || !newLink.title.trim()
                                }
                            >
                                {editingLink ? 'Update' : 'Add Link'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .link-manager {
                    padding: 0;
                }

                .manager-header {
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

                .add-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                }

                /* Categories */
                .categories-bar {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }

                .category-btn {
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

                .category-btn:hover {
                    border-color: var(--cat-color);
                }

                .category-btn.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                    border-color: var(--cat-color);
                    color: #fff;
                }

                .cat-icon { font-size: 1rem; }
                .cat-label { font-size: 0.85rem; font-weight: 500; }
                .cat-count {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.15rem 0.5rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                }

                /* Search */
                .search-bar {
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 0 1rem;
                    margin-bottom: 1.5rem;
                }

                .search-bar .search-icon {
                    margin-right: 0.5rem;
                }

                .search-bar input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.75rem 0;
                    font-size: 0.95rem;
                }

                .search-bar input:focus { outline: none; }

                /* Links Grid */
                .links-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 1rem;
                }

                .link-card {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1rem;
                    transition: all 0.2s ease;
                }

                .link-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    transform: translateY(-2px);
                }

                .link-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.75rem;
                }

                .link-icon {
                    font-size: 1.5rem;
                }

                .favorite-btn {
                    background: transparent;
                    border: none;
                    font-size: 1.25rem;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: all 0.2s ease;
                }

                .favorite-btn:hover, .favorite-btn.active {
                    opacity: 1;
                }

                .link-title {
                    margin: 0 0 0.25rem 0;
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 600;
                }

                .link-url {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .link-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .category-tag {
                    font-size: 0.7rem;
                    padding: 0.25rem 0.5rem;
                    border-radius: 6px;
                    color: rgba(255, 255, 255, 0.8);
                }

                .link-actions {
                    display: flex;
                    gap: 0.25rem;
                }

                .link-actions button {
                    background: transparent;
                    border: none;
                    font-size: 0.9rem;
                    cursor: pointer;
                    padding: 0.25rem;
                    opacity: 0.5;
                    transition: all 0.2s ease;
                }

                .link-actions button:hover {
                    opacity: 1;
                }

                /* Empty State */
                .empty-state {
                    grid-column: 1 / -1;
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

                .empty-state button {
                    margin-top: 1rem;
                    background: rgba(99, 102, 241, 0.2);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    color: #a5b4fc;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
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

                .modal {
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    width: 100%;
                    max-width: 450px;
                    overflow: hidden;
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .modal-header h3 {
                    margin: 0;
                    color: #fff;
                    font-size: 1.1rem;
                }

                .close-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                .modal-body {
                    padding: 1.25rem;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group select {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    font-size: 0.95rem;
                }

                .form-group input:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .emoji-picker {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .emoji-btn {
                    width: 36px;
                    height: 36px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    background: rgba(0, 0, 0, 0.2);
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .emoji-btn:hover, .emoji-btn.active {
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.2);
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.75rem;
                    padding: 1rem 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .cancel-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 0.6rem 1.25rem;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .save-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.6rem 1.25rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .save-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .manager-header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .add-btn {
                        width: 100%;
                    }

                    .categories-bar {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 0.5rem;
                    }

                    .category-btn {
                        flex-shrink: 0;
                    }

                    .cat-label {
                        display: none;
                    }

                    .links-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    )
}

export default LinkManager
