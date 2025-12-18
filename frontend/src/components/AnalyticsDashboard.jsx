import { useState, useEffect } from 'react'

// Analytics Dashboard - Productivity analytics with animated charts
const AnalyticsDashboard = () => {
    // Sample analytics data
    const [data] = useState({
        productivity: {
            daily: [65, 72, 80, 75, 85, 90, 78],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        tasksCompleted: {
            weekly: [12, 8, 15, 10, 18, 6, 9],
            total: 78
        },
        focusTime: {
            daily: [120, 90, 150, 180, 160, 45, 110], // minutes
            average: 122
        },
        categories: [
            { name: 'Kerja', value: 35, color: '#6366f1' },
            { name: 'Kampus', value: 25, color: '#10b981' },
            { name: 'Project', value: 20, color: '#f59e0b' },
            { name: 'Pribadi', value: 15, color: '#ec4899' },
            { name: 'Lainnya', value: 5, color: '#8b5cf6' }
        ],
        streaks: {
            current: 7,
            best: 14
        },
        overview: {
            totalTasks: 156,
            completedTasks: 142,
            activeProjects: 4,
            focusHours: 32
        }
    })

    const [animatedValues, setAnimatedValues] = useState({})
    const [activeTimeRange, setActiveTimeRange] = useState('week')

    // Animate values on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedValues({
                productivity: true,
                tasks: true,
                focus: true,
                pie: true
            })
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    // ═══════════════════════════════════════════════════════════
    // RENDER FUNCTIONS
    // ═══════════════════════════════════════════════════════════

    // Bar Chart
    const renderBarChart = (values, labels, maxVal = 100, color = '#6366f1') => (
        <div className="bar-chart">
            {values.map((val, i) => (
                <div key={i} className="bar-wrapper">
                    <div
                        className="bar"
                        style={{
                            height: animatedValues.productivity ? `${(val / maxVal) * 100}%` : '0%',
                            background: `linear-gradient(180deg, ${color}, ${color}80)`,
                            transitionDelay: `${i * 0.05}s`
                        }}
                    >
                        <span className="bar-value">{val}</span>
                    </div>
                    <span className="bar-label">{labels[i]}</span>
                </div>
            ))}
        </div>
    )

    // Pie Chart (CSS-based)
    const renderPieChart = (categories) => {
        let cumulativePercentage = 0
        const segments = categories.map(cat => {
            const segment = {
                ...cat,
                start: cumulativePercentage,
                end: cumulativePercentage + cat.value
            }
            cumulativePercentage += cat.value
            return segment
        })

        return (
            <div className="pie-chart-container">
                <div
                    className="pie-chart"
                    style={{
                        background: `conic-gradient(${segments.map(s =>
                            `${s.color} ${s.start}% ${s.end}%`
                        ).join(', ')})`
                    }}
                >
                    <div className="pie-center">
                        <span className="pie-total">{data.overview.totalTasks}</span>
                        <span className="pie-label">Total</span>
                    </div>
                </div>
                <div className="pie-legend">
                    {categories.map((cat, i) => (
                        <div key={i} className="legend-item">
                            <span className="legend-color" style={{ background: cat.color }}></span>
                            <span className="legend-name">{cat.name}</span>
                            <span className="legend-value">{cat.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Area Chart (simplified)
    const renderAreaChart = (values, color = '#10b981') => {
        const max = Math.max(...values)
        const points = values.map((val, i) => ({
            x: (i / (values.length - 1)) * 100,
            y: 100 - (val / max) * 80
        }))

        const pathD = `M 0 100 L ${points.map(p => `${p.x} ${p.y}`).join(' L ')} L 100 100 Z`
        const lineD = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`

        return (
            <div className="area-chart">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d={pathD}
                        fill="url(#areaGradient)"
                        className={animatedValues.focus ? 'visible' : ''}
                    />
                    <path
                        d={lineD}
                        fill="none"
                        stroke={color}
                        strokeWidth="0.5"
                        className={animatedValues.focus ? 'visible' : ''}
                    />
                    {points.map((p, i) => (
                        <circle
                            key={i}
                            cx={p.x}
                            cy={p.y}
                            r="1.5"
                            fill={color}
                            className={animatedValues.focus ? 'visible' : ''}
                            style={{ transitionDelay: `${i * 0.05}s` }}
                        />
                    ))}
                </svg>
                <div className="area-labels">
                    {data.productivity.labels.map((label, i) => (
                        <span key={i}>{label}</span>
                    ))}
                </div>
            </div>
        )
    }

    // Progress Ring
    const renderProgressRing = (value, max, color = '#6366f1', size = 80) => {
        const percentage = (value / max) * 100
        const circumference = 2 * Math.PI * 35
        const strokeDashoffset = circumference - (circumference * percentage) / 100

        return (
            <div className="progress-ring" style={{ width: size, height: size }}>
                <svg viewBox="0 0 80 80">
                    <circle
                        cx="40" cy="40" r="35"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="6"
                    />
                    <circle
                        cx="40" cy="40" r="35"
                        fill="none"
                        stroke={color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={animatedValues.tasks ? strokeDashoffset : circumference}
                        transform="rotate(-90 40 40)"
                        style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                </svg>
                <div className="ring-value">{Math.round(percentage)}%</div>
            </div>
        )
    }

    return (
        <div className="analytics-dashboard">
            <div className="analytics-header">
                <div className="header-left">
                    <h2>📊 Analytics Dashboard</h2>
                    <p>Track your productivity metrics</p>
                </div>
                <div className="time-range">
                    {['day', 'week', 'month'].map(range => (
                        <button
                            key={range}
                            className={`range-btn ${activeTimeRange === range ? 'active' : ''}`}
                            onClick={() => setActiveTimeRange(range)}
                        >
                            {range.charAt(0).toUpperCase() + range.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
                <div className="quick-stat">
                    <span className="qs-icon">📋</span>
                    <div className="qs-info">
                        <span className="qs-value">{data.overview.completedTasks}/{data.overview.totalTasks}</span>
                        <span className="qs-label">Tasks Completed</span>
                    </div>
                    {renderProgressRing(data.overview.completedTasks, data.overview.totalTasks, '#10b981', 50)}
                </div>
                <div className="quick-stat">
                    <span className="qs-icon">🔥</span>
                    <div className="qs-info">
                        <span className="qs-value">{data.streaks.current} days</span>
                        <span className="qs-label">Current Streak</span>
                    </div>
                </div>
                <div className="quick-stat">
                    <span className="qs-icon">⏱️</span>
                    <div className="qs-info">
                        <span className="qs-value">{data.overview.focusHours}h</span>
                        <span className="qs-label">Focus Time</span>
                    </div>
                </div>
                <div className="quick-stat">
                    <span className="qs-icon">🚀</span>
                    <div className="qs-info">
                        <span className="qs-value">{data.overview.activeProjects}</span>
                        <span className="qs-label">Active Projects</span>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="charts-grid">
                {/* Productivity Bar Chart */}
                <div className="chart-card">
                    <div className="card-header">
                        <h3>📈 Productivity Score</h3>
                        <span className="badge success">+12% vs last week</span>
                    </div>
                    {renderBarChart(data.productivity.daily, data.productivity.labels)}
                </div>

                {/* Task Categories Pie */}
                <div className="chart-card">
                    <div className="card-header">
                        <h3>🏷️ Task Categories</h3>
                    </div>
                    {renderPieChart(data.categories)}
                </div>

                {/* Focus Time Area */}
                <div className="chart-card wide">
                    <div className="card-header">
                        <h3>⏱️ Focus Time (minutes)</h3>
                        <span className="badge">Avg: {data.focusTime.average}min</span>
                    </div>
                    {renderAreaChart(data.focusTime.daily)}
                </div>

                {/* Tasks Completed */}
                <div className="chart-card">
                    <div className="card-header">
                        <h3>✅ Tasks Completed</h3>
                    </div>
                    {renderBarChart(data.tasksCompleted.weekly, data.productivity.labels, 20, '#10b981')}
                </div>

                {/* Best Hours */}
                <div className="chart-card">
                    <div className="card-header">
                        <h3>🕐 Most Productive Hours</h3>
                    </div>
                    <div className="best-hours">
                        <div className="hour-item best">
                            <span className="hour-time">09:00 - 11:00</span>
                            <div className="hour-bar" style={{ width: '90%' }}></div>
                            <span className="hour-label">Peak Performance</span>
                        </div>
                        <div className="hour-item">
                            <span className="hour-time">14:00 - 16:00</span>
                            <div className="hour-bar" style={{ width: '70%' }}></div>
                        </div>
                        <div className="hour-item">
                            <span className="hour-time">20:00 - 22:00</span>
                            <div className="hour-bar" style={{ width: '55%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .analytics-dashboard {
                    padding: 0;
                }

                .analytics-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
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

                .time-range {
                    display: flex;
                    gap: 0.25rem;
                    background: rgba(0, 0, 0, 0.3);
                    padding: 0.25rem;
                    border-radius: 10px;
                }

                .range-btn {
                    padding: 0.5rem 1rem;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.6);
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                }

                .range-btn.active {
                    background: #6366f1;
                    color: #fff;
                }

                /* Quick Stats */
                .quick-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .quick-stat {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                }

                .qs-icon {
                    font-size: 1.5rem;
                }

                .qs-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .qs-value {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #fff;
                }

                .qs-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Progress Ring */
                .progress-ring {
                    position: relative;
                }

                .ring-value {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #fff;
                }

                /* Charts Grid */
                .charts-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1rem;
                }

                .chart-card {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    padding: 1.25rem;
                }

                .chart-card.wide {
                    grid-column: span 2;
                }

                @media (max-width: 900px) {
                    .chart-card.wide {
                        grid-column: span 1;
                    }
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .card-header h3 {
                    margin: 0;
                    font-size: 0.95rem;
                    color: #fff;
                    font-weight: 600;
                }

                .badge {
                    font-size: 0.7rem;
                    padding: 0.25rem 0.5rem;
                    background: rgba(99, 102, 241, 0.2);
                    color: #a5b4fc;
                    border-radius: 6px;
                }

                .badge.success {
                    background: rgba(16, 185, 129, 0.2);
                    color: #6ee7b7;
                }

                /* Bar Chart */
                .bar-chart {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    height: 150px;
                    gap: 0.5rem;
                }

                .bar-wrapper {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                }

                .bar {
                    width: 100%;
                    max-width: 30px;
                    border-radius: 4px 4px 0 0;
                    transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    display: flex;
                    justify-content: center;
                }

                .bar-value {
                    position: absolute;
                    top: -20px;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .bar-label {
                    margin-top: 0.5rem;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Pie Chart */
                .pie-chart-container {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .pie-chart {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    position: relative;
                }

                .pie-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60%;
                    height: 60%;
                    background: rgba(20, 20, 35, 1);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .pie-total {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .pie-label {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .pie-legend {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                }

                .legend-color {
                    width: 10px;
                    height: 10px;
                    border-radius: 2px;
                }

                .legend-name {
                    flex: 1;
                    color: rgba(255, 255, 255, 0.7);
                }

                .legend-value {
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Area Chart */
                .area-chart {
                    height: 120px;
                }

                .area-chart svg {
                    width: 100%;
                    height: 100px;
                }

                .area-chart path,
                .area-chart circle {
                    opacity: 0;
                    transition: opacity 0.8s ease;
                }

                .area-chart path.visible,
                .area-chart circle.visible {
                    opacity: 1;
                }

                .area-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: 0.25rem;
                }

                /* Best Hours */
                .best-hours {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .hour-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .hour-time {
                    width: 100px;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .hour-bar {
                    height: 8px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border-radius: 4px;
                    transition: width 0.8s ease;
                }

                .hour-item.best .hour-bar {
                    background: linear-gradient(90deg, #10b981, #22d3ee);
                }

                .hour-label {
                    font-size: 0.7rem;
                    color: #10b981;
                    background: rgba(16, 185, 129, 0.2);
                    padding: 0.15rem 0.4rem;
                    border-radius: 4px;
                }

                /* Responsive */
                @media (max-width: 600px) {
                    .quick-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .charts-grid {
                        grid-template-columns: 1fr;
                    }

                    .pie-chart-container {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    )
}

export default AnalyticsDashboard
