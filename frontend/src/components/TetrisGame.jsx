import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Tetris pieces (tetrominoes)
const TETROMINOES = {
    I: {
        shape: [[1, 1, 1, 1]],
        color: '#00f5ff'
    },
    O: {
        shape: [[1, 1], [1, 1]],
        color: '#ffd700'
    },
    T: {
        shape: [[0, 1, 0], [1, 1, 1]],
        color: '#a855f7'
    },
    S: {
        shape: [[0, 1, 1], [1, 1, 0]],
        color: '#22c55e'
    },
    Z: {
        shape: [[1, 1, 0], [0, 1, 1]],
        color: '#ef4444'
    },
    J: {
        shape: [[1, 0, 0], [1, 1, 1]],
        color: '#3b82f6'
    },
    L: {
        shape: [[0, 0, 1], [1, 1, 1]],
        color: '#f97316'
    }
}

const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const CELL_SIZE = 28

const createEmptyBoard = () =>
    Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null))

const randomTetromino = () => {
    const pieces = Object.keys(TETROMINOES)
    const randPiece = pieces[Math.floor(Math.random() * pieces.length)]
    return {
        type: randPiece,
        shape: TETROMINOES[randPiece].shape,
        color: TETROMINOES[randPiece].color,
        x: Math.floor(BOARD_WIDTH / 2) - 1,
        y: 0
    }
}

