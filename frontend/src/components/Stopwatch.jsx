import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Stopwatch = () => {
    const { t } = useLanguage()
    const [time, setTime] = useState(0) // in milliseconds
    const [isRunning, setIsRunning] = useState(false)
    const [laps, setLaps] = useState([])
    const intervalRef = useRef(null)

    // Start/Stop timer
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(intervalRef.current)
        }

        return () => clearInterval(intervalRef.current)
    }, [isRunning])

    // Format time
    const formatTime = (ms) => {
        const hours = Math.floor(ms / 3600000)
        const minutes = Math.floor((ms % 3600000) / 60000)
        const seconds = Math.floor((ms % 60000) / 1000)
        const centiseconds = Math.floor((ms % 1000) / 10)

        if (hours > 0) {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`
        }
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`
    }

    // Start
    const handleStart = () => {
        setIsRunning(true)
    }

    // Stop
    const handleStop = () => {
        setIsRunning(false)
    }

    // Reset
    const handleReset = () => {
        setIsRunning(false)
        setTime(0)
        setLaps([])
    }

    // Lap
    const handleLap = () => {
        const prevLapTime = laps.length > 0 ? laps[0].totalTime : 0
        const lapTime = time - prevLapTime
        setLaps([
            {
                id: laps.length + 1,
                lapTime,
                totalTime: time
            },
            ...laps
        ])
    }

    // Get lap stats
    const getLapStats = () => {
        if (laps.length < 2) return { fastest: null, slowest: null }

        const lapTimes = laps.map(lap => lap.lapTime)
        const fastest = Math.min(...lapTimes)
        const slowest = Math.max(...lapTimes)

        return { fastest, slowest }
    }

    // Export laps
    const exportLaps = () => {
        if (laps.length === 0) return

        const data = laps.map(lap => (
            `Lap ${lap.id}: ${formatTime(lap.lapTime)} (Total: ${formatTime(lap.totalTime)})`
        )).join('\n')

        const blob = new Blob([data], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `stopwatch-laps-${new Date().toISOString().slice(0, 10)}.txt`
        a.click()
        URL.revokeObjectURL(url)
    }

    const { fastest, slowest } = getLapStats()

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>⏱️ Stopwatch</h2>
                <p style={styles.subtitle}>Precision timing with lap tracking</p>
            </div>

            {/* Main Display */}
            <div style={styles.displayContainer}>
                <div style={styles.timeDisplay}>
                    {formatTime(time)}
                </div>
                <div style={styles.timeHint}>
                    Hours : Minutes : Seconds . Centiseconds
                </div>
            </div>

            {/* Progress Ring */}
            <div style={styles.progressRing}>
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="rgba(99, 102, 241, 0.2)"
                        strokeWidth="8"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(time % 60000) / 60000 * 565.48} 565.48`}
                        transform="rotate(-90 100 100)"
                        style={{ transition: 'stroke-dasharray 0.1s' }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>
                <div style={styles.ringCenter}>
                    <span style={styles.ringTime}>{Math.floor((time % 60000) / 1000)}</span>
                    <span style={styles.ringLabel}>sec</span>
                </div>
            </div>

            {/* Controls */}
            <div style={styles.controls}>
                {!isRunning ? (
                    <button onClick={handleStart} style={styles.startBtn}>
                        ▶ Start
                    </button>
                ) : (
                    <button onClick={handleStop} style={styles.stopBtn}>
                        ⏸ Stop
                    </button>
                )}

                <button
                    onClick={handleLap}
                    style={styles.lapBtn}
                    disabled={!isRunning}
                >
                    🏁 Lap
                </button>

                <button onClick={handleReset} style={styles.resetBtn}>
                    🔄 Reset
                </button>
            </div>

            {/* Laps */}
            {laps.length > 0 && (
                <div style={styles.lapsContainer}>
                    <div style={styles.lapsHeader}>
                        <span>Lap Times ({laps.length})</span>
                        <button onClick={exportLaps} style={styles.exportBtn}>
                            📥 Export
                        </button>
                    </div>

                    <div style={styles.lapsList}>
                        {laps.map((lap) => {
                            const isFastest = lap.lapTime === fastest && laps.length > 1
                            const isSlowest = lap.lapTime === slowest && laps.length > 1

                            return (
                                <div
                                    key={lap.id}
                                    style={{
                                        ...styles.lapItem,
                                        ...(isFastest ? styles.fastestLap : {}),
                                        ...(isSlowest ? styles.slowestLap : {})
                                    }}
                                >
                                    <div style={styles.lapInfo}>
                                        <span style={styles.lapNumber}>Lap {lap.id}</span>
                                        {isFastest && <span style={styles.fastestBadge}>🏆 Fastest</span>}
                                        {isSlowest && <span style={styles.slowestBadge}>🐢 Slowest</span>}
                                    </div>
                                    <div style={styles.lapTimes}>
                                        <span style={styles.lapTime}>{formatTime(lap.lapTime)}</span>
                                        <span style={styles.totalTime}>{formatTime(lap.totalTime)}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* Statistics */}
            {laps.length > 1 && (
                <div style={styles.statsContainer}>
                    <div style={styles.statBox}>
                        <span style={styles.statLabel}>Average</span>
                        <span style={styles.statValue}>
                            {formatTime(Math.floor(laps.reduce((acc, lap) => acc + lap.lapTime, 0) / laps.length))}
                        </span>
                    </div>
                    <div style={styles.statBox}>
                        <span style={styles.statLabel}>Fastest</span>
                        <span style={{ ...styles.statValue, color: '#22c55e' }}>
                            {formatTime(fastest)}
                        </span>
                    </div>
                    <div style={styles.statBox}>
                        <span style={styles.statLabel}>Slowest</span>
                        <span style={{ ...styles.statValue, color: '#ef4444' }}>
                            {formatTime(slowest)}
                        </span>
                    </div>
                </div>
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
        maxWidth: '450px',
        margin: '0 auto'
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
    displayContainer: {
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '16px',
        padding: '25px',
        textAlign: 'center',
        marginBottom: '20px',
        border: '1px solid rgba(99, 102, 241, 0.2)'
    },
    timeDisplay: {
        fontSize: '48px',
        fontWeight: '700',
        fontFamily: 'monospace',
        color: '#fff',
        letterSpacing: '2px',
        textShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
    },
    timeHint: {
        fontSize: '11px',
        color: '#64748b',
        marginTop: '10px'
    },
    progressRing: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '25px'
    },
    ringCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    ringTime: {
        fontSize: '42px',
        fontWeight: '700',
        color: '#fff',
        display: 'block'
    },
    ringLabel: {
        fontSize: '14px',
        color: '#94a3b8'
    },
    controls: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '25px'
    },
    startBtn: {
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
    },
    stopBtn: {
        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
        color: '#fff',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)'
    },
    lapBtn: {
        background: 'rgba(99, 102, 241, 0.3)',
        color: '#a5b4fc',
        border: '1px solid rgba(99, 102, 241, 0.5)',
        padding: '15px 30px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s'
    },
    resetBtn: {
        background: 'rgba(148, 163, 184, 0.2)',
        color: '#94a3b8',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        padding: '15px 30px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s'
    },
    lapsContainer: {
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        padding: '15px',
        maxHeight: '250px',
        overflowY: 'auto'
    },
    lapsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600'
    },
    exportBtn: {
        background: 'rgba(99, 102, 241, 0.2)',
        color: '#a5b4fc',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        cursor: 'pointer'
    },
    lapsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    lapItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 15px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '10px',
        borderLeft: '3px solid transparent'
    },
    fastestLap: {
        background: 'rgba(34, 197, 94, 0.1)',
        borderLeftColor: '#22c55e'
    },
    slowestLap: {
        background: 'rgba(239, 68, 68, 0.1)',
        borderLeftColor: '#ef4444'
    },
    lapInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    lapNumber: {
        color: '#94a3b8',
        fontSize: '14px',
        fontWeight: '600'
    },
    fastestBadge: {
        fontSize: '10px',
        color: '#22c55e',
        background: 'rgba(34, 197, 94, 0.2)',
        padding: '2px 6px',
        borderRadius: '4px'
    },
    slowestBadge: {
        fontSize: '10px',
        color: '#ef4444',
        background: 'rgba(239, 68, 68, 0.2)',
        padding: '2px 6px',
        borderRadius: '4px'
    },
    lapTimes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    lapTime: {
        color: '#fff',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'monospace'
    },
    totalTime: {
        color: '#64748b',
        fontSize: '12px',
        fontFamily: 'monospace'
    },
    statsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        marginTop: '20px'
    },
    statBox: {
        background: 'rgba(99, 102, 241, 0.1)',
        borderRadius: '10px',
        padding: '12px',
        textAlign: 'center'
    },
    statLabel: {
        display: 'block',
        color: '#94a3b8',
        fontSize: '11px',
        marginBottom: '5px'
    },
    statValue: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'monospace'
    }
}

export default Stopwatch
