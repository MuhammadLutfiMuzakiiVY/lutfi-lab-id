import { useState, useEffect, useCallback, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import UserManagement from '../components/UserManagement'
import ChessGame from '../components/ChessGame'
import TicTacToe from '../components/TicTacToe'
import MemoryCardGame from '../components/MemoryCardGame'
import HackerTerminal from '../components/HackerTerminal'
import MusicPlayer from '../components/MusicPlayer'
import Settings from '../components/Settings'
import Footer from '../components/Footer'
import TaskManager from '../components/TaskManager'
import GlobalSearch from '../components/GlobalSearch'
import QuickActions from '../components/QuickActions'
import NotificationCenter from '../components/NotificationCenter'
import MiniTools from '../components/MiniTools'
import LinkManager from '../components/LinkManager'
import ArchiveCenter from '../components/ArchiveCenter'
import SupportCenter from '../components/SupportCenter'
import ActivityLogs from '../components/ActivityLogs'
import AnalyticsDashboard from '../components/AnalyticsDashboard'
import PomodoroTimer from '../components/PomodoroTimer'
import SnakeGame from '../components/SnakeGame'
import WeatherWidget from '../components/WeatherWidget'
import LanguageSelector from '../components/LanguageSelector'
import TetrisGame from '../components/TetrisGame'
import Game2048 from '../components/Game2048'
import Calculator from '../components/Calculator'
import Stopwatch from '../components/Stopwatch'
import HabitTracker from '../components/HabitTracker'
import KanbanBoard from '../components/KanbanBoard'
import AutoCleanup from '../components/AutoCleanup'
import SilentAchievement from '../components/SilentAchievement'
import SuperDeveloperDashboard from '../components/SuperDeveloperDashboard'
import AdminDashboard from '../components/AdminDashboard'
import { useLanguage } from '../context/LanguageContext'
import '../styles/login.css'

// Icons
const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
)

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
)

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
)

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
)

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
)

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
)

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
)

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
)

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
)

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
)

