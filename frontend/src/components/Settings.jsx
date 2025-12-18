import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'

// --- ICONS ---
const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
const ShieldIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
const ThemeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
const GlobeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
const BellIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
const SlidersIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
const GamepadIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>
const DatabaseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
const LockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
const LinkIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
const CpuIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
const HelpIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
const MessageIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
const InfoIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
const SaveIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
const CameraIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>

function Settings() {
    const { user } = useAuth()
    const [activeTab, setActiveTab] = useState('account')
    const [saved, setSaved] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const fileInputRef = useRef(null)

    // Initial State - Expanded for 14 Categories
    const [settings, setSettings] = useState({
        // 1. Account
        name: user?.name || '',
        username: user?.email?.split('@')[0] || '',
        email: user?.email || '',
        password: '',
        twoFactor: false,

        // 2. Security
        sessionTimeout: 30, // minutes
        loginNotifications: true,
        allowMultiDevice: true,

        // 3. Theme
        themeMode: 'dark', // dark, light, system
        accentColor: 'cyan', // cyan, purple, green, orange, pink, blue, red, yellow
        cardStyle: 'rounded', // rounded, sharp, glass
        enableAnimations: true,
        compactMode: false,
        fontSize: 'medium', // small, medium, large

        // 4. Language
        language: 'id', // id, en
        dateFormat: 'DD/MM/YYYY',
        timeZone: 'Asia/Jakarta',

        // 5. Notifications
        emailNotif: true,
        pushNotif: true,
        soundEffects: true,
        promoEmails: false,

        // 6. Preferences
        startPage: 'overview',
        autoRefresh: true,
        keyboardShortcuts: true,

        // 7. Games
        gameDifficulty: 'normal', // easy, normal, hard
        showHints: true,
        gameSound: true,

        // 8. Data
        autoBackup: true,
        dataRetention: '30days',

        // 9. Privacy
        publicProfile: false,
        showOnlineStatus: true,
        allowTracking: false,

        // 10. Integrations
        apiKeyOpenAI: '',
        githubToken: '',

        // 11. System
        debugMode: false,
        betaFeatures: false,

        // 13. Feedback
        rating: 0,
        feedbackText: ''
    })

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }))
    }

    const handleSave = () => {
        localStorage.setItem('enhanced_settings', JSON.stringify(settings))
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    useEffect(() => {
        const savedSettings = localStorage.getItem('enhanced_settings')
        if (savedSettings) {
            setSettings(prev => ({ ...prev, ...JSON.parse(savedSettings) }))
        }
    }, [])

    const categories = [
        { id: 'account', label: 'Akun', icon: UserIcon, desc: 'Profil & Identitas' },
        { id: 'security', label: 'Keamanan', icon: ShieldIcon, desc: 'Password & Sesi' },
        { id: 'theme', label: 'Tema & Tampilan', icon: ThemeIcon, desc: 'Warna & Layout' },
        { id: 'language', label: 'Bahasa', icon: GlobeIcon, desc: 'Lokalisasi & Waktu' },
        { id: 'notifications', label: 'Notifikasi', icon: BellIcon, desc: 'Email & Push' },
        { id: 'preferences', label: 'Preferensi', icon: SlidersIcon, desc: 'Pengaturan Dasar' },
        { id: 'games', label: 'Mini Games', icon: GamepadIcon, desc: 'Config Game' },
        { id: 'data', label: 'Data', icon: DatabaseIcon, desc: 'Backup & Storage' },
        { id: 'privacy', label: 'Privasi', icon: LockIcon, desc: 'Visibilitas' },
        { id: 'integrations', label: 'Integrasi', icon: LinkIcon, desc: 'API & 3rd Party' },
        { id: 'system', label: 'Sistem', icon: CpuIcon, desc: 'Info & Debug' },
        { id: 'help', label: 'Bantuan', icon: HelpIcon, desc: 'FAQ & Support' },
        { id: 'feedback', label: 'Feedback', icon: MessageIcon, desc: 'Kritik & Saran' },
        { id: 'credits', label: 'Credits', icon: InfoIcon, desc: 'Tentang Aplikasi' },
    ]

    const filteredCategories = categories.filter(cat =>
        cat.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="settings-container">
            {/* Sidebar Navigation */}
            <div className="settings-sidebar">
                <div className="settings-search">
                    <input
                        type="text"
                        placeholder="Cari pengaturan..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="settings-nav-list">
                    {filteredCategories.map(cat => (
                        <button
                            key={cat.id}
                            className={`nav-btn ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <div className="nav-icon"><cat.icon /></div>
                            <div className="nav-text">
                                <span className="nav-label">{cat.label}</span>
                                <span className="nav-desc">{cat.desc}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="settings-content-area">
                <div className="content-header">
                    <div className="header-title">
                        <h2>{categories.find(t => t.id === activeTab)?.label}</h2>
                        <p>{categories.find(t => t.id === activeTab)?.desc}</p>
                    </div>
                    <button className={`btn-save ${saved ? 'saved' : ''}`} onClick={handleSave}>
                        {saved ? <><CheckIcon /> Tersimpan</> : <><SaveIcon /> Simpan Perubahan</>}
                    </button>
                </div>

                <div className="content-body animate-fade">
                    {/* 1. Account Settings */}
                    {activeTab === 'account' && (
                        <div className="settings-grid">
                            <div className="section-card profile-card">
                                <h3>Profil Pengguna</h3>
                                <div className="profile-edit">
                                    <div className="avatar-wrapper">
                                        <div className="avatar-placeholder">{settings.name.charAt(0)}</div>
                                        <button className="btn-camera" onClick={() => fileInputRef.current?.click()}>
                                            <CameraIcon />
                                        </button>
                                        <input type="file" ref={fileInputRef} hidden />
                                    </div>
                                    <div className="profile-inputs">
                                        <div className="form-group">
                                            <label>Nama Lengkap</label>
                                            <input type="text" value={settings.name} onChange={e => updateSetting('name', e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" value={settings.username} onChange={e => updateSetting('username', e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-card">
                                <h3>Info Kontak</h3>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={settings.email} onChange={e => updateSetting('email', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2. Security Settings */}
                    {activeTab === 'security' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Password & Autentikasi</h3>
                                <div className="form-group">
                                    <label>Ganti Password</label>
                                    <input type="password" placeholder="Password Baru" onChange={e => updateSetting('password', e.target.value)} />
                                </div>
                                <div className="setting-toggle">
                                    <div>
                                        <h4>Two-Factor Authentication (2FA)</h4>
                                        <p>Verifikasi tambahan via aplikasi authenticator</p>
                                    </div>
                                    <Toggle checked={settings.twoFactor} onChange={v => updateSetting('twoFactor', v)} />
                                </div>
                            </div>
                            <div className="section-card">
                                <h3>Sesi Login</h3>
                                <div className="form-group">
                                    <label>Session Timeout (Menit)</label>
                                    <input type="number" value={settings.sessionTimeout} onChange={e => updateSetting('sessionTimeout', e.target.value)} />
                                </div>
                                <div className="setting-toggle">
                                    <div>
                                        <h4>Login Notifications</h4>
                                        <p>Terima email saat ada login dari perangkat baru</p>
                                    </div>
                                    <Toggle checked={settings.loginNotifications} onChange={v => updateSetting('loginNotifications', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 3. Theme Settings */}
                    {activeTab === 'theme' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Mode Tampilan</h3>
                                <div className="theme-options">
                                    {['dark', 'light', 'system'].map(t => (
                                        <button
                                            key={t}
                                            className={`theme-btn-opt ${settings.themeMode === t ? 'active' : ''}`}
                                            onClick={() => updateSetting('themeMode', t)}
                                        >
                                            {t === 'dark' ? '🌙 Dark' : t === 'light' ? '☀️ Light' : '💻 System'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="section-card">
                                <h3>Warna Aksen</h3>
                                <div className="color-options">
                                    {[
                                        { id: 'cyan', color: '#22d3ee' },
                                        { id: 'purple', color: '#a78bfa' },
                                        { id: 'green', color: '#10b981' },
                                        { id: 'orange', color: '#f97316' },
                                        { id: 'pink', color: '#f472b6' },
                                        { id: 'blue', color: '#3b82f6' },
                                        { id: 'red', color: '#ef4444' },
                                        { id: 'yellow', color: '#eab308' },
                                    ].map(c => (
                                        <button
                                            key={c.id}
                                            className={`color-btn ${settings.accentColor === c.id ? 'active' : ''}`}
                                            style={{ backgroundColor: c.color }}
                                            onClick={() => updateSetting('accentColor', c.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="section-card">
                                <h3>Interface</h3>
                                <div className="form-group">
                                    <label>Gaya Kartu</label>
                                    <select value={settings.cardStyle} onChange={e => updateSetting('cardStyle', e.target.value)}>
                                        <option value="rounded">Rounded (Melengkung)</option>
                                        <option value="sharp">Sharp (Tajam)</option>
                                        <option value="glass">Glassmorphism</option>
                                    </select>
                                </div>
                                <div className="setting-toggle">
                                    <div>
                                        <h4>Enable Animations</h4>
                                        <p>Efek transisi halus antar halaman</p>
                                    </div>
                                    <Toggle checked={settings.enableAnimations} onChange={v => updateSetting('enableAnimations', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 4. Language Settings */}
                    {activeTab === 'language' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Lokalisasi</h3>
                                <div className="form-group">
                                    <label>Bahasa Aplikasi</label>
                                    <select value={settings.language} onChange={e => updateSetting('language', e.target.value)}>
                                        <option value="id">Bahasa Indonesia</option>
                                        <option value="en">English (US)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Zona Waktu</label>
                                    <select value={settings.timeZone} onChange={e => updateSetting('timeZone', e.target.value)}>
                                        <option value="Asia/Jakarta">WIB (Jakarta)</option>
                                        <option value="Asia/Makassar">WITA (Makassar)</option>
                                        <option value="Asia/Jayapura">WIT (Jayapura)</option>
                                        <option value="UTC">UTC</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 5. Notifications */}
                    {activeTab === 'notifications' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Channel Notifikasi</h3>
                                <div className="setting-toggle">
                                    <div><h4>Email Notifications</h4><p>Update penting via email</p></div>
                                    <Toggle checked={settings.emailNotif} onChange={v => updateSetting('emailNotif', v)} />
                                </div>
                                <div className="setting-toggle">
                                    <div><h4>Push Notifications</h4><p>Notifikasi browser</p></div>
                                    <Toggle checked={settings.pushNotif} onChange={v => updateSetting('pushNotif', v)} />
                                </div>
                                <div className="setting-toggle">
                                    <div><h4>Sound Effects</h4><p>Suara saat notifikasi masuk</p></div>
                                    <Toggle checked={settings.soundEffects} onChange={v => updateSetting('soundEffects', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 6. Preferences */}
                    {activeTab === 'preferences' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>General Preferences</h3>
                                <div className="form-group">
                                    <label>Halaman Awal</label>
                                    <select value={settings.startPage} onChange={e => updateSetting('startPage', e.target.value)}>
                                        <option value="overview">Dashboard Overview</option>
                                        <option value="terminal">Hacker Terminal</option>
                                        <option value="games">Games</option>
                                    </select>
                                </div>
                                <div className="setting-toggle">
                                    <div><h4>Auto Refresh Data</h4><p>Perbarui data dashboard otomatis</p></div>
                                    <Toggle checked={settings.autoRefresh} onChange={v => updateSetting('autoRefresh', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 7. Games */}
                    {activeTab === 'games' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Konfigurasi Game</h3>
                                <div className="form-group">
                                    <label>Tingkat Kesulitan AI</label>
                                    <select value={settings.gameDifficulty} onChange={e => updateSetting('gameDifficulty', e.target.value)}>
                                        <option value="easy">Easy (Pemula)</option>
                                        <option value="normal">Normal (Menengah)</option>
                                        <option value="hard">Hard (Ahli)</option>
                                        <option value="impossible">Impossible (Hacker Mode)</option>
                                    </select>
                                </div>
                                <div className="setting-toggle">
                                    <div><h4>Show Hints</h4><p>Tampilkan bantuan langkah terbaik</p></div>
                                    <Toggle checked={settings.showHints} onChange={v => updateSetting('showHints', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 8. Data */}
                    {activeTab === 'data' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Manajemen Data</h3>
                                <div className="setting-toggle">
                                    <div><h4>Auto Backup</h4><p>Backup data harian otomatis</p></div>
                                    <Toggle checked={settings.autoBackup} onChange={v => updateSetting('autoBackup', v)} />
                                </div>
                                <div className="btn-group">
                                    <button className="btn-secondary">Export Data (JSON)</button>
                                    <button className="btn-secondary danger">Clear Cache</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 9. Privacy */}
                    {activeTab === 'privacy' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Privasi Akun</h3>
                                <div className="setting-toggle">
                                    <div><h4>Public Profile</h4><p>Izinkan orang lain melihat profil</p></div>
                                    <Toggle checked={settings.publicProfile} onChange={v => updateSetting('publicProfile', v)} />
                                </div>
                                <div className="setting-toggle">
                                    <div><h4>Show Online Status</h4><p>Tampilkan indikator online</p></div>
                                    <Toggle checked={settings.showOnlineStatus} onChange={v => updateSetting('showOnlineStatus', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 10. Integrations */}
                    {activeTab === 'integrations' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>API Keys</h3>
                                <div className="form-group">
                                    <label>OpenAI API Key</label>
                                    <input type="password" value={settings.apiKeyOpenAI} onChange={e => updateSetting('apiKeyOpenAI', e.target.value)} placeholder="sk-..." />
                                </div>
                                <div className="form-group">
                                    <label>GitHub Token</label>
                                    <input type="password" value={settings.githubToken} onChange={e => updateSetting('githubToken', e.target.value)} placeholder="ghp_..." />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 11. System */}
                    {activeTab === 'system' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>System Info</h3>
                                <div className="info-row"><span>App Version</span> <span>v2.5.0</span></div>
                                <div className="info-row"><span>Build</span> <span>Production</span></div>
                                <div className="info-row"><span>React Version</span> <span>18.2.0</span></div>
                                <div className="divider"></div>
                                <div className="setting-toggle">
                                    <div><h4>Debug Mode</h4><p>Tampilkan log detail di console</p></div>
                                    <Toggle checked={settings.debugMode} onChange={v => updateSetting('debugMode', v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 12. Help */}
                    {activeTab === 'help' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Pusat Bantuan</h3>
                                <div className="help-links">
                                    <a href="#" className="help-link">📘 Dokumentasi Pengguna</a>
                                    <a href="#" className="help-link">🎥 Video Tutorial</a>
                                    <a href="#" className="help-link">💬 Hubungi Support</a>
                                    <a href="#" className="help-link">🐛 Laporkan Bug</a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 13. Feedback */}
                    {activeTab === 'feedback' && (
                        <div className="settings-grid">
                            <div className="section-card">
                                <h3>Kirim Masukan</h3>
                                <div className="form-group">
                                    <label>Bagaimana pengalaman Anda?</label>
                                    <div className="rating-stars">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <span
                                                key={star}
                                                className={`star ${settings.rating >= star ? 'filled' : ''}`}
                                                onClick={() => updateSetting('rating', star)}
                                            >★</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Saran & Kritik</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tuliskan masukan Anda disini..."
                                        value={settings.feedbackText}
                                        onChange={e => updateSetting('feedbackText', e.target.value)}
                                    ></textarea>
                                </div>
                                <button className="btn-secondary">Kirim Feedback</button>
                            </div>
                        </div>
                    )}

                    {/* 14. Credits */}
                    {activeTab === 'credits' && (
                        <div className="credits-view">
                            <div className="credits-header">
                                <h1>Lutfi-Lab.ID</h1>
                                <p>Cybersecurity & Learning Platform</p>
                            </div>
                            <div className="credits-content">
                                <div className="credit-role">Created by</div>
                                <div className="credit-name">Muhammad Lutfi Muzaki</div>
                                <div className="credit-role">Version</div>
                                <div className="credit-version">2.5.0 (2025)</div>
                                <div className="tech-stack">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>NestJS</span>
                                    <span>MongoDB</span>
                                </div>
                                <div className="copyright">
                                    © 2025 Lutfi-Lab.ID. All rights reserved.
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>{styles}</style>
        </div>
    )
}

function Toggle({ checked, onChange }) {
    return (
        <div
            className={`toggle-switch ${checked ? 'checked' : ''}`}
            onClick={() => onChange(!checked)}
        >
            <div className="toggle-thumb" />
        </div>
    )
}

const styles = `
    .settings-container {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 0;
        height: calc(100vh - 140px);
        background: rgba(15, 15, 25, 0.4);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        overflow: hidden;
    }

    /* Sidebar */
    .settings-sidebar {
        background: rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        flex-direction: column;
    }

    .settings-search {
        padding: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .settings-search input {
        width: 100%;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.75rem 1rem;
        border-radius: 10px;
        color: white;
        font-size: 0.9rem;
    }

    .settings-search input:focus {
        outline: none;
        border-color: #22d3ee;
        background: rgba(34, 211, 238, 0.05);
    }

    .settings-nav-list {
        padding: 1rem;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .settings-nav-list::-webkit-scrollbar {
        width: 4px;
    }

    .settings-nav-list::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    .nav-btn {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.875rem 1rem;
        background: transparent;
        border: none;
        border-radius: 12px;
        text-align: left;
        cursor: pointer;
        transition: all 0.2s;
        color: rgba(255, 255, 255, 0.6);
        width: 100%;
    }

    .nav-btn:hover {
        background: rgba(255, 255, 255, 0.05);
        color: white;
    }

    .nav-btn.active {
        background: linear-gradient(90deg, rgba(34, 211, 238, 0.1), transparent);
        border-left: 3px solid #22d3ee;
        color: white;
    }

    .nav-icon {
        color: #22d3ee;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
    }

    .nav-text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .nav-label {
        font-weight: 500;
        font-size: 0.9rem;
    }

    .nav-desc {
        font-size: 0.7rem;
        opacity: 0.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Content Area */
    .settings-content-area {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.1);
    }

    .content-header {
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        z-index: 10;
    }

    .header-title h2 {
        font-size: 1.5rem;
        margin: 0;
        color: white;
    }

    .header-title p {
        margin: 0.25rem 0 0;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
    }

    .content-body {
        flex: 1;
        overflow-y: auto;
        padding: 2rem;
    }

    .content-body::-webkit-scrollbar {
        width: 8px;
    }

    .content-body::-webkit-scrollbar-track {
        background: transparent;
    }

    .content-body::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    /* Grid Layout */
    .settings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1.5rem;
    }

    .section-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        transition: all 0.3s;
    }

    .section-card:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }

    .section-card h3 {
        font-size: 1.1rem;
        color: #22d3ee;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Form Elements */
    .form-group {
        margin-bottom: 1.25rem;
    }

    .form-group label {
        display: block;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
    }

    .form-group input, 
    .form-group select, 
    .form-group textarea {
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        color: white;
        font-size: 0.95rem;
        transition: border-color 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #22d3ee;
    }

    /* Toggles */
    .setting-toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
    }

    .setting-toggle:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .setting-toggle h4 {
        font-size: 0.95rem;
        color: white;
        margin-bottom: 0.25rem;
    }

    .setting-toggle p {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .toggle-switch {
        width: 48px;
        height: 26px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        cursor: pointer;
        position: relative;
        transition: background 0.3s;
        flex-shrink: 0;
    }

    .toggle-switch.checked {
        background: #22d3ee;
    }

    .toggle-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 3px;
        left: 3px;
        transition: transform 0.3s;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .toggle-switch.checked .toggle-thumb {
        transform: translateX(22px);
    }

    /* Buttons */
    .btn-save {
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #10b981, #22d3ee);
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s;
        box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
    }

    .btn-save.saved {
        background: #10b981;
    }

    .btn-save:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(34, 211, 238, 0.4);
    }

    .btn-secondary {
        padding: 0.6rem 1rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.15);
    }

    .btn-secondary.danger {
        background: rgba(239, 68, 68, 0.1);
        border-color: rgba(239, 68, 68, 0.3);
        color: #ef4444;
    }
    
    .btn-group {
        display: flex;
        gap: 0.75rem;
    }

    /* Custom Profile */
    .profile-edit {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
    }

    .avatar-wrapper {
        position: relative;
    }

    .avatar-placeholder {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #a78bfa);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }

    .btn-camera {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #22d3ee;
        border: 2px solid #0f0f1e;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: black;
        transition: transform 0.2s;
    }

    .btn-camera:hover {
        transform: scale(1.1);
    }

    .profile-inputs {
        flex: 1;
        width: 100%;
    }

    /* Theme Options */
    .theme-options {
        display: flex;
        gap: 0.75rem;
    }

    .theme-btn-opt {
        flex: 1;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    .theme-btn-opt.active {
        border-color: #22d3ee;
        background: rgba(34, 211, 238, 0.1);
        color: #22d3ee;
    }

    .color-options {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .color-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 3px solid transparent;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .color-btn.active {
        border-color: white;
        transform: scale(1.15);
    }

    /* Feedback Stars */
    .rating-stars {
        display: flex;
        gap: 0.5rem;
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }

    .rating-stars .star {
        transition: color 0.2s;
    }

    .rating-stars .star:hover,
    .rating-stars .star.filled {
        color: #fbbf24;
    }
    
    /* Help Links */
    .help-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .help-link {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        color: white;
        text-decoration: none;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .help-link:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(4px);
    }

    /* Credits */
    .credits-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        min-height: 400px;
    }

    .credits-header h1 {
        font-size: 2.5rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
    }

    .credits-header p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.1rem;
    }

    .credits-content {
        margin-top: 3rem;
        background: rgba(255, 255, 255, 0.03);
        padding: 2rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        min-width: 300px;
    }

    .credit-role {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0.25rem;
    }

    .credit-name {
        font-size: 1.25rem;
        color: white;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
    
    .credit-version {
        font-size: 1rem;
        color: #22d3ee;
        margin-bottom: 1.5rem;
    }

    .tech-stack {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }

    .tech-stack span {
        padding: 0.25rem 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .copyright {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 1rem;
    }
    
    /* Animation */
    .animate-fade {
        animation: fadeIn 0.4s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 900px) {
        .settings-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .settings-container {
            grid-template-columns: 1fr;
            height: auto;
        }
        
        .settings-sidebar {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            max-height: 250px;
        }

        .settings-nav-list {
            flex-direction: row;
            overflow-x: auto;
            border-bottom: none;
        }
        
        .nav-text {
            display: none;
        }
        
        .nav-btn {
            width: auto;
            padding: 1rem;
        }
        
        .content-body {
            padding: 1rem;
        }
    }
`

export default Settings
