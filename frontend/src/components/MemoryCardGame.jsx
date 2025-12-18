import React, { useState, useEffect, useCallback, useRef } from 'react'

// Cybersecurity themed card icons (SVG components)
const cardIcons = {
    nmap: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="6" fill="currentColor" />
            <line x1="32" y1="6" x2="32" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="44" x2="32" y2="58" stroke="currentColor" strokeWidth="2" />
            <line x1="6" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="2" />
            <line x1="44" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="2" />
            <text x="32" y="68" textAnchor="middle" fontSize="8" fill="currentColor">NMAP</text>
        </svg>
    ),
    burpsuite: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <circle cx="32" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M20 36 L20 52 Q20 56 24 56 L40 56 Q44 56 44 52 L44 36" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="24" r="6" fill="currentColor" />
            <text x="32" y="68" textAnchor="middle" fontSize="8" fill="currentColor">BURP</text>
        </svg>
    ),
    metasploit: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <polygon points="32,4 58,20 58,44 32,60 6,44 6,20" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="32,14 48,24 48,40 32,50 16,40 16,24" fill="currentColor" opacity="0.3" />
            <circle cx="32" cy="32" r="8" fill="currentColor" />
            <text x="32" y="68" textAnchor="middle" fontSize="6" fill="currentColor">METASPLOIT</text>
        </svg>
    ),
    hydra: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <path d="M32 8 L32 56" stroke="currentColor" strokeWidth="3" />
            <path d="M20 20 L32 32 L44 20" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M16 32 L32 32 L32 48" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M48 32 L32 32" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="44" cy="20" r="4" fill="currentColor" />
            <circle cx="16" cy="32" r="4" fill="currentColor" />
            <circle cx="48" cy="32" r="4" fill="currentColor" />
            <text x="32" y="68" textAnchor="middle" fontSize="8" fill="currentColor">HYDRA</text>
        </svg>
    ),
    wireshark: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <path d="M8 32 Q20 16 32 32 Q44 48 56 32" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="32" cy="32" r="6" fill="currentColor" />
            <path d="M26 26 L20 20" stroke="currentColor" strokeWidth="2" />
            <path d="M38 26 L44 20" stroke="currentColor" strokeWidth="2" />
            <text x="32" y="68" textAnchor="middle" fontSize="6" fill="currentColor">WIRESHARK</text>
        </svg>
    ),
    firewall: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <rect x="8" y="12" width="48" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="8" y1="24" x2="56" y2="24" stroke="currentColor" strokeWidth="2" />
            <line x1="8" y1="40" x2="56" y2="40" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="32" r="4" fill="currentColor" />
            <circle cx="32" cy="32" r="4" fill="#22d3ee" />
            <circle cx="44" cy="32" r="4" fill="currentColor" />
            <text x="32" y="68" textAnchor="middle" fontSize="7" fill="currentColor">FIREWALL</text>
        </svg>
    ),
    terminal: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <rect x="6" y="10" width="52" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M14 28 L22 34 L14 40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <line x1="28" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <text x="32" y="68" textAnchor="middle" fontSize="7" fill="currentColor">TERMINAL</text>
        </svg>
    ),
    encryption: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <rect x="16" y="28" width="32" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M22 28 L22 18 Q22 8 32 8 Q42 8 42 18 L42 28" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="40" r="4" fill="currentColor" />
            <line x1="32" y1="44" x2="32" y2="48" stroke="currentColor" strokeWidth="2" />
            <text x="32" y="68" textAnchor="middle" fontSize="6" fill="currentColor">ENCRYPT</text>
        </svg>
    ),
    malware: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M32 12 L32 4" stroke="currentColor" strokeWidth="2" />
            <path d="M32 52 L32 60" stroke="currentColor" strokeWidth="2" />
            <path d="M12 32 L4 32" stroke="currentColor" strokeWidth="2" />
            <path d="M52 32 L60 32" stroke="currentColor" strokeWidth="2" />
            <circle cx="26" cy="28" r="3" fill="currentColor" />
            <circle cx="38" cy="28" r="3" fill="currentColor" />
            <path d="M24 40 Q32 48 40 40" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="32" y="68" textAnchor="middle" fontSize="7" fill="currentColor">MALWARE</text>
        </svg>
    ),
    anonymous: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <ellipse cx="32" cy="32" rx="22" ry="26" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M14 28 L50 28" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <circle cx="24" cy="28" r="4" fill="#0a0a0a" />
            <circle cx="40" cy="28" r="4" fill="#0a0a0a" />
            <path d="M20 42 Q32 50 44 42" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="32" y="68" textAnchor="middle" fontSize="6" fill="currentColor">ANONYMOUS</text>
        </svg>
    ),
    shield: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <path d="M32 6 L54 16 L54 34 Q54 50 32 58 Q10 50 10 34 L10 16 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 32 L30 38 L42 26" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            <text x="32" y="68" textAnchor="middle" fontSize="7" fill="currentColor">SHIELD</text>
        </svg>
    ),
    sqlinjection: () => (
        <svg viewBox="0 0 64 64" className="card-icon">
            <rect x="10" y="14" width="44" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="26" x2="54" y2="26" stroke="currentColor" strokeWidth="2" />
            <text x="32" y="40" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="monospace">SQL</text>
            <path d="M44 44 L52 52" stroke="#ef4444" strokeWidth="3" />
            <text x="32" y="68" textAnchor="middle" fontSize="6" fill="currentColor">SQL INJECT</text>
        </svg>
    )
}

