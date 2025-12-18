import { useState, useEffect, useCallback } from 'react'

// Pomodoro Timer - Focus productivity timer with Pomodoro technique
function PomodoroTimer() {
    const [mode, setMode] = useState('focus') // focus, shortBreak, longBreak
    const [timeLeft, setTimeLeft] = useState(25 * 60) // in seconds
    const [isRunning, setIsRunning] = useState(false)
    const [sessions, setSessions] = useState(0)
    const [totalFocusTime, setTotalFocusTime] = useState(0)

    const MODES = {
        focus: { duration: 25 * 60, label: '🎯 Focus', color: '#ef4444' },
        shortBreak: { duration: 5 * 60, label: '☕ Short Break', color: '#10b981' },
        longBreak: { duration: 15 * 60, label: '🌴 Long Break', color: '#3b82f6' }
    }

    useEffect(() => {
        let interval = null
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1)
                if (mode === 'focus') {
                    setTotalFocusTime(prev => prev + 1)
                }
            }, 1000)
        } else if (timeLeft === 0) {
            // Timer completed
            playNotificationSound()
            if (mode === 'focus') {
                setSessions(prev => prev + 1)
                // After 4 focus sessions, take a long break
                if ((sessions + 1) % 4 === 0) {
                    switchMode('longBreak')
                } else {
                    switchMode('shortBreak')
                }
            } else {
                switchMode('focus')
            }
        }
        return () => clearInterval(interval)
    }, [isRunning, timeLeft, mode, sessions])

    const playNotificationSound = () => {
        // Simple beep using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)()
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()
            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)
            oscillator.frequency.value = 800
            oscillator.type = 'sine'
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
            oscillator.start()
            oscillator.stop(audioContext.currentTime + 0.3)
        } catch (e) {
            console.log('Audio not supported')
        }
    }

    const switchMode = (newMode) => {
        setMode(newMode)
        setTimeLeft(MODES[newMode].duration)
        setIsRunning(false)
    }

    const toggleTimer = () => {
        setIsRunning(prev => !prev)
    }

    const resetTimer = () => {
        setIsRunning(false)
        setTimeLeft(MODES[mode].duration)
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const formatTotalTime = (seconds) => {
        const hours = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
    }

    const progress = ((MODES[mode].duration - timeLeft) / MODES[mode].duration) * 100

    return (
        <div className="pomodoro-timer">
            <div className="timer-header">
                <h2>⏱️ Pomodoro Timer</h2>
                <p className="timer-desc">Teknik fokus 25 menit + istirahat</p>
            </div>

            {/* Mode Selector */}
            <div className="mode-selector">
                {Object.entries(MODES).map(([key, val]) => (
                    <button
                        key={key}
                        className={`mode-btn ${mode === key ? 'active' : ''}`}
                        onClick={() => switchMode(key)}
                        style={{ '--mode-color': val.color }}
                    >
                        {val.label}
                    </button>
                ))}
            </div>

            {/* Timer Display */}
            <div className="timer-display" style={{ '--timer-color': MODES[mode].color }}>
                <svg className="progress-ring" viewBox="0 0 200 200">
                    <circle
                        className="progress-ring-bg"
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        strokeWidth="8"
                    />
                    <circle
                        className="progress-ring-fill"
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        strokeWidth="8"
                        strokeDasharray={565.48}
                        strokeDashoffset={565.48 - (565.48 * progress) / 100}
                        style={{ stroke: MODES[mode].color }}
                    />
                </svg>
                <div className="timer-time">{formatTime(timeLeft)}</div>
                <div className="timer-mode-label">{MODES[mode].label}</div>
            </div>

            {/* Controls */}
            <div className="timer-controls">
                <button className="control-btn reset" onClick={resetTimer} title="Reset">
                    🔄
                </button>
                <button
                    className={`control-btn main ${isRunning ? 'pause' : 'play'}`}
                    onClick={toggleTimer}
                    style={{ '--btn-color': MODES[mode].color }}
                >
                    {isRunning ? '⏸️' : '▶️'}
                </button>
                <button className="control-btn skip" onClick={() => {
                    if (mode === 'focus') switchMode('shortBreak')
                    else switchMode('focus')
                }} title="Skip">
                    ⏭️
                </button>
            </div>

            {/* Stats */}
            <div className="timer-stats">
                <div className="stat-item">
                    <span className="stat-label">Sessions Today</span>
                    <span className="stat-value">{sessions} 🍅</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Total Focus</span>
                    <span className="stat-value">{formatTotalTime(totalFocusTime)}</span>
                </div>
            </div>

            {/* Session Indicators */}
            <div className="session-indicators">
                {[1, 2, 3, 4].map(i => (
                    <div
                        key={i}
                        className={`session-dot ${sessions % 4 >= i ? 'completed' : ''}`}
                        title={`Session ${i}`}
                    >
                        🍅
                    </div>
                ))}
            </div>

            <style>{`
                .pomodoro-timer {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 2rem;
                    background: rgba(15, 15, 30, 0.8);
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                }

                .timer-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .timer-desc {
                    color: var(--text-muted);
                    font-size: 0.85rem;
                    margin-top: 0.5rem;
                }

                .mode-selector {
                    display: flex;
                    gap: 0.5rem;
                    margin: 1.5rem 0;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.4rem;
                    border-radius: 12px;
                }

                .mode-btn {
                    flex: 1;
                    padding: 0.75rem 0.5rem;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .mode-btn:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .mode-btn.active {
                    background: var(--mode-color);
                    color: white;
                    font-weight: 600;
                }

                .timer-display {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    margin: 2rem auto;
                }

                .progress-ring {
                    position: absolute;
                    transform: rotate(-90deg);
                }

                .progress-ring-bg {
                    stroke: rgba(255, 255, 255, 0.1);
                }

                .progress-ring-fill {
                    transition: stroke-dashoffset 0.3s ease;
                    stroke-linecap: round;
                }

                .timer-time {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 3rem;
                    font-weight: 700;
                    font-family: monospace;
                    color: var(--timer-color);
                }

                .timer-mode-label {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .timer-controls {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin: 1.5rem 0;
                }

                .control-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.1);
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .control-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1);
                }

                .control-btn.main {
                    width: 70px;
                    height: 70px;
                    background: var(--btn-color);
                    font-size: 2rem;
                }

                .control-btn.main:hover {
                    filter: brightness(1.2);
                }

                .timer-stats {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1.5rem 0;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .stat-value {
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .session-indicators {
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                }

                .session-dot {
                    font-size: 1.5rem;
                    opacity: 0.3;
                    transition: all 0.3s;
                }

                .session-dot.completed {
                    opacity: 1;
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    )
}

export default PomodoroTimer