const TetrisGame = () => {
    const { t } = useLanguage()
    const [board, setBoard] = useState(createEmptyBoard())
    const [currentPiece, setCurrentPiece] = useState(null)
    const [nextPiece, setNextPiece] = useState(null)
    const [holdPiece, setHoldPiece] = useState(null)
    const [canHold, setCanHold] = useState(true)
    const [score, setScore] = useState(0)
    const [level, setLevel] = useState(1)
    const [lines, setLines] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [highScore, setHighScore] = useState(() => {
        const saved = localStorage.getItem('tetris_highscore')
        return saved ? parseInt(saved) : 0
    })

    const gameLoopRef = useRef(null)
    const boardRef = useRef(null)

    // Rotate piece
    const rotatePiece = (piece) => {
        const rotated = piece.shape[0].map((_, colIndex) =>
            piece.shape.map(row => row[colIndex]).reverse()
        )
        return { ...piece, shape: rotated }
    }

    // Check collision
    const checkCollision = useCallback((piece, boardToCheck, offsetX = 0, offsetY = 0) => {
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const newX = piece.x + x + offsetX
                    const newY = piece.y + y + offsetY

                    if (
                        newX < 0 ||
                        newX >= BOARD_WIDTH ||
                        newY >= BOARD_HEIGHT ||
                        (newY >= 0 && boardToCheck[newY][newX])
                    ) {
                        return true
                    }
                }
            }
        }
        return false
    }, [])

    // Place piece on board
    const placePiece = useCallback((piece, boardToUpdate) => {
        const newBoard = boardToUpdate.map(row => [...row])
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const boardY = piece.y + y
                    const boardX = piece.x + x
                    if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                        newBoard[boardY][boardX] = piece.color
                    }
                }
            }
        }
        return newBoard
    }, [])

    // Clear completed lines
    const clearLines = useCallback((boardToCheck) => {
        let clearedLines = 0
        const newBoard = boardToCheck.filter(row => {
            const isFull = row.every(cell => cell !== null)
            if (isFull) clearedLines++
            return !isFull
        })

        while (newBoard.length < BOARD_HEIGHT) {
            newBoard.unshift(Array(BOARD_WIDTH).fill(null))
        }

        return { newBoard, clearedLines }
    }, [])

    // Calculate score
    const calculateScore = (clearedLines, currentLevel) => {
        const basePoints = [0, 100, 300, 500, 800]
        return basePoints[clearedLines] * currentLevel
    }

    // Move piece
    const movePiece = useCallback((dx, dy) => {
        if (!currentPiece || gameOver || isPaused) return

        if (!checkCollision(currentPiece, board, dx, dy)) {
            setCurrentPiece(prev => ({
                ...prev,
                x: prev.x + dx,
                y: prev.y + dy
            }))
        } else if (dy > 0) {
            // Piece has landed
            const newBoard = placePiece(currentPiece, board)
            const { newBoard: clearedBoard, clearedLines } = clearLines(newBoard)

            setBoard(clearedBoard)
            setLines(prev => prev + clearedLines)
            setScore(prev => {
                const newScore = prev + calculateScore(clearedLines, level)
                if (newScore > highScore) {
                    setHighScore(newScore)
                    localStorage.setItem('tetris_highscore', newScore.toString())
                }
                return newScore
            })

            // Level up every 10 lines
            if (Math.floor((lines + clearedLines) / 10) > Math.floor(lines / 10)) {
                setLevel(prev => Math.min(prev + 1, 20))
            }

            // Spawn new piece
            if (nextPiece && checkCollision(nextPiece, clearedBoard)) {
                setGameOver(true)
                setIsPlaying(false)
            } else {
                setCurrentPiece(nextPiece)
                setNextPiece(randomTetromino())
                setCanHold(true)
            }
        }
    }, [currentPiece, board, gameOver, isPaused, checkCollision, placePiece, clearLines, level, lines, highScore, nextPiece])

    // Rotate current piece
    const rotate = useCallback(() => {
        if (!currentPiece || gameOver || isPaused) return

        const rotated = rotatePiece(currentPiece)

        // Wall kick - try different positions
        const kicks = [0, 1, -1, 2, -2]
        for (const kick of kicks) {
            if (!checkCollision({ ...rotated, x: rotated.x + kick }, board)) {
                setCurrentPiece({ ...rotated, x: rotated.x + kick })
                break
            }
        }
    }, [currentPiece, gameOver, isPaused, checkCollision, board])

    // Hard drop
    const hardDrop = useCallback(() => {
        if (!currentPiece || gameOver || isPaused) return

        let dropY = 0
        while (!checkCollision(currentPiece, board, 0, dropY + 1)) {
            dropY++
        }

        setCurrentPiece(prev => ({ ...prev, y: prev.y + dropY }))
        setScore(prev => prev + dropY * 2)
    }, [currentPiece, gameOver, isPaused, checkCollision, board])

    // Hold piece
    const hold = useCallback(() => {
        if (!currentPiece || !canHold || gameOver || isPaused) return

        if (holdPiece) {
            const temp = { ...holdPiece, x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 }
            setHoldPiece({
                type: currentPiece.type,
                shape: TETROMINOES[currentPiece.type].shape,
                color: currentPiece.color
            })
            setCurrentPiece(temp)
        } else {
            setHoldPiece({
                type: currentPiece.type,
                shape: TETROMINOES[currentPiece.type].shape,
                color: currentPiece.color
            })
            setCurrentPiece(nextPiece)
            setNextPiece(randomTetromino())
        }
        setCanHold(false)
    }, [currentPiece, holdPiece, canHold, gameOver, isPaused, nextPiece])

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isPlaying) return

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault()
                    movePiece(-1, 0)
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    movePiece(1, 0)
                    break
                case 'ArrowDown':
                    e.preventDefault()
                    movePiece(0, 1)
                    break
                case 'ArrowUp':
                    e.preventDefault()
                    rotate()
                    break
                case ' ':
                    e.preventDefault()
                    hardDrop()
                    break
                case 'c':
                case 'C':
                    e.preventDefault()
                    hold()
                    break
                case 'p':
                case 'P':
                    e.preventDefault()
                    setIsPaused(prev => !prev)
                    break
                default:
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isPlaying, movePiece, rotate, hardDrop, hold])

    // Game loop
    useEffect(() => {
        if (!isPlaying || isPaused || gameOver) {
            if (gameLoopRef.current) {
                clearInterval(gameLoopRef.current)
            }
            return
        }

        const speed = Math.max(100, 1000 - (level - 1) * 50)
        gameLoopRef.current = setInterval(() => {
            movePiece(0, 1)
        }, speed)

        return () => {
            if (gameLoopRef.current) {
                clearInterval(gameLoopRef.current)
            }
        }
    }, [isPlaying, isPaused, gameOver, level, movePiece])

    // Start game
    const startGame = () => {
        setBoard(createEmptyBoard())
        setCurrentPiece(randomTetromino())
        setNextPiece(randomTetromino())
        setHoldPiece(null)
        setCanHold(true)
        setScore(0)
        setLevel(1)
        setLines(0)
        setGameOver(false)
        setIsPaused(false)
        setIsPlaying(true)
        boardRef.current?.focus()
    }

    // Render piece preview
    const renderPreview = (piece, size = 20) => {
        if (!piece) return null

        const shape = piece.shape || TETROMINOES[piece.type]?.shape
        if (!shape) return null

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${shape[0].length}, ${size}px)`,
                gap: '1px'
            }}>
                {shape.map((row, y) =>
                    row.map((cell, x) => (
                        <div
                            key={`${y}-${x}`}
                            style={{
                                width: size,
                                height: size,
                                background: cell ? piece.color : 'transparent',
                                borderRadius: '2px',
                                boxShadow: cell ? `0 0 5px ${piece.color}` : 'none'
                            }}
                        />
                    ))
                )}
            </div>
        )
    }

    // Render board with current piece
    const renderBoard = () => {
        const displayBoard = board.map(row => [...row])

        // Add current piece to display
        if (currentPiece) {
            // Ghost piece (drop preview)
            let ghostY = 0
            while (!checkCollision(currentPiece, board, 0, ghostY + 1)) {
                ghostY++
            }

            for (let y = 0; y < currentPiece.shape.length; y++) {
                for (let x = 0; x < currentPiece.shape[y].length; x++) {
                    if (currentPiece.shape[y][x]) {
                        const boardY = currentPiece.y + y + ghostY
                        const boardX = currentPiece.x + x
                        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                            if (!displayBoard[boardY][boardX]) {
                                displayBoard[boardY][boardX] = `${currentPiece.color}33`
                            }
                        }
                    }
                }
            }

            // Current piece
            for (let y = 0; y < currentPiece.shape.length; y++) {
                for (let x = 0; x < currentPiece.shape[y].length; x++) {
                    if (currentPiece.shape[y][x]) {
                        const boardY = currentPiece.y + y
                        const boardX = currentPiece.x + x
                        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                            displayBoard[boardY][boardX] = currentPiece.color
                        }
                    }
                }
            }
        }

        return displayBoard
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>🎮 TETRIS</h2>
                <p style={styles.subtitle}>Classic Block Puzzle Game</p>
            </div>

            <div style={styles.gameWrapper}>
                {/* Left Panel - Hold */}
                <div style={styles.sidePanel}>
                    <div style={styles.previewBox}>
                        <span style={styles.previewLabel}>HOLD</span>
                        <div style={styles.previewContent}>
                            {holdPiece ? renderPreview(holdPiece) : (
                                <span style={styles.emptyText}>Press C</span>
                            )}
                        </div>
                    </div>

                    <div style={styles.statsBox}>
                        <div style={styles.stat}>
                            <span style={styles.statLabel}>SCORE</span>
                            <span style={styles.statValue}>{score.toLocaleString()}</span>
                        </div>
                        <div style={styles.stat}>
                            <span style={styles.statLabel}>LEVEL</span>
                            <span style={styles.statValue}>{level}</span>
                        </div>
                        <div style={styles.stat}>
                            <span style={styles.statLabel}>LINES</span>
                            <span style={styles.statValue}>{lines}</span>
                        </div>
                        <div style={styles.stat}>
                            <span style={styles.statLabel}>HIGH</span>
                            <span style={styles.statValueHigh}>{highScore.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Game Board */}
                <div
                    ref={boardRef}
                    tabIndex={0}
                    style={styles.boardContainer}
                >
                    <div style={styles.board}>
                        {renderBoard().map((row, y) =>
                            row.map((cell, x) => (
                                <div
                                    key={`${y}-${x}`}
                                    style={{
                                        ...styles.cell,
                                        background: cell || 'rgba(255,255,255,0.02)',
                                        boxShadow: cell && !cell.includes('33') ? `0 0 8px ${cell}, inset 0 0 3px rgba(255,255,255,0.3)` : 'none',
                                        border: cell && !cell.includes('33') ? `1px solid ${cell}88` : '1px solid rgba(255,255,255,0.05)'
                                    }}
                                />
                            ))
                        )}
                    </div>

                    {/* Overlays */}
                    {!isPlaying && !gameOver && (
                        <div style={styles.overlay}>
                            <button onClick={startGame} style={styles.startButton}>
                                ▶ START GAME
                            </button>
                            <div style={styles.controls}>
                                <p>← → : Move</p>
                                <p>↑ : Rotate</p>
                                <p>↓ : Soft Drop</p>
                                <p>Space : Hard Drop</p>
                                <p>C : Hold</p>
                                <p>P : Pause</p>
                            </div>
                        </div>
                    )}

                    {isPaused && (
                        <div style={styles.overlay}>
                            <h2 style={styles.pauseText}>⏸ PAUSED</h2>
                            <button onClick={() => setIsPaused(false)} style={styles.resumeButton}>
                                RESUME
                            </button>
                        </div>
                    )}

                    {gameOver && (
                        <div style={styles.overlay}>
                            <h2 style={styles.gameOverText}>GAME OVER</h2>
                            <p style={styles.finalScore}>Score: {score.toLocaleString()}</p>
                            {score >= highScore && score > 0 && (
                                <p style={styles.newHighScore}>🏆 NEW HIGH SCORE!</p>
                            )}
                            <button onClick={startGame} style={styles.restartButton}>
                                🔄 PLAY AGAIN
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Panel - Next */}
                <div style={styles.sidePanel}>
                    <div style={styles.previewBox}>
                        <span style={styles.previewLabel}>NEXT</span>
                        <div style={styles.previewContent}>
                            {nextPiece ? renderPreview(nextPiece) : null}
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div style={styles.mobileControls}>
                        <button onClick={() => rotate()} style={styles.mobileBtn}>↻</button>
                        <div style={styles.mobileRow}>
                            <button onClick={() => movePiece(-1, 0)} style={styles.mobileBtn}>←</button>
                            <button onClick={() => hardDrop()} style={styles.mobileBtnDrop}>⬇</button>
                            <button onClick={() => movePiece(1, 0)} style={styles.mobileBtn}>→</button>
                        </div>
                        <button onClick={() => movePiece(0, 1)} style={styles.mobileBtn}>↓</button>
                    </div>
                </div>
            </div>
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
        maxWidth: '700px',
        margin: '0 auto'
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '5px'
    },
    subtitle: {
        color: '#94a3b8',
        fontSize: '14px'
    },
    gameWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '20px',
        flexWrap: 'wrap'
    },
    sidePanel: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        minWidth: '100px'
    },
    previewBox: {
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        padding: '15px',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        textAlign: 'center'
    },
    previewLabel: {
        fontSize: '12px',
        fontWeight: '600',
        color: '#00f5ff',
        letterSpacing: '2px',
        display: 'block',
        marginBottom: '10px'
    },
    previewContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60px'
    },
    emptyText: {
        color: '#64748b',
        fontSize: '12px'
    },
    statsBox: {
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        padding: '15px',
        border: '1px solid rgba(99, 102, 241, 0.2)'
    },
    stat: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '12px'
    },
    statLabel: {
        fontSize: '10px',
        color: '#94a3b8',
        letterSpacing: '1px'
    },
    statValue: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#fff',
        fontFamily: 'monospace'
    },
    statValueHigh: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#ffd700',
        fontFamily: 'monospace'
    },
    boardContainer: {
        position: 'relative',
        outline: 'none'
    },
    board: {
        display: 'grid',
        gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${CELL_SIZE}px)`,
        gap: '1px',
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '10px',
        borderRadius: '12px',
        border: '2px solid rgba(99, 102, 241, 0.4)',
        boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5)'
    },
    cell: {
        width: CELL_SIZE,
        height: CELL_SIZE,
        borderRadius: '3px',
        transition: 'all 0.05s'
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        backdropFilter: 'blur(5px)'
    },
    startButton: {
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: '#fff',
        border: 'none',
        padding: '15px 40px',
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
        transition: 'all 0.3s'
    },
    controls: {
        color: '#94a3b8',
        fontSize: '12px',
        textAlign: 'center',
        lineHeight: '1.8'
    },
    pauseText: {
        fontSize: '32px',
        color: '#ffd700',
        fontWeight: '700'
    },
    resumeButton: {
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    gameOverText: {
        fontSize: '32px',
        color: '#ef4444',
        fontWeight: '700'
    },
    finalScore: {
        fontSize: '20px',
        color: '#fff'
    },
    newHighScore: {
        fontSize: '18px',
        color: '#ffd700',
        animation: 'pulse 1s infinite'
    },
    restartButton: {
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: '#fff',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    mobileControls: {
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop: '10px'
    },
    mobileRow: {
        display: 'flex',
        gap: '8px'
    },
    mobileBtn: {
        width: '50px',
        height: '50px',
        background: 'rgba(99, 102, 241, 0.3)',
        border: '1px solid rgba(99, 102, 241, 0.5)',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer'
    },
    mobileBtnDrop: {
        width: '50px',
        height: '50px',
        background: 'rgba(239, 68, 68, 0.3)',
        border: '1px solid rgba(239, 68, 68, 0.5)',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer'
    }
}

// Add media query styles
const mediaStyles = document.createElement('style')
mediaStyles.textContent = `
    @media (max-width: 600px) {
        .tetris-mobile-controls {
            display: flex !important;
        }
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`
if (!document.getElementById('tetris-styles')) {
    mediaStyles.id = 'tetris-styles'
    document.head.appendChild(mediaStyles)
}

export default TetrisGame
