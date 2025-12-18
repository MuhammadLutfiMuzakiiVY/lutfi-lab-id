import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const HabitTracker = () => {
    const { t } = useLanguage()
    const [habits, setHabits] = useState(() => {
        const saved = localStorage.getItem('habitTracker_habits')
        return saved ? JSON.parse(saved) : [
            { id: 1, name: '💪 Exercise', color: '#22c55e', completedDates: [], streak: 0 },
            { id: 2, name: '📚 Read 30 min', color: '#6366f1', completedDates: [], streak: 0 },
            { id: 3, name: '💧 Drink 8 glasses', color: '#0ea5e9', completedDates: [], streak: 0 },
            { id: 4, name: '🧘 Meditate', color: '#a855f7', completedDates: [], streak: 0 }
        ]
    })
    const [newHabitName, setNewHabitName] = useState('')
    const [newHabitColor, setNewHabitColor] = useState('#6366f1')
    const [showAddForm, setShowAddForm] = useState(false)
    const [viewMode, setViewMode] = useState('week') // 'week' or 'month'

    const colors = ['#22c55e', '#6366f1', '#0ea5e9', '#a855f7', '#f59e0b', '#ef4444', '#ec4899', '#14b8a6']

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('habitTracker_habits', JSON.stringify(habits))
    }, [habits])

    // Get date string
    const getDateString = (date) => {
        return date.toISOString().split('T')[0]
    }

    // Get today's date string
    const today = getDateString(new Date())

    // Toggle habit completion for today
    const toggleHabit = (habitId) => {
        setHabits(habits.map(habit => {
            if (habit.id === habitId) {
                const isCompleted = habit.completedDates.includes(today)
                const newCompletedDates = isCompleted
                    ? habit.completedDates.filter(d => d !== today)
                    : [...habit.completedDates, today]

                // Calculate streak
                const streak = calculateStreak(newCompletedDates)

                return { ...habit, completedDates: newCompletedDates, streak }
            }
            return habit
        }))
    }

    // Calculate streak
    const calculateStreak = (completedDates) => {
        if (!completedDates.length) return 0

        const sortedDates = [...completedDates].sort().reverse()
        let streak = 0
        let checkDate = new Date()

        // Check if today is completed
        if (!completedDates.includes(getDateString(checkDate))) {
            checkDate.setDate(checkDate.getDate() - 1)
        }

        while (completedDates.includes(getDateString(checkDate))) {
            streak++
            checkDate.setDate(checkDate.getDate() - 1)
        }

        return streak
    }

    // Add new habit
    const addHabit = () => {
        if (!newHabitName.trim()) return

        const newHabit = {
            id: Date.now(),
            name: newHabitName.trim(),
            color: newHabitColor,
            completedDates: [],
            streak: 0
        }

        setHabits([...habits, newHabit])
        setNewHabitName('')
        setShowAddForm(false)
    }

    // Delete habit
    const deleteHabit = (habitId) => {
        if (confirm('Delete this habit?')) {
            setHabits(habits.filter(h => h.id !== habitId))
        }
    }

    // Get week days
    const getWeekDays = () => {
        const days = []
        const startOfWeek = new Date()
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())

        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek)
            date.setDate(startOfWeek.getDate() + i)
            days.push({
                date: getDateString(date),
                dayName: date.toLocaleDateString('id-ID', { weekday: 'short' }),
                dayNum: date.getDate(),
                isToday: getDateString(date) === today
            })
        }
        return days
    }

    // Get month days for heatmap
    const getMonthDays = () => {
        const days = []
        const date = new Date()
        date.setDate(date.getDate() - 30)

        for (let i = 0; i <= 30; i++) {
            const d = new Date(date)
            d.setDate(date.getDate() + i)
            days.push({
                date: getDateString(d),
                isToday: getDateString(d) === today
            })
        }
        return days
    }

    // Get completion rate
    const getCompletionRate = (habit) => {
        const last7Days = getWeekDays().map(d => d.date)
        const completed = last7Days.filter(d => habit.completedDates.includes(d)).length
        return Math.round((completed / 7) * 100)
    }

    // Get total completed today
    const getTodayProgress = () => {
        const completedToday = habits.filter(h => h.completedDates.includes(today)).length
        return { completed: completedToday, total: habits.length }
    }

    const weekDays = getWeekDays()
    const monthDays = getMonthDays()
    const todayProgress = getTodayProgress()

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>📅 Habit Tracker</h2>
                <p style={styles.subtitle}>Build better habits, one day at a time</p>
            </div>

            {/* Today's Progress */}
            <div style={styles.progressCard}>
                <div style={styles.progressCircle}>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke="rgba(99, 102, 241, 0.2)"
                            strokeWidth="8"
                        />
                        <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${(todayProgress.completed / todayProgress.total) * 251.2} 251.2`}
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                    <div style={styles.progressText}>
                        <span style={styles.progressNum}>{todayProgress.completed}/{todayProgress.total}</span>
                        <span style={styles.progressLabel}>Today</span>
                    </div>
                </div>
                <div style={styles.progressStats}>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>{Math.max(...habits.map(h => h.streak))}</span>
                        <span style={styles.statLabel}>🔥 Best Streak</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>
                            {Math.round(habits.reduce((acc, h) => acc + getCompletionRate(h), 0) / habits.length || 0)}%
                        </span>
                        <span style={styles.statLabel}>📊 Weekly Avg</span>
                    </div>
                </div>
            </div>

            {/* View Toggle */}
            <div style={styles.viewToggle}>
                <button
                    onClick={() => setViewMode('week')}
                    style={{ ...styles.viewBtn, ...(viewMode === 'week' ? styles.viewBtnActive : {}) }}
                >
                    Week
                </button>
                <button
                    onClick={() => setViewMode('month')}
                    style={{ ...styles.viewBtn, ...(viewMode === 'month' ? styles.viewBtnActive : {}) }}
                >
                    Month
                </button>
            </div>

            {/* Habits List */}
            <div style={styles.habitsList}>
                {habits.map(habit => (
                    <div key={habit.id} style={styles.habitCard}>
                        <div style={styles.habitHeader}>
                            <div style={styles.habitInfo}>
                                <div style={{ ...styles.habitDot, background: habit.color }} />
                                <span style={styles.habitName}>{habit.name}</span>
                            </div>
                            <div style={styles.habitActions}>
                                <span style={styles.streakBadge}>
                                    🔥 {habit.streak}
                                </span>
                                <button
                                    onClick={() => deleteHabit(habit.id)}
                                    style={styles.deleteBtn}
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {viewMode === 'week' ? (
                            <div style={styles.weekGrid}>
                                {weekDays.map(day => {
                                    const isCompleted = habit.completedDates.includes(day.date)
                                    return (
                                        <div
                                            key={day.date}
                                            onClick={() => day.date <= today && toggleHabit(habit.id)}
                                            style={{
                                                ...styles.dayCell,
                                                ...(day.isToday ? styles.todayCell : {}),
                                                cursor: day.date <= today ? 'pointer' : 'default',
                                                opacity: day.date > today ? 0.3 : 1
                                            }}
                                        >
                                            <span style={styles.dayName}>{day.dayName}</span>
                                            <div style={{
                                                ...styles.dayCheck,
                                                background: isCompleted ? habit.color : 'rgba(255,255,255,0.1)',
                                                boxShadow: isCompleted ? `0 0 10px ${habit.color}` : 'none'
                                            }}>
                                                {isCompleted && '✓'}
                                            </div>
                                            <span style={styles.dayNum}>{day.dayNum}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div style={styles.heatmapGrid}>
                                {monthDays.map(day => {
                                    const isCompleted = habit.completedDates.includes(day.date)
                                    return (
                                        <div
                                            key={day.date}
                                            style={{
                                                ...styles.heatmapCell,
                                                background: isCompleted ? habit.color : 'rgba(255,255,255,0.1)',
                                                boxShadow: isCompleted ? `0 0 5px ${habit.color}40` : 'none',
                                                border: day.isToday ? `2px solid ${habit.color}` : 'none'
                                            }}
                                            title={day.date}
                                        />
                                    )
                                })}
                            </div>
                        )}

                        <div style={styles.habitFooter}>
                            <span style={styles.completionRate}>
                                {getCompletionRate(habit)}% this week
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Habit Form */}
            {showAddForm ? (
                <div style={styles.addForm}>
                    <input
                        type="text"
                        value={newHabitName}
                        onChange={(e) => setNewHabitName(e.target.value)}
                        placeholder="New habit name..."
                        style={styles.addInput}
                        autoFocus
                    />
                    <div style={styles.colorPicker}>
                        {colors.map(color => (
                            <button
                                key={color}
                                onClick={() => setNewHabitColor(color)}
                                style={{
                                    ...styles.colorBtn,
                                    background: color,
                                    border: newHabitColor === color ? '3px solid #fff' : 'none'
                                }}
                            />
                        ))}
                    </div>
                    <div style={styles.addFormActions}>
                        <button onClick={addHabit} style={styles.confirmBtn}>Add Habit</button>
                        <button onClick={() => setShowAddForm(false)} style={styles.cancelBtn}>Cancel</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => setShowAddForm(true)} style={styles.addBtn}>
                    + Add New Habit
                </button>
            )}
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
        maxWidth: '550px',
        margin: '0 auto'
    },
    header: {
        textAlign: 'center',
        marginBottom: '25px'
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #22c55e, #6366f1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    subtitle: {
        color: '#94a3b8',
        fontSize: '14px',
        marginTop: '5px'
    },
    progressCard: {
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        marginBottom: '20px'
    },
    progressCircle: {
        position: 'relative'
    },
    progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    progressNum: {
        display: 'block',
        fontSize: '22px',
        fontWeight: '700',
        color: '#fff'
    },
    progressLabel: {
        fontSize: '12px',
        color: '#94a3b8'
    },
    progressStats: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    statItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    statValue: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#fff'
    },
    statLabel: {
        fontSize: '13px',
        color: '#94a3b8'
    },
    viewToggle: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px'
    },
    viewBtn: {
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#94a3b8',
        border: 'none',
        padding: '8px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'all 0.2s'
    },
    viewBtnActive: {
        background: 'rgba(99, 102, 241, 0.3)',
        color: '#a5b4fc'
    },
    habitsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginBottom: '20px'
    },
    habitCard: {
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '14px',
        padding: '15px'
    },
    habitHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px'
    },
    habitInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    habitDot: {
        width: '12px',
        height: '12px',
        borderRadius: '50%'
    },
    habitName: {
        color: '#fff',
        fontSize: '16px',
        fontWeight: '600'
    },
    habitActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    streakBadge: {
        background: 'rgba(249, 115, 22, 0.2)',
        color: '#fb923c',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600'
    },
    deleteBtn: {
        background: 'transparent',
        border: 'none',
        color: '#ef4444',
        fontSize: '18px',
        cursor: 'pointer',
        opacity: 0.6,
        transition: 'opacity 0.2s'
    },
    weekGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '8px'
    },
    dayCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
    },
    todayCell: {
        background: 'rgba(99, 102, 241, 0.1)',
        borderRadius: '8px',
        padding: '5px'
    },
    dayName: {
        fontSize: '10px',
        color: '#64748b'
    },
    dayCheck: {
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontWeight: '700',
        transition: 'all 0.2s'
    },
    dayNum: {
        fontSize: '11px',
        color: '#94a3b8'
    },
    heatmapGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '4px'
    },
    heatmapCell: {
        aspectRatio: '1',
        borderRadius: '4px',
        transition: 'all 0.2s'
    },
    habitFooter: {
        marginTop: '12px',
        textAlign: 'right'
    },
    completionRate: {
        fontSize: '12px',
        color: '#64748b'
    },
    addForm: {
        background: 'rgba(99, 102, 241, 0.1)',
        borderRadius: '12px',
        padding: '15px'
    },
    addInput: {
        width: '100%',
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '8px',
        padding: '12px',
        color: '#fff',
        fontSize: '14px',
        marginBottom: '10px',
        outline: 'none'
    },
    colorPicker: {
        display: 'flex',
        gap: '8px',
        marginBottom: '15px'
    },
    colorBtn: {
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'transform 0.2s'
    },
    addFormActions: {
        display: 'flex',
        gap: '10px'
    },
    confirmBtn: {
        flex: 1,
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    cancelBtn: {
        flex: 1,
        background: 'rgba(148, 163, 184, 0.2)',
        color: '#94a3b8',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    addBtn: {
        width: '100%',
        background: 'rgba(99, 102, 241, 0.2)',
        color: '#a5b4fc',
        border: '2px dashed rgba(99, 102, 241, 0.4)',
        padding: '15px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s'
    }
}

export default HabitTracker
