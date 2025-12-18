import { useState, useEffect, useCallback } from 'react'

// Icons
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
)

const FlameIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
)

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
)

const ZenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
)

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

function SilentAchievement() {
    // Achievement notification state
    const [showNotification, setShowNotification] = useState(false)
    const [currentNotification, setCurrentNotification] = useState(null)
    const [notificationQueue, setNotificationQueue] = useState([])

    // Achievements data
    const [achievements, setAchievements] = useState([
        {
            id: 1,
            category: 'consistency',
            title: '30 Hari Konsisten',
            description: 'Tanpa disadari, Anda sudah konsisten selama 30 hari',
            progress: 87,
            target: 30,
            current: 26,
            unit: 'hari',
            icon: FlameIcon,
            color: '#f59e0b',
            unlocked: false,
            unlockedAt: null,
            silent: true
        },
        {
            id: 2,
            category: 'focus',
            title: 'Fokus Meningkat 17%',
            description: 'Waktu fokus Anda meningkat signifikan minggu ini',
            progress: 100,
            target: 17,
            current: 17,
            unit: '%',
            icon: TargetIcon,
            color: '#6366f1',
            unlocked: true,
            unlockedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            silent: true
        },
        {
            id: 3,
            category: 'wellness',
            title: 'Digital Detox',
            description: 'Tidak membuka sosmed saat jam kerja (09:00-17:00)',
            progress: 60,
            target: 5,
            current: 3,
            unit: 'hari',
            icon: ZenIcon,
            color: '#10b981',
            unlocked: false,
            unlockedAt: null,
            silent: true
        },
        {
            id: 4,
            category: 'stealth',
            title: 'Mode Tersembunyi',
            description: '7 hari tanpa doom scrolling',
            progress: 43,
            target: 7,
            current: 3,
            unit: 'hari',
            icon: MoonIcon,
            color: '#8b5cf6',
            unlocked: false,
            unlockedAt: null,
            silent: true
        },
        {
            id: 5,
            category: 'productivity',
            title: 'Mesin Produktif',
            description: 'Menyelesaikan 50 task dalam sebulan',
            progress: 100,
            target: 50,
            current: 50,
            unit: 'task',
            icon: TrophyIcon,
            color: '#ec4899',
            unlocked: true,
            unlockedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
            silent: true
        },
        {
            id: 6,
            category: 'consistency',
            title: 'Early Bird',
            description: 'Login sebelum jam 7 pagi selama seminggu',
            progress: 100,
            target: 7,
            current: 7,
            unit: 'hari',
            icon: FlameIcon,
            color: '#f59e0b',
            unlocked: true,
            unlockedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
            silent: true
        }
    ])

    // Stats
    const stats = {
        totalAchievements: achievements.length,
        unlocked: achievements.filter(a => a.unlocked).length,
        inProgress: achievements.filter(a => !a.unlocked && a.progress > 0).length,
        streak: 26
    }

    // Category labels
    const categoryLabels = {
        consistency: { label: 'Konsistensi', emoji: '🔥' },
        focus: { label: 'Fokus', emoji: '🎯' },
        wellness: { label: 'Wellness', emoji: '🧘' },
        stealth: { label: 'Stealth', emoji: '🌙' },
        productivity: { label: 'Produktivitas', emoji: '💪' }
    }

    // Format date
    const formatDate = (date) => {
        if (!date) return ''
        const d = new Date(date)
        return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    }

    // Show subtle notification
    const showAchievementNotification = useCallback((achievement) => {
        setCurrentNotification(achievement)
        setShowNotification(true)

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            setShowNotification(false)
            setCurrentNotification(null)
        }, 5000)
    }, [])

    // Dismiss notification
    const dismissNotification = () => {
        setShowNotification(false)
        setCurrentNotification(null)
    }

    // Demo: trigger a notification after component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            const unlockedAchievement = achievements.find(a => a.unlocked && a.id === 2)
            if (unlockedAchievement) {
                showAchievementNotification(unlockedAchievement)
            }
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="silent-achievement-container">
            {/* Subtle Notification Toast */}
            {showNotification && currentNotification && (
                <div className="achievement-toast">
                    <div className="toast-icon" style={{ background: `${currentNotification.color}20`, color: currentNotification.color }}>
                        <currentNotification.icon />
                    </div>
                    <div className="toast-content">
                        <span className="toast-label">Pencapaian Tercapai</span>
                        <span className="toast-title">{currentNotification.title}</span>
                    </div>
                    <button className="toast-dismiss" onClick={dismissNotification}>
                        <CloseIcon />
                    </button>
                    <div className="toast-progress" style={{ background: currentNotification.color }}></div>
                </div>
            )}

            {/* Header */}
            <div className="achievement-header">
                <div className="header-title">
                    <div className="title-icon">
                        <TrophyIcon />
                    </div>
                    <div>
                        <h2>🏆 Pencapaian Diam-Diam</h2>
                        <p>Tanpa fanfare berlebihan. Prestasi nyata, diakui dengan tenang.</p>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="achievement-stats">
                <div className="stat-item">
                    <span className="stat-value">{stats.unlocked}</span>
                    <span className="stat-label">Tercapai</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value">{stats.inProgress}</span>
                    <span className="stat-label">Dalam Proses</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value">{stats.streak}</span>
                    <span className="stat-label">Hari Streak</span>
                </div>
            </div>

            {/* Achievement Categories */}
            <div className="achievement-sections">
                {/* In Progress */}
                <div className="achievement-section">
                    <h3>⏳ Sedang Berjalan</h3>
                    <div className="achievement-grid">
                        {achievements.filter(a => !a.unlocked).map(achievement => (
                            <div key={achievement.id} className="achievement-card in-progress">
                                <div className="card-header">
                                    <div className="card-icon" style={{ background: `${achievement.color}15`, color: achievement.color }}>
                                        <achievement.icon />
                                    </div>
                                    <div className="card-category">
                                        {categoryLabels[achievement.category]?.emoji} {categoryLabels[achievement.category]?.label}
                                    </div>
                                </div>
                                <h4>{achievement.title}</h4>
                                <p>{achievement.description}</p>
                                <div className="progress-section">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${achievement.progress}%`,
                                                background: `linear-gradient(90deg, ${achievement.color}, ${achievement.color}aa)`
                                            }}
                                        ></div>
                                    </div>
                                    <div className="progress-text">
                                        <span>{achievement.current} / {achievement.target} {achievement.unit}</span>
                                        <span>{achievement.progress}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Unlocked */}
                <div className="achievement-section">
                    <h3>✨ Tercapai</h3>
                    <div className="achievement-grid">
                        {achievements.filter(a => a.unlocked).map(achievement => (
                            <div key={achievement.id} className="achievement-card unlocked">
                                <div className="card-header">
                                    <div className="card-icon unlocked" style={{ background: `${achievement.color}20`, color: achievement.color }}>
                                        <achievement.icon />
                                    </div>
                                    <div className="card-badge">
                                        <CheckIcon /> Tercapai
                                    </div>
                                </div>
                                <h4>{achievement.title}</h4>
                                <p>{achievement.description}</p>
                                <div className="unlocked-date">
                                    Tercapai {formatDate(achievement.unlockedAt)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Philosophy Note */}
            <div className="philosophy-note">
                <span className="note-icon">💭</span>
                <p>
                    Pencapaian terbaik adalah yang tidak perlu dipamerkan.
                    Sistem ini bekerja di background — hanya muncul saat ada sesuatu yang benar-benar bermakna.
                </p>
            </div>

            <style>{`
                .silent-achievement-container {
                    padding: 1.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                }

                /* Toast Notification - Subtle & Minimal */
                .achievement-toast {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    background: rgba(20, 25, 35, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px;
                    padding: 1rem 1.25rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    z-index: 1000;
                    animation: toastSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    overflow: hidden;
                }

                @keyframes toastSlideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .toast-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .toast-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.15rem;
                }

                .toast-label {
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.5);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .toast-title {
                    font-size: 0.9rem;
                    color: #fff;
                    font-weight: 600;
                }

                .toast-dismiss {
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.4);
                    cursor: pointer;
                    padding: 0.25rem;
                    transition: color 0.2s;
                }

                .toast-dismiss:hover {
                    color: rgba(255,255,255,0.8);
                }

                .toast-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 2px;
                    animation: toastProgress 5s linear forwards;
                }

                @keyframes toastProgress {
                    from { width: 100%; }
                    to { width: 0%; }
                }

                /* Header */
                .achievement-header {
                    margin-bottom: 2rem;
                }

                .header-title {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .title-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #8b5cf6;
                }

                .achievement-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .achievement-header p {
                    margin: 0.25rem 0 0;
                    color: rgba(255,255,255,0.5);
                    font-size: 0.875rem;
                }

                /* Stats */
                .achievement-stats {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    padding: 1.5rem;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 16px;
                    margin-bottom: 2rem;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-value {
                    display: block;
                    font-size: 2rem;
                    font-weight: 700;
                    color: #fff;
                    line-height: 1;
                }

                .stat-label {
                    display: block;
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.5);
                    margin-top: 0.25rem;
                }

                .stat-divider {
                    width: 1px;
                    height: 40px;
                    background: rgba(255,255,255,0.1);
                }

                /* Sections */
                .achievement-sections {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .achievement-section h3 {
                    font-size: 1rem;
                    color: rgba(255,255,255,0.7);
                    margin: 0 0 1rem;
                    font-weight: 500;
                }

                .achievement-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1rem;
                }

                /* Cards */
                .achievement-card {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 14px;
                    padding: 1.25rem;
                    transition: all 0.3s ease;
                }

                .achievement-card:hover {
                    background: rgba(255,255,255,0.04);
                    transform: translateY(-2px);
                }

                .achievement-card.unlocked {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02));
                    border-color: rgba(16, 185, 129, 0.15);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }

                .card-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-category {
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.4);
                    padding: 0.25rem 0.5rem;
                    background: rgba(255,255,255,0.05);
                    border-radius: 6px;
                }

                .card-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    font-size: 0.7rem;
                    color: #10b981;
                    padding: 0.25rem 0.5rem;
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 6px;
                }

                .achievement-card h4 {
                    margin: 0 0 0.5rem;
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 600;
                }

                .achievement-card p {
                    margin: 0;
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.5;
                }

                /* Progress */
                .progress-section {
                    margin-top: 1rem;
                }

                .progress-bar {
                    height: 6px;
                    background: rgba(255,255,255,0.08);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    border-radius: 3px;
                    transition: width 0.5s ease;
                }

                .progress-text {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 0.5rem;
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.4);
                }

                .unlocked-date {
                    margin-top: 1rem;
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.4);
                }

                /* Philosophy Note */
                .philosophy-note {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-top: 2rem;
                    padding: 1.25rem;
                    background: rgba(139, 92, 246, 0.05);
                    border: 1px solid rgba(139, 92, 246, 0.1);
                    border-radius: 12px;
                }

                .note-icon {
                    font-size: 1.5rem;
                }

                .philosophy-note p {
                    margin: 0;
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.6);
                    line-height: 1.6;
                    font-style: italic;
                }

                @media (max-width: 768px) {
                    .achievement-stats {
                        gap: 1rem;
                        flex-wrap: wrap;
                    }

                    .stat-divider {
                        display: none;
                    }

                    .achievement-grid {
                        grid-template-columns: 1fr;
                    }

                    .achievement-toast {
                        left: 1rem;
                        right: 1rem;
                        bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default SilentAchievement
