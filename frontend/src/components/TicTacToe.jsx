import React, { useState, useEffect, useCallback, useRef } from 'react'

// YouTube video IDs from the provided links
const WINNING_COMBINATIONS = [
    { combo: [0, 1, 2], line: 'row-1' },
    { combo: [3, 4, 5], line: 'row-2' },
    { combo: [6, 7, 8], line: 'row-3' },
    { combo: [0, 3, 6], line: 'col-1' },
    { combo: [1, 4, 7], line: 'col-2' },
    { combo: [2, 5, 8], line: 'col-3' },
    { combo: [0, 4, 8], line: 'diag-1' },
    { combo: [2, 4, 6], line: 'diag-2' }
]

// Icons
const XIcon = () => (
    <svg viewBox="0 0 100 100" className="x-icon">
        <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    </svg>
)

const OIcon = () => (
    <svg viewBox="0 0 100 100" className="o-icon">
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="12" fill="none" />
    </svg>
)

const RestartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 4v6h6" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
)

const UserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
)

const RobotIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" strokeLinecap="round" />
        <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" strokeLinecap="round" />
    </svg>
)

const SoundOnIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
)

const SoundOffIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
)

const EditIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
)

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [winner, setWinner] = useState(null)
    const [winningLine, setWinningLine] = useState(null)
    const [winningCells, setWinningCells] = useState([])
    const [gameMode, setGameMode] = useState(null)
    const [difficulty, setDifficulty] = useState('medium')
    const [scores, setScores] = useState({ x: 0, o: 0, draws: 0 })
    const [isThinking, setIsThinking] = useState(false)
    const [soundEnabled, setSoundEnabled] = useState(true)
    const [showWinPopup, setShowWinPopup] = useState(false)
    const [playerNames, setPlayerNames] = useState({ x: 'Player 1', o: 'Player 2' })
    const [editingName, setEditingName] = useState(null)
    const [tempName, setTempName] = useState('')

    const audioContext = useRef(null)

    // Initialize audio context
    useEffect(() => {
        audioContext.current = new (window.AudioContext || window.webkitAudioContext)()
        return () => {
            if (audioContext.current) {
                audioContext.current.close()
            }
        }
    }, [])

    // Sound effects using Web Audio API
    const playSound = useCallback((type) => {
        if (!soundEnabled || !audioContext.current) return

        const ctx = audioContext.current
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        if (type === 'tap') {
            oscillator.frequency.setValueAtTime(800, ctx.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1)
            gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.1)
        } else if (type === 'win') {
            oscillator.frequency.setValueAtTime(523, ctx.currentTime)
            oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.15)
            oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.3)
            gainNode.gain.setValueAtTime(0.15, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.5)
        } else if (type === 'draw') {
            oscillator.frequency.setValueAtTime(400, ctx.currentTime)
            oscillator.frequency.setValueAtTime(350, ctx.currentTime + 0.15)
            oscillator.frequency.setValueAtTime(300, ctx.currentTime + 0.3)
            gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.4)
        }
    }, [soundEnabled])

    // Check for winner
    const checkWinner = useCallback((squares) => {
        for (let { combo, line } of WINNING_COMBINATIONS) {
            const [a, b, c] = combo
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line, cells: combo }
            }
        }
        if (squares.every(square => square !== null)) {
            return { winner: 'draw', line: null, cells: [] }
        }
        return null
    }, [])

    // AI Move with Minimax
    const getAIMove = useCallback((squares, aiDifficulty) => {
        const emptySquares = squares.map((sq, idx) => sq === null ? idx : null).filter(idx => idx !== null)

        if (emptySquares.length === 0) return null

        if (aiDifficulty === 'easy') {
            return emptySquares[Math.floor(Math.random() * emptySquares.length)]
        }

        if (aiDifficulty === 'medium' && Math.random() < 0.4) {
            return emptySquares[Math.floor(Math.random() * emptySquares.length)]
        }

        const minimax = (board, depth, isMaximizing) => {
            const result = checkWinner(board)
            if (result) {
                if (result.winner === 'O') return 10 - depth
                if (result.winner === 'X') return depth - 10
                return 0
            }

            if (isMaximizing) {
                let bestScore = -Infinity
                for (let i = 0; i < 9; i++) {
                    if (board[i] === null) {
                        board[i] = 'O'
                        const score = minimax(board, depth + 1, false)
                        board[i] = null
                        bestScore = Math.max(score, bestScore)
                    }
                }
                return bestScore
            } else {
                let bestScore = Infinity
                for (let i = 0; i < 9; i++) {
                    if (board[i] === null) {
                        board[i] = 'X'
                        const score = minimax(board, depth + 1, true)
                        board[i] = null
                        bestScore = Math.min(score, bestScore)
                    }
                }
                return bestScore
            }
        }

        let bestMove = null
        let bestScore = -Infinity
        for (let i = 0; i < 9; i++) {
            if (squares[i] === null) {
                squares[i] = 'O'
                const score = minimax(squares, 0, false)
                squares[i] = null
                if (score > bestScore) {
                    bestScore = score
                    bestMove = i
                }
            }
        }
        return bestMove
    }, [checkWinner])

    // Handle AI turn
    useEffect(() => {
        if (gameMode === 'pve' && !isXNext && !winner) {
            setIsThinking(true)
            const timer = setTimeout(() => {
                const aiMove = getAIMove([...board], difficulty)
                if (aiMove !== null) {
                    playSound('tap')
                    const newBoard = [...board]
                    newBoard[aiMove] = 'O'
                    setBoard(newBoard)

                    const result = checkWinner(newBoard)
                    if (result) {
                        setWinner(result.winner)
                        setWinningLine(result.line)
                        setWinningCells(result.cells)
                        setShowWinPopup(true)
                        if (result.winner === 'O') {
                            setScores(prev => ({ ...prev, o: prev.o + 1 }))
                            playSound('win')
                        } else if (result.winner === 'draw') {
                            setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
                            playSound('draw')
                        }
                    }
                    setIsXNext(true)
                }
                setIsThinking(false)
            }, 600)
            return () => clearTimeout(timer)
        }
    }, [isXNext, gameMode, winner, board, difficulty, getAIMove, checkWinner, playSound])

    const handleClick = (index) => {
        if (board[index] || winner || (gameMode === 'pve' && !isXNext) || isThinking) return

        playSound('tap')
        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
        setBoard(newBoard)

        const result = checkWinner(newBoard)
        if (result) {
            setWinner(result.winner)
            setWinningLine(result.line)
            setWinningCells(result.cells)
            setShowWinPopup(true)
            if (result.winner === 'X') {
                setScores(prev => ({ ...prev, x: prev.x + 1 }))
                playSound('win')
            } else if (result.winner === 'O') {
                setScores(prev => ({ ...prev, o: prev.o + 1 }))
                playSound('win')
            } else {
                setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
                playSound('draw')
            }
        }
        setIsXNext(!isXNext)
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
        setWinner(null)
        setWinningLine(null)
        setWinningCells([])
        setShowWinPopup(false)
    }

    const resetAll = () => {
        resetGame()
        setScores({ x: 0, o: 0, draws: 0 })
        setGameMode(null)
    }

    const startEditName = (player) => {
        setEditingName(player)
        setTempName(playerNames[player])
    }

    const saveName = () => {
        if (tempName.trim()) {
            setPlayerNames(prev => ({ ...prev, [editingName]: tempName.trim() }))
        }
        setEditingName(null)
        setTempName('')
    }

    // Mode selection screen
    if (!gameMode) {
        return (
            <div className="tictactoe-container">
                <div className="mode-selection">
                    <h2>🎮 Tic-Tac-Toe</h2>
                    <p>Pilih mode permainan</p>

                    <div className="mode-buttons">
                        <button className="mode-btn pvp" onClick={() => {
                            setGameMode('pvp')
                            setPlayerNames({ x: 'Player 1', o: 'Player 2' })
                        }}>
                            <div className="mode-icon">
                                <UserIcon />
                                <span>vs</span>
                                <UserIcon />
                            </div>
                            <span className="mode-label">Player vs Player</span>
                            <span className="mode-desc">Main dengan teman</span>
                        </button>

                        <button className="mode-btn pve" onClick={() => {
                            setGameMode('pve')
                            setPlayerNames({ x: 'You', o: 'AI' })
                        }}>
                            <div className="mode-icon">
                                <UserIcon />
                                <span>vs</span>
                                <RobotIcon />
                            </div>
                            <span className="mode-label">Player vs AI</span>
                            <span className="mode-desc">Tantang komputer</span>
                        </button>
                    </div>

                    <div className="difficulty-section">
                        <p>Tingkat kesulitan AI:</p>
                        <div className="difficulty-buttons">
                            {['easy', 'medium', 'hard'].map(level => (
                                <button
                                    key={level}
                                    className={`diff-btn ${difficulty === level ? 'active' : ''}`}
                                    onClick={() => setDifficulty(level)}
                                >
                                    {level === 'easy' ? '😊 Mudah' : level === 'medium' ? '🤔 Sedang' : '😈 Sulit'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="sound-toggle">
                        <button onClick={() => setSoundEnabled(!soundEnabled)} className="sound-btn">
                            {soundEnabled ? <SoundOnIcon /> : <SoundOffIcon />}
                            <span>{soundEnabled ? 'Sound ON' : 'Sound OFF'}</span>
                        </button>
                    </div>
                </div>
                <style>{styles}</style>
            </div>
        )
    }

    const getStatus = () => {
        if (winner === 'draw') return "🤝 Seri!"
        if (winner) return `🎉 ${winner === 'X' ? playerNames.x : playerNames.o} Menang!`
        if (isThinking) return "🤖 AI sedang berpikir..."
        return `Giliran: ${isXNext ? playerNames.x : playerNames.o} (${isXNext ? 'X' : 'O'})`
    }

    return (
        <div className="tictactoe-container">
            {/* Win Popup */}
            {showWinPopup && (
                <div className="win-popup-overlay" onClick={() => setShowWinPopup(false)}>
                    <div className="win-popup" onClick={e => e.stopPropagation()}>
                        {winner === 'draw' ? (
                            <>
                                <div className="popup-icon">🤝</div>
                                <h3>Seri!</h3>
                                <p>Tidak ada pemenang</p>
                            </>
                        ) : (
                            <>
                                <div className="popup-icon">🏆</div>
                                <h3>{winner === 'X' ? playerNames.x : playerNames.o} Menang!</h3>
                                <p>Selamat kepada pemenang!</p>
                            </>
                        )}
                        <button className="popup-btn" onClick={resetGame}>
                            <RestartIcon /> Main Lagi
                        </button>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="game-header">
                <h3>🎮 Tic-Tac-Toe</h3>
                <div className="header-controls">
                    <button onClick={() => setSoundEnabled(!soundEnabled)} className="icon-btn" title={soundEnabled ? 'Mute' : 'Unmute'}>
                        {soundEnabled ? <SoundOnIcon /> : <SoundOffIcon />}
                    </button>
                    <span className="mode-badge">
                        {gameMode === 'pvp' ? '👥 PvP' : `🤖 ${difficulty}`}
                    </span>
                </div>
            </div>

            {/* Scoreboard with editable names */}
            <div className="scoreboard">
                <div className="score-item x-score">
                    <div className="score-label-row">
                        {editingName === 'x' ? (
                            <input
                                type="text"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                onBlur={saveName}
                                onKeyDown={(e) => e.key === 'Enter' && saveName()}
                                autoFocus
                                className="name-input"
                                maxLength={10}
                            />
                        ) : (
                            <span className="score-label" onClick={() => gameMode === 'pvp' && startEditName('x')}>
                                {playerNames.x} (X)
                                {gameMode === 'pvp' && <EditIcon />}
                            </span>
                        )}
                    </div>
                    <span className="score-value">{scores.x}</span>
                </div>
                <div className="score-item draw-score">
                    <span className="score-label">Seri</span>
                    <span className="score-value">{scores.draws}</span>
                </div>
                <div className="score-item o-score">
                    <div className="score-label-row">
                        {editingName === 'o' ? (
                            <input
                                type="text"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                onBlur={saveName}
                                onKeyDown={(e) => e.key === 'Enter' && saveName()}
                                autoFocus
                                className="name-input"
                                maxLength={10}
                            />
                        ) : (
                            <span className="score-label" onClick={() => gameMode === 'pvp' && startEditName('o')}>
                                {playerNames.o} (O)
                                {gameMode === 'pvp' && <EditIcon />}
                            </span>
                        )}
                    </div>
                    <span className="score-value">{scores.o}</span>
                </div>
            </div>

            {/* Status */}
            <div className={`game-status ${winner ? (winner === 'draw' ? 'draw' : 'winner') : ''}`}>
                {getStatus()}
            </div>

            {/* Board */}
            <div className={`game-board ${winner ? 'game-over' : ''}`}>
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className={`cell ${cell ? 'filled' : ''} ${winningCells.includes(index) ? 'winning' : ''}`}
                        onClick={() => handleClick(index)}
                        disabled={!!cell || !!winner || isThinking}
                    >
                        {cell === 'X' && <XIcon />}
                        {cell === 'O' && <OIcon />}
                    </button>
                ))}
                {/* Win Line Animation */}
                {winningLine && <div className={`win-line ${winningLine}`}></div>}
            </div>

            {/* Controls */}
            <div className="game-controls">
                <button className="control-btn restart" onClick={resetGame}>
                    <RestartIcon />
                    <span>Main Lagi</span>
                </button>
                <button className="control-btn back" onClick={resetAll}>
                    <span>← Ganti Mode</span>
                </button>
            </div>

            <style>{styles}</style>
        </div>
    )
}

const styles = `
    .tictactoe-container {
        background: linear-gradient(145deg, rgba(15, 15, 35, 0.9), rgba(25, 25, 50, 0.85));
        border-radius: 24px;
        padding: 1.5rem;
        border: 1px solid rgba(99, 102, 241, 0.25);
        max-width: 400px;
        margin: 0 auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .mode-selection {
        text-align: center;
    }

    .mode-selection h2 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.75rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mode-selection > p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }

    .mode-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .mode-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1.25rem 1.5rem;
        border-radius: 16px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 140px;
    }

    .mode-btn.pvp {
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(99, 102, 241, 0.15));
        border-color: rgba(34, 211, 238, 0.3);
    }

    .mode-btn.pvp:hover {
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(99, 102, 241, 0.25));
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(34, 211, 238, 0.2);
    }

    .mode-btn.pve {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15));
        border-color: rgba(168, 85, 247, 0.3);
    }

    .mode-btn.pve:hover {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.25));
        border-color: rgba(168, 85, 247, 0.5);
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
    }

    .mode-icon {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-size: 0.75rem;
    }

    .mode-label {
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .mode-desc {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.7rem;
    }

    .difficulty-section {
        margin-bottom: 1rem;
    }

    .difficulty-section > p {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.5rem;
    }

    .difficulty-buttons {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }

    .diff-btn {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .diff-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .diff-btn.active {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-color: transparent;
        color: white;
    }

    .sound-toggle {
        margin-top: 1rem;
    }

    .sound-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .sound-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    /* Win Popup */
    .win-popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1100;
        animation: fadeIn 0.3s ease;
    }

    .win-popup {
        background: linear-gradient(145deg, rgba(25, 25, 55, 0.98), rgba(35, 35, 70, 0.98));
        border-radius: 24px;
        padding: 2rem;
        text-align: center;
        border: 2px solid rgba(99, 102, 241, 0.3);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .popup-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        animation: bounce 0.6s ease infinite alternate;
    }

    .win-popup h3 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .win-popup p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 1.5rem;
    }

    .popup-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border: none;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .popup-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes popIn {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

    @keyframes bounce {
        from { transform: scale(1); }
        to { transform: scale(1.1); }
    }

    /* Game Header */
    .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .game-header h3 {
        color: white;
        margin: 0;
        font-size: 1.1rem;
    }

    .header-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .icon-btn {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 8px;
        padding: 0.4rem;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
    }

    .icon-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        color: white;
    }

    .mode-badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.625rem;
        background: rgba(99, 102, 241, 0.2);
        border-radius: 20px;
        color: #a78bfa;
    }

    /* Scoreboard */
    .scoreboard {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        gap: 0.5rem;
    }

    .score-item {
        flex: 1;
        text-align: center;
        padding: 0.75rem 0.5rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
    }

    .score-item.x-score {
        border-left: 3px solid #22d3ee;
    }

    .score-item.o-score {
        border-left: 3px solid #f472b6;
    }

    .score-item.draw-score {
        border-left: 3px solid #fbbf24;
    }

    .score-label-row {
        display: flex;
        justify-content: center;
    }

    .score-label {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.65rem;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.25rem;
        cursor: pointer;
    }

    .score-label:hover svg {
        opacity: 1;
    }

    .score-label svg {
        opacity: 0.5;
        transition: opacity 0.2s;
    }

    .name-input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.5);
        border-radius: 4px;
        padding: 0.2rem 0.4rem;
        font-size: 0.65rem;
        color: white;
        width: 80px;
        text-align: center;
        outline: none;
    }

    .score-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
    }

    /* Status */
    .game-status {
        text-align: center;
        padding: 0.75rem;
        margin-bottom: 1rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.3s ease;
    }

    .game-status.winner {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(34, 211, 238, 0.25));
        border: 1px solid rgba(16, 185, 129, 0.3);
        animation: celebrate 0.5s ease-in-out;
    }

    .game-status.draw {
        background: linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(251, 146, 60, 0.25));
        border: 1px solid rgba(251, 191, 36, 0.3);
    }

    @keyframes celebrate {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
    }

    /* Board */
    .game-board {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 1rem;
        position: relative;
        padding: 5px;
    }

    .cell {
        aspect-ratio: 1;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18%;
    }

    .cell:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(99, 102, 241, 0.5);
        transform: scale(1.03);
    }

    .cell:disabled {
        cursor: not-allowed;
    }

    .cell.filled {
        animation: pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .cell.winning {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(34, 211, 238, 0.35));
        border-color: #10b981;
        animation: pulse-win 1s ease-in-out infinite;
    }

    @keyframes pop {
        0% { transform: scale(0); }
        70% { transform: scale(1.15); }
        100% { transform: scale(1); }
    }

    @keyframes pulse-win {
        0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
        50% { box-shadow: 0 0 25px 8px rgba(16, 185, 129, 0.3); }
    }

    .x-icon {
        width: 100%;
        height: 100%;
        color: #22d3ee;
        filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.6));
    }

    .o-icon {
        width: 100%;
        height: 100%;
        color: #f472b6;
        filter: drop-shadow(0 0 10px rgba(244, 114, 182, 0.6));
    }

    /* Win Line */
    .win-line {
        position: absolute;
        background: linear-gradient(90deg, #10b981, #22d3ee);
        border-radius: 4px;
        z-index: 10;
    }

    .win-line.row-1 {
        width: calc(100% - 10px);
        height: 6px;
        top: calc(16.67% + 2.5px);
        left: 5px;
        animation: drawLine 0.5s ease forwards;
    }

    .win-line.row-2 {
        width: calc(100% - 10px);
        height: 6px;
        top: calc(50%);
        left: 5px;
        animation: drawLine 0.5s ease forwards;
    }

    .win-line.row-3 {
        width: calc(100% - 10px);
        height: 6px;
        top: calc(83.33% - 2.5px);
        left: 5px;
        animation: drawLine 0.5s ease forwards;
    }

    .win-line.col-1 {
        width: 6px;
        height: calc(100% - 10px);
        left: calc(16.67% + 2.5px);
        top: 5px;
        animation: drawLineVertical 0.5s ease forwards;
    }

    .win-line.col-2 {
        width: 6px;
        height: calc(100% - 10px);
        left: calc(50%);
        top: 5px;
        animation: drawLineVertical 0.5s ease forwards;
    }

    .win-line.col-3 {
        width: 6px;
        height: calc(100% - 10px);
        left: calc(83.33% - 2.5px);
        top: 5px;
        animation: drawLineVertical 0.5s ease forwards;
    }

    .win-line.diag-1 {
        width: 6px;
        height: 140%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        animation: drawLineDiag 0.5s ease forwards;
    }

    .win-line.diag-2 {
        width: 6px;
        height: 140%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        animation: drawLineDiag 0.5s ease forwards;
    }

    @keyframes drawLine {
        from { width: 0; }
        to { width: calc(100% - 10px); }
    }

    @keyframes drawLineVertical {
        from { height: 0; }
        to { height: calc(100% - 10px); }
    }

    @keyframes drawLineDiag {
        from { height: 0; }
        to { height: 140%; }
    }

    /* Controls */
    .game-controls {
        display: flex;
        gap: 0.75rem;
    }

    .control-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.875rem;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 600;
        transition: all 0.2s;
    }

    .control-btn.restart {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
    }

    .control-btn.restart:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }

    .control-btn.back {
        background: rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .control-btn.back:hover {
        background: rgba(255, 255, 255, 0.12);
        color: white;
    }

    /* Responsive */
    @media (max-width: 420px) {
        .tictactoe-container {
            padding: 1rem;
            border-radius: 20px;
        }

        .mode-buttons {
            flex-direction: column;
        }

        .mode-btn {
            width: 100%;
        }

        .cell {
            border-radius: 10px;
        }
    }
`

export default TicTacToe
