import { useState, useEffect, useCallback, useRef } from 'react'

// Classic Snake Game
function SnakeGame() {
    const canvasRef = useRef(null)
    const [gameState, setGameState] = useState('idle') // idle, playing, paused, gameOver
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(() => {
        return parseInt(localStorage.getItem('snakeHighScore') || '0')
    })
    const [speed, setSpeed] = useState('normal') // slow, normal, fast

    const SPEEDS = { slow: 150, normal: 100, fast: 60 }
    const GRID_SIZE = 20
    const CANVAS_SIZE = 400

    const gameRef = useRef({
        snake: [{ x: 10, y: 10 }],
        food: { x: 15, y: 15 },
        direction: { x: 1, y: 0 },
        nextDirection: { x: 1, y: 0 }
    })

    const startGame = useCallback(() => {
        gameRef.current = {
            snake: [{ x: 10, y: 10 }],
            food: generateFood([{ x: 10, y: 10 }]),
            direction: { x: 1, y: 0 },
            nextDirection: { x: 1, y: 0 }
        }
        setScore(0)
        setGameState('playing')
    }, [])

    const generateFood = (snake) => {
        let newFood
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE)
            }
        } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y))
        return newFood
    }

    const gameLoop = useCallback(() => {
        if (gameState !== 'playing') return

        const game = gameRef.current
        game.direction = game.nextDirection

        // Move snake
        const head = {
            x: (game.snake[0].x + game.direction.x + GRID_SIZE) % GRID_SIZE,
            y: (game.snake[0].y + game.direction.y + GRID_SIZE) % GRID_SIZE
        }

        // Check self collision
        if (game.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
            setGameState('gameOver')
            if (score > highScore) {
                setHighScore(score)
                localStorage.setItem('snakeHighScore', score.toString())
            }
            return
        }

        const newSnake = [head, ...game.snake]

        // Check food
        if (head.x === game.food.x && head.y === game.food.y) {
            setScore(prev => prev + 10)
            game.food = generateFood(newSnake)
        } else {
            newSnake.pop()
        }

        game.snake = newSnake

        // Draw
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const cellSize = CANVAS_SIZE / GRID_SIZE

        // Clear
        ctx.fillStyle = '#0f0f1e'
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

        // Draw grid
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)'
        for (let i = 0; i <= GRID_SIZE; i++) {
            ctx.beginPath()
            ctx.moveTo(i * cellSize, 0)
            ctx.lineTo(i * cellSize, CANVAS_SIZE)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(0, i * cellSize)
            ctx.lineTo(CANVAS_SIZE, i * cellSize)
            ctx.stroke()
        }

        // Draw food
        ctx.fillStyle = '#ef4444'
        ctx.beginPath()
        ctx.arc(
            game.food.x * cellSize + cellSize / 2,
            game.food.y * cellSize + cellSize / 2,
            cellSize / 2 - 2,
            0,
            Math.PI * 2
        )
        ctx.fill()

        // Draw snake
        game.snake.forEach((seg, i) => {
            const gradient = ctx.createLinearGradient(
                seg.x * cellSize, seg.y * cellSize,
                seg.x * cellSize + cellSize, seg.y * cellSize + cellSize
            )
            gradient.addColorStop(0, i === 0 ? '#10b981' : '#22d3ee')
            gradient.addColorStop(1, i === 0 ? '#059669' : '#0891b2')
            ctx.fillStyle = gradient
            ctx.fillRect(
                seg.x * cellSize + 1,
                seg.y * cellSize + 1,
                cellSize - 2,
                cellSize - 2
            )

            // Eyes on head
            if (i === 0) {
                ctx.fillStyle = 'white'
                ctx.beginPath()
                ctx.arc(seg.x * cellSize + cellSize * 0.3, seg.y * cellSize + cellSize * 0.35, 3, 0, Math.PI * 2)
                ctx.fill()
                ctx.beginPath()
                ctx.arc(seg.x * cellSize + cellSize * 0.7, seg.y * cellSize + cellSize * 0.35, 3, 0, Math.PI * 2)
                ctx.fill()
            }
        })
    }, [gameState, score, highScore])

    useEffect(() => {
        if (gameState !== 'playing') return
        const interval = setInterval(gameLoop, SPEEDS[speed])
        return () => clearInterval(interval)
    }, [gameState, gameLoop, speed])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameState !== 'playing') return
            const game = gameRef.current

            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                    if (game.direction.y !== 1) game.nextDirection = { x: 0, y: -1 }
                    break
                case 'ArrowDown':
                case 's':
                    if (game.direction.y !== -1) game.nextDirection = { x: 0, y: 1 }
                    break
                case 'ArrowLeft':
                case 'a':
                    if (game.direction.x !== 1) game.nextDirection = { x: -1, y: 0 }
                    break
                case 'ArrowRight':
                case 'd':
                    if (game.direction.x !== -1) game.nextDirection = { x: 1, y: 0 }
                    break
                case ' ':
                    setGameState(prev => prev === 'playing' ? 'paused' : 'playing')
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [gameState])

    // Initial draw
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#0f0f1e'
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }, [])

    return (
        <div className="snake-game">
            <div className="game-header">
                <div className="score-display">
                    <div className="score-item">
                        <span className="score-label">Score</span>
                        <span className="score-value">{score}</span>
                    </div>
                    <div className="score-item">
                        <span className="score-label">High Score</span>
                        <span className="score-value high">{highScore}</span>
                    </div>
                </div>
            </div>

            <div className="game-container">
                <canvas
                    ref={canvasRef}
                    width={CANVAS_SIZE}
                    height={CANVAS_SIZE}
                    className="game-canvas"
                />

                {gameState === 'idle' && (
                    <div className="game-overlay">
                        <h3>🐍 Snake Game</h3>
                        <p>Gunakan Arrow Keys atau WASD untuk bergerak</p>
                        <div className="speed-selector">
                            <span>Speed:</span>
                            {['slow', 'normal', 'fast'].map(s => (
                                <button
                                    key={s}
                                    className={`speed-btn ${speed === s ? 'active' : ''}`}
                                    onClick={() => setSpeed(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <button className="start-btn" onClick={startGame}>
                            ▶️ Start Game
                        </button>
                    </div>
                )}

                {gameState === 'paused' && (
                    <div className="game-overlay">
                        <h3>⏸️ Paused</h3>
                        <button className="start-btn" onClick={() => setGameState('playing')}>
                            ▶️ Resume
                        </button>
                    </div>
                )}

                {gameState === 'gameOver' && (
                    <div className="game-overlay gameover">
                        <h3>💀 Game Over!</h3>
                        <p>Score: {score}</p>
                        {score >= highScore && score > 0 && (
                            <p className="new-high">🎉 New High Score!</p>
                        )}
                        <button className="start-btn" onClick={startGame}>
                            🔄 Play Again
                        </button>
                    </div>
                )}
            </div>

            <div className="game-controls">
                <p>⬆️⬇️⬅️➡️ atau WASD untuk bergerak | SPACE untuk pause</p>
            </div>

            <style>{`
                .snake-game {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.5rem;
                }

                .game-header {
                    width: 100%;
                    max-width: 400px;
                    margin-bottom: 1rem;
                }

                .score-display {
                    display: flex;
                    justify-content: space-around;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    padding: 1rem;
                }

                .score-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .score-label {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .score-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #22d3ee;
                }

                .score-value.high {
                    color: #f59e0b;
                }

                .game-container {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                }

                .game-canvas {
                    display: block;
                    border: 2px solid rgba(99, 102, 241, 0.3);
                    border-radius: 12px;
                }

                .game-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 15, 30, 0.95);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    text-align: center;
                    padding: 2rem;
                }

                .game-overlay h3 {
                    font-size: 1.75rem;
                    margin: 0;
                }

                .game-overlay p {
                    color: var(--text-secondary);
                    margin: 0;
                }

                .game-overlay.gameover h3 {
                    color: #ef4444;
                }

                .new-high {
                    color: #f59e0b !important;
                    font-weight: 600;
                }

                .speed-selector {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin: 0.5rem 0;
                }

                .speed-btn {
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    border-radius: 8px;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.2s;
                    text-transform: capitalize;
                }

                .speed-btn.active {
                    background: #6366f1;
                    color: white;
                }

                .start-btn {
                    margin-top: 1rem;
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .start-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 5px 20px rgba(16, 185, 129, 0.4);
                }

                .game-controls {
                    margin-top: 1rem;
                    color: var(--text-muted);
                    font-size: 0.8rem;
                }
            `}</style>
        </div>
    )
}

export default SnakeGame