const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
)

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
)
// PROFESSIONAL CYBERSECURITY BOOT SCREEN - Terminal Style with Typing Animation
const Preloader = () => {
    const [progress, setProgress] = useState(0)
    const [bootComplete, setBootComplete] = useState(false)
    const [currentLine, setCurrentLine] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [glitchActive, setGlitchActive] = useState(false)

    const bootMessages = [
        { text: 'BOOTING SYSTEM...', delay: 0 },
        { text: 'Initializing Security Components...', delay: 600 },
        { text: 'Loading Modules...', delay: 1200 },
        { text: 'Applying Cyber-Defense Protocol v9.8.3...', delay: 1800 },
        { text: 'Authenticating User: LUTFI-LAB.ID...', delay: 2400 },
        { text: 'Launching Dashboard Interface...', delay: 3000 },
        { text: 'System Ready.', delay: 3600, type: 'success' }
    ]

    // Typing animation effect
    useEffect(() => {
        if (currentLine >= bootMessages.length) return

        const message = bootMessages[currentLine]
        let charIndex = 0
        setDisplayedText('')

        const typingInterval = setInterval(() => {
            if (charIndex < message.text.length) {
                setDisplayedText(prev => prev + message.text[charIndex])
                charIndex++
            } else {
                clearInterval(typingInterval)
            }
        }, 30)

        return () => clearInterval(typingInterval)
    }, [currentLine])

    // Boot sequence with messages
    useEffect(() => {
        const totalDuration = 4000
        const startTime = Date.now()

        // Progress bar animation
        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime
            const newProgress = Math.min((elapsed / totalDuration) * 100, 100)
            setProgress(newProgress)

            if (newProgress >= 100) {
                clearInterval(progressInterval)
                setTimeout(() => setBootComplete(true), 500)
            }
        }, 30)

        // Line-by-line message display
        bootMessages.forEach((msg, index) => {
            setTimeout(() => {
                setCurrentLine(index)
            }, msg.delay)
        })

        // Glitch effect every 2 seconds
        const glitchInterval = setInterval(() => {
            setGlitchActive(true)
            setTimeout(() => setGlitchActive(false), 150)
        }, 2500)

        return () => {
            clearInterval(progressInterval)
            clearInterval(glitchInterval)
        }
    }, [])

    // Generate random particles
    const particles = [...Array(30)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }))

    return (
        <div className={`cyber-boot-screen ${bootComplete ? 'fade-out' : ''} ${glitchActive ? 'glitch' : ''}`}>
            {/* Background with gradient */}
            <div className="cyber-boot-bg"></div>

            {/* Scanlines overlay */}
            <div className="scanlines"></div>

            {/* Floating particles */}
            <div className="cyber-particles">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="cyber-particle"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Grid overlay */}
            <div className="cyber-grid"></div>

            {/* Main centered container */}
            <div className="cyber-boot-container">
                {/* Logo/Shield Icon */}
                <div className="cyber-logo">
                    <div className="logo-ring outer"></div>
                    <div className="logo-ring middle"></div>
                    <div className="logo-ring inner"></div>
                    <div className="logo-core">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                </div>

                {/* Terminal window */}
                <div className="terminal-window">
                    <div className="terminal-header">
                        <span className="terminal-dot red"></span>
                        <span className="terminal-dot yellow"></span>
                        <span className="terminal-dot green"></span>
                        <span className="terminal-title">LUTFI-LAB.ID — Cyber Security Terminal</span>
                    </div>
                    <div className="terminal-body">
                        {bootMessages.slice(0, currentLine + 1).map((msg, index) => (
                            <div key={index} className={`terminal-line ${msg.type || ''} ${index === currentLine ? 'typing' : 'complete'}`}>
                                <span className="terminal-prompt">{msg.type === 'success' ? '✓' : '>'}</span>
                                <span className="terminal-text">
                                    {index === currentLine ? displayedText : msg.text}
                                </span>
                                {index === currentLine && <span className="cursor">█</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress section */}
                <div className="cyber-progress-section">
                    <div className="progress-header">
                        <span className="progress-label">SYSTEM INITIALIZATION</span>
                        <span className="progress-value">{Math.floor(progress)}%</span>
                    </div>
                    <div className="cyber-progress-bar">
                        <div className="progress-track">
                            <div className="progress-fill" style={{ width: `${progress}%` }}>
                                <div className="progress-glow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="progress-status">
                        {progress < 25 ? 'Initializing...' :
                            progress < 50 ? 'Loading modules...' :
                                progress < 75 ? 'Configuring security...' :
                                    progress < 100 ? 'Finalizing...' : 'Complete!'}
                    </div>
                </div>

                {/* Footer info */}
                <div className="cyber-boot-footer">
                    <span className="footer-item">◆ LUTFI-LAB.ID</span>
                    <span className="footer-separator">|</span>
                    <span className="footer-item">Cybersecurity Platform</span>
                    <span className="footer-separator">|</span>
                    <span className="footer-item">v9.8.3</span>
                </div>
            </div>
        </div>
    )
}

function Dashboard() {
    const { user, logout, loading: authLoading } = useAuth()
    const { t } = useLanguage()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('overview')
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchFocused, setSearchFocused] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    // Real-time clock state
    const [currentTime, setCurrentTime] = useState(new Date())
    const [timezone, setTimezone] = useState('')

    // Location state
    const [location, setLocation] = useState({ city: 'Memuat...', country: '' })
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    // ═══ DAILY OVERVIEW STATES ═══
    // To-Do List
    const [todos, setTodos] = useState([
        { id: 1, text: 'Review security vulnerabilities', status: 'in-progress', priority: 'critical' },
        { id: 2, text: 'Update firewall rules', status: 'not-started', priority: 'high' },
        { id: 3, text: 'Team meeting preparation', status: 'done', priority: 'medium' },
        { id: 4, text: 'Read documentation', status: 'not-started', priority: 'low' }
    ])
    const [newTodoText, setNewTodoText] = useState('')
    const [draggedTodo, setDraggedTodo] = useState(null)

    // Calendar Events
    const [events] = useState([
        { id: 1, title: 'Security Audit Meeting', datetime: new Date(Date.now() + 2 * 60 * 60 * 1000), type: 'meeting' },
        { id: 2, title: 'Cybersecurity Workshop', datetime: new Date(Date.now() + 5 * 60 * 60 * 1000), type: 'class' },
        { id: 3, title: 'Project Deadline', datetime: new Date(Date.now() + 24 * 60 * 60 * 1000), type: 'deadline' }
    ])
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    // Daily Focus Summary
    const [focusData] = useState({
        totalFocus: 185, // minutes
        breakTime: 35, // minutes
        dailyStats: [45, 60, 30, 75, 50, 65, 40] // last 7 days in minutes
    })

    // ═══ EXTENDED DASHBOARD FEATURES ═══

    // Progress Task Monitoring
    const [projects] = useState([
        {
            id: 1,
            name: 'Security Audit System',
            progress: 75,
            status: 'on-track',
            eta: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            color: '#6366f1',
            subtasks: [
                { id: 1, name: 'Vulnerability scanning', done: true },
                { id: 2, name: 'Penetration testing', done: true },
                { id: 3, name: 'Report generation', done: false },
                { id: 4, name: 'Client review', done: false }
            ]
        },
        {
            id: 2,
            name: 'Firewall Configuration',
            progress: 45,
            status: 'delay',
            eta: new Date(Date.now() + 1.5 * 24 * 60 * 60 * 1000),
            color: '#f59e0b',
            subtasks: [
                { id: 1, name: 'Rule analysis', done: true },
                { id: 2, name: 'New rules implementation', done: false },
                { id: 3, name: 'Testing', done: false }
            ]
        },
        {
            id: 3,
            name: 'API Authentication',
            progress: 20,
            status: 'overdue',
            eta: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            color: '#ef4444',
            subtasks: [
                { id: 1, name: 'OAuth2 setup', done: true },
                { id: 2, name: 'JWT implementation', done: false },
                { id: 3, name: 'Session handling', done: false },
                { id: 4, name: 'Testing & QA', done: false }
            ]
        }
    ])
    const [expandedProject, setExpandedProject] = useState(null)

    // Deadline Critical Alert
    const [deadlines] = useState([
        { id: 1, name: 'Submit Security Report', project: 'Audit', deadline: new Date(Date.now() + 18 * 60 * 60 * 1000), progress: 85 },
        { id: 2, name: 'Deploy Hotfix', project: 'Backend', deadline: new Date(Date.now() + 2.5 * 24 * 60 * 60 * 1000), progress: 60 },
        { id: 3, name: 'Client Presentation', project: 'Sales', deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), progress: 40 },
        { id: 4, name: 'Code Review', project: 'Dev', deadline: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), progress: 25 }
    ].sort((a, b) => a.deadline - b.deadline))

    // Smart Reminder
    const [reminders, setReminders] = useState([
        { id: 1, type: 'schedule', text: 'Team standup in 30 minutes', time: '09:30', dismissed: false },
        { id: 2, type: 'health', text: 'Time to drink water 💧', time: 'Every 2 hours', dismissed: false },
        { id: 3, type: 'work', text: '3 pending code reviews', time: 'Today', dismissed: false },
        { id: 4, type: 'ai', text: 'Based on your pattern, consider taking a break after 2 more tasks', time: 'Suggestion', dismissed: false }
    ])

    // Quick Notes
    const [notes, setNotes] = useState([
        { id: 1, text: 'Check server logs for errors', color: '#6366f1', pinned: true },
        { id: 2, text: '**Meeting notes:**\n- Discuss API changes\n- Review budget', color: '#10b981', pinned: false },
        { id: 3, text: 'Call client tomorrow at 10 AM', color: '#f59e0b', pinned: false }
    ])
    const [newNoteText, setNewNoteText] = useState('')
    const [newNoteColor, setNewNoteColor] = useState('#6366f1')
    const noteColors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

    // Mood Tracker
    const [selectedMood, setSelectedMood] = useState(null)
    const [moodNote, setMoodNote] = useState('')
    const [moodHistory] = useState([
        { day: 'Sen', mood: 4, emoji: '😄' },
        { day: 'Sel', mood: 3, emoji: '🙂' },
        { day: 'Rab', mood: 2, emoji: '😐' },
        { day: 'Kam', mood: 4, emoji: '😄' },
        { day: 'Jum', mood: 3, emoji: '🙂' },
        { day: 'Sab', mood: 5, emoji: '😄' },
        { day: 'Min', mood: null, emoji: null }
    ])
    const moods = [
        { emoji: '😄', label: 'Sangat Baik', value: 5 },
        { emoji: '🙂', label: 'Baik', value: 4 },
        { emoji: '😐', label: 'Biasa', value: 3 },
        { emoji: '😟', label: 'Kurang', value: 2 },
        { emoji: '😢', label: 'Sedih', value: 1 },
        { emoji: '😡', label: 'Marah', value: 0 }
    ]

    // Role Detection
    const isAdmin = user?.role === 'admin'
    const isSuperDeveloper = user?.role === 'super_developer'
    const isPrivilegedUser = isAdmin || isSuperDeveloper

    // Get role badge info
    const getRoleBadge = () => {
        if (isSuperDeveloper) {
            return { label: 'SUPER DEVELOPER', color: 'linear-gradient(135deg, #6366f1, #8b5cf6)', icon: '⚡' }
        }
        if (isAdmin) {
            return { label: 'ADMINISTRATOR', color: 'linear-gradient(135deg, #10b981, #3b82f6)', icon: '🛡️' }
        }
        return { label: 'USER', color: 'linear-gradient(135deg, #6b7280, #9ca3af)', icon: '👤' }
    }

    const roleBadge = getRoleBadge()

    // Real-time clock update
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        // Get timezone
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
        setTimezone(tz)

        return () => clearInterval(timer)
    }, [])

    // Get user location
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords
                        // Use reverse geocoding API
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                        )
                        const data = await response.json()
                        setLocation({
                            city: data.address?.city || data.address?.town || data.address?.village || 'Unknown',
                            country: data.address?.country || '',
                            district: data.address?.suburb || data.address?.district || ''
                        })
                    } catch (err) {
                        setLocation({ city: 'Indonesia', country: 'ID' })
                    }
                },
                (error) => {
                    console.log('Geolocation error:', error)
                    setLocation({ city: 'Indonesia', country: 'ID' })
                },
                { enableHighAccuracy: true, timeout: 10000 }
            )
        }
    }, [])

    // Online/Offline status
    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    // Ctrl+K Global Search shortcut
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault()
                setIsSearchOpen(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Page loading removed for direct render

    // ═══ COUNTDOWN TIMER FOR NEXT EVENT ═══
    useEffect(() => {
        const updateCountdown = () => {
            if (events.length === 0) return
            const nextEvent = events[0]
            const now = new Date()
            const diff = nextEvent.datetime - now

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24))
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((diff % (1000 * 60)) / 1000)
                setCountdown({ days, hours, minutes, seconds })
            }
        }

        updateCountdown()
        const timer = setInterval(updateCountdown, 1000)
        return () => clearInterval(timer)
    }, [events])

    // ═══ TO-DO HANDLERS ═══
    const addTodo = () => {
        if (!newTodoText.trim()) return
        const newTodo = {
            id: Date.now(),
            text: newTodoText.trim(),
            status: 'not-started',
            priority: 'medium'
        }
        setTodos([...todos, newTodo])
        setNewTodoText('')
    }

    const toggleTodoStatus = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                const statusOrder = ['not-started', 'in-progress', 'done']
                const currentIndex = statusOrder.indexOf(todo.status)
                const nextIndex = (currentIndex + 1) % statusOrder.length
                return { ...todo, status: statusOrder[nextIndex] }
            }
            return todo
        }))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const changeTodoPriority = (id, priority) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, priority } : todo
        ))
    }

    // Drag & Drop handlers
    const handleDragStart = (e, todo) => {
        setDraggedTodo(todo)
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const handleDrop = (e, targetTodo) => {
        e.preventDefault()
        if (!draggedTodo || draggedTodo.id === targetTodo.id) return

        const newTodos = [...todos]
        const draggedIndex = newTodos.findIndex(t => t.id === draggedTodo.id)
        const targetIndex = newTodos.findIndex(t => t.id === targetTodo.id)

        newTodos.splice(draggedIndex, 1)
        newTodos.splice(targetIndex, 0, draggedTodo)

        setTodos(newTodos)
        setDraggedTodo(null)
    }

    const handleDragEnd = () => {
        setDraggedTodo(null)
    }

    // Format focus time
    const formatFocusTime = (minutes) => {
        const hrs = Math.floor(minutes / 60)
        const mins = minutes % 60
        return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`
    }

    // Generate sparkline path
    const generateSparkline = (data) => {
        if (!data || data.length === 0) return ''
        const max = Math.max(...data)
        const min = Math.min(...data)
        const range = max - min || 1
        const width = 100
        const height = 30
        const stepX = width / (data.length - 1)

        const points = data.map((val, i) => {
            const x = i * stepX
            const y = height - ((val - min) / range) * height
            return `${x},${y}`
        })

        return `M${points.join(' L')}`
    }

    // ═══ EXTENDED FEATURE HELPERS ═══

    // Get deadline urgency color
    const getDeadlineColor = (deadline) => {
        const now = new Date()
        const diff = deadline - now
        const hoursLeft = diff / (1000 * 60 * 60)

        if (hoursLeft < 24) return { bg: 'rgba(239, 68, 68, 0.2)', border: '#ef4444', text: '#f87171', label: 'Kritis' }
        if (hoursLeft < 72) return { bg: 'rgba(249, 115, 22, 0.2)', border: '#f97316', text: '#fb923c', label: 'Segera' }
        if (hoursLeft < 168) return { bg: 'rgba(234, 179, 8, 0.2)', border: '#eab308', text: '#fde047', label: 'Perhatikan' }
        return { bg: 'rgba(34, 197, 94, 0.2)', border: '#22c55e', text: '#4ade80', label: 'Aman' }
    }

    // Format ETA time remaining
    const formatETA = (eta) => {
        const now = new Date()
        const diff = eta - now
        if (diff < 0) return 'Overdue'

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        if (days > 0) return `${days}d ${hours}h`
        return `${hours}h`
    }

    // Dismiss reminder
    const dismissReminder = (id) => {
        setReminders(reminders.map(r =>
            r.id === id ? { ...r, dismissed: true } : r
        ))
    }

    // Add new note
    const addNote = () => {
        if (!newNoteText.trim()) return
        const newNote = {
            id: Date.now(),
            text: newNoteText.trim(),
            color: newNoteColor,
            pinned: false
        }
        setNotes([...notes, newNote])
        setNewNoteText('')
    }

    // Toggle note pin
    const toggleNotePin = (id) => {
        setNotes(notes.map(note =>
            note.id === id ? { ...note, pinned: !note.pinned } : note
        ))
    }

    // Delete note
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    // Select mood
    const selectMood = (mood) => {
        setSelectedMood(mood)
    }

    // Get AI mood insight
    const getMoodInsight = () => {
        if (!selectedMood) return null
        const insights = {
            5: { text: 'Luar biasa! Energi positif Anda tinggi. Waktu yang tepat untuk menyelesaikan tugas yang menantang.', activity: '🎯 Fokus pada proyek besar' },
            4: { text: 'Mood bagus! Pertahankan dengan aktivitas produktif namun seimbang.', activity: '📚 Belajar skill baru' },
            3: { text: 'Hari biasa saja. Cobalah aktivitas kecil yang menyenangkan.', activity: '🎵 Dengarkan musik favorit' },
            2: { text: 'Sepertinya kurang semangat. Istirahat sebentar mungkin membantu.', activity: '🚶 Jalan-jalan sebentar' },
            1: { text: 'Sedang merasa sedih? Tidak apa-apa. Luangkan waktu untuk diri sendiri.', activity: '☕ Break dengan secangkir teh' },
            0: { text: 'Marah bisa melelahkan. Coba tarik napas dalam dan lepaskan perlahan.', activity: '🧘 Latihan pernapasan 5 menit' }
        }
        return insights[selectedMood.value]
    }

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/login')
        } catch (err) {
            console.error('Logout failed:', err)
        }
    }

    const handleTabChange = useCallback((tabId) => {
        setActiveTab(tabId)
        setMobileSidebarOpen(false) // Close sidebar on mobile after navigation
    }, [])

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        })
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const stats = [
        { label: 'Proyek Aktif', value: '12', icon: ActivityIcon, color: '#6366f1' },
        { label: 'Keamanan', value: '98%', icon: ShieldCheckIcon, color: '#10b981' },
        { label: 'Pengaturan', value: '5', icon: SettingsIcon, color: '#f59e0b' }
    ]

    // Chess icon
    const ChessIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16" />
            <path d="M8.5 14h7M9 6v.5a2.5 2.5 0 1 0 5 0V6" />
            <rect x="9" y="5" width="6" height="2" />
            <path d="M12 8v2" />
            <path d="M10 10h4l2 4H8l2-4z" />
        </svg>
    )

    // TicTacToe icon
    const TicTacToeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="4" x2="10" y2="10" />
            <line x1="10" y1="4" x2="4" y2="10" />
            <circle cx="17" cy="7" r="3" fill="none" />
            <line x1="4" y1="14" x2="10" y2="20" />
            <line x1="10" y1="14" x2="4" y2="20" />
            <circle cx="17" cy="17" r="3" fill="none" />
        </svg>
    )

    // Memory Card Game icon
    const MemoryGameIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="8" height="10" rx="1" />
            <rect x="14" y="4" width="8" height="10" rx="1" />
            <rect x="2" y="16" width="8" height="4" rx="1" />
            <rect x="14" y="16" width="8" height="4" rx="1" />
        </svg>
    )

    // Terminal Hacker icon
    const TerminalIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 9l3 3-3 3" />
            <line x1="12" y1="15" x2="18" y2="15" />
        </svg>
    )

    // Task Manager icon
    const TaskIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
    )

    // Mini Tools icon
    const ToolsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )

    // Link Manager icon
    const LinkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )

    // Archive icon
    const ArchiveIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="21 8 21 21 3 21 3 8" />
            <rect x="1" y="3" width="22" height="5" />
            <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
    )

    // Activity Logs icon
    const ActivityLogsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    )

    // Analytics icon
    const AnalyticsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
    )

    // Support Center icon
    const SupportIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    )

    // Pomodoro Timer icon
    const PomodoroIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )

    // Weather icon
    const WeatherIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )

    // Snake icon
    const SnakeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8a4 4 0 0 1 4 4c0 2.5-2 4-4 6-2-2-4-3.5-4-6a4 4 0 0 1 4-4z" />
            <path d="M12 8V4" />
            <circle cx="12" cy="12" r="1" />
        </svg>
    )

    // New component icons
    const TetrisIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="6" height="6" />
            <rect x="9" y="3" width="6" height="6" />
            <rect x="9" y="9" width="6" height="6" />
            <rect x="9" y="15" width="6" height="6" />
        </svg>
    )

    const Game2048Icon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <rect x="6" y="6" width="5" height="5" rx="1" />
            <rect x="13" y="6" width="5" height="5" rx="1" />
            <rect x="6" y="13" width="5" height="5" rx="1" />
            <rect x="13" y="13" width="5" height="5" rx="1" />
        </svg>
    )

    const CalculatorIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="8" y2="10" />
            <line x1="12" y1="10" x2="12" y2="10" />
            <line x1="16" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="8" y2="14" />
            <line x1="12" y1="14" x2="12" y2="14" />
            <line x1="16" y1="14" x2="16" y2="14" />
            <line x1="8" y1="18" x2="8" y2="18" />
            <line x1="12" y1="18" x2="12" y2="18" />
            <line x1="16" y1="18" x2="16" y2="18" />
        </svg>
    )

    const StopwatchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M9 2h6" />
            <path d="M12 2v3" />
        </svg>
    )

    const HabitIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )

    const KanbanIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="5" height="18" rx="1" />
            <rect x="10" y="3" width="5" height="12" rx="1" />
            <rect x="17" y="3" width="5" height="8" rx="1" />
        </svg>
    )

    const AutoCleanupIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M10 11v6" /><path d="M14 11v6" />
        </svg>
    )

    const AchievementIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    )

    const tabs = [
        { id: 'overview', label: t('overview'), icon: HomeIcon },
        { id: 'tasks', label: t('taskManager'), icon: TaskIcon },
        { id: 'kanban', label: 'Kanban', icon: KanbanIcon },
        { id: 'cleanup', label: 'Auto-Cleanup', icon: AutoCleanupIcon },
        { id: 'achievements', label: 'Pencapaian', icon: AchievementIcon },
        { id: 'pomodoro', label: t('pomodoro'), icon: PomodoroIcon },
        { id: 'stopwatch', label: 'Stopwatch', icon: StopwatchIcon },
        { id: 'habits', label: 'Habits', icon: HabitIcon },
        { id: 'analytics', label: t('analytics'), icon: AnalyticsIcon },
        { id: 'activity', label: t('activityLogs'), icon: ActivityLogsIcon },
        { id: 'weather', label: t('weather'), icon: WeatherIcon },
        { id: 'tools', label: t('miniTools'), icon: ToolsIcon },
        { id: 'calculator', label: 'Calculator', icon: CalculatorIcon },
        { id: 'links', label: t('linkManager'), icon: LinkIcon },
        { id: 'archive', label: t('archive'), icon: ArchiveIcon },
        { id: 'chess', label: t('chessGame'), icon: ChessIcon },
        { id: 'tictactoe', label: t('ticTacToe'), icon: TicTacToeIcon },
        { id: 'memory', label: t('memoryGame'), icon: MemoryGameIcon },
        { id: 'snake', label: t('snakeGame'), icon: SnakeIcon },
        { id: 'tetris', label: 'Tetris', icon: TetrisIcon },
        { id: 'game2048', label: '2048', icon: Game2048Icon },
        { id: 'terminal', label: t('hackerTerminal'), icon: TerminalIcon },
        { id: 'support', label: t('supportCenter'), icon: SupportIcon },
        { id: 'settings', label: t('settings'), icon: SettingsIcon },
        ...(isAdmin ? [{ id: 'users', label: t('userManagement'), icon: UsersIcon }] : []),
        ...(isAdmin ? [{ id: 'admin-panel', label: 'Admin Panel', icon: ShieldCheckIcon }] : []),
        ...(isSuperDeveloper ? [{ id: 'dev-panel', label: 'Developer Panel', icon: TerminalIcon }] : [])
    ]

    // Get breadcrumb
    const getBreadcrumb = () => {
        const crumbs = [{ label: 'Dashboard', id: null }]
        const currentTab = tabs.find(t => t.id === activeTab)
        if (currentTab) {
            crumbs.push({ label: currentTab.label, id: activeTab })
        }
        return crumbs
    }

    // Boot screen removed - direct render

    return (
        <div className="dashboard-layout">
            {/* Background */}
            <div className="animated-bg"></div>
            <div className="grid-overlay"></div>
            <div className="orbs">
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
            </div>
            <div className="particles">
                {[...Array(12)].map((_, i) => <div key={i} className="particle"></div>)}
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${mobileSidebarOpen ? 'active' : ''}`}
                onClick={() => setMobileSidebarOpen(false)}
            ></div>

            {/* Animated Sidebar */}
            <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-brand">
                    <div className="brand-logo">
                        <img src="/logo.png" alt="Lutfi-Lab.ID" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                    </div>
                    <span className="brand-text">Lutfi-Lab<span className="text-gradient">.ID</span></span>
                </div>

                <nav className="sidebar-nav">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab.id)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="nav-icon">
                                <tab.icon />
                            </div>
                            <span className="nav-label">{tab.label}</span>
                            {activeTab === tab.id && <div className="nav-indicator"></div>}
                        </button>
                    ))}
                </nav>

                {/* Real-time Clock & Location */}
                <div className="sidebar-info">
                    <div className="info-item clock">
                        <ClockIcon />
                        <div className="info-content">
                            <span className="info-value">{formatTime(currentTime)}</span>
                            <span className="info-label">{timezone}</span>
                        </div>
                    </div>
                    <div className="info-item location">
                        <MapPinIcon />
                        <div className="info-content">
                            <span className="info-value">{location.city}</span>
                            <span className="info-label">{location.district || location.country}</span>
                        </div>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <div className="user-mini">
                        <div className="user-avatar-mini">
                            {user?.avatar ? (
                                <img src={user.avatar} alt={user.name} />
                            ) : (
                                <UserIcon />
                            )}
                            <div className={`status-dot ${isOnline ? 'online' : 'offline'}`}></div>
                        </div>
                        <div className="user-mini-info">
                            <span className="user-mini-name">{user?.name || 'User'}</span>
                            <span className="user-mini-role" style={{ background: roleBadge.color, padding: '2px 8px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.03em' }}>
                                {roleBadge.icon} {roleBadge.label}
                            </span>
                        </div>
                    </div>
                    <button className="logout-btn" onClick={handleLogout} disabled={authLoading} title="Logout">
                        <LogoutIcon />
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`dashboard-main ${sidebarCollapsed ? 'expanded' : ''}`}>
                {/* Top Header Bar */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <button className="menu-toggle" onClick={() => {
                            // On mobile, always open/close the mobile drawer
                            // On desktop, collapse the sidebar
                            if (window.innerWidth <= 768) {
                                setMobileSidebarOpen(!mobileSidebarOpen)
                            } else {
                                setSidebarCollapsed(!sidebarCollapsed)
                            }
                        }}>
                            <MenuIcon />
                        </button>

                        {/* Breadcrumbs */}
                        <nav className="breadcrumbs">
                            {getBreadcrumb().map((crumb, index, arr) => (
                                <span key={index} className="breadcrumb-item">
                                    <span
                                        className={`breadcrumb-link ${index === arr.length - 1 ? 'active' : ''}`}
                                        onClick={() => crumb.id && handleTabChange(crumb.id)}
                                    >
                                        {crumb.label}
                                    </span>
                                    {index < arr.length - 1 && <ChevronRightIcon />}
                                </span>
                            ))}
                        </nav>
                    </div>

                    <div className="header-center">
                        {/* Global Search Bar */}
                        <div className={`global-search ${searchFocused ? 'focused' : ''}`}>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                            />
                            <kbd className="search-shortcut">⌘K</kbd>
                        </div>
                    </div>

                    <div className="header-right">
                        {/* Language Selector */}
                        <LanguageSelector compact />

                        {/* Notification Center */}
                        <NotificationCenter />

                        {/* Status Indicator */}
                        <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
                            <div className="status-dot-large"></div>
                            <span>{isOnline ? t('online') : t('offline')}</span>
                        </div>

                        {/* Date Display */}
                        <div className="date-display">
                            <span className="time-large">{formatTime(currentTime)}</span>
                            <span className="date-text">{formatDate(currentTime)}</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="page-content">
                    {activeTab === 'overview' && (
                        <div className="overview-content animate-in">
                            <div className="page-title">
                                <h1>{t('welcome')}, {user?.name?.split(' ')[0] || 'User'}! 👋</h1>
                                <p>{t('overviewDesc')}</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="dashboard-stats-grid">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.15}s` }}>
                                        <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                                            <stat.icon />
                                        </div>
                                        <div className="stat-content">
                                            <span className="stat-value">{stat.value}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ═══ DAILY OVERVIEW GRID ═══ */}
                            <div className="daily-overview-grid">
                                {/* To-Do List Card */}
                                <div className="overview-card todo-card">
                                    <div className="card-header">
                                        <h3>📋 {t('todoToday')}</h3>
                                        <span className="task-count">{todos.filter(t => t.status !== 'done').length} {t('remaining')}</span>
                                    </div>

                                    {/* Add Todo Input */}
                                    <div className="add-todo">
                                        <input
                                            type="text"
                                            placeholder={t('addNewTask')}
                                            value={newTodoText}
                                            onChange={(e) => setNewTodoText(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                                        />
                                        <button onClick={addTodo}>+</button>
                                    </div>

                                    {/* Todo List */}
                                    <div className="todo-list">
                                        {todos.map(todo => (
                                            <div
                                                key={todo.id}
                                                className={`todo-item ${todo.status} ${draggedTodo?.id === todo.id ? 'dragging' : ''}`}
                                                draggable
                                                onDragStart={(e) => handleDragStart(e, todo)}
                                                onDragOver={handleDragOver}
                                                onDrop={(e) => handleDrop(e, todo)}
                                                onDragEnd={handleDragEnd}
                                            >
                                                <div className="todo-drag-handle">⋮⋮</div>
                                                <button
                                                    className={`todo-checkbox ${todo.status}`}
                                                    onClick={() => toggleTodoStatus(todo.id)}
                                                >
                                                    {todo.status === 'done' ? '✓' : todo.status === 'in-progress' ? '◐' : '○'}
                                                </button>
                                                <span className="todo-text">{todo.text}</span>
                                                <select
                                                    className={`priority-badge ${todo.priority}`}
                                                    value={todo.priority}
                                                    onChange={(e) => changeTodoPriority(todo.id, e.target.value)}
                                                >
                                                    <option value="low">Low</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="high">High</option>
                                                    <option value="critical">Critical</option>
                                                </select>
                                                <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>×</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Calendar Events Card */}
                                <div className="overview-card events-card">
                                    <div className="card-header">
                                        <h3>📅 {t('eventSchedule')}</h3>
                                        <span className="event-count">{events.length} {t('event')}</span>
                                    </div>

                                    {/* Next Event with Countdown */}
                                    {events.length > 0 && (
                                        <div className="next-event">
                                            <div className="next-event-header">
                                                <span className="next-label">{t('nextEvent')}</span>
                                                <span className={`event-type ${events[0].type}`}>
                                                    {events[0].type === 'meeting' ? '👥' : events[0].type === 'class' ? '📚' : '⏰'}
                                                    {events[0].type}
                                                </span>
                                            </div>
                                            <h4 className="event-title">{events[0].title}</h4>
                                            <div className="countdown-timer">
                                                <div className="countdown-unit">
                                                    <span className="countdown-value">{countdown.days}</span>
                                                    <span className="countdown-label">{t('days')}</span>
                                                </div>
                                                <span className="countdown-separator">:</span>
                                                <div className="countdown-unit">
                                                    <span className="countdown-value">{String(countdown.hours).padStart(2, '0')}</span>
                                                    <span className="countdown-label">{t('hours')}</span>
                                                </div>
                                                <span className="countdown-separator">:</span>
                                                <div className="countdown-unit">
                                                    <span className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</span>
                                                    <span className="countdown-label">{t('minutes')}</span>
                                                </div>
                                                <span className="countdown-separator">:</span>
                                                <div className="countdown-unit">
                                                    <span className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</span>
                                                    <span className="countdown-label">{t('seconds')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Event List */}
                                    <div className="events-list">
                                        {events.slice(1).map(event => (
                                            <div key={event.id} className={`event-item ${event.type}`}>
                                                <span className="event-icon">
                                                    {event.type === 'meeting' ? '👥' : event.type === 'class' ? '📚' : '⏰'}
                                                </span>
                                                <div className="event-info">
                                                    <span className="event-name">{event.title}</span>
                                                    <span className="event-time">
                                                        {event.datetime.toLocaleDateString('id-ID', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Daily Focus Summary Card */}
                                <div className="overview-card focus-card">
                                    <div className="card-header">
                                        <h3>🎯 Focus Summary</h3>
                                        <span className="focus-day">Hari Ini</span>
                                    </div>

                                    {/* Focus Stats */}
                                    <div className="focus-stats">
                                        <div className="focus-stat main">
                                            <div className="focus-icon pomodoro">🍅</div>
                                            <div className="focus-info">
                                                <span className="focus-value">{formatFocusTime(focusData.totalFocus)}</span>
                                                <span className="focus-label">Deep Work</span>
                                            </div>
                                        </div>
                                        <div className="focus-stat">
                                            <div className="focus-icon break">☕</div>
                                            <div className="focus-info">
                                                <span className="focus-value">{formatFocusTime(focusData.breakTime)}</span>
                                                <span className="focus-label">Break Time</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sparkline Chart */}
                                    <div className="sparkline-container">
                                        <span className="sparkline-label">Aktivitas 7 Hari Terakhir</span>
                                        <svg className="sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d={generateSparkline(focusData.dailyStats)}
                                                fill="none"
                                                stroke="#6366f1"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d={`${generateSparkline(focusData.dailyStats)} L100,30 L0,30 Z`}
                                                fill="url(#sparklineGradient)"
                                            />
                                        </svg>
                                        <div className="sparkline-days">
                                            {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, i) => (
                                                <span key={day} className={i === 6 ? 'active' : ''}>{day}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ═══ EXTENDED FEATURES GRID ═══ */}
                            <div className="extended-features-grid">
                                {/* Progress Task Monitoring */}
                                <div className="extended-card progress-monitoring-card">
                                    <div className="card-header">
                                        <h3>📊 Progress Task</h3>
                                        <span className="project-count">{projects.length} proyek</span>
                                    </div>

                                    <div className="projects-list">
                                        {projects.map(project => (
                                            <div key={project.id} className={`project-item ${project.status}`}>
                                                <div className="project-header" onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}>
                                                    <div className="project-info">
                                                        <div className="circular-progress" style={{ '--progress': project.progress, '--color': project.color }}>
                                                            <svg viewBox="0 0 36 36">
                                                                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                                                <circle cx="18" cy="18" r="16" fill="none" stroke={project.color} strokeWidth="3"
                                                                    strokeDasharray={`${project.progress}, 100`}
                                                                    strokeLinecap="round" transform="rotate(-90 18 18)" />
                                                            </svg>
                                                            <span className="progress-text">{project.progress}%</span>
                                                        </div>
                                                        <div className="project-details">
                                                            <span className="project-name">{project.name}</span>
                                                            <div className="project-meta">
                                                                <span className={`status-badge ${project.status}`}>
                                                                    {project.status === 'on-track' ? '✓ On Track' : project.status === 'delay' ? '⚠ Delay' : '✗ Overdue'}
                                                                </span>
                                                                <span className="eta">ETA: {formatETA(project.eta)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="expand-icon">{expandedProject === project.id ? '▲' : '▼'}</span>
                                                </div>

                                                {expandedProject === project.id && (
                                                    <div className="subtasks-list">
                                                        {project.subtasks.map(subtask => (
                                                            <div key={subtask.id} className={`subtask-item ${subtask.done ? 'done' : ''}`}>
                                                                <span className="subtask-check">{subtask.done ? '✓' : '○'}</span>
                                                                <span className="subtask-name">{subtask.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deadline Critical Alert */}
                                <div className="extended-card deadline-alert-card">
                                    <div className="card-header">
                                        <h3>⏳ Deadline Alert</h3>
                                        <span className="alert-count">{deadlines.filter(d => (d.deadline - new Date()) < 72 * 60 * 60 * 1000).length} urgent</span>
                                    </div>

                                    <div className="deadlines-list">
                                        {deadlines.map(deadline => {
                                            const colors = getDeadlineColor(deadline.deadline)
                                            const timeLeft = deadline.deadline - new Date()
                                            const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60))
                                            const daysLeft = Math.floor(hoursLeft / 24)

                                            return (
                                                <div key={deadline.id} className="deadline-item" style={{ background: colors.bg, borderColor: colors.border }}>
                                                    <div className="deadline-header">
                                                        <span className="deadline-name">{deadline.name}</span>
                                                        <span className="deadline-tag" style={{ background: colors.bg, color: colors.text }}>{deadline.project}</span>
                                                    </div>
                                                    <div className="deadline-footer">
                                                        <div className="deadline-progress">
                                                            <div className="mini-progress-bar">
                                                                <div className="mini-progress-fill" style={{ width: `${deadline.progress}%`, background: colors.border }}></div>
                                                            </div>
                                                            <span className="progress-percent">{deadline.progress}%</span>
                                                        </div>
                                                        <span className="deadline-countdown" style={{ color: colors.text }}>
                                                            {daysLeft > 0 ? `${daysLeft}d ${hoursLeft % 24}h` : `${hoursLeft}h`}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Smart Reminder */}
                                <div className="extended-card smart-reminder-card">
                                    <div className="card-header">
                                        <h3>🔔 Smart Reminder</h3>
                                        <span className="reminder-count">{reminders.filter(r => !r.dismissed).length} aktif</span>
                                    </div>

                                    <div className="reminders-list">
                                        {reminders.filter(r => !r.dismissed).map(reminder => (
                                            <div key={reminder.id} className={`reminder-item ${reminder.type}`}>
                                                <span className="reminder-icon">
                                                    {reminder.type === 'schedule' ? '📅' : reminder.type === 'health' ? '💧' : reminder.type === 'work' ? '📋' : '🤖'}
                                                </span>
                                                <div className="reminder-content">
                                                    <span className="reminder-text">{reminder.text}</span>
                                                    <span className="reminder-time">{reminder.time}</span>
                                                </div>
                                                <button className="dismiss-btn" onClick={() => dismissReminder(reminder.id)}>×</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Notes */}
                                <div className="extended-card quick-notes-card">
                                    <div className="card-header">
                                        <h3>📝 Quick Notes</h3>
                                        <span className="notes-count">{notes.length} note</span>
                                    </div>

                                    {/* Add Note */}
                                    <div className="add-note">
                                        <input
                                            type="text"
                                            placeholder="Tambah catatan..."
                                            value={newNoteText}
                                            onChange={(e) => setNewNoteText(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && addNote()}
                                        />
                                        <div className="note-color-picker">
                                            {noteColors.map(color => (
                                                <button
                                                    key={color}
                                                    className={`color-btn ${newNoteColor === color ? 'active' : ''}`}
                                                    style={{ background: color }}
                                                    onClick={() => setNewNoteColor(color)}
                                                />
                                            ))}
                                        </div>
                                        <button className="add-note-btn" onClick={addNote}>+</button>
                                    </div>

                                    {/* Notes Grid */}
                                    <div className="notes-grid">
                                        {[...notes].sort((a, b) => b.pinned - a.pinned).map(note => (
                                            <div key={note.id} className={`note-card ${note.pinned ? 'pinned' : ''}`} style={{ borderColor: note.color }}>
                                                <div className="note-actions">
                                                    <button className={`pin-btn ${note.pinned ? 'active' : ''}`} onClick={() => toggleNotePin(note.id)}>📌</button>
                                                    <button className="delete-note-btn" onClick={() => deleteNote(note.id)}>×</button>
                                                </div>
                                                <p className="note-text">{note.text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                                                <div className="note-indicator" style={{ background: note.color }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mood Tracker */}
                                <div className="extended-card mood-tracker-card">
                                    <div className="card-header">
                                        <h3>❤️ Mood Tracker</h3>
                                        <span className="mood-date">Hari Ini</span>
                                    </div>

                                    {/* Mood Selector */}
                                    <div className="mood-selector">
                                        <span className="mood-question">Bagaimana perasaan Anda?</span>
                                        <div className="mood-emojis">
                                            {moods.map(mood => (
                                                <button
                                                    key={mood.value}
                                                    className={`mood-emoji ${selectedMood?.value === mood.value ? 'selected' : ''}`}
                                                    onClick={() => selectMood(mood)}
                                                    title={mood.label}
                                                >
                                                    {mood.emoji}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mood Note Input */}
                                    <input
                                        type="text"
                                        className="mood-note-input"
                                        placeholder="Apa yang ada di pikiran Anda? (opsional)"
                                        value={moodNote}
                                        onChange={(e) => setMoodNote(e.target.value)}
                                    />

                                    {/* AI Insight */}
                                    {selectedMood && getMoodInsight() && (
                                        <div className="ai-insight">
                                            <div className="insight-header">
                                                <span className="ai-badge">🤖 AI Insight</span>
                                            </div>
                                            <p className="insight-text">{getMoodInsight().text}</p>
                                            <div className="suggested-activity">
                                                <span className="activity-label">Aktivitas yang disarankan:</span>
                                                <span className="activity-value">{getMoodInsight().activity}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Weekly Mood Chart */}
                                    <div className="mood-chart">
                                        <span className="chart-label">Mood Minggu Ini</span>
                                        <div className="mood-bars">
                                            {moodHistory.map((entry, i) => (
                                                <div key={i} className="mood-bar-container">
                                                    <div className="mood-bar" style={{
                                                        height: entry.mood ? `${(entry.mood / 5) * 100}%` : '0%',
                                                        background: entry.mood ? (entry.mood >= 4 ? '#10b981' : entry.mood >= 3 ? '#f59e0b' : '#ef4444') : 'transparent'
                                                    }}>
                                                        {entry.emoji && <span className="bar-emoji">{entry.emoji}</span>}
                                                    </div>
                                                    <span className="bar-day">{entry.day}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="quick-actions-section">
                                <h3>Aksi Cepat</h3>
                                <div className="quick-action-buttons">
                                    <button className="action-btn">
                                        <ShieldCheckIcon />
                                        <span>Cek Keamanan</span>
                                    </button>
                                    <button className="action-btn">
                                        <SettingsIcon />
                                        <span>Pengaturan</span>
                                    </button>
                                    {isAdmin && (
                                        <button className="action-btn admin" onClick={() => setActiveTab('users')}>
                                            <UsersIcon />
                                            <span>Kelola User</span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* User Info Card */}
                            <div className="user-info-card">
                                <div className="user-avatar-large">
                                    {user?.avatar ? (
                                        <img src={user.avatar} alt={user.name} />
                                    ) : (
                                        <UserIcon />
                                    )}
                                </div>
                                <div className="user-details">
                                    <h2>{user?.name || 'User'}</h2>
                                    <p className="user-email">{user?.email || 'user@example.com'}</p>
                                    <div className="user-badges">
                                        <span className={`badge role-${user?.role || 'user'}`}>{user?.role || 'user'}</span>
                                        {user?.isVerified && <span className="badge verified">Verified</span>}
                                    </div>
                                </div>
                                <div className="user-location-info">
                                    <div className="location-item">
                                        <MapPinIcon />
                                        <span>{location.city}, {location.country}</span>
                                    </div>
                                    <div className="location-item">
                                        <ClockIcon />
                                        <span>{timezone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'chess' && (
                        <div className="chess-content animate-in">
                            <div className="page-title">
                                <h1>♟️ Chess vs AI</h1>
                                <p>Main catur melawan AI yang cerdas!</p>
                            </div>
                            <ChessGame />
                        </div>
                    )}

                    {activeTab === 'tasks' && (
                        <div className="tasks-content animate-in">
                            <TaskManager />
                        </div>
                    )}

                    {activeTab === 'analytics' && (
                        <div className="analytics-content animate-in">
                            <div className="page-title">
                                <h1>📊 {t('analytics')}</h1>
                                <p>{t('analyticsDesc')}</p>
                            </div>
                            <AnalyticsDashboard />
                        </div>
                    )}

                    {activeTab === 'activity' && (
                        <div className="activity-content animate-in">
                            <div className="page-title">
                                <h1>📋 {t('activityLogs')}</h1>
                                <p>{t('activityLogsDesc')}</p>
                            </div>
                            <ActivityLogs />
                        </div>
                    )}

                    {activeTab === 'pomodoro' && (
                        <div className="pomodoro-content animate-in">
                            <div className="page-title">
                                <h1>⏱️ {t('pomodoro')}</h1>
                                <p>{t('pomodoroDesc')}</p>
                            </div>
                            <PomodoroTimer />
                        </div>
                    )}

                    {activeTab === 'cleanup' && (
                        <div className="cleanup-content animate-in">
                            <AutoCleanup />
                        </div>
                    )}

                    {activeTab === 'achievements' && (
                        <div className="achievements-content animate-in">
                            <SilentAchievement />
                        </div>
                    )}

                    {activeTab === 'weather' && (
                        <div className="weather-content animate-in">
                            <div className="page-title">
                                <h1>🌤️ {t('weather')}</h1>
                                <p>{t('weatherDesc')}</p>
                            </div>
                            <WeatherWidget />
                        </div>
                    )}

                    {activeTab === 'tools' && (
                        <div className="tools-content animate-in">
                            <MiniTools />
                        </div>
                    )}

                    {activeTab === 'links' && (
                        <div className="links-content animate-in">
                            <LinkManager />
                        </div>
                    )}

                    {activeTab === 'archive' && (
                        <div className="archive-content animate-in">
                            <ArchiveCenter />
                        </div>
                    )}

                    {activeTab === 'users' && isAdmin && (
                        <div className="users-content animate-in">
                            <div className="page-title">
                                <h1>{t('userManagement')}</h1>
                                <p>{t('userManagementDesc')}</p>
                            </div>
                            <UserManagement />
                        </div>
                    )}

                    {activeTab === 'admin-panel' && isAdmin && (
                        <div className="admin-panel-content animate-in">
                            <AdminDashboard />
                        </div>
                    )}

                    {activeTab === 'dev-panel' && isSuperDeveloper && (
                        <div className="dev-panel-content animate-in">
                            <SuperDeveloperDashboard />
                        </div>
                    )}

                    {activeTab === 'tictactoe' && (
                        <div className="tictactoe-content animate-in">
                            <div className="page-title">
                                <h1>⭕ {t('ticTacToe')}</h1>
                                <p>{t('ticTacToeDesc')}</p>
                            </div>
                            <TicTacToe />
                        </div>
                    )}

                    {activeTab === 'memory' && (
                        <div className="memory-content animate-in">
                            <div className="page-title">
                                <h1>🎴 {t('memoryGame')}</h1>
                                <p>{t('memoryGameDesc')}</p>
                            </div>
                            <MemoryCardGame />
                        </div>
                    )}

                    {activeTab === 'snake' && (
                        <div className="snake-content animate-in">
                            <div className="page-title">
                                <h1>🐍 {t('snakeGame')}</h1>
                                <p>{t('snakeGameDesc')}</p>
                            </div>
                            <SnakeGame />
                        </div>
                    )}

                    {activeTab === 'tetris' && (
                        <div className="tetris-content animate-in">
                            <div className="page-title">
                                <h1>🎮 Tetris</h1>
                                <p>Classic block puzzle game - Stack and clear lines!</p>
                            </div>
                            <TetrisGame />
                        </div>
                    )}

                    {activeTab === 'game2048' && (
                        <div className="game2048-content animate-in">
                            <div className="page-title">
                                <h1>🔢 2048</h1>
                                <p>Slide and merge tiles to reach 2048!</p>
                            </div>
                            <Game2048 />
                        </div>
                    )}

                    {activeTab === 'calculator' && (
                        <div className="calculator-content animate-in">
                            <div className="page-title">
                                <h1>🧮 Calculator</h1>
                                <p>Basic and scientific calculator with history</p>
                            </div>
                            <Calculator />
                        </div>
                    )}

                    {activeTab === 'stopwatch' && (
                        <div className="stopwatch-content animate-in">
                            <div className="page-title">
                                <h1>⏱️ Stopwatch</h1>
                                <p>Precision timing with lap tracking</p>
                            </div>
                            <Stopwatch />
                        </div>
                    )}

                    {activeTab === 'habits' && (
                        <div className="habits-content animate-in">
                            <div className="page-title">
                                <h1>📅 Habit Tracker</h1>
                                <p>Build better habits, one day at a time</p>
                            </div>
                            <HabitTracker />
                        </div>
                    )}

                    {activeTab === 'kanban' && (
                        <div className="kanban-content animate-in">
                            <div className="page-title">
                                <h1>📌 Kanban Board</h1>
                                <p>Organize your tasks visually with drag and drop</p>
                            </div>
                            <KanbanBoard />
                        </div>
                    )}

                    {activeTab === 'terminal' && (
                        <div className="terminal-content animate-in">
                            <div className="page-title">
                                <h1>💻 {t('hackerTerminal')}</h1>
                                <p>{t('hackerTerminalDesc')}</p>
                            </div>
                            <HackerTerminal />
                        </div>
                    )}

                    {activeTab === 'support' && (
                        <div className="support-content animate-in">
                            <SupportCenter />
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="settings-content animate-in">
                            <div className="page-title">
                                <h1>⚙️ {t('settings')}</h1>
                                <p>{t('settingsDesc')}</p>
                            </div>
                            <Settings />
                        </div>
                    )}
                </div>
            </main>

            {/* Global Search Modal (Ctrl+K) */}
            <GlobalSearch
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onNavigate={(target) => {
                    if (target === 'tasks' || target === 'settings' || target === 'overview') {
                        handleTabChange(target)
                    }
                    // Handle other actions like create-task, start-focus, etc.
                }}
            />

            {/* Quick Actions FAB */}
            <QuickActions
                onAction={(actionId) => {
                    console.log('Quick action:', actionId)
                    if (actionId === 'create-task') {
                        handleTabChange('tasks')
                    } else if (actionId === 'start-focus') {
                        // Future: open focus timer
                        console.log('Starting focus timer...')
                    }
                }}
            />

            {/* Music Player */}
            <MusicPlayer />

            <Footer />


            <style>{`
                /* ═══════════════════════════════════════════════════════════════
                   PROFESSIONAL CYBERSECURITY BOOT SCREEN
                   Neon Blue + Green | Terminal Style | Fully Responsive
                   ═══════════════════════════════════════════════════════════════ */
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;700;900&display=swap');

                /* Main Boot Screen Container */
                .cyber-boot-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #0a0f1c;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    animation: boot-fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes boot-fade-in {
                    0% { opacity: 0; transform: scale(0.98); }
                    100% { opacity: 1; transform: scale(1); }
                }

                .cyber-boot-screen.fade-out {
                    animation: boot-fade-out 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                @keyframes boot-fade-out {
                    0% { opacity: 1; transform: scale(1); filter: brightness(1); }
                    30% { opacity: 1; transform: scale(1.01); filter: brightness(1.2); }
                    100% { opacity: 0; transform: scale(1.03); filter: brightness(1.5); pointer-events: none; }
                }

                /* Glitch Effect - Subtle & Clean */
                .cyber-boot-screen.glitch {
                    animation: glitch-effect 0.15s ease-in-out;
                }

                .cyber-boot-screen.glitch::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(
                        90deg,
                        rgba(0, 212, 255, 0.05) 0%,
                        rgba(0, 255, 136, 0.05) 50%,
                        rgba(0, 212, 255, 0.05) 100%
                    );
                    animation: glitch-color 0.1s ease-out;
                    z-index: 1000;
                    pointer-events: none;
                }

                @keyframes glitch-color {
                    0% { opacity: 0; }
                    50% { opacity: 0.3; }
                    100% { opacity: 0; }
                }

                @keyframes glitch-effect {
                    0%, 100% { 
                        transform: translate(0); 
                        filter: brightness(1);
                    }
                    25% { 
                        transform: translate(-1px, 1px); 
                        filter: brightness(1.1);
                    }
                    50% { 
                        transform: translate(1px, -1px); 
                        filter: brightness(1.2);
                    }
                    75% { 
                        transform: translate(-0.5px, 0.5px); 
                        filter: brightness(1.05);
                    }
                }

                /* Glitch Text Effect */
                .cyber-boot-screen.glitch .terminal-text {
                    animation: text-glitch 0.2s ease-in-out;
                }

                @keyframes text-glitch {
                    0%, 100% { text-shadow: 0 0 8px rgba(0, 212, 255, 0.5); }
                    25% { text-shadow: -2px 0 #ff0040, 2px 0 #00ff88; }
                    50% { text-shadow: 2px 0 #ff0040, -2px 0 #00d4ff; }
                    75% { text-shadow: -1px 0 #00ff88, 1px 0 #ff0040; }
                }

                /* Background Gradient - Enhanced */
                .cyber-boot-bg {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: 
                        radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 40%),
                        radial-gradient(ellipse at 80% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 40%),
                        radial-gradient(ellipse at 50% 50%, rgba(0, 100, 200, 0.08) 0%, transparent 60%),
                        linear-gradient(135deg, #050810 0%, #0a0f1c 25%, #0d1421 50%, #0a0f1c 75%, #050810 100%);
                    z-index: 0;
                    animation: bg-breathe 4s ease-in-out infinite;
                }

                @keyframes bg-breathe {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.85; }
                }

                /* Scanlines Overlay */
                .scanlines {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 0, 0, 0.1) 2px,
                        rgba(0, 0, 0, 0.1) 4px
                    );
                    pointer-events: none;
                    z-index: 100;
                    animation: scanline-move 10s linear infinite;
                }

                @keyframes scanline-move {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }

                /* Cyber Grid */
                .cyber-grid {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image:
                        linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    z-index: 1;
                    animation: grid-pulse 4s ease-in-out infinite;
                }

                @keyframes grid-pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                /* Floating Particles */
                .cyber-particles {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    z-index: 2;
                    pointer-events: none;
                }

                .cyber-particle {
                    position: absolute;
                    background: radial-gradient(circle, rgba(0, 255, 136, 0.8) 0%, rgba(0, 212, 255, 0.4) 50%, transparent 70%);
                    border-radius: 50%;
                    animation: particle-float 4s ease-in-out infinite;
                    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
                }

                @keyframes particle-float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-30px) translateX(10px) scale(1.2);
                        opacity: 0.8;
                    }
                    50% { 
                        transform: translateY(-50px) translateX(-10px) scale(0.8);
                        opacity: 1;
                    }
                    75% {
                        transform: translateY(-20px) translateX(5px) scale(1.1);
                        opacity: 0.6;
                    }
                }

                /* Main Container - PERFECTLY CENTERED */
                .cyber-boot-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    z-index: 10;
                    padding: 2rem;
                    max-width: 90vw;
                    width: 100%;
                    max-width: 600px;
                    gap: 1.5rem;
                }

                /* Logo with Spinning Rings */
                .cyber-logo {
                    width: 120px;
                    height: 120px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                }

                .logo-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 2px solid transparent;
                }

                .logo-ring.outer {
                    width: 100%;
                    height: 100%;
                    border-top-color: #00d4ff;
                    border-right-color: #00d4ff;
                    animation: ring-spin 3s linear infinite;
                    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.1);
                }

                .logo-ring.middle {
                    width: 75%;
                    height: 75%;
                    border-bottom-color: #00ff88;
                    border-left-color: #00ff88;
                    animation: ring-spin 2s linear infinite reverse;
                    box-shadow: 0 0 15px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1);
                }

                .logo-ring.inner {
                    width: 50%;
                    height: 50%;
                    border-top-color: #00d4ff;
                    border-right-color: #00ff88;
                    animation: ring-spin 1.5s linear infinite;
                    box-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
                }

                @keyframes ring-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .logo-core {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #00ff88;
                    animation: core-glow 2s ease-in-out infinite;
                }

                .logo-core svg {
                    width: 35px;
                    height: 35px;
                    filter: drop-shadow(0 0 10px #00ff88) drop-shadow(0 0 20px #00d4ff);
                }

                @keyframes core-glow {
                    0%, 100% { 
                        filter: drop-shadow(0 0 10px #00ff88) drop-shadow(0 0 20px #00d4ff);
                        transform: scale(1);
                    }
                    50% { 
                        filter: drop-shadow(0 0 20px #00ff88) drop-shadow(0 0 40px #00d4ff);
                        transform: scale(1.1);
                    }
                }

                /* Terminal Window */
                .terminal-window {
                    width: 100%;
                    background: rgba(10, 15, 28, 0.9);
                    border: 1px solid rgba(0, 212, 255, 0.3);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 
                        0 0 30px rgba(0, 212, 255, 0.2),
                        inset 0 0 30px rgba(0, 0, 0, 0.5);
                }

                .terminal-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 15px;
                    background: rgba(0, 0, 0, 0.4);
                    border-bottom: 1px solid rgba(0, 212, 255, 0.2);
                }

                .terminal-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                }

                .terminal-dot.red { background: #ff5f56; box-shadow: 0 0 8px #ff5f56; }
                .terminal-dot.yellow { background: #ffbd2e; box-shadow: 0 0 8px #ffbd2e; }
                .terminal-dot.green { background: #27ca40; box-shadow: 0 0 8px #27ca40; }

                .terminal-title {
                    margin-left: auto;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1px;
                }

                .terminal-body {
                    padding: 1rem 1.25rem;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.85rem;
                    min-height: 180px;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .terminal-line {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    animation: line-appear 0.3s ease-out;
                }

                @keyframes line-appear {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .terminal-prompt {
                    color: #00ff88;
                    font-weight: bold;
                    text-shadow: 0 0 10px #00ff88;
                    flex-shrink: 0;
                }

                .terminal-line.success .terminal-prompt {
                    color: #00ff88;
                }

                .terminal-text {
                    color: #00d4ff;
                    text-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
                    line-height: 1.5;
                }

                .terminal-line.success .terminal-text {
                    color: #00ff88;
                    text-shadow: 0 0 10px #00ff88;
                    font-weight: bold;
                }

                .terminal-line.complete {
                    opacity: 0.7;
                }

                .cursor {
                    color: #00ff88;
                    animation: cursor-blink 0.6s step-end infinite;
                }

                @keyframes cursor-blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }

                /* Progress Section */
                .cyber-progress-section {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .progress-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .progress-label {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: rgba(0, 212, 255, 0.8);
                    letter-spacing: 2px;
                }

                .progress-value {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 900;
                    color: #00ff88;
                    text-shadow: 0 0 15px #00ff88;
                }

                .cyber-progress-bar {
                    width: 100%;
                }

                .progress-track {
                    height: 6px;
                    background: rgba(0, 212, 255, 0.1);
                    border: 1px solid rgba(0, 212, 255, 0.3);
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #00d4ff 0%, #00ff88 50%, #00d4ff 100%);
                    background-size: 200% 100%;
                    border-radius: 10px;
                    transition: width 0.1s ease-out;
                    position: relative;
                    animation: progress-shine 1.5s linear infinite;
                    box-shadow: 0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
                }

                @keyframes progress-shine {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                .progress-glow {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                    background: #00ff88;
                    border-radius: 50%;
                    filter: blur(10px);
                    animation: glow-pulse 0.5s ease-in-out infinite alternate;
                }

                @keyframes glow-pulse {
                    from { opacity: 0.5; transform: translateY(-50%) scale(0.8); }
                    to { opacity: 1; transform: translateY(-50%) scale(1.2); }
                }

                .progress-status {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1px;
                    text-align: center;
                }

                /* Footer */
                .cyber-boot-footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                }

                .footer-item {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 500;
                    color: rgba(0, 212, 255, 0.6);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .footer-separator {
                    color: rgba(0, 255, 136, 0.4);
                    font-size: 0.5rem;
                }

                /* ═══════════════════════════════════════════════════════════
                   FULLY RESPONSIVE DESIGN - All Devices
                   ══════════════════════════════════════════════════════════ */

                /* Large Desktop (1400px+) */
                @media (min-width: 1400px) {
                    .cyber-boot-container {
                        max-width: 700px;
                        gap: 2rem;
                    }

                    .cyber-logo {
                        width: 140px;
                        height: 140px;
                    }

                    .logo-core svg {
                        width: 45px;
                        height: 45px;
                    }

                    .terminal-body {
                        font-size: 0.95rem;
                        min-height: 220px;
                        padding: 1.5rem;
                    }

                    .progress-value {
                        font-size: 1.5rem;
                    }

                    .footer-item {
                        font-size: 0.75rem;
                    }
                }

                /* Desktop (1200px - 1399px) */
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .cyber-boot-container {
                        max-width: 650px;
                        gap: 1.75rem;
                    }

                    .cyber-logo {
                        width: 130px;
                        height: 130px;
                    }

                    .terminal-body {
                        font-size: 0.9rem;
                        min-height: 200px;
                    }
                }

                /* Laptop (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .cyber-boot-container {
                        max-width: 600px;
                        gap: 1.5rem;
                        padding: 1.75rem;
                    }

                    .cyber-logo {
                        width: 115px;
                        height: 115px;
                    }

                    .logo-core svg {
                        width: 32px;
                        height: 32px;
                    }

                    .terminal-body {
                        font-size: 0.85rem;
                        min-height: 180px;
                    }
                }

                /* Tablet (768px - 991px) */
                @media (min-width: 768px) and (max-width: 991px) {
                    .cyber-boot-container {
                        max-width: 550px;
                        padding: 1.5rem;
                        gap: 1.25rem;
                    }

                    .cyber-logo {
                        width: 100px;
                        height: 100px;
                        margin-bottom: 0.75rem;
                    }

                    .logo-core {
                        width: 42px;
                        height: 42px;
                    }

                    .logo-core svg {
                        width: 28px;
                        height: 28px;
                    }

                    .terminal-body {
                        font-size: 0.8rem;
                        min-height: 165px;
                        padding: 1rem 1.25rem;
                    }

                    .terminal-title {
                        font-size: 0.65rem;
                    }

                    .progress-label {
                        font-size: 0.7rem;
                        letter-spacing: 1.5px;
                    }

                    .progress-value {
                        font-size: 1.1rem;
                    }

                    .footer-item {
                        font-size: 0.6rem;
                    }
                }

                /* Mobile Landscape / Small Tablet (576px - 767px) */
                @media (min-width: 576px) and (max-width: 767px) {
                    .cyber-boot-container {
                        max-width: 95vw;
                        padding: 1.25rem;
                        gap: 1rem;
                    }

                    .cyber-logo {
                        width: 90px;
                        height: 90px;
                        margin-bottom: 0.5rem;
                    }

                    .logo-ring {
                        border-width: 1.5px;
                    }

                    .logo-core {
                        width: 38px;
                        height: 38px;
                    }

                    .logo-core svg {
                        width: 24px;
                        height: 24px;
                    }

                    .terminal-window {
                        border-radius: 6px;
                    }

                    .terminal-header {
                        padding: 8px 12px;
                    }

                    .terminal-dot {
                        width: 10px;
                        height: 10px;
                    }

                    .terminal-title {
                        display: none;
                    }

                    .terminal-body {
                        font-size: 0.72rem;
                        min-height: 145px;
                        padding: 0.85rem 1rem;
                        gap: 0.4rem;
                    }

                    .terminal-line {
                        gap: 0.5rem;
                    }

                    .progress-header {
                        flex-direction: row;
                    }

                    .progress-label {
                        font-size: 0.65rem;
                        letter-spacing: 1px;
                    }

                    .progress-value {
                        font-size: 1rem;
                    }

                    .progress-track {
                        height: 5px;
                    }

                    .progress-status {
                        font-size: 0.7rem;
                    }

                    .cyber-boot-footer {
                        gap: 0.5rem;
                        margin-top: 0.75rem;
                    }

                    .footer-item {
                        font-size: 0.55rem;
                        letter-spacing: 1px;
                    }

                    .footer-separator {
                        font-size: 0.4rem;
                    }
                }

                /* Mobile Portrait (480px - 575px) */
                @media (min-width: 480px) and (max-width: 575px) {
                    .cyber-boot-container {
                        max-width: 95vw;
                        padding: 1rem;
                        gap: 0.85rem;
                    }

                    .cyber-logo {
                        width: 80px;
                        height: 80px;
                        margin-bottom: 0.5rem;
                    }

                    .logo-ring {
                        border-width: 1.5px;
                    }

                    .logo-core {
                        width: 34px;
                        height: 34px;
                    }

                    .logo-core svg {
                        width: 22px;
                        height: 22px;
                    }

                    .terminal-window {
                        border-radius: 5px;
                    }

                    .terminal-header {
                        padding: 7px 10px;
                    }

                    .terminal-dot {
                        width: 9px;
                        height: 9px;
                    }

                    .terminal-title {
                        display: none;
                    }

                    .terminal-body {
                        font-size: 0.65rem;
                        min-height: 130px;
                        padding: 0.75rem 0.85rem;
                        gap: 0.35rem;
                    }

                    .terminal-prompt {
                        font-size: 0.65rem;
                    }

                    .cursor {
                        font-size: 0.65rem;
                    }

                    .progress-label {
                        font-size: 0.6rem;
                        letter-spacing: 1px;
                    }

                    .progress-value {
                        font-size: 0.95rem;
                    }

                    .progress-track {
                        height: 4px;
                    }

                    .progress-glow {
                        width: 15px;
                        height: 15px;
                    }

                    .progress-status {
                        font-size: 0.65rem;
                    }

                    .cyber-boot-footer {
                        gap: 0.4rem;
                        margin-top: 0.5rem;
                    }

                    .footer-item {
                        font-size: 0.5rem;
                        letter-spacing: 1px;
                    }

                    .footer-separator {
                        font-size: 0.35rem;
                    }
                }

                /* Small Mobile (< 480px) */
                @media (max-width: 479px) {
                    .cyber-boot-screen {
                        padding: 0.5rem;
                    }

                    .cyber-boot-container {
                        max-width: 98vw;
                        padding: 0.75rem;
                        gap: 0.7rem;
                    }

                    .cyber-logo {
                        width: 65px;
                        height: 65px;
                        margin-bottom: 0.25rem;
                    }

                    .logo-ring {
                        border-width: 1px;
                    }

                    .logo-core {
                        width: 28px;
                        height: 28px;
                    }

                    .logo-core svg {
                        width: 18px;
                        height: 18px;
                    }

                    .terminal-window {
                        border-radius: 4px;
                    }

                    .terminal-header {
                        padding: 5px 8px;
                    }

                    .terminal-dot {
                        width: 7px;
                        height: 7px;
                    }

                    .terminal-title {
                        display: none;
                    }

                    .terminal-body {
                        font-size: 0.55rem;
                        min-height: 105px;
                        padding: 0.6rem 0.7rem;
                        gap: 0.25rem;
                    }

                    .terminal-line {
                        gap: 0.35rem;
                    }

                    .terminal-prompt {
                        font-size: 0.55rem;
                    }

                    .cursor {
                        font-size: 0.55rem;
                    }

                    .cyber-progress-section {
                        gap: 0.5rem;
                    }

                    .progress-label {
                        font-size: 0.5rem;
                        letter-spacing: 0.5px;
                    }

                    .progress-value {
                        font-size: 0.85rem;
                    }

                    .progress-track {
                        height: 3px;
                        border-radius: 5px;
                    }

                    .progress-fill {
                        border-radius: 5px;
                    }

                    .progress-glow {
                        width: 10px;
                        height: 10px;
                        filter: blur(6px);
                    }

                    .progress-status {
                        font-size: 0.55rem;
                    }

                    .cyber-boot-footer {
                        gap: 0.3rem;
                        margin-top: 0.4rem;
                    }

                    .footer-item {
                        font-size: 0.45rem;
                        letter-spacing: 0.5px;
                    }

                    .footer-separator {
                        font-size: 0.3rem;
                    }

                    /* Reduce particles on small screens for performance */
                    .cyber-particle {
                        opacity: 0.5;
                    }

                    /* Reduce grid visibility on small screens */
                    .cyber-grid {
                        opacity: 0.3;
                    }
                }

                /* Extra Small Mobile (< 360px) */
                @media (max-width: 359px) {
                    .cyber-boot-container {
                        padding: 0.5rem;
                        gap: 0.5rem;
                    }

                    .cyber-logo {
                        width: 55px;
                        height: 55px;
                    }

                    .logo-core {
                        width: 24px;
                        height: 24px;
                    }

                    .logo-core svg {
                        width: 15px;
                        height: 15px;
                    }

                    .terminal-body {
                        font-size: 0.5rem;
                        min-height: 90px;
                        padding: 0.5rem;
                    }

                    .progress-value {
                        font-size: 0.75rem;
                    }

                    .cyber-boot-footer {
                        display: none;
                    }
                }

                /* Landscape Mode Optimization */
                @media (max-height: 500px) and (orientation: landscape) {
                    .cyber-boot-container {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        max-width: 95vw;
                        gap: 1rem;
                    }

                    .cyber-logo {
                        width: 70px;
                        height: 70px;
                        margin: 0;
                    }

                    .terminal-window {
                        flex: 1;
                        min-width: 250px;
                        max-width: 400px;
                    }

                    .terminal-body {
                        min-height: 100px;
                        font-size: 0.65rem;
                    }

                    .cyber-progress-section {
                        width: 100%;
                        max-width: 350px;
                    }

                    .cyber-boot-footer {
                        width: 100%;
                    }
                }

                /* ═══ MAIN INTERFACE ═══ */
                .boot-main-interface {
                    position: relative;
                    z-index: 10;
                    display: grid;
                    grid-template-columns: 200px 550px 200px;
                    gap: 2rem;
                    align-items: center;
                    max-width: 1100px;
                    width: 95%;
                }

                /* ═══ HUD PANELS ═══ */
                .hud-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    align-items: center;
                }

                /* Neural Sphere */
                .neural-sphere {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    perspective: 800px;
                    transform-style: preserve-3d;
                }

                .sphere-orbit {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 2px solid transparent;
                    border-radius: 50%;
                }

                .orbit-1 { border-color: #00ff9d; animation: orbit-spin-x 3s linear infinite; box-shadow: 0 0 10px #00ff9d; }
                .orbit-2 { border-color: #00f0ff; animation: orbit-spin-y 4s linear infinite; box-shadow: 0 0 10px #00f0ff; }
                .orbit-3 { border-color: #ff00ff; animation: orbit-spin-z 5s linear infinite; box-shadow: 0 0 10px #ff00ff; }

                .sphere-core {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 30px;
                    height: 30px;
                    background: radial-gradient(circle, #fff 0%, #00f0ff 50%, transparent 70%);
                    border-radius: 50%;
                    animation: core-pulse 1.5s ease-in-out infinite alternate;
                    box-shadow: 0 0 30px #00f0ff;
                }

                @keyframes orbit-spin-x { from { transform: rotateX(0deg) rotateY(60deg); } to { transform: rotateX(360deg) rotateY(60deg); } }
                @keyframes orbit-spin-y { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
                @keyframes orbit-spin-z { from { transform: rotateZ(0deg) rotateX(60deg); } to { transform: rotateZ(360deg) rotateX(60deg); } }
                @keyframes core-pulse { from { box-shadow: 0 0 20px #00f0ff; } to { box-shadow: 0 0 50px #00f0ff; } }

                /* Radar */
                .radar-container {
                    width: 100px;
                    height: 100px;
                    border: 2px solid rgba(0, 255, 157, 0.3);
                    border-radius: 50%;
                    position: relative;
                    background: rgba(0, 20, 10, 0.4);
                    overflow: hidden;
                }

                .radar-grid-lines {
                    position: absolute;
                    width: 100%; height: 100%;
                    background: 
                        linear-gradient(rgba(0, 255, 157, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 157, 0.15) 1px, transparent 1px);
                    background-size: 20px 20px;
                }

                .radar-sweep {
                    position: absolute;
                    width: 100%; height: 100%;
                    background: conic-gradient(transparent 250deg, rgba(0, 255, 157, 0.5) 360deg);
                    animation: radar-rotate 2s linear infinite;
                }

                .radar-blip {
                    position: absolute;
                    width: 6px; height: 6px;
                    background: #00ff9d;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #00ff9d;
                    animation: blip-pulse 1s infinite;
                }
                .blip-1 { top: 30%; left: 60%; }
                .blip-2 { top: 65%; left: 35%; animation-delay: 0.5s; }

                @keyframes radar-rotate { to { transform: rotate(360deg); } }
                @keyframes blip-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

                /* Waveform */
                .waveform-analyzer {
                    display: flex;
                    gap: 3px;
                    align-items: flex-end;
                    height: 50px;
                    padding: 5px;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(0, 255, 157, 0.2);
                    border-radius: 4px;
                }

                .wave-bar {
                    width: 4px;
                    background: linear-gradient(to top, #00ff9d, #00f0ff);
                    animation: wave-dance 0.5s ease-in-out infinite alternate;
                    box-shadow: 0 0 5px #00ff9d;
                }

                @keyframes wave-dance {
                    from { height: 10px; }
                    to { height: 40px; }
                }

                /* ═══ TERMINAL ═══ */
                .boot-terminal {
                    background: rgba(5, 5, 10, 0.95);
                    border: 1px solid rgba(0, 255, 157, 0.3);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 0 40px rgba(0, 255, 157, 0.1);
                }

                .terminal-header {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 255, 157, 0.1);
                    border-bottom: 1px solid rgba(0, 255, 157, 0.2);
                }

                .terminal-buttons { display: flex; gap: 6px; }
                .terminal-buttons span { width: 12px; height: 12px; border-radius: 50%; }
                .btn-red { background: #ff5f56; }
                .btn-yellow { background: #ffbd2e; }
                .btn-green { background: #27ca40; }

                .terminal-title {
                    flex: 1;
                    text-align: center;
                    color: #00ff9d;
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.9rem;
                    letter-spacing: 2px;
                }

                .header-icon { width: 20px; height: 20px; color: #00ff9d; }

                .terminal-body {
                    padding: 1rem;
                    height: 300px;
                    overflow-y: auto;
                    font-size: 0.8rem;
                    color: #00ff9d;
                }

                .terminal-body::-webkit-scrollbar { width: 4px; }
                .terminal-body::-webkit-scrollbar-thumb { background: #00ff9d; }

                .boot-ascii {
                    color: #00f0ff;
                    font-size: 0.55rem;
                    line-height: 1.2;
                    margin-bottom: 0.5rem;
                    white-space: pre;
                    text-shadow: 0 0 10px #00f0ff;
                }

                .boot-subtitle {
                    color: #888;
                    font-size: 0.7rem;
                    margin-bottom: 0.5rem;
                    letter-spacing: 3px;
                }

                .log-divider { color: #333; margin-bottom: 0.5rem; }

                .log-entry {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 0.3rem;
                    opacity: 0;
                    animation: log-appear 0.3s forwards;
                }

                .log-timestamp { color: #555; }
                .log-status { color: #00ff9d; font-weight: bold; }
                .log-message { color: #aaa; }
                .log-entry.success .log-status { color: #00f0ff; text-shadow: 0 0 10px #00f0ff; }
                .log-entry.success .log-message { color: #fff; font-weight: bold; }

                .terminal-cursor { animation: cursor-blink 0.5s step-end infinite; color: #00ff9d; }

                @keyframes log-appear { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes cursor-blink { 50% { opacity: 0; } }

                .terminal-footer {
                    padding: 1rem;
                    border-top: 1px solid rgba(0, 255, 157, 0.2);
                    background: rgba(0, 0, 0, 0.3);
                }

                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    color: #00ff9d;
                    font-size: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                .progress-percent { color: #00f0ff; font-weight: bold; }

                .neon-progress-track {
                    height: 8px;
                    background: #111;
                    border: 1px solid #333;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .neon-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #00ff9d, #00f0ff);
                    position: relative;
                    transition: width 0.1s linear;
                    box-shadow: 0 0 15px #00ff9d;
                }

                .progress-spark {
                    position: absolute;
                    right: 0; top: -3px; bottom: -3px;
                    width: 3px;
                    background: #fff;
                    box-shadow: 0 0 15px #fff;
                }

                /* ═══ RIGHT PANEL ═══ */
                .system-stats { width: 100%; }

                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.75rem;
                    font-size: 0.7rem;
                }

                .stat-label { color: #888; width: 30px; }
                .stat-bar { flex: 1; height: 6px; background: #222; border-radius: 3px; overflow: hidden; }
                .stat-fill { height: 100%; background: linear-gradient(90deg, #00ff9d, #00f0ff); box-shadow: 0 0 5px #00ff9d; }
                .stat-value { color: #00ff9d; width: 40px; text-align: right; }

                .hex-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 4px;
                }

                .hex-cell {
                    width: 20px; height: 20px;
                    background: rgba(0, 255, 157, 0.1);
                    border: 1px solid rgba(0, 255, 157, 0.3);
                    animation: hex-pulse 2s infinite;
                }

                .hex-cell:nth-child(odd) { animation-delay: 0.5s; }

                @keyframes hex-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

                .threat-level {
                    text-align: center;
                    padding: 0.75rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(0, 255, 157, 0.2);
                    border-radius: 4px;
                }

                .threat-label { color: #888; font-size: 0.6rem; letter-spacing: 2px; }
                .threat-value { color: #00ff9d; font-size: 1rem; font-weight: bold; margin: 0.25rem 0; }
                .threat-indicator { width: 10px; height: 10px; border-radius: 50%; margin: 0 auto; }
                .threat-indicator.green { background: #00ff9d; box-shadow: 0 0 10px #00ff9d; animation: indicator-pulse 1s infinite; }

                @keyframes indicator-pulse { 0%, 100% { box-shadow: 0 0 5px #00ff9d; } 50% { box-shadow: 0 0 20px #00ff9d; } }

                /* ═══ CORNER HUD ═══ */
                .corner-hud {
                    position: absolute;
                    padding: 0.5rem 1rem;
                    border: 1px solid rgba(0, 255, 157, 0.3);
                    font-size: 0.7rem;
                    color: rgba(0, 255, 157, 0.7);
                    letter-spacing: 1px;
                    z-index: 50;
                }

                .corner-hud.top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; }
                .corner-hud.top-right { top: 20px; right: 20px; border-left: none; border-bottom: none; }
                .corner-hud.bottom-left { bottom: 20px; left: 20px; border-right: none; border-top: none; }
                .corner-hud.bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; }

                /* ═══ PARTICLES ═══ */
                .particle-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 5; }

                .particle-pulse {
                    position: absolute;
                    width: 4px; height: 4px;
                    background: #00ff9d;
                    border-radius: 50%;
                    animation: particle-float 4s ease-in-out infinite;
                    opacity: 0.6;
                }

                @keyframes particle-float {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
                }

                /* ═══ GLITCH OUT TRANSITION ═══ */
                @keyframes glitch-out {
                    0% { opacity: 1; filter: none; }
                    10% { transform: translateX(-5px); filter: hue-rotate(90deg); }
                    20% { transform: translateX(5px); filter: hue-rotate(-90deg); }
                    30% { transform: translateX(-3px); clip-path: inset(20% 0 40% 0); }
                    40% { transform: translateX(3px); clip-path: inset(60% 0 10% 0); }
                    50% { transform: translateX(0); clip-path: none; }
                    100% { opacity: 0; filter: blur(10px); transform: scale(1.1); }
                }

                /* ═══ RESPONSIVE ═══ */
                @media (max-width: 1024px) {
                    .boot-main-interface { grid-template-columns: 1fr; gap: 1rem; padding: 1rem; }
                    .hud-panel { flex-direction: row; justify-content: center; flex-wrap: wrap; }
                    .boot-terminal { max-width: 100%; }
                    .corner-hud { display: none; }
                }
                
                /* Layout */
                .dashboard-layout {
                    display: flex;
                    min-height: 100vh;
                    position: relative;
                }
                
                /* Animated Sidebar */
                .dashboard-sidebar {
                    width: 280px;
                    background: rgba(15, 15, 25, 0.95);
                    backdrop-filter: blur(20px);
                    border-right: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    z-index: 100;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .dashboard-sidebar.collapsed {
                    width: 80px;
                }
                
                .dashboard-sidebar.collapsed .brand-text,
                .dashboard-sidebar.collapsed .nav-label,
                .dashboard-sidebar.collapsed .user-mini-info,
                .dashboard-sidebar.collapsed .info-content {
                    opacity: 0;
                    width: 0;
                    overflow: hidden;
                }
                
                .sidebar-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .brand-logo {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    background: var(--gradient-primary);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                
                .brand-logo:hover {
                    transform: rotate(-5deg) scale(1.05);
                }
                
                .brand-logo svg {
                    width: 24px;
                    height: 24px;
                    color: white;
                }
                
                .brand-text {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    white-space: nowrap;
                    transition: opacity 0.3s ease;
                }
                
                /* Navigation */
                .sidebar-nav {
                    flex: 1;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    overflow-y: auto;
                }
                
                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.875rem 1rem;
                    background: transparent;
                    border: none;
                    border-radius: 12px;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-align: left;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    animation: slideIn 0.5s ease forwards;
                    opacity: 0;
                }
                
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .nav-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: var(--gradient-primary);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 12px;
                    z-index: -1;
                }
                
                .nav-item:hover {
                    color: var(--text-primary);
                    transform: translateX(4px);
                }
                
                .nav-item:hover::before {
                    opacity: 0.1;
                }
                
                .nav-item.active {
                    color: white;
                    background: var(--gradient-primary);
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                }
                
                .nav-item.active:hover {
                    transform: translateX(0);
                }
                
                .nav-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 24px;
                }
                
                .nav-label {
                    white-space: nowrap;
                    transition: opacity 0.3s ease, width 0.3s ease;
                }
                
                .nav-indicator {
                    position: absolute;
                    right: 8px;
                    width: 6px;
                    height: 6px;
                    background: white;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }
                
                /* Sidebar Info (Clock & Location) */
                .sidebar-info {
                    padding: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 10px;
                    margin-bottom: 0.5rem;
                }
                
                .info-item svg {
                    min-width: 16px;
                    color: var(--primary);
                }
                
                .info-content {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: opacity 0.3s ease, width 0.3s ease;
                }
                
                .info-value {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    white-space: nowrap;
                }
                
                .info-label {
                    font-size: 0.7rem;
                    color: var(--text-muted);
                    white-space: nowrap;
                }
                
                /* Sidebar Footer */
                .sidebar-footer {
                    padding: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .user-mini {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    min-width: 0;
                }
                
                .user-avatar-mini {
                    width: 40px;
                    height: 40px;
                    min-width: 40px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                }
                
                .user-avatar-mini img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-avatar-mini svg {
                    width: 20px;
                    height: 20px;
                    color: white;
                }
                
                .status-dot {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid var(--bg-primary);
                }
                
                .status-dot.online {
                    background: #22c55e;
                    animation: statusPulse 2s ease-in-out infinite;
                }
                
                .status-dot.offline {
                    background: #ef4444;
                }
                
                @keyframes statusPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
                    50% { box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1); }
                }
                
                .user-mini-info {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: opacity 0.3s ease, width 0.3s ease;
                }
                
                .user-mini-name {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                
                .user-mini-role {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    text-transform: capitalize;
                }
                
                .logout-btn {
                    padding: 0.625rem;
                    background: rgba(239, 68, 68, 0.1);
                    border: none;
                    border-radius: 10px;
                    color: #f87171;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .logout-btn:hover {
                    background: rgba(239, 68, 68, 0.2);
                    transform: scale(1.05);
                }
                
                /* Main Content */
                .dashboard-main {
                    flex: 1;
                    margin-left: 280px;
                    min-height: 100vh;
                    position: relative;
                    z-index: 1;
                    transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .dashboard-main.expanded {
                    margin-left: 80px;
                }
                
                /* Header */
                .dashboard-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 2rem;
                    background: rgba(15, 15, 25, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                
                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .menu-toggle {
                    padding: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .menu-toggle:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--text-primary);
                }
                
                /* Breadcrumbs */
                .breadcrumbs {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .breadcrumb-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .breadcrumb-link {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: color 0.2s;
                }
                
                .breadcrumb-link:hover {
                    color: var(--text-primary);
                }
                
                .breadcrumb-link.active {
                    color: var(--text-primary);
                    font-weight: 500;
                }
                
                .breadcrumb-item svg {
                    color: var(--text-muted);
                }
                
                /* Global Search */
                .header-center {
                    flex: 1;
                    max-width: 500px;
                    margin: 0 2rem;
                }
                
                .global-search {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.625rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }
                
                .global-search:hover,
                .global-search.focused {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: var(--primary);
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
                }
                
                .global-search svg {
                    color: var(--text-muted);
                    min-width: 18px;
                }
                
                .global-search input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    outline: none;
                }
                
                .global-search input::placeholder {
                    color: var(--text-muted);
                }
                
                .search-shortcut {
                    padding: 0.25rem 0.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-family: monospace;
                }
                
                /* Header Right */
                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                
                .status-indicator {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                
                .status-indicator.online {
                    color: #22c55e;
                }
                
                .status-indicator.offline {
                    color: #ef4444;
                }
                
                .status-dot-large {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: currentColor;
                    animation: statusPulse 2s ease-in-out infinite;
                }
                
                .date-display {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                
                .time-large {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .date-text {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }
                
                /* Page Content */
                .page-content {
                    padding: 2rem;
                    padding-bottom: 5rem; /* Space for footer */
                }
                
                .animate-in {
                    animation: fadeSlideIn 0.5s ease forwards;
                }
                
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .page-title {
                    margin-bottom: 2rem;
                }
                
                .page-title h1 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                
                .page-title p {
                    color: var(--text-muted);
                }
                
                /* Stats Grid */
                .dashboard-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                
                .stat-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.3s ease;
                    animation: fadeSlideIn 0.5s ease forwards;
                    opacity: 0;
                }
                
                .stat-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }
                
                .stat-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .stat-icon svg {
                    width: 28px;
                    height: 28px;
                }
                
                .stat-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .stat-value {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                
                .stat-label {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                /* Quick Actions */
                .quick-actions-section {
                    margin-bottom: 2rem;
                }
                
                .quick-actions-section h3 {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1rem;
                }
                
                .quick-action-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                
                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.25rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .action-btn:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--primary);
                    transform: translateY(-2px);
                }
                
                .action-btn.admin {
                    border-color: rgba(139, 92, 246, 0.3);
                    background: rgba(139, 92, 246, 0.1);
                }
                
                .action-btn svg {
                    width: 18px;
                    height: 18px;
                }
                
                /* User Info Card */
                .user-info-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }
                
                .user-avatar-large {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
                    overflow: hidden;
                }
                
                .user-avatar-large img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-avatar-large svg {
                    width: 36px;
                    height: 36px;
                    color: white;
                }
                
                .user-details {
                    flex: 1;
                }
                
                .user-details h2 {
                    font-size: 1.5rem;
                    margin-bottom: 0.25rem;
                }
                
                .user-details .user-email {
                    color: var(--text-muted);
                    margin-bottom: 0.75rem;
                }
                
                .user-badges {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .badge {
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: capitalize;
                }
                
                .badge.role-admin { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
                .badge.role-user { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
                .badge.role-guest { background: rgba(156, 163, 175, 0.2); color: #9ca3af; }
                .badge.verified { background: rgba(52, 211, 153, 0.2); color: #34d399; }
                
                .user-location-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .location-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                .location-item svg {
                    color: var(--primary);
                }
                
                .users-content,
                .chess-content {
                    max-width: 1200px;
                }

                /* ═══════════════════════════════════════════════════════════
                   DAILY OVERVIEW STYLES
                   ══════════════════════════════════════════════════════════ */
                
                .daily-overview-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .overview-card {
                    background: rgba(30, 30, 50, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.25rem;
                    transition: all 0.3s ease;
                }

                .overview-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
                    transform: translateY(-2px);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .card-header h3 {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #fff;
                }

                .task-count, .event-count, .focus-day {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    background: rgba(99, 102, 241, 0.2);
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                }

                /* ═══ TO-DO LIST STYLES ═══ */
                .add-todo {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .add-todo input {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0.6rem 0.875rem;
                    color: #fff;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                }

                .add-todo input:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
                }

                .add-todo button {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 1.25rem;
                    width: 40px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-todo button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
                }

                .todo-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    max-height: 250px;
                    overflow-y: auto;
                }

                .todo-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.625rem 0.75rem;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    cursor: grab;
                }

                .todo-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .todo-item.dragging {
                    opacity: 0.5;
                    background: rgba(99, 102, 241, 0.2);
                    cursor: grabbing;
                }

                .todo-item.done {
                    opacity: 0.6;
                }

                .todo-item.done .todo-text {
                    text-decoration: line-through;
                    color: rgba(255, 255, 255, 0.5);
                }

                .todo-drag-handle {
                    color: rgba(255, 255, 255, 0.3);
                    cursor: grab;
                    font-size: 0.875rem;
                    user-select: none;
                }

                .todo-checkbox {
                    background: transparent;
                    border: none;
                    font-size: 1rem;
                    cursor: pointer;
                    color: rgba(255, 255, 255, 0.5);
                    transition: all 0.2s ease;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .todo-checkbox.done {
                    color: #10b981;
                }

                .todo-checkbox.in-progress {
                    color: #f59e0b;
                }

                .todo-text {
                    flex: 1;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .priority-badge {
                    background: transparent;
                    border: 1px solid;
                    border-radius: 12px;
                    padding: 0.2rem 0.5rem;
                    font-size: 0.7rem;
                    font-weight: 500;
                    cursor: pointer;
                    text-transform: capitalize;
                }

                .priority-badge.low {
                    border-color: rgba(107, 114, 128, 0.5);
                    color: #9ca3af;
                }

                .priority-badge.medium {
                    border-color: rgba(59, 130, 246, 0.5);
                    color: #60a5fa;
                }

                .priority-badge.high {
                    border-color: rgba(249, 115, 22, 0.5);
                    color: #fb923c;
                }

                .priority-badge.critical {
                    border-color: rgba(239, 68, 68, 0.5);
                    color: #f87171;
                    animation: pulse-critical 2s infinite;
                }

                @keyframes pulse-critical {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                .todo-delete {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.3);
                    cursor: pointer;
                    font-size: 1.1rem;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    border-radius: 4px;
                }

                .todo-delete:hover {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.1);
                }

                /* ═══ CALENDAR EVENTS STYLES ═══ */
                .next-event {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 12px;
                    padding: 1rem;
                    margin-bottom: 1rem;
                }

                .next-event-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .next-label {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: rgba(255, 255, 255, 0.5);
                }

                .event-type {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 8px;
                    text-transform: capitalize;
                }

                .event-type.meeting {
                    background: rgba(59, 130, 246, 0.2);
                    color: #60a5fa;
                }

                .event-type.class {
                    background: rgba(16, 185, 129, 0.2);
                    color: #34d399;
                }

                .event-type.deadline {
                    background: rgba(239, 68, 68, 0.2);
                    color: #f87171;
                }

                .event-title {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.95rem;
                    color: #fff;
                    font-weight: 600;
                }

                .countdown-timer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                }

                .countdown-unit {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    padding: 0.5rem 0.6rem;
                    border-radius: 8px;
                    min-width: 45px;
                }

                .countdown-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #6366f1;
                    font-family: 'JetBrains Mono', monospace;
                }

                .countdown-label {
                    font-size: 0.6rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                }

                .countdown-separator {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.3);
                    font-weight: 700;
                }

                .events-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .event-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.625rem 0.75rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    border-left: 3px solid transparent;
                    transition: all 0.2s ease;
                }

                .event-item.meeting { border-left-color: #60a5fa; }
                .event-item.class { border-left-color: #34d399; }
                .event-item.deadline { border-left-color: #f87171; }

                .event-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .event-icon {
                    font-size: 1.25rem;
                }

                .event-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .event-name {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .event-time {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* ═══ FOCUS SUMMARY STYLES ═══ */
                .focus-stats {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .focus-stat {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.875rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                }

                .focus-stat.main {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
                    border: 1px solid rgba(99, 102, 241, 0.2);
                }

                .focus-icon {
                    font-size: 1.5rem;
                }

                .focus-info {
                    display: flex;
                    flex-direction: column;
                }

                .focus-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .focus-label {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .sparkline-container {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    padding: 0.875rem;
                }

                .sparkline-label {
                    display: block;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.5rem;
                }

                .sparkline {
                    width: 100%;
                    height: 40px;
                    margin-bottom: 0.5rem;
                }

                .sparkline-days {
                    display: flex;
                    justify-content: space-between;
                }

                .sparkline-days span {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .sparkline-days span.active {
                    color: #6366f1;
                    font-weight: 600;
                }

                /* Daily Overview Responsive */
                @media (max-width: 1200px) {
                    .daily-overview-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .focus-card {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 768px) {
                    .daily-overview-grid {
                        grid-template-columns: 1fr;
                    }
                    .focus-card {
                        grid-column: span 1;
                    }
                    .countdown-unit {
                        min-width: 40px;
                        padding: 0.4rem 0.5rem;
                    }
                    .countdown-value {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .overview-card {
                        padding: 1rem;
                    }
                    .card-header h3 {
                        font-size: 0.9rem;
                    }
                    .focus-stats {
                        flex-direction: column;
                    }
                    .todo-text {
                        font-size: 0.8rem;
                    }
                    .priority-badge {
                        font-size: 0.65rem;
                        padding: 0.15rem 0.4rem;
                    }
                }

                /* ═══════════════════════════════════════════════════════════
                   EXTENDED FEATURES STYLES
                   ══════════════════════════════════════════════════════════ */
                
                .extended-features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .extended-card {
                    background: rgba(30, 30, 50, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.25rem;
                    transition: all 0.3s ease;
                }

                .extended-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
                }

                /* Progress Task Monitoring */
                .projects-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .project-item {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all 0.2s ease;
                }

                .project-item.overdue { border-left: 3px solid #ef4444; }
                .project-item.delay { border-left: 3px solid #f59e0b; }
                .project-item.on-track { border-left: 3px solid #10b981; }

                .project-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.875rem;
                    cursor: pointer;
                }

                .project-header:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .project-info {
                    display: flex;
                    align-items: center;
                    gap: 0.875rem;
                }

                .circular-progress {
                    width: 45px;
                    height: 45px;
                    position: relative;
                }

                .circular-progress svg {
                    width: 100%;
                    height: 100%;
                }

                .progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 0.65rem;
                    font-weight: 600;
                    color: #fff;
                }

                .project-details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .project-name {
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: #fff;
                }

                .project-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .status-badge {
                    font-size: 0.65rem;
                    padding: 0.15rem 0.4rem;
                    border-radius: 8px;
                }

                .status-badge.on-track { background: rgba(16, 185, 129, 0.2); color: #34d399; }
                .status-badge.delay { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }
                .status-badge.overdue { background: rgba(239, 68, 68, 0.2); color: #f87171; }

                .eta {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .expand-icon {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .subtasks-list {
                    padding: 0 0.875rem 0.875rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.375rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 0.5rem;
                    margin-top: 0.25rem;
                }

                .subtask-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 0.25rem 0;
                }

                .subtask-item.done {
                    color: rgba(255, 255, 255, 0.4);
                    text-decoration: line-through;
                }

                .subtask-check {
                    color: #10b981;
                }

                /* Deadline Alert */
                .deadlines-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .deadline-item {
                    padding: 0.75rem;
                    border-radius: 8px;
                    border-left: 3px solid;
                }

                .deadline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .deadline-name {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #fff;
                }

                .deadline-tag {
                    font-size: 0.65rem;
                    padding: 0.15rem 0.4rem;
                    border-radius: 6px;
                    font-weight: 500;
                }

                .deadline-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .deadline-progress {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    flex: 1;
                }

                .mini-progress-bar {
                    flex: 1;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                }

                .mini-progress-fill {
                    height: 100%;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                .progress-percent {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.5);
                    min-width: 30px;
                }

                .deadline-countdown {
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                /* Smart Reminder */
                .reminders-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .reminder-item {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding: 0.625rem 0.75rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }

                .reminder-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .reminder-item.ai { border-left: 3px solid #8b5cf6; }
                .reminder-item.health { border-left: 3px solid #10b981; }
                .reminder-item.schedule { border-left: 3px solid #6366f1; }
                .reminder-item.work { border-left: 3px solid #f59e0b; }

                .reminder-icon {
                    font-size: 1.1rem;
                }

                .reminder-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .reminder-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .reminder-time {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .dismiss-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 1rem;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                }

                .dismiss-btn:hover {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.1);
                }

                /* Quick Notes */
                .add-note {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.75rem;
                }

                .add-note input {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0.5rem 0.75rem;
                    color: #fff;
                    font-size: 0.8rem;
                }

                .add-note input:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .note-color-picker {
                    display: flex;
                    gap: 0.25rem;
                }

                .color-btn {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .color-btn:hover, .color-btn.active {
                    transform: scale(1.2);
                    border-color: #fff;
                }

                .add-note-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                }

                .notes-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.5rem;
                    max-height: 200px;
                    overflow-y: auto;
                }

                .note-card {
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    padding: 0.625rem;
                    border-left: 3px solid;
                    position: relative;
                }

                .note-card.pinned {
                    background: rgba(99, 102, 241, 0.1);
                }

                .note-actions {
                    display: flex;
                    gap: 0.25rem;
                    position: absolute;
                    top: 0.375rem;
                    right: 0.375rem;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }

                .note-card:hover .note-actions {
                    opacity: 1;
                }

                .pin-btn, .delete-note-btn {
                    background: transparent;
                    border: none;
                    font-size: 0.75rem;
                    cursor: pointer;
                    padding: 0.125rem;
                    border-radius: 4px;
                }

                .pin-btn { color: rgba(255, 255, 255, 0.4); }
                .pin-btn.active { color: #fbbf24; }
                .delete-note-btn { color: rgba(255, 255, 255, 0.3); }
                .delete-note-btn:hover { color: #ef4444; }

                .note-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.85);
                    margin: 0;
                    padding-right: 2rem;
                }

                /* Mood Tracker */
                .mood-selector {
                    text-align: center;
                    margin-bottom: 0.75rem;
                }

                .mood-question {
                    display: block;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 0.625rem;
                }

                .mood-emojis {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .mood-emoji {
                    font-size: 1.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    border: 2px solid transparent;
                    border-radius: 50%;
                    width: 42px;
                    height: 42px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .mood-emoji:hover {
                    background: rgba(99, 102, 241, 0.2);
                    transform: scale(1.1);
                }

                .mood-emoji.selected {
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.3);
                    transform: scale(1.15);
                }

                .mood-note-input {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0.5rem 0.75rem;
                    color: #fff;
                    font-size: 0.8rem;
                    margin-bottom: 0.75rem;
                }

                .mood-note-input:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .ai-insight {
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.1));
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    border-radius: 10px;
                    padding: 0.75rem;
                    margin-bottom: 0.75rem;
                }

                .ai-badge {
                    font-size: 0.7rem;
                    background: rgba(139, 92, 246, 0.3);
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    color: #c4b5fd;
                }

                .insight-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.8);
                    margin: 0.5rem 0;
                }

                .suggested-activity {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }

                .activity-label {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .activity-value {
                    font-size: 0.75rem;
                    color: #a78bfa;
                    font-weight: 500;
                }

                .mood-chart {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    padding: 0.75rem;
                }

                .chart-label {
                    display: block;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.5rem;
                }

                .mood-bars {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    height: 60px;
                    gap: 0.25rem;
                }

                .mood-bar-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 1;
                    height: 100%;
                }

                .mood-bar {
                    width: 100%;
                    max-width: 24px;
                    border-radius: 4px 4px 0 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 0.125rem;
                    transition: height 0.3s ease;
                }

                .bar-emoji {
                    font-size: 0.75rem;
                }

                .bar-day {
                    font-size: 0.6rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: 0.25rem;
                }

                /* Extended Features Responsive */
                @media (max-width: 1200px) {
                    .extended-features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .mood-tracker-card {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 768px) {
                    .extended-features-grid {
                        grid-template-columns: 1fr;
                    }
                    .mood-tracker-card {
                        grid-column: span 1;
                    }
                    .mood-emoji {
                        width: 36px;
                        height: 36px;
                        font-size: 1.25rem;
                    }
                }

                @media (max-width: 480px) {
                    .extended-card {
                        padding: 1rem;
                    }
                    .project-header {
                        padding: 0.75rem;
                    }
                    .circular-progress {
                        width: 38px;
                        height: 38px;
                    }
                    .mood-emojis {
                        gap: 0.375rem;
                    }
                    .mood-emoji {
                        width: 32px;
                        height: 32px;
                        font-size: 1rem;
                    }
                }
                
                /* ═══════════════════════════════════════════════════════════
                   ENHANCED RESPONSIVE DASHBOARD STYLES - All Devices
                   ══════════════════════════════════════════════════════════ */

                /* Large Desktop / Ultra-wide (1600px+) */
                @media (min-width: 1600px) {
                    .dashboard-main {
                        margin-left: 300px;
                    }
                    
                    .dashboard-sidebar {
                        width: 300px;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2rem;
                    }
                    
                    .stat-card {
                        padding: 2rem;
                    }
                    
                    .stat-value {
                        font-size: 2.5rem;
                    }
                    
                    .page-content {
                        padding: 2.5rem;
                    }
                    
                    .page-title h1 {
                        font-size: 2rem;
                    }
                }

                /* Desktop (1200px - 1599px) */
                @media (min-width: 1200px) and (max-width: 1599px) {
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                    
                    .page-content {
                        padding: 2rem;
                    }
                }

                /* Laptop / Small Desktop (1024px - 1199px) */
                @media (min-width: 1024px) and (max-width: 1199px) {
                    .dashboard-sidebar {
                        width: 240px;
                    }
                    
                    .dashboard-sidebar.collapsed {
                        width: 70px;
                    }
                    
                    .dashboard-main {
                        margin-left: 240px;
                    }
                    
                    .dashboard-main.expanded {
                        margin-left: 70px;
                    }
                    
                    .header-center {
                        max-width: 280px;
                        margin: 0 1rem;
                    }
                    
                    .date-display {
                        display: none;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.25rem;
                    }
                    
                    .page-content {
                        padding: 1.5rem;
                    }

                    .brand-text {
                        font-size: 1.1rem;
                    }
                    
                    .nav-item {
                        padding: 0.75rem 0.875rem;
                        font-size: 0.8rem;
                    }
                }

                /* Tablet Landscape (768px - 1023px) */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .dashboard-sidebar {
                        width: 220px;
                    }
                    
                    .dashboard-sidebar.collapsed {
                        width: 65px;
                    }
                    
                    .dashboard-main {
                        margin-left: 220px;
                    }
                    
                    .dashboard-main.expanded {
                        margin-left: 65px;
                    }
                    
                    .header-center {
                        max-width: 220px;
                        margin: 0 0.75rem;
                    }
                    
                    .global-search {
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .global-search input {
                        font-size: 0.8rem;
                    }
                    
                    .search-shortcut {
                        display: none;
                    }
                    
                    .date-display {
                        display: none;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    
                    .stat-card {
                        padding: 1.25rem;
                    }
                    
                    .stat-value {
                        font-size: 1.75rem;
                    }
                    
                    .stat-icon {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .page-content {
                        padding: 1.25rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.4rem;
                    }
                    
                    .quick-action-buttons {
                        flex-wrap: wrap;
                    }
                    
                    .action-btn {
                        flex: 1 1 calc(50% - 0.5rem);
                        min-width: 140px;
                    }
                    
                    .user-info-card {
                        padding: 1.25rem;
                    }
                    
                    .brand-text {
                        font-size: 1rem;
                    }
                    
                    .nav-item {
                        padding: 0.7rem 0.75rem;
                        font-size: 0.8rem;
                    }
                    
                    .sidebar-info {
                        padding: 0.75rem;
                    }
                    
                    .info-item {
                        padding: 0.5rem;
                    }
                    
                    .info-value {
                        font-size: 0.8rem;
                    }
                }

                /* Tablet Portrait / Mobile Landscape (576px - 767px) */
                @media (min-width: 576px) and (max-width: 767px) {
                    .dashboard-sidebar {
                        position: fixed;
                        left: -100%;
                        width: 280px;
                        transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: 100;
                    }
                    
                    .dashboard-sidebar.mobile-open {
                        left: 0;
                    }
                    
                    .sidebar-overlay {
                        display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.6);
                        backdrop-filter: blur(4px);
                        z-index: 99;
                        transition: opacity 0.3s ease;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                        width: 100%;
                    }
                    
                    .dashboard-header {
                        padding: 0.75rem 1rem;
                        flex-wrap: nowrap;
                        gap: 0.75rem;
                    }
                    
                    .header-left {
                        flex: 0 0 auto;
                    }
                    
                    .header-center {
                        flex: 1;
                        max-width: none;
                        margin: 0;
                    }
                    
                    .global-search {
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .search-shortcut {
                        display: none;
                    }
                    
                    .header-right {
                        gap: 0.5rem;
                    }
                    
                    .status-indicator span {
                        display: none;
                    }
                    
                    .status-indicator {
                        padding: 0.5rem;
                        border-radius: 50%;
                    }
                    
                    .page-content {
                        padding: 1rem;
                    }
                    
                    .page-title {
                        margin-bottom: 1.25rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.3rem;
                    }
                    
                    .page-title p {
                        font-size: 0.85rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.875rem;
                    }
                    
                    .stat-card {
                        padding: 1rem;
                    }
                    
                    .stat-icon {
                        width: 44px;
                        height: 44px;
                    }
                    
                    .stat-icon svg {
                        width: 22px;
                        height: 22px;
                    }
                    
                    .stat-value {
                        font-size: 1.5rem;
                    }
                    
                    .stat-label {
                        font-size: 0.8rem;
                    }
                    
                    .quick-action-buttons {
                        flex-wrap: wrap;
                    }
                    
                    .action-btn {
                        flex: 1 1 100%;
                        justify-content: center;
                    }
                    
                    .user-info-card {
                        flex-direction: row;
                        padding: 1.25rem;
                        gap: 1rem;
                    }
                    
                    .user-avatar-large {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .user-details h2 {
                        font-size: 1.15rem;
                    }
                    
                    .breadcrumbs {
                        display: none;
                    }
                    
                    .menu-toggle {
                        display: flex;
                    }
                }

                /* Mobile Large (480px - 575px) */
                @media (min-width: 480px) and (max-width: 575px) {
                    .dashboard-sidebar {
                        position: fixed;
                        left: -100%;
                        width: 260px;
                        transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: 100;
                    }
                    
                    .dashboard-sidebar.mobile-open {
                        left: 0;
                    }
                    
                    .sidebar-overlay {
                        display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.6);
                        z-index: 99;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                        width: 100%;
                    }
                    
                    .dashboard-header {
                        padding: 0.625rem 0.875rem;
                    }
                    
                    .header-center {
                        display: none;
                    }
                    
                    .header-right {
                        gap: 0.375rem;
                    }
                    
                    .page-content {
                        padding: 0.875rem;
                    }
                    
                    .page-title {
                        margin-bottom: 1rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.2rem;
                    }
                    
                    .page-title p {
                        font-size: 0.8rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    
                    .stat-card {
                        padding: 0.875rem;
                        flex-direction: row;
                        align-items: center;
                    }
                    
                    .stat-icon {
                        width: 42px;
                        height: 42px;
                    }
                    
                    .stat-icon svg {
                        width: 20px;
                        height: 20px;
                    }
                    
                    .stat-info {
                        flex: 1;
                    }
                    
                    .stat-value {
                        font-size: 1.4rem;
                    }
                    
                    .stat-label {
                        font-size: 0.75rem;
                    }
                    
                    .quick-action-buttons {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .action-btn {
                        justify-content: center;
                        width: 100%;
                        padding: 0.75rem 1rem;
                        font-size: 0.8rem;
                    }
                    
                    .user-info-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 1.25rem;
                        gap: 0.875rem;
                    }
                    
                    .user-avatar-large {
                        width: 65px;
                        height: 65px;
                    }
                    
                    .user-details h2 {
                        font-size: 1.1rem;
                    }
                    
                    .user-details .user-email {
                        font-size: 0.8rem;
                    }
                    
                    .user-location-info {
                        align-items: center;
                    }
                    
                    .breadcrumbs {
                        display: none;
                    }
                    
                    .menu-toggle {
                        display: flex;
                    }

                    .badge {
                        font-size: 0.65rem;
                        padding: 0.2rem 0.5rem;
                    }
                }

                /* Mobile Medium - iPhone 12/13/14 (430px - 479px) */
                @media (min-width: 430px) and (max-width: 479px) {
                    .dashboard-sidebar {
                        position: fixed;
                        left: -100%;
                        width: 250px;
                        z-index: 100;
                    }
                    
                    .dashboard-sidebar.mobile-open {
                        left: 0;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                    }
                    
                    .dashboard-header {
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .header-center {
                        display: none;
                    }
                    
                    .page-content {
                        padding: 0.75rem;
                    }
                    
                    .page-title {
                        margin-bottom: 0.875rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.1rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: 1fr;
                        gap: 0.625rem;
                    }
                    
                    .stat-card {
                        padding: 0.75rem;
                    }
                    
                    .stat-icon {
                        width: 40px;
                        height: 40px;
                    }
                    
                    .stat-icon svg {
                        width: 18px;
                        height: 18px;
                    }
                    
                    .stat-value {
                        font-size: 1.25rem;
                    }
                    
                    .stat-label {
                        font-size: 0.7rem;
                    }
                    
                    .quick-actions-section h3 {
                        font-size: 0.85rem;
                    }
                    
                    .action-btn {
                        padding: 0.625rem 0.875rem;
                        font-size: 0.75rem;
                    }
                    
                    .user-info-card {
                        padding: 1rem;
                    }
                    
                    .user-avatar-large {
                        width: 55px;
                        height: 55px;
                    }
                    
                    .user-details h2 {
                        font-size: 1rem;
                    }
                    
                    .user-details .user-email {
                        font-size: 0.75rem;
                    }
                    
                    .location-item {
                        font-size: 0.7rem;
                    }
                }

                /* Mobile Small - Standard (375px - 429px) */
                @media (min-width: 375px) and (max-width: 429px) {
                    .dashboard-sidebar {
                        width: 240px;
                    }
                    
                    .dashboard-header {
                        padding: 0.5rem 0.625rem;
                    }
                    
                    .page-content {
                        padding: 0.625rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1rem;
                    }
                    
                    .page-title p {
                        font-size: 0.75rem;
                    }
                    
                    .dashboard-stats-grid {
                        gap: 0.5rem;
                    }
                    
                    .stat-card {
                        padding: 0.625rem;
                        gap: 0.625rem;
                    }
                    
                    .stat-icon {
                        width: 36px;
                        height: 36px;
                    }
                    
                    .stat-icon svg {
                        width: 16px;
                        height: 16px;
                    }
                    
                    .stat-value {
                        font-size: 1.15rem;
                    }
                    
                    .stat-label {
                        font-size: 0.65rem;
                    }
                    
                    .user-avatar-large {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .user-avatar-large svg {
                        width: 24px;
                        height: 24px;
                    }
                    
                    .user-details h2 {
                        font-size: 0.95rem;
                    }
                    
                    .action-btn {
                        padding: 0.5rem 0.75rem;
                        font-size: 0.7rem;
                    }
                    
                    .badge {
                        font-size: 0.6rem;
                        padding: 0.15rem 0.4rem;
                    }
                }

                /* Mobile Extra Small - iPhone SE (< 375px) */
                @media (max-width: 374px) {
                    .dashboard-sidebar {
                        width: 220px;
                    }
                    
                    .sidebar-brand {
                        padding: 0.75rem;
                    }
                    
                    .brand-text {
                        font-size: 0.9rem;
                    }
                    
                    .nav-item {
                        padding: 0.5rem 0.625rem;
                        font-size: 0.75rem;
                    }
                    
                    .dashboard-header {
                        padding: 0.375rem 0.5rem;
                    }
                    
                    .menu-toggle {
                        padding: 0.375rem;
                    }
                    
                    .page-content {
                        padding: 0.5rem;
                    }
                    
                    .page-title {
                        margin-bottom: 0.625rem;
                    }
                    
                    .page-title h1 {
                        font-size: 0.9rem;
                    }
                    
                    .page-title p {
                        font-size: 0.7rem;
                    }
                    
                    .dashboard-stats-grid {
                        gap: 0.375rem;
                    }
                    
                    .stat-card {
                        padding: 0.5rem;
                        gap: 0.5rem;
                    }
                    
                    .stat-icon {
                        width: 32px;
                        height: 32px;
                    }
                    
                    .stat-icon svg {
                        width: 14px;
                        height: 14px;
                    }
                    
                    .stat-value {
                        font-size: 1rem;
                    }
                    
                    .stat-label {
                        font-size: 0.6rem;
                    }
                    
                    .quick-actions-section h3 {
                        font-size: 0.75rem;
                    }
                    
                    .action-btn {
                        padding: 0.4rem 0.625rem;
                        font-size: 0.65rem;
                    }
                    
                    .user-info-card {
                        padding: 0.75rem;
                        gap: 0.625rem;
                    }
                    
                    .user-avatar-large {
                        width: 45px;
                        height: 45px;
                    }
                    
                    .user-avatar-large svg {
                        width: 20px;
                        height: 20px;
                    }
                    
                    .user-details h2 {
                        font-size: 0.875rem;
                    }
                    
                    .user-details .user-email {
                        font-size: 0.65rem;
                    }
                    
                    .badge {
                        font-size: 0.55rem;
                        padding: 0.1rem 0.3rem;
                    }
                    
                    .location-item {
                        font-size: 0.6rem;
                    }
                    
                    .header-right {
                        gap: 0.25rem;
                    }
                    
                    .status-indicator {
                        padding: 0.25rem;
                    }
                }

                /* Landscape Mode for Mobile */
                @media (max-height: 480px) and (orientation: landscape) {
                    .dashboard-header {
                        padding: 0.375rem 0.75rem;
                    }
                    
                    .page-content {
                        padding: 0.5rem 1rem;
                    }
                    
                    .page-title {
                        margin-bottom: 0.5rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 0.5rem;
                    }
                    
                    .stat-card {
                        padding: 0.5rem;
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .stat-icon {
                        width: 30px;
                        height: 30px;
                    }
                    
                    .stat-value {
                        font-size: 1rem;
                    }
                    
                    .stat-label {
                        font-size: 0.6rem;
                    }
                    
                    .user-info-card {
                        flex-direction: row;
                        padding: 0.75rem;
                    }
                    
                    .quick-action-buttons {
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    
                    .action-btn {
                        flex: 1 1 auto;
                        min-width: 100px;
                    }
                }

                /* Chess/Game Responsive */
                @media (max-width: 768px) {
                    .chess-game,
                    .tictactoe-game,
                    .memory-game {
                        padding: 0.5rem;
                    }
                }

                /* Print Styles */
                @media print {
                    .dashboard-sidebar,
                    .sidebar-overlay,
                    .header-right,
                    .menu-toggle {
                        display: none !important;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                    }
                    
                    .page-content {
                        padding: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default Dashboard