const cardTypes = Object.keys(cardIcons)

// Shuffle array
const shuffleArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

// Level configurations
const levels = {
    easy: { pairs: 4, cols: 4, name: 'Easy', emoji: '😊' },
    medium: { pairs: 8, cols: 4, name: 'Medium', emoji: '🤔' },
    hard: { pairs: 12, cols: 6, name: 'Hard', emoji: '😈' }
}

function MemoryCardGame() {
    const [gameState, setGameState] = useState('menu') // menu, playing, won
    const [level, setLevel] = useState('easy')
    const [cards, setCards] = useState([])
    const [flippedCards, setFlippedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [moves, setMoves] = useState(0)
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [bestTimes, setBestTimes] = useState({ easy: null, medium: null, hard: null })
    const [soundEnabled, setSoundEnabled] = useState(true)
    const [showHint, setShowHint] = useState(false)
    const [hintsUsed, setHintsUsed] = useState(0)

    const audioContext = useRef(null)
    const timerRef = useRef(null)

    // Initialize audio
    useEffect(() => {
        audioContext.current = new (window.AudioContext || window.webkitAudioContext)()
        return () => {
            if (audioContext.current) audioContext.current.close()
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [])

    // Timer
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimer(prev => prev + 1)
            }, 1000)
        } else {
            if (timerRef.current) clearInterval(timerRef.current)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isRunning])

    // Play sound
    const playSound = useCallback((type) => {
        if (!soundEnabled || !audioContext.current) return

        const ctx = audioContext.current
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        if (type === 'flip') {
            oscillator.frequency.setValueAtTime(600, ctx.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05)
            gainNode.gain.setValueAtTime(0.08, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.08)
        } else if (type === 'match') {
            oscillator.frequency.setValueAtTime(523, ctx.currentTime)
            oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.1)
            oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.2)
            gainNode.gain.setValueAtTime(0.12, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.35)
        } else if (type === 'nomatch') {
            oscillator.frequency.setValueAtTime(300, ctx.currentTime)
            oscillator.frequency.setValueAtTime(250, ctx.currentTime + 0.1)
            gainNode.gain.setValueAtTime(0.08, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.15)
        } else if (type === 'win') {
            const notes = [523, 659, 784, 1047]
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator()
                const gain = ctx.createGain()
                osc.connect(gain)
                gain.connect(ctx.destination)
                osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15)
                gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.15)
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.2)
                osc.start(ctx.currentTime + i * 0.15)
                osc.stop(ctx.currentTime + i * 0.15 + 0.2)
            })
        }
    }, [soundEnabled])

    // Start game
    const startGame = (selectedLevel) => {
        const { pairs } = levels[selectedLevel]
        const selectedTypes = shuffleArray(cardTypes).slice(0, pairs)
        const cardPairs = [...selectedTypes, ...selectedTypes].map((type, index) => ({
            id: index,
            type,
            icon: cardIcons[type]
        }))

        setCards(shuffleArray(cardPairs))
        setFlippedCards([])
        setMatchedCards([])
        setMoves(0)
        setTimer(0)
        setHintsUsed(0)
        setLevel(selectedLevel)
        setGameState('playing')
        setIsRunning(true)
    }

    // Handle card click
    const handleCardClick = (cardId) => {
        if (flippedCards.length === 2) return
        if (flippedCards.includes(cardId)) return
        if (matchedCards.includes(cardId)) return

        playSound('flip')
        const newFlipped = [...flippedCards, cardId]
        setFlippedCards(newFlipped)

        if (newFlipped.length === 2) {
            setMoves(prev => prev + 1)
            const [first, second] = newFlipped
            const firstCard = cards.find(c => c.id === first)
            const secondCard = cards.find(c => c.id === second)

            if (firstCard.type === secondCard.type) {
                playSound('match')
                const newMatched = [...matchedCards, first, second]
                setMatchedCards(newMatched)
                setFlippedCards([])

                // Check win
                if (newMatched.length === cards.length) {
                    setIsRunning(false)
                    setGameState('won')
                    playSound('win')

                    // Update best time
                    if (!bestTimes[level] || timer < bestTimes[level]) {
                        setBestTimes(prev => ({ ...prev, [level]: timer }))
                    }
                }
            } else {
                playSound('nomatch')
                setTimeout(() => setFlippedCards([]), 1000)
            }
        }
    }

    // Use hint
    const useHint = () => {
        if (showHint) return
        setShowHint(true)
        setHintsUsed(prev => prev + 1)
        setTimeout(() => setShowHint(false), 1500)
    }

    // Format time
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    // Calculate score
    const calculateScore = () => {
        const baseScore = 1000
        const timeDeduction = timer * 2
        const moveDeduction = moves * 5
        const hintDeduction = hintsUsed * 50
        const levelBonus = level === 'hard' ? 500 : level === 'medium' ? 250 : 0
        return Math.max(0, baseScore - timeDeduction - moveDeduction - hintDeduction + levelBonus)
    }

    // Menu screen
    if (gameState === 'menu') {
        return (
            <div className="memory-game-container">
                <div className="menu-screen">
                    <h2>🎴 Memory Card Game</h2>
                    <p className="subtitle">Tema: Cybersecurity & Hacking Tools</p>

                    <div className="level-selection">
                        <p>Pilih Level:</p>
                        {Object.entries(levels).map(([key, { name, emoji, pairs }]) => (
                            <button
                                key={key}
                                className={`level-btn ${key}`}
                                onClick={() => startGame(key)}
                            >
                                <span className="level-emoji">{emoji}</span>
                                <span className="level-name">{name}</span>
                                <span className="level-info">{pairs} pasang</span>
                                {bestTimes[key] && (
                                    <span className="best-time">🏆 {formatTime(bestTimes[key])}</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="menu-options">
                        <button
                            className={`option-btn ${soundEnabled ? 'active' : ''}`}
                            onClick={() => setSoundEnabled(!soundEnabled)}
                        >
                            {soundEnabled ? '🔊 Sound ON' : '🔇 Sound OFF'}
                        </button>
                    </div>

                    <div className="card-preview">
                        <p>Icon yang tersedia:</p>
                        <div className="preview-icons">
                            {cardTypes.slice(0, 6).map(type => (
                                <div key={type} className="preview-icon">
                                    {cardIcons[type]()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{styles}</style>
            </div>
        )
    }

    // Win screen
    if (gameState === 'won') {
        return (
            <div className="memory-game-container">
                <div className="win-screen">
                    <div className="confetti">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="confetti-piece" style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                backgroundColor: ['#22d3ee', '#a78bfa', '#f472b6', '#fbbf24', '#10b981'][Math.floor(Math.random() * 5)]
                            }} />
                        ))}
                    </div>
                    <div className="win-content">
                        <div className="trophy">🏆</div>
                        <h2>All Cards Matched!</h2>
                        <div className="stats">
                            <div className="stat">
                                <span className="stat-label">Time</span>
                                <span className="stat-value">{formatTime(timer)}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Moves</span>
                                <span className="stat-value">{moves}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Score</span>
                                <span className="stat-value score">{calculateScore()}</span>
                            </div>
                        </div>
                        {bestTimes[level] === timer && (
                            <div className="new-record">🎉 New Best Time!</div>
                        )}
                        <div className="win-actions">
                            <button className="action-btn primary" onClick={() => startGame(level)}>
                                🔄 Play Again
                            </button>
                            <button className="action-btn secondary" onClick={() => setGameState('menu')}>
                                📋 Menu
                            </button>
                        </div>
                    </div>
                </div>
                <style>{styles}</style>
            </div>
        )
    }

    // Game screen
    return (
        <div className="memory-game-container">
            {/* Header */}
            <div className="game-header">
                <div className="header-left">
                    <h3>🎴 Memory Game</h3>
                    <span className="level-badge">{levels[level].emoji} {levels[level].name}</span>
                </div>
                <button className="back-btn" onClick={() => { setIsRunning(false); setGameState('menu'); }}>
                    ← Menu
                </button>
            </div>

            {/* Stats bar */}
            <div className="stats-bar">
                <div className="stat-item">
                    <span className="stat-icon">⏱️</span>
                    <span className="stat-val">{formatTime(timer)}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">👆</span>
                    <span className="stat-val">{moves} moves</span>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">✅</span>
                    <span className="stat-val">{matchedCards.length / 2} / {cards.length / 2}</span>
                </div>
                <button className="hint-btn" onClick={useHint} disabled={showHint}>
                    💡 Hint ({3 - hintsUsed})
                </button>
            </div>

            {/* Game board */}
            <div
                className="game-board"
                style={{ gridTemplateColumns: `repeat(${levels[level].cols}, 1fr)` }}
            >
                {cards.map(card => {
                    const isFlipped = flippedCards.includes(card.id) || matchedCards.includes(card.id) || showHint
                    const isMatched = matchedCards.includes(card.id)

                    return (
                        <div
                            key={card.id}
                            className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
                            onClick={() => !isFlipped && handleCardClick(card.id)}
                        >
                            <div className="card-inner">
                                <div className="card-front">
                                    <div className="card-pattern">
                                        <span>🔐</span>
                                    </div>
                                </div>
                                <div className="card-back">
                                    {card.icon()}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Controls */}
            <div className="game-controls">
                <button className="control-btn" onClick={() => startGame(level)}>
                    🔄 Restart
                </button>
                <button
                    className={`control-btn sound ${soundEnabled ? 'on' : 'off'}`}
                    onClick={() => setSoundEnabled(!soundEnabled)}
                >
                    {soundEnabled ? '🔊' : '🔇'}
                </button>
            </div>

            <style>{styles}</style>
        </div>
    )
}

const styles = `
    .memory-game-container {
        background: linear-gradient(145deg, rgba(15, 15, 35, 0.9), rgba(25, 25, 50, 0.85));
        border-radius: 20px;
        padding: 1.25rem;
        border: 1px solid rgba(99, 102, 241, 0.25);
        max-width: 600px;
        margin: 0 auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    /* Menu Screen */
    .menu-screen {
        text-align: center;
        padding: 1rem;
    }

    .menu-screen h2 {
        color: white;
        font-size: 1.75rem;
        margin-bottom: 0.25rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.8rem;
        margin-bottom: 1.5rem;
    }

    .level-selection {
        margin-bottom: 1.5rem;
    }

    .level-selection > p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
    }

    .level-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.875rem 1rem;
        margin-bottom: 0.5rem;
        border-radius: 12px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.05);
    }

    .level-btn.easy {
        border-color: rgba(34, 211, 238, 0.3);
    }
    .level-btn.easy:hover {
        background: rgba(34, 211, 238, 0.15);
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateX(5px);
    }

    .level-btn.medium {
        border-color: rgba(168, 85, 247, 0.3);
    }
    .level-btn.medium:hover {
        background: rgba(168, 85, 247, 0.15);
        border-color: rgba(168, 85, 247, 0.5);
        transform: translateX(5px);
    }

    .level-btn.hard {
        border-color: rgba(239, 68, 68, 0.3);
    }
    .level-btn.hard:hover {
        background: rgba(239, 68, 68, 0.15);
        border-color: rgba(239, 68, 68, 0.5);
        transform: translateX(5px);
    }

    .level-emoji {
        font-size: 1.5rem;
    }

    .level-name {
        color: white;
        font-weight: 600;
        font-size: 1rem;
        flex: 1;
        text-align: left;
        margin-left: 0.75rem;
    }

    .level-info {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        margin-right: 0.5rem;
    }

    .best-time {
        color: #fbbf24;
        font-size: 0.7rem;
        font-weight: 600;
    }

    .menu-options {
        margin-bottom: 1.5rem;
    }

    .option-btn {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .option-btn.active {
        background: rgba(34, 211, 238, 0.2);
        border-color: rgba(34, 211, 238, 0.5);
        color: #22d3ee;
    }

    .card-preview {
        padding: 1rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    .card-preview p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .preview-icons {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .preview-icon {
        width: 48px;
        height: 48px;
        color: #22d3ee;
    }

    /* Win Screen */
    .win-screen {
        text-align: center;
        padding: 2rem 1rem;
        position: relative;
        overflow: hidden;
    }

    .confetti {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    .confetti-piece {
        position: absolute;
        width: 10px;
        height: 10px;
        top: -10px;
        animation: fall 3s linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(400px) rotate(720deg);
            opacity: 0;
        }
    }

    .win-content {
        position: relative;
        z-index: 1;
    }

    .trophy {
        font-size: 4rem;
        animation: bounce 0.6s ease infinite alternate;
        margin-bottom: 1rem;
    }

    @keyframes bounce {
        to { transform: scale(1.1); }
    }

    .win-screen h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .stats {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
    }

    .stat {
        text-align: center;
    }

    .stat-label {
        display: block;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
    }

    .stat-value {
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .stat-value.score {
        color: #fbbf24;
    }

    .new-record {
        color: #10b981;
        font-weight: 600;
        margin-bottom: 1.5rem;
        animation: pulse 1s ease infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
    }

    .win-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
    }

    .action-btn {
        padding: 0.75rem 1.5rem;
        border-radius: 12px;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    .action-btn.primary {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
    }

    .action-btn.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }

    .action-btn.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.8);
    }

    .action-btn.secondary:hover {
        background: rgba(255, 255, 255, 0.15);
    }

    /* Game Header */
    .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .game-header h3 {
        color: white;
        margin: 0;
        font-size: 1rem;
    }

    .level-badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
        background: rgba(99, 102, 241, 0.2);
        border-radius: 12px;
        color: #a78bfa;
    }

    .back-btn {
        padding: 0.4rem 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .back-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    /* Stats Bar */
    .stats-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin-bottom: 0.75rem;
    }

    .stat-item {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .stat-icon {
        font-size: 0.875rem;
    }

    .hint-btn {
        padding: 0.375rem 0.75rem;
        background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 146, 60, 0.2));
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 8px;
        color: #fbbf24;
        font-size: 0.7rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .hint-btn:hover:not(:disabled) {
        background: rgba(251, 191, 36, 0.3);
    }

    .hint-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Game Board */
    .game-board {
        display: grid;
        gap: 8px;
        margin-bottom: 0.75rem;
    }

    .card {
        aspect-ratio: 1;
        perspective: 1000px;
        cursor: pointer;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-front {
        background: linear-gradient(145deg, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4));
        border: 2px solid rgba(99, 102, 241, 0.4);
    }

    .card-pattern {
        font-size: 1.5rem;
        opacity: 0.8;
    }

    .card-back {
        background: linear-gradient(145deg, rgba(15, 15, 35, 0.95), rgba(25, 25, 50, 0.95));
        border: 2px solid rgba(34, 211, 238, 0.4);
        transform: rotateY(180deg);
        color: #22d3ee;
        padding: 12%;
    }

    .card.matched .card-back {
        border-color: #10b981;
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.15), rgba(34, 211, 238, 0.15));
    }

    .card:not(.flipped):not(.matched):hover .card-inner {
        transform: scale(1.03);
    }

    .card-icon {
        width: 100%;
        height: 100%;
    }

    /* Controls */
    .game-controls {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
    }

    .control-btn {
        padding: 0.625rem 1.25rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .control-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    .control-btn.sound {
        width: 44px;
        padding: 0.625rem;
    }

    /* Responsive */
    @media (max-width: 500px) {
        .memory-game-container {
            padding: 1rem;
        }

        .game-board {
            gap: 6px;
        }

        .stats-bar {
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        .stat-item {
            font-size: 0.65rem;
        }

        .card-pattern {
            font-size: 1rem;
        }
    }
`

export default MemoryCardGame
