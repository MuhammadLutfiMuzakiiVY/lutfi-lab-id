import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

const GRID_SIZE = 4
const CELL_GAP = 12

const Game2048 = () => {
    const { t } = useLanguage()
    const [grid, setGrid] = useState(() => initializeGrid())
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(() => {
        const saved = localStorage.getItem('2048_bestscore')
        return saved ? parseInt(saved) : 0
    })
    const [gameOver, setGameOver] = useState(false)
    const [won, setWon] = useState(false)
    const [continueAfterWin, setContinueAfterWin] = useState(false)

    // Initialize empty grid
    function initializeGrid() {
        const newGrid = Array(GRID_SIZE).fill(null).map(() =>
            Array(GRID_SIZE).fill(0)
        )
        addRandomTile(newGrid)
        addRandomTile(newGrid)
        return newGrid
    }

    // Add random tile (2 or 4)
    function addRandomTile(gridToUpdate) {
        const emptyCells = []
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (gridToUpdate[r][c] === 0) {
                    emptyCells.push({ r, c })
                }
            }
        }
        if (emptyCells.length > 0) {
            const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            gridToUpdate[r][c] = Math.random() < 0.9 ? 2 : 4
        }
    }

    // Slide tiles in one direction
    const slide = (row) => {
        let arr = row.filter(val => val !== 0)
        const missing = GRID_SIZE - arr.length
        const zeros = Array(missing).fill(0)
        return zeros.concat(arr)
    }

    // Combine tiles
    const combine = (row) => {
        let scoreGain = 0
        for (let i = GRID_SIZE - 1; i > 0; i--) {
            if (row[i] === row[i - 1] && row[i] !== 0) {
                row[i] *= 2
                scoreGain += row[i]
                row[i - 1] = 0
                if (row[i] === 2048 && !won && !continueAfterWin) {
                    setWon(true)
                }
            }
        }
        return { row, scoreGain }
    }

    // Move right
    const moveRight = useCallback((currentGrid) => {
        let moved = false
        let totalScore = 0
        const newGrid = currentGrid.map(row => {
            const originalRow = [...row]
            let slidRow = slide(row)
            const { row: combinedRow, scoreGain } = combine(slidRow)
            totalScore += scoreGain
            slidRow = slide(combinedRow)
            if (JSON.stringify(originalRow) !== JSON.stringify(slidRow)) {
                moved = true
            }
            return slidRow
        })
        return { newGrid, moved, totalScore }
    }, [won, continueAfterWin])

    // Move left
    const moveLeft = useCallback((currentGrid) => {
        const flipped = currentGrid.map(row => [...row].reverse())
        const { newGrid, moved, totalScore } = moveRight(flipped)
        return {
            newGrid: newGrid.map(row => row.reverse()),
            moved,
            totalScore
        }
    }, [moveRight])

    // Move up
    const moveUp = useCallback((currentGrid) => {
        const rotated = transposeGrid(currentGrid)
        const { newGrid, moved, totalScore } = moveLeft(rotated)
        return {
            newGrid: transposeGrid(newGrid),
            moved,
            totalScore
        }
    }, [moveLeft])

    // Move down
    const moveDown = useCallback((currentGrid) => {
        const rotated = transposeGrid(currentGrid)
        const { newGrid, moved, totalScore } = moveRight(rotated)
        return {
            newGrid: transposeGrid(newGrid),
            moved,
            totalScore
        }
    }, [moveRight])

    // Transpose grid
    function transposeGrid(gridToTranspose) {
        return gridToTranspose[0].map((_, colIndex) =>
            gridToTranspose.map(row => row[colIndex])
        )
    }

    // Check if game is over
    const checkGameOver = useCallback((currentGrid) => {
        // Check for empty cells
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (currentGrid[r][c] === 0) return false
            }
        }
        // Check for possible merges
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                const current = currentGrid[r][c]
                if (c < GRID_SIZE - 1 && current === currentGrid[r][c + 1]) return false
                if (r < GRID_SIZE - 1 && current === currentGrid[r + 1][c]) return false
            }
        }
        return true
    }, [])

    // Handle move
    const handleMove = useCallback((direction) => {
        if (gameOver || (won && !continueAfterWin)) return

        let result
        switch (direction) {
            case 'up':
                result = moveUp(grid)
                break
            case 'down':
                result = moveDown(grid)
                break
            case 'left':
                result = moveLeft(grid)
                break
            case 'right':
                result = moveRight(grid)
                break
            default:
                return
        }

        if (result.moved) {
            const newGrid = result.newGrid.map(row => [...row])
            addRandomTile(newGrid)
            setGrid(newGrid)

            const newScore = score + result.totalScore
            setScore(newScore)

            if (newScore > bestScore) {
                setBestScore(newScore)
                localStorage.setItem('2048_bestscore', newScore.toString())
            }

            if (checkGameOver(newGrid)) {
                setGameOver(true)
            }
        }
    }, [grid, score, bestScore, gameOver, won, continueAfterWin, moveUp, moveDown, moveLeft, moveRight, checkGameOver])

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault()
                const direction = e.key.replace('Arrow', '').toLowerCase()
                handleMove(direction)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleMove])

    // Touch controls
    useEffect(() => {
        let startX = 0
        let startY = 0

        const handleTouchStart = (e) => {
            startX = e.touches[0].clientX
            startY = e.touches[0].clientY
        }

        const handleTouchEnd = (e) => {
            const endX = e.changedTouches[0].clientX
            const endY = e.changedTouches[0].clientY
            const diffX = endX - startX
            const diffY = endY - startY
            const minSwipe = 50

            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (Math.abs(diffX) > minSwipe) {
                    handleMove(diffX > 0 ? 'right' : 'left')
                }
            } else {
                if (Math.abs(diffY) > minSwipe) {
                    handleMove(diffY > 0 ? 'down' : 'up')
                }
            }
        }

        const gameContainer = document.getElementById('game-2048-container')
        if (gameContainer) {
            gameContainer.addEventListener('touchstart', handleTouchStart)
            gameContainer.addEventListener('touchend', handleTouchEnd)
        }

        return () => {
            if (gameContainer) {
                gameContainer.removeEventListener('touchstart', handleTouchStart)
                gameContainer.removeEventListener('touchend', handleTouchEnd)
            }
        }
    }, [handleMove])

    // New game
    const newGame = () => {
        setGrid(initializeGrid())
        setScore(0)
        setGameOver(false)
        setWon(false)
        setContinueAfterWin(false)
    }

    // Continue after win
    const handleContinue = () => {
        setContinueAfterWin(true)
        setWon(false)
    }

    // Get tile color
    const getTileColor = (value) => {
        const colors = {
            0: 'rgba(238, 228, 218, 0.35)',
            2: '#eee4da',
            4: '#ede0c8',
            8: '#f2b179',
            16: '#f59563',
            32: '#f67c5f',
            64: '#f65e3b',
            128: '#edcf72',
            256: '#edcc61',
            512: '#edc850',
            1024: '#edc53f',
            2048: '#edc22e',
            4096: '#3c3a32',
            8192: '#3c3a32'
        }
        return colors[value] || '#3c3a32'
    }

    // Get text color
    const getTextColor = (value) => {
        return value <= 4 ? '#776e65' : '#f9f6f2'
    }

    // Get font size based on value
    const getFontSize = (value) => {
        if (value >= 1000) return '28px'
        if (value >= 100) return '36px'
        return '44px'
    }

    return (
        <div style={styles.container} id="game-2048-container">
            <div style={styles.header}>
                <h2 style={styles.title}>2048</h2>
                <p style={styles.subtitle}>Join the tiles, get to 2048!</p>
            </div>

            <div style={styles.scoreContainer}>
                <div style={styles.scoreBox}>
                    <span style={styles.scoreLabel}>SCORE</span>
                    <span style={styles.scoreValue}>{score.toLocaleString()}</span>
                </div>
                <div style={styles.scoreBox}>
                    <span style={styles.scoreLabel}>BEST</span>
                    <span style={styles.bestValue}>{bestScore.toLocaleString()}</span>
                </div>
            </div>

            <button onClick={newGame} style={styles.newGameBtn}>
                🔄 New Game
            </button>

            <div style={styles.gridContainer}>
                <div style={styles.grid}>
                    {grid.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                style={{
                                    ...styles.cell,
                                    background: getTileColor(cell),
                                    color: getTextColor(cell),
                                    fontSize: getFontSize(cell),
                                    boxShadow: cell > 0 ? `0 4px 10px rgba(0,0,0,0.15)` : 'none',
                                    transform: cell > 0 ? 'scale(1)' : 'scale(0.9)',
                                    transition: 'all 0.15s ease'
                                }}
                            >
                                {cell > 0 ? cell : ''}
                            </div>
                        ))
                    )}
                </div>

                {/* Game Over Overlay */}
                {gameOver && (
                    <div style={styles.overlay}>
                        <h2 style={styles.gameOverText}>Game Over!</h2>
                        <p style={styles.finalScore}>Final Score: {score.toLocaleString()}</p>
                        <button onClick={newGame} style={styles.tryAgainBtn}>
                            Try Again
                        </button>
                    </div>
                )}

                {/* Win Overlay */}
                {won && !continueAfterWin && (
                    <div style={styles.winOverlay}>
                        <h2 style={styles.winText}>🎉 You Win!</h2>
                        <p style={styles.winScore}>Score: {score.toLocaleString()}</p>
                        <div style={styles.winButtons}>
                            <button onClick={handleContinue} style={styles.continueBtn}>
                                Keep Playing
                            </button>
                            <button onClick={newGame} style={styles.newGameBtnSmall}>
                                New Game
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div style={styles.instructions}>
                <p>Use <strong>Arrow Keys</strong> or <strong>Swipe</strong> to move tiles</p>
                <p>Merge same numbers to reach <strong style={{ color: '#edc22e' }}>2048</strong>!</p>
            </div>

            {/* Mobile Controls */}
            <div style={styles.mobileControls}>
                <button onClick={() => handleMove('up')} style={styles.mobileBtn}>↑</button>
                <div style={styles.mobileRow}>
                    <button onClick={() => handleMove('left')} style={styles.mobileBtn}>←</button>
                    <button onClick={() => handleMove('down')} style={styles.mobileBtn}>↓</button>
                    <button onClick={() => handleMove('right')} style={styles.mobileBtn}>→</button>
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
        border: '1px solid rgba(237, 194, 46, 0.3)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        maxWidth: '450px',
        margin: '0 auto',
        touchAction: 'none'
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    title: {
        fontSize: '48px',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #edc22e, #f59563)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '5px'
    },
    subtitle: {
        color: '#94a3b8',
        fontSize: '14px'
    },
    scoreContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px'
    },
    scoreBox: {
        background: 'rgba(187, 173, 160, 0.3)',
        borderRadius: '10px',
        padding: '10px 25px',
        textAlign: 'center',
        minWidth: '100px'
    },
    scoreLabel: {
        display: 'block',
        fontSize: '12px',
        color: '#eee4da',
        fontWeight: '600',
        letterSpacing: '1px'
    },
    scoreValue: {
        display: 'block',
        fontSize: '24px',
        fontWeight: '700',
        color: '#fff'
    },
    bestValue: {
        display: 'block',
        fontSize: '24px',
        fontWeight: '700',
        color: '#edc22e'
    },
    newGameBtn: {
        display: 'block',
        width: '100%',
        background: 'linear-gradient(135deg, #8f7a66, #bbada0)',
        color: '#f9f6f2',
        border: 'none',
        padding: '12px',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '20px',
        transition: 'all 0.3s'
    },
    gridContainer: {
        position: 'relative',
        marginBottom: '20px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gap: `${CELL_GAP}px`,
        background: 'rgba(187, 173, 160, 0.4)',
        padding: `${CELL_GAP}px`,
        borderRadius: '12px'
    },
    cell: {
        aspectRatio: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        fontWeight: '700',
        userSelect: 'none'
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.9)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        backdropFilter: 'blur(5px)'
    },
    gameOverText: {
        fontSize: '32px',
        color: '#ef4444',
        fontWeight: '700'
    },
    finalScore: {
        fontSize: '18px',
        color: '#fff'
    },
    tryAgainBtn: {
        background: 'linear-gradient(135deg, #8f7a66, #bbada0)',
        color: '#f9f6f2',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    winOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(237, 194, 46, 0.95)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
    },
    winText: {
        fontSize: '36px',
        color: '#f9f6f2',
        fontWeight: '700'
    },
    winScore: {
        fontSize: '20px',
        color: '#fff'
    },
    winButtons: {
        display: 'flex',
        gap: '10px'
    },
    continueBtn: {
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    newGameBtnSmall: {
        background: 'linear-gradient(135deg, #8f7a66, #6d5d4e)',
        color: '#f9f6f2',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    instructions: {
        textAlign: 'center',
        color: '#94a3b8',
        fontSize: '13px',
        lineHeight: '1.8'
    },
    mobileControls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop: '20px'
    },
    mobileRow: {
        display: 'flex',
        gap: '8px'
    },
    mobileBtn: {
        width: '60px',
        height: '60px',
        background: 'rgba(187, 173, 160, 0.4)',
        border: '1px solid rgba(187, 173, 160, 0.6)',
        borderRadius: '12px',
        color: '#f9f6f2',
        fontSize: '24px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Game2048
