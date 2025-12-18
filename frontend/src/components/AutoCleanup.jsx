import { useState, useEffect, useCallback } from 'react'

// Icons
const CleanupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M10 11v6" /><path d="M14 11v6" />
    </svg>
)

const ArchiveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8" /><rect x="1" y="3" width="22" height="5" /><line x1="10" y1="12" x2="14" y2="12" />
    </svg>
)

const NoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
)

const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" />
    </svg>
)

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        <circle cx="12" cy="12" r="4" />
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
)

function AutoCleanup() {
    // Cleanup States
    const [isScanning, setIsScanning] = useState(false)
    const [lastScan, setLastScan] = useState(null)
    const [autoCleanEnabled, setAutoCleanEnabled] = useState(true)
    const [showSettings, setShowSettings] = useState(false)

    // Settings
    const [settings, setSettings] = useState({
        taskArchiveDays: 60,
        noteInactiveDays: 30,
        fileInactiveDays: 90,
        autoArchive: true,
        aiSummary: true,
        notifications: true
    })

    // Cleanup Data
    const [cleanupData, setCleanupData] = useState({
        staleTasks: [],
        inactiveNotes: [],
        unusedFiles: [],
        cleanupScore: 85,
        lastCleanup: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    })

    // Sample stale tasks
    const [staleTasks] = useState([
        { id: 1, title: 'Old project setup', lastModified: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000), status: 'abandoned', priority: 'low' },
        { id: 2, title: 'Legacy code review', lastModified: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000), status: 'stale', priority: 'medium' },
        { id: 3, title: 'Deprecated API migration', lastModified: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), status: 'abandoned', priority: 'high' }
    ])

    // Sample inactive notes
    const [inactiveNotes] = useState([
        { id: 1, title: 'Meeting notes - Jan', lastOpened: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), wordCount: 350, aiSummary: 'Diskusi tentang roadmap Q1, keputusan untuk fokus pada security features.' },
        { id: 2, title: 'Research ideas', lastOpened: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), wordCount: 520, aiSummary: 'Catatan riset AI/ML untuk deteksi anomali dan threat detection.' },
        { id: 3, title: 'Bug tracking notes', lastOpened: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000), wordCount: 180, aiSummary: 'Daftar bug priority tinggi: auth issues, memory leak, API timeout.' }
    ])

    // Sample unused files
    const [unusedFiles] = useState([
        { id: 1, name: 'backup_old.zip', size: '245 MB', lastAccessed: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), type: 'archive' },
        { id: 2, name: 'temp_export.csv', size: '12 MB', lastAccessed: new Date(Date.now() - 95 * 24 * 60 * 60 * 1000), type: 'data' },
        { id: 3, name: 'old_screenshots/', size: '89 MB', lastAccessed: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000), type: 'folder' }
    ])

    // Selection states
    const [selectedTasks, setSelectedTasks] = useState([])
    const [selectedNotes, setSelectedNotes] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])

    // Calculate days ago
    const getDaysAgo = (date) => {
        const diff = Date.now() - new Date(date).getTime()
        return Math.floor(diff / (1000 * 60 * 60 * 24))
    }

    // Run cleanup scan
    const runScan = useCallback(() => {
        setIsScanning(true)
        setTimeout(() => {
            setIsScanning(false)
            setLastScan(new Date())
            setCleanupData(prev => ({
                ...prev,
                staleTasks: staleTasks,
                inactiveNotes: inactiveNotes,
                unusedFiles: unusedFiles
            }))
        }, 2000)
    }, [staleTasks, inactiveNotes, unusedFiles])

    // Auto scan on mount
    useEffect(() => {
        runScan()
    }, [])

    // Archive selected tasks
    const archiveTasks = () => {
        console.log('Archiving tasks:', selectedTasks)
        setSelectedTasks([])
    }

    // Delete selected files
    const deleteFiles = () => {
        console.log('Deleting files:', selectedFiles)
        setSelectedFiles([])
    }

    // Toggle selection
    const toggleTaskSelection = (id) => {
        setSelectedTasks(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        )
    }

    const toggleFileSelection = (id) => {
        setSelectedFiles(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        )
    }

    // Get cleanup score color
    const getScoreColor = (score) => {
        if (score >= 80) return '#10b981'
        if (score >= 60) return '#f59e0b'
        return '#ef4444'
    }

    return (
        <div className="auto-cleanup-container">
            {/* Header */}
            <div className="cleanup-header">
                <div className="cleanup-title">
                    <div className="title-icon">
                        <CleanupIcon />
                    </div>
                    <div>
                        <h2>🧹 Auto-Cleanup Life System</h2>
                        <p>Sistem otomatis merapikan kekacauan dashboard Anda</p>
                    </div>
                </div>
                <div className="cleanup-actions">
                    <button
                        className={`scan-btn ${isScanning ? 'scanning' : ''}`}
                        onClick={runScan}
                        disabled={isScanning}
                    >
                        {isScanning ? (
                            <><div className="spinner-small"></div> Scanning...</>
                        ) : (
                            <><SparkleIcon /> Scan Sekarang</>
                        )}
                    </button>
                    <button
                        className="settings-btn"
                        onClick={() => setShowSettings(!showSettings)}
                    >
                        ⚙️
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="cleanup-stats-grid">
                <div className="stat-card cleanup-score">
                    <div className="score-circle" style={{ '--score-color': getScoreColor(cleanupData.cleanupScore) }}>
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" className="score-bg" />
                            <circle
                                cx="50" cy="50" r="45"
                                className="score-progress"
                                style={{ strokeDashoffset: 283 - (283 * cleanupData.cleanupScore / 100) }}
                            />
                        </svg>
                        <span className="score-value">{cleanupData.cleanupScore}%</span>
                    </div>
                    <div className="stat-label">Cleanup Score</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon task-icon"><ArchiveIcon /></div>
                    <div className="stat-value">{staleTasks.length}</div>
                    <div className="stat-label">Task Mati</div>
                    <div className="stat-sub">&gt; {settings.taskArchiveDays} hari</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon note-icon"><NoteIcon /></div>
                    <div className="stat-value">{inactiveNotes.length}</div>
                    <div className="stat-label">Catatan Tidak Aktif</div>
                    <div className="stat-sub">&gt; {settings.noteInactiveDays} hari</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon file-icon"><FileIcon /></div>
                    <div className="stat-value">{unusedFiles.length}</div>
                    <div className="stat-label">File Tidak Dipakai</div>
                    <div className="stat-sub">&gt; {settings.fileInactiveDays} hari</div>
                </div>
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div className="cleanup-settings-panel">
                    <h3>⚙️ Pengaturan Auto-Cleanup</h3>
                    <div className="settings-grid">
                        <div className="setting-item">
                            <label>Arsip task setelah</label>
                            <div className="setting-input">
                                <input
                                    type="number"
                                    value={settings.taskArchiveDays}
                                    onChange={(e) => setSettings({ ...settings, taskArchiveDays: parseInt(e.target.value) })}
                                />
                                <span>hari</span>
                            </div>
                        </div>
                        <div className="setting-item">
                            <label>Ringkas catatan setelah</label>
                            <div className="setting-input">
                                <input
                                    type="number"
                                    value={settings.noteInactiveDays}
                                    onChange={(e) => setSettings({ ...settings, noteInactiveDays: parseInt(e.target.value) })}
                                />
                                <span>hari</span>
                            </div>
                        </div>
                        <div className="setting-item">
                            <label>Rekomendasikan hapus file setelah</label>
                            <div className="setting-input">
                                <input
                                    type="number"
                                    value={settings.fileInactiveDays}
                                    onChange={(e) => setSettings({ ...settings, fileInactiveDays: parseInt(e.target.value) })}
                                />
                                <span>hari</span>
                            </div>
                        </div>
                        <div className="setting-item toggle">
                            <label>Auto-archive task mati</label>
                            <button
                                className={`toggle-btn ${settings.autoArchive ? 'active' : ''}`}
                                onClick={() => setSettings({ ...settings, autoArchive: !settings.autoArchive })}
                            >
                                <div className="toggle-slider"></div>
                            </button>
                        </div>
                        <div className="setting-item toggle">
                            <label>AI Summary untuk catatan</label>
                            <button
                                className={`toggle-btn ${settings.aiSummary ? 'active' : ''}`}
                                onClick={() => setSettings({ ...settings, aiSummary: !settings.aiSummary })}
                            >
                                <div className="toggle-slider"></div>
                            </button>
                        </div>
                        <div className="setting-item toggle">
                            <label>Notifikasi cleanup</label>
                            <button
                                className={`toggle-btn ${settings.notifications ? 'active' : ''}`}
                                onClick={() => setSettings({ ...settings, notifications: !settings.notifications })}
                            >
                                <div className="toggle-slider"></div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cleanup Sections */}
            <div className="cleanup-sections">
                {/* Stale Tasks Section */}
                <div className="cleanup-section">
                    <div className="section-header">
                        <div className="section-title">
                            <ArchiveIcon />
                            <h3>📦 Task Mati - Perlu Diarsip</h3>
                            <span className="badge">{staleTasks.length}</span>
                        </div>
                        {selectedTasks.length > 0 && (
                            <button className="action-btn archive" onClick={archiveTasks}>
                                <ArchiveIcon /> Arsipkan ({selectedTasks.length})
                            </button>
                        )}
                    </div>
                    <div className="cleanup-list">
                        {staleTasks.map(task => (
                            <div
                                key={task.id}
                                className={`cleanup-item ${selectedTasks.includes(task.id) ? 'selected' : ''}`}
                                onClick={() => toggleTaskSelection(task.id)}
                            >
                                <div className="item-checkbox">
                                    {selectedTasks.includes(task.id) && <CheckIcon />}
                                </div>
                                <div className="item-content">
                                    <div className="item-title">{task.title}</div>
                                    <div className="item-meta">
                                        <span className={`status ${task.status}`}>{task.status}</span>
                                        <span className="priority">{task.priority}</span>
                                    </div>
                                </div>
                                <div className="item-age">
                                    <AlertIcon />
                                    <span>{getDaysAgo(task.lastModified)} hari lalu</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inactive Notes Section */}
                <div className="cleanup-section">
                    <div className="section-header">
                        <div className="section-title">
                            <NoteIcon />
                            <h3>📝 Catatan Tidak Aktif - AI Summary</h3>
                            <span className="badge">{inactiveNotes.length}</span>
                        </div>
                    </div>
                    <div className="cleanup-list notes-list">
                        {inactiveNotes.map(note => (
                            <div key={note.id} className="cleanup-item note-item">
                                <div className="note-header">
                                    <div className="item-title">{note.title}</div>
                                    <div className="item-age">
                                        <span>{getDaysAgo(note.lastOpened)} hari tidak dibuka</span>
                                    </div>
                                </div>
                                <div className="ai-summary">
                                    <div className="ai-badge">
                                        <SparkleIcon /> AI Summary
                                    </div>
                                    <p>{note.aiSummary}</p>
                                </div>
                                <div className="note-actions">
                                    <button className="btn-small">Buka</button>
                                    <button className="btn-small secondary">Arsipkan</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Unused Files Section */}
                <div className="cleanup-section">
                    <div className="section-header">
                        <div className="section-title">
                            <FileIcon />
                            <h3>🗂️ File Tidak Dipakai - Rekomendasi Hapus</h3>
                            <span className="badge">{unusedFiles.length}</span>
                        </div>
                        {selectedFiles.length > 0 && (
                            <button className="action-btn delete" onClick={deleteFiles}>
                                <CleanupIcon /> Hapus ({selectedFiles.length})
                            </button>
                        )}
                    </div>
                    <div className="cleanup-list">
                        {unusedFiles.map(file => (
                            <div
                                key={file.id}
                                className={`cleanup-item ${selectedFiles.includes(file.id) ? 'selected' : ''}`}
                                onClick={() => toggleFileSelection(file.id)}
                            >
                                <div className="item-checkbox">
                                    {selectedFiles.includes(file.id) && <CheckIcon />}
                                </div>
                                <div className="item-content">
                                    <div className="item-title">{file.name}</div>
                                    <div className="item-meta">
                                        <span className="file-size">{file.size}</span>
                                        <span className="file-type">{file.type}</span>
                                    </div>
                                </div>
                                <div className="item-age warning">
                                    <AlertIcon />
                                    <span>{getDaysAgo(file.lastAccessed)} hari tidak diakses</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-footer">
                        <div className="space-saved">
                            💾 Potensi ruang dihemat: <strong>346 MB</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Last Scan Info */}
            {lastScan && (
                <div className="last-scan-info">
                    ✅ Terakhir scan: {lastScan.toLocaleString('id-ID')}
                </div>
            )}

            <style>{`
                .auto-cleanup-container {
                    padding: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .cleanup-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .cleanup-title {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .title-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .cleanup-title h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .cleanup-title p {
                    margin: 0.25rem 0 0;
                    color: rgba(255,255,255,0.6);
                    font-size: 0.875rem;
                }

                .cleanup-actions {
                    display: flex;
                    gap: 0.75rem;
                }

                .scan-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.25rem;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .scan-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
                }

                .scan-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .scan-btn.scanning {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                }

                .spinner-small {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .settings-btn {
                    width: 44px;
                    height: 44px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    font-size: 1.25rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .settings-btn:hover {
                    background: rgba(255,255,255,0.1);
                    transform: rotate(90deg);
                }

                /* Stats Grid */
                .cleanup-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .stat-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    padding: 1.5rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .stat-card:hover {
                    background: rgba(255,255,255,0.05);
                    transform: translateY(-3px);
                }

                .stat-card.cleanup-score {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .score-circle {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 1rem;
                }

                .score-circle svg {
                    transform: rotate(-90deg);
                    width: 100%;
                    height: 100%;
                }

                .score-bg {
                    fill: none;
                    stroke: rgba(255,255,255,0.1);
                    stroke-width: 8;
                }

                .score-progress {
                    fill: none;
                    stroke: var(--score-color);
                    stroke-width: 8;
                    stroke-linecap: round;
                    stroke-dasharray: 283;
                    transition: stroke-dashoffset 1s ease;
                }

                .score-value {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .stat-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }

                .stat-icon.task-icon { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
                .stat-icon.note-icon { background: rgba(99, 102, 241, 0.2); color: #6366f1; }
                .stat-icon.file-icon { background: rgba(239, 68, 68, 0.2); color: #ef4444; }

                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #fff;
                }

                .stat-label {
                    color: rgba(255,255,255,0.7);
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }

                .stat-sub {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.75rem;
                    margin-top: 0.25rem;
                }

                /* Settings Panel */
                .cleanup-settings-panel {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 16px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                }

                .cleanup-settings-panel h3 {
                    margin: 0 0 1.5rem;
                    color: #fff;
                    font-size: 1.125rem;
                }

                .settings-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1rem;
                }

                .setting-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: rgba(0,0,0,0.2);
                    border-radius: 10px;
                }

                .setting-item label {
                    color: rgba(255,255,255,0.8);
                    font-size: 0.875rem;
                }

                .setting-input {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .setting-input input {
                    width: 60px;
                    padding: 0.5rem;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 6px;
                    color: #fff;
                    text-align: center;
                    font-size: 0.875rem;
                }

                .setting-input span {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.875rem;
                }

                .toggle-btn {
                    width: 50px;
                    height: 26px;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    border-radius: 13px;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.3s ease;
                }

                .toggle-btn.active {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                }

                .toggle-slider {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: white;
                    border-radius: 50%;
                    top: 3px;
                    left: 3px;
                    transition: all 0.3s ease;
                }

                .toggle-btn.active .toggle-slider {
                    left: 27px;
                }

                /* Sections */
                .cleanup-sections {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .cleanup-section {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    background: rgba(255,255,255,0.02);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }

                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .section-title h3 {
                    margin: 0;
                    font-size: 1rem;
                    color: #fff;
                }

                .badge {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                    padding: 0.25rem 0.6rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn.archive {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: white;
                }

                .action-btn.delete {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                }

                .action-btn:hover {
                    transform: translateY(-2px);
                }

                .cleanup-list {
                    padding: 0.5rem;
                }

                .cleanup-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 1px solid transparent;
                }

                .cleanup-item:hover {
                    background: rgba(255,255,255,0.03);
                }

                .cleanup-item.selected {
                    background: rgba(99, 102, 241, 0.1);
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .item-checkbox {
                    width: 22px;
                    height: 22px;
                    border: 2px solid rgba(255,255,255,0.2);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }

                .cleanup-item.selected .item-checkbox {
                    background: #6366f1;
                    border-color: #6366f1;
                    color: white;
                }

                .item-content {
                    flex: 1;
                }

                .item-title {
                    color: #fff;
                    font-weight: 500;
                    margin-bottom: 0.25rem;
                }

                .item-meta {
                    display: flex;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                }

                .item-meta span {
                    padding: 0.15rem 0.5rem;
                    border-radius: 4px;
                    background: rgba(255,255,255,0.05);
                    color: rgba(255,255,255,0.6);
                }

                .status.abandoned { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
                .status.stale { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }

                .item-age {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: rgba(255,255,255,0.5);
                    font-size: 0.8rem;
                }

                .item-age.warning {
                    color: #f59e0b;
                }

                /* Note Items */
                .note-item {
                    flex-direction: column;
                    align-items: stretch;
                    cursor: default;
                }

                .note-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.75rem;
                }

                .ai-summary {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 10px;
                    padding: 1rem;
                    margin-bottom: 0.75rem;
                }

                .ai-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: white;
                    padding: 0.25rem 0.6rem;
                    border-radius: 6px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                .ai-summary p {
                    margin: 0;
                    color: rgba(255,255,255,0.8);
                    font-size: 0.875rem;
                    line-height: 1.5;
                }

                .note-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .btn-small {
                    padding: 0.4rem 0.8rem;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 6px;
                    color: rgba(255,255,255,0.8);
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-small:hover {
                    background: rgba(255,255,255,0.1);
                }

                .btn-small.secondary {
                    color: #6366f1;
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .section-footer {
                    padding: 1rem 1.5rem;
                    background: rgba(16, 185, 129, 0.1);
                    border-top: 1px solid rgba(16, 185, 129, 0.2);
                }

                .space-saved {
                    color: #10b981;
                    font-size: 0.9rem;
                }

                .last-scan-info {
                    text-align: center;
                    padding: 1rem;
                    color: rgba(255,255,255,0.5);
                    font-size: 0.85rem;
                    margin-top: 1.5rem;
                }

                @media (max-width: 768px) {
                    .cleanup-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .cleanup-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .settings-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    )
}

export default AutoCleanup
