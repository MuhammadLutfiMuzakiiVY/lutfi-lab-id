import { useState, useCallback, useEffect } from 'react'

// Chess pieces unicode
const PIECES = {
    wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
    bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟'
}

// Piece values for AI evaluation
const PIECE_VALUES = {
    P: 100, N: 320, B: 330, R: 500, Q: 900, K: 20000
}

// Position bonuses for pieces (encourages good piece placement)
const PAWN_TABLE = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [50, 50, 50, 50, 50, 50, 50, 50],
    [10, 10, 20, 30, 30, 20, 10, 10],
    [5, 5, 10, 25, 25, 10, 5, 5],
    [0, 0, 0, 20, 20, 0, 0, 0],
    [5, -5, -10, 0, 0, -10, -5, 5],
    [5, 10, 10, -20, -20, 10, 10, 5],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

const KNIGHT_TABLE = [
    [-50, -40, -30, -30, -30, -30, -40, -50],
    [-40, -20, 0, 0, 0, 0, -20, -40],
    [-30, 0, 10, 15, 15, 10, 0, -30],
    [-30, 5, 15, 20, 20, 15, 5, -30],
    [-30, 0, 15, 20, 20, 15, 0, -30],
    [-30, 5, 10, 15, 15, 10, 5, -30],
    [-40, -20, 0, 5, 5, 0, -20, -40],
    [-50, -40, -30, -30, -30, -30, -40, -50]
]

const BISHOP_TABLE = [
    [-20, -10, -10, -10, -10, -10, -10, -20],
    [-10, 0, 0, 0, 0, 0, 0, -10],
    [-10, 0, 5, 10, 10, 5, 0, -10],
    [-10, 5, 5, 10, 10, 5, 5, -10],
    [-10, 0, 10, 10, 10, 10, 0, -10],
    [-10, 10, 10, 10, 10, 10, 10, -10],
    [-10, 5, 0, 0, 0, 0, 5, -10],
    [-20, -10, -10, -10, -10, -10, -10, -20]
]

const KING_TABLE = [
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-20, -30, -30, -40, -40, -30, -30, -20],
    [-10, -20, -20, -20, -20, -20, -20, -10],
    [20, 20, 0, 0, 0, 0, 20, 20],
    [20, 30, 10, 0, 0, 10, 30, 20]
]

// Initial board setup
const INITIAL_BOARD = [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
]

function ChessGame() {
    const [board, setBoard] = useState(INITIAL_BOARD.map(row => [...row]))
    const [selectedSquare, setSelectedSquare] = useState(null)
    const [validMoves, setValidMoves] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState('w')
    const [gameStatus, setGameStatus] = useState('playing') // playing, check, checkmate, stalemate
    const [moveHistory, setMoveHistory] = useState([])
    const [capturedPieces, setCapturedPieces] = useState({ w: [], b: [] })
    const [aiThinking, setAiThinking] = useState(false)
    const [aiDifficulty, setAiDifficulty] = useState(4) // Depth of minimax (4 = hard)

    // Check if a position is on the board
    const isOnBoard = (row, col) => row >= 0 && row < 8 && col >= 0 && col < 8

    // Get piece color
    const getPieceColor = (piece) => piece ? piece[0] : null

    // Get piece type
    const getPieceType = (piece) => piece ? piece[1] : null

    // Deep copy board
    const copyBoard = (b) => b.map(row => [...row])

    // Find king position
    const findKing = useCallback((b, color) => {
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                if (b[r][c] === color + 'K') return [r, c]
            }
        }
        return null
    }, [])

    // Check if square is attacked by opponent
    const isSquareAttacked = useCallback((b, row, col, attackerColor) => {
        const defenderColor = attackerColor === 'w' ? 'b' : 'w'

        // Check pawn attacks
        const pawnDir = attackerColor === 'w' ? 1 : -1
        if (isOnBoard(row + pawnDir, col - 1) && b[row + pawnDir][col - 1] === attackerColor + 'P') return true
        if (isOnBoard(row + pawnDir, col + 1) && b[row + pawnDir][col + 1] === attackerColor + 'P') return true

        // Check knight attacks
        const knightMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
        for (const [dr, dc] of knightMoves) {
            const nr = row + dr, nc = col + dc
            if (isOnBoard(nr, nc) && b[nr][nc] === attackerColor + 'N') return true
        }

        // Check king attacks (for adjacent squares)
        const kingMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
        for (const [dr, dc] of kingMoves) {
            const nr = row + dr, nc = col + dc
            if (isOnBoard(nr, nc) && b[nr][nc] === attackerColor + 'K') return true
        }

        // Check sliding pieces (rook, queen) - straight lines
        const straightDirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        for (const [dr, dc] of straightDirs) {
            let nr = row + dr, nc = col + dc
            while (isOnBoard(nr, nc)) {
                const piece = b[nr][nc]
                if (piece) {
                    if (getPieceColor(piece) === attackerColor && (piece[1] === 'R' || piece[1] === 'Q')) return true
                    break
                }
                nr += dr
                nc += dc
            }
        }

        // Check sliding pieces (bishop, queen) - diagonals
        const diagDirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]]
        for (const [dr, dc] of diagDirs) {
            let nr = row + dr, nc = col + dc
            while (isOnBoard(nr, nc)) {
                const piece = b[nr][nc]
                if (piece) {
                    if (getPieceColor(piece) === attackerColor && (piece[1] === 'B' || piece[1] === 'Q')) return true
                    break
                }
                nr += dr
                nc += dc
            }
        }

        return false
    }, [])

    // Check if king is in check
    const isInCheck = useCallback((b, color) => {
        const kingPos = findKing(b, color)
        if (!kingPos) return false
        const opponent = color === 'w' ? 'b' : 'w'
        return isSquareAttacked(b, kingPos[0], kingPos[1], opponent)
    }, [findKing, isSquareAttacked])

    // Get all valid moves for a piece (including check validation)
    const getValidMoves = useCallback((b, row, col, checkLegal = true) => {
        const piece = b[row][col]
        if (!piece) return []

        const color = getPieceColor(piece)
        const type = getPieceType(piece)
        const moves = []

        const addMove = (toRow, toCol) => {
            if (!isOnBoard(toRow, toCol)) return
            const targetPiece = b[toRow][toCol]
            if (targetPiece && getPieceColor(targetPiece) === color) return

            // Check if move leaves king in check
            if (checkLegal) {
                const testBoard = copyBoard(b)
                testBoard[toRow][toCol] = piece
                testBoard[row][col] = null
                if (isInCheck(testBoard, color)) return
            }

            moves.push([toRow, toCol])
        }

        if (type === 'P') {
            const dir = color === 'w' ? -1 : 1
            const startRow = color === 'w' ? 6 : 1

            // Forward move
            if (!b[row + dir]?.[col]) {
                addMove(row + dir, col)
                // Double move from start
                if (row === startRow && !b[row + 2 * dir]?.[col]) {
                    addMove(row + 2 * dir, col)
                }
            }

            // Captures
            for (const dc of [-1, 1]) {
                const tc = col + dc
                if (isOnBoard(row + dir, tc) && b[row + dir][tc] && getPieceColor(b[row + dir][tc]) !== color) {
                    addMove(row + dir, tc)
                }
            }
        } else if (type === 'N') {
            const knightMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
            for (const [dr, dc] of knightMoves) {
                addMove(row + dr, col + dc)
            }
        } else if (type === 'K') {
            const kingMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
            for (const [dr, dc] of kingMoves) {
                addMove(row + dr, col + dc)
            }
        } else if (type === 'R' || type === 'Q') {
            const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
            for (const [dr, dc] of dirs) {
                let nr = row + dr, nc = col + dc
                while (isOnBoard(nr, nc)) {
                    const target = b[nr][nc]
                    if (target) {
                        if (getPieceColor(target) !== color) addMove(nr, nc)
                        break
                    }
                    addMove(nr, nc)
                    nr += dr
                    nc += dc
                }
            }
        }

        if (type === 'B' || type === 'Q') {
            const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]]
            for (const [dr, dc] of dirs) {
                let nr = row + dr, nc = col + dc
                while (isOnBoard(nr, nc)) {
                    const target = b[nr][nc]
                    if (target) {
                        if (getPieceColor(target) !== color) addMove(nr, nc)
                        break
                    }
                    addMove(nr, nc)
                    nr += dr
                    nc += dc
                }
            }
        }

        return moves
    }, [isInCheck])

    // Get all possible moves for a color
    const getAllMoves = useCallback((b, color) => {
        const moves = []
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                if (b[r][c] && getPieceColor(b[r][c]) === color) {
                    const pieceMoves = getValidMoves(b, r, c, true)
                    for (const [tr, tc] of pieceMoves) {
                        moves.push({ from: [r, c], to: [tr, tc], piece: b[r][c] })
                    }
                }
            }
        }
        return moves
    }, [getValidMoves])

    // Evaluate board position for AI
    const evaluateBoard = useCallback((b) => {
        let score = 0

        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const piece = b[r][c]
                if (!piece) continue

                const color = getPieceColor(piece)
                const type = getPieceType(piece)
                const multiplier = color === 'b' ? 1 : -1

                // Material value
                score += PIECE_VALUES[type] * multiplier

                // Position bonus
                const posRow = color === 'b' ? r : 7 - r
                if (type === 'P') score += PAWN_TABLE[posRow][c] * multiplier
                else if (type === 'N') score += KNIGHT_TABLE[posRow][c] * multiplier
                else if (type === 'B') score += BISHOP_TABLE[posRow][c] * multiplier
                else if (type === 'K') score += KING_TABLE[posRow][c] * multiplier
            }
        }

        return score
    }, [])

    // Minimax with alpha-beta pruning
    const minimax = useCallback((b, depth, alpha, beta, isMaximizing) => {
        if (depth === 0) {
            return evaluateBoard(b)
        }

        const color = isMaximizing ? 'b' : 'w'
        const moves = getAllMoves(b, color)

        if (moves.length === 0) {
            if (isInCheck(b, color)) {
                return isMaximizing ? -99999 : 99999 // Checkmate
            }
            return 0 // Stalemate
        }

        if (isMaximizing) {
            let maxEval = -Infinity
            for (const move of moves) {
                const newBoard = copyBoard(b)
                newBoard[move.to[0]][move.to[1]] = move.piece
                newBoard[move.from[0]][move.from[1]] = null

                // Pawn promotion
                if (move.piece === 'bP' && move.to[0] === 7) {
                    newBoard[move.to[0]][move.to[1]] = 'bQ'
                }

                const evalScore = minimax(newBoard, depth - 1, alpha, beta, false)
                maxEval = Math.max(maxEval, evalScore)
                alpha = Math.max(alpha, evalScore)
                if (beta <= alpha) break
            }
            return maxEval
        } else {
            let minEval = Infinity
            for (const move of moves) {
                const newBoard = copyBoard(b)
                newBoard[move.to[0]][move.to[1]] = move.piece
                newBoard[move.from[0]][move.from[1]] = null

                // Pawn promotion
                if (move.piece === 'wP' && move.to[0] === 0) {
                    newBoard[move.to[0]][move.to[1]] = 'wQ'
                }

                const evalScore = minimax(newBoard, depth - 1, alpha, beta, true)
                minEval = Math.min(minEval, evalScore)
                beta = Math.min(beta, evalScore)
                if (beta <= alpha) break
            }
            return minEval
        }
    }, [evaluateBoard, getAllMoves, isInCheck])

    // AI makes a move
    const makeAIMove = useCallback(() => {
        const moves = getAllMoves(board, 'b')
        if (moves.length === 0) return

        let bestMove = null
        let bestScore = -Infinity

        for (const move of moves) {
            const newBoard = copyBoard(board)
            newBoard[move.to[0]][move.to[1]] = move.piece
            newBoard[move.from[0]][move.from[1]] = null

            // Pawn promotion
            if (move.piece === 'bP' && move.to[0] === 7) {
                newBoard[move.to[0]][move.to[1]] = 'bQ'
            }

            const score = minimax(newBoard, aiDifficulty - 1, -Infinity, Infinity, false)
            if (score > bestScore) {
                bestScore = score
                bestMove = move
            }
        }

        if (bestMove) {
            const newBoard = copyBoard(board)
            const captured = newBoard[bestMove.to[0]][bestMove.to[1]]
            newBoard[bestMove.to[0]][bestMove.to[1]] = bestMove.piece
            newBoard[bestMove.from[0]][bestMove.from[1]] = null

            // Pawn promotion
            if (bestMove.piece === 'bP' && bestMove.to[0] === 7) {
                newBoard[bestMove.to[0]][bestMove.to[1]] = 'bQ'
            }

            if (captured) {
                setCapturedPieces(prev => ({
                    ...prev,
                    b: [...prev.b, captured]
                }))
            }

            setBoard(newBoard)
            setMoveHistory(prev => [...prev, {
                piece: bestMove.piece,
                from: bestMove.from,
                to: bestMove.to,
                captured
            }])
            setCurrentPlayer('w')

            // Check game status
            const whiteInCheck = isInCheck(newBoard, 'w')
            const whiteMoves = getAllMoves(newBoard, 'w')

            if (whiteMoves.length === 0) {
                setGameStatus(whiteInCheck ? 'checkmate' : 'stalemate')
            } else if (whiteInCheck) {
                setGameStatus('check')
            } else {
                setGameStatus('playing')
            }
        }

        setAiThinking(false)
    }, [board, aiDifficulty, getAllMoves, minimax, isInCheck])

    // Handle AI turn
    useEffect(() => {
        if (currentPlayer === 'b' && gameStatus === 'playing' || gameStatus === 'check') {
            if (currentPlayer === 'b') {
                setAiThinking(true)
                setTimeout(makeAIMove, 500)
            }
        }
    }, [currentPlayer, gameStatus, makeAIMove])

    // Handle square click
    const handleSquareClick = (row, col) => {
        if (currentPlayer !== 'w' || aiThinking) return
        if (gameStatus === 'checkmate' || gameStatus === 'stalemate') return

        const piece = board[row][col]

        if (selectedSquare) {
            // Try to make move
            const [selRow, selCol] = selectedSquare
            const isValidMove = validMoves.some(([mr, mc]) => mr === row && mc === col)

            if (isValidMove) {
                const newBoard = copyBoard(board)
                const movingPiece = newBoard[selRow][selCol]
                const captured = newBoard[row][col]

                newBoard[row][col] = movingPiece
                newBoard[selRow][selCol] = null

                // Pawn promotion
                if (movingPiece === 'wP' && row === 0) {
                    newBoard[row][col] = 'wQ'
                }

                if (captured) {
                    setCapturedPieces(prev => ({
                        ...prev,
                        w: [...prev.w, captured]
                    }))
                }

                setBoard(newBoard)
                setMoveHistory(prev => [...prev, {
                    piece: movingPiece,
                    from: [selRow, selCol],
                    to: [row, col],
                    captured
                }])
                setSelectedSquare(null)
                setValidMoves([])
                setCurrentPlayer('b')

                // Check game status
                const blackInCheck = isInCheck(newBoard, 'b')
                const blackMoves = getAllMoves(newBoard, 'b')

                if (blackMoves.length === 0) {
                    setGameStatus(blackInCheck ? 'checkmate' : 'stalemate')
                } else if (blackInCheck) {
                    setGameStatus('check')
                } else {
                    setGameStatus('playing')
                }
            } else {
                // Select new piece or deselect
                if (piece && getPieceColor(piece) === 'w') {
                    setSelectedSquare([row, col])
                    setValidMoves(getValidMoves(board, row, col))
                } else {
                    setSelectedSquare(null)
                    setValidMoves([])
                }
            }
        } else {
            // Select piece
            if (piece && getPieceColor(piece) === 'w') {
                setSelectedSquare([row, col])
                setValidMoves(getValidMoves(board, row, col))
            }
        }
    }

    // Reset game
    const resetGame = () => {
        setBoard(INITIAL_BOARD.map(row => [...row]))
        setSelectedSquare(null)
        setValidMoves([])
        setCurrentPlayer('w')
        setGameStatus('playing')
        setMoveHistory([])
        setCapturedPieces({ w: [], b: [] })
        setAiThinking(false)
    }

    const getSquareColor = (row, col) => {
        return (row + col) % 2 === 0 ? 'light' : 'dark'
    }

    const isSelected = (row, col) => {
        return selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col
    }

    const isValidMoveSquare = (row, col) => {
        return validMoves.some(([mr, mc]) => mr === row && mc === col)
    }

    return (
        <div className="chess-game">
            <div className="chess-container">
                {/* Game Info */}
                <div className="game-info">
                    <div className="game-header">
                        <h2>♟️ Chess vs AI</h2>
                        <select
                            value={aiDifficulty}
                            onChange={(e) => setAiDifficulty(Number(e.target.value))}
                            disabled={moveHistory.length > 0}
                        >
                            <option value={2}>Easy</option>
                            <option value={3}>Medium</option>
                            <option value={4}>Hard</option>
                            <option value={5}>Expert</option>
                        </select>
                    </div>

                    <div className="game-status">
                        {aiThinking ? (
                            <div className="thinking">
                                <div className="thinking-spinner"></div>
                                <span>AI sedang berpikir...</span>
                            </div>
                        ) : gameStatus === 'checkmate' ? (
                            <div className="status checkmate">
                                🏆 {currentPlayer === 'w' ? 'AI Menang!' : 'Anda Menang!'}
                            </div>
                        ) : gameStatus === 'stalemate' ? (
                            <div className="status stalemate">🤝 Seri (Stalemate)</div>
                        ) : gameStatus === 'check' ? (
                            <div className="status check">⚠️ Check!</div>
                        ) : (
                            <div className="status">
                                {currentPlayer === 'w' ? '⚪ Giliran Anda' : '⚫ Giliran AI'}
                            </div>
                        )}
                    </div>

                    {/* Captured Pieces */}
                    <div className="captured">
                        <div className="captured-row">
                            <span>Anda tangkap:</span>
                            <div className="captured-pieces">
                                {capturedPieces.w.map((p, i) => (
                                    <span key={i} className="captured-piece">{PIECES[p]}</span>
                                ))}
                            </div>
                        </div>
                        <div className="captured-row">
                            <span>AI tangkap:</span>
                            <div className="captured-pieces">
                                {capturedPieces.b.map((p, i) => (
                                    <span key={i} className="captured-piece">{PIECES[p]}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="reset-btn" onClick={resetGame}>
                        🔄 Mulai Ulang
                    </button>
                </div>

                {/* Chess Board */}
                <div className="chess-board">
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className="board-row">
                            <span className="coord-label row-label">{8 - rowIndex}</span>
                            {row.map((piece, colIndex) => (
                                <div
                                    key={colIndex}
                                    className={`square ${getSquareColor(rowIndex, colIndex)} 
                                        ${isSelected(rowIndex, colIndex) ? 'selected' : ''} 
                                        ${isValidMoveSquare(rowIndex, colIndex) ? 'valid-move' : ''}
                                        ${piece && isValidMoveSquare(rowIndex, colIndex) ? 'can-capture' : ''}`}
                                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                                >
                                    {piece && (
                                        <span className={`piece ${getPieceColor(piece)}`}>
                                            {PIECES[piece]}
                                        </span>
                                    )}
                                    {isValidMoveSquare(rowIndex, colIndex) && !piece && (
                                        <div className="move-indicator"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="board-row coord-row">
                        <span className="coord-label"></span>
                        {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(letter => (
                            <span key={letter} className="coord-label col-label">{letter}</span>
                        ))}
                    </div>
                </div>

                {/* Move History */}
                <div className="move-history">
                    <h3>📜 Riwayat</h3>
                    <div className="moves-list">
                        {moveHistory.length === 0 ? (
                            <p className="no-moves">Belum ada gerakan</p>
                        ) : (
                            moveHistory.map((move, i) => (
                                <div key={i} className={`move-item ${getPieceColor(move.piece)}`}>
                                    <span className="move-num">{Math.floor(i / 2) + 1}.</span>
                                    <span className="move-piece">{PIECES[move.piece]}</span>
                                    <span className="move-notation">
                                        {String.fromCharCode(97 + move.from[1])}{8 - move.from[0]}
                                        {move.captured ? 'x' : '→'}
                                        {String.fromCharCode(97 + move.to[1])}{8 - move.to[0]}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .chess-game {
                    padding: 1.5rem;
                }

                .chess-container {
                    display: grid;
                    grid-template-columns: 200px 1fr 180px;
                    gap: 1.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .game-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .game-header {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .game-header h2 {
                    font-size: 1.25rem;
                    margin: 0;
                }

                .game-header select {
                    padding: 0.5rem;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }

                .game-status {
                    padding: 1rem;
                    background: rgba(255,255,255,0.05);
                    border-radius: 10px;
                    text-align: center;
                }

                .game-status .status {
                    font-weight: 600;
                }

                .status.check { color: #f59e0b; }
                .status.checkmate { color: #ef4444; }
                .status.stalemate { color: #6b7280; }

                .thinking {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .thinking-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255,255,255,0.2);
                    border-top-color: var(--primary);
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                .captured {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .captured-row {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .captured-pieces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.25rem;
                    min-height: 24px;
                }

                .captured-piece {
                    font-size: 1rem;
                }

                .reset-btn {
                    padding: 0.75rem;
                    background: var(--gradient-primary);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .reset-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
                }

                .chess-board {
                    background: #1a1a2e;
                    border-radius: 12px;
                    padding: 0.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                }

                .board-row {
                    display: flex;
                    align-items: center;
                }

                .coord-label {
                    width: 20px;
                    text-align: center;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .col-label {
                    flex: 1;
                    text-align: center;
                }

                .coord-row {
                    margin-top: 4px;
                }

                .square {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.15s ease;
                }

                .square.light { background: #eeeed2; }
                .square.dark { background: #769656; }

                .square.selected {
                    background: #f6f669 !important;
                }

                .square.valid-move {
                    cursor: pointer;
                }

                .square.can-capture {
                    background: #ff6b6b !important;
                }

                .square:hover {
                    filter: brightness(1.1);
                }

                .move-indicator {
                    width: 14px;
                    height: 14px;
                    background: rgba(0,0,0,0.2);
                    border-radius: 50%;
                }

                .piece {
                    font-size: 2.25rem;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                    user-select: none;
                    transition: transform 0.1s ease;
                }

                .piece.w { color: #fff; text-shadow: 0 0 3px #000, 0 0 3px #000; }
                .piece.b { color: #000; }

                .square:hover .piece {
                    transform: scale(1.1);
                }

                .move-history {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                }

                .move-history h3 {
                    font-size: 0.875rem;
                    margin: 0 0 0.75rem 0;
                    color: var(--text-secondary);
                }

                .moves-list {
                    flex: 1;
                    overflow-y: auto;
                    max-height: 350px;
                }

                .no-moves {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-style: italic;
                }

                .move-item {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.25rem 0.5rem;
                    font-size: 0.75rem;
                    border-radius: 4px;
                    margin-bottom: 0.25rem;
                }

                .move-item.w { background: rgba(255,255,255,0.1); }
                .move-item.b { background: rgba(0,0,0,0.3); }

                .move-num { 
                    color: var(--text-muted); 
                    min-width: 20px;
                }

                .move-piece {
                    font-size: 1rem;
                }

                .move-notation {
                    color: var(--text-secondary);
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Tablet */
                @media (max-width: 900px) {
                    .chess-container {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .game-info {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 0.75rem;
                    }

                    .game-header {
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
                    }

                    .chess-board {
                        justify-self: center;
                    }

                    .move-history {
                        max-height: 120px;
                    }
                }

                /* Mobile Large (iPhone 14 Pro Max, etc) */
                @media (max-width: 768px) {
                    .chess-game {
                        padding: 0.5rem;
                    }

                    .game-info {
                        gap: 0.5rem;
                    }

                    .game-header h2 {
                        font-size: 1rem;
                    }

                    .game-status {
                        padding: 0.75rem;
                    }

                    .captured {
                        display: none;
                    }

                    .reset-btn {
                        padding: 0.5rem 1rem;
                        font-size: 0.875rem;
                    }
                }

                /* Mobile Medium (iPhone 12, 13, 14 - 430px) */
                @media (max-width: 500px) {
                    .chess-game {
                        padding: 0.25rem;
                    }

                    .chess-board {
                        padding: 0.25rem;
                    }

                    .square {
                        width: calc((100vw - 60px) / 8);
                        height: calc((100vw - 60px) / 8);
                        max-width: 40px;
                        max-height: 40px;
                    }

                    .piece {
                        font-size: 1.5rem;
                    }

                    .coord-label {
                        width: 14px;
                        font-size: 0.6rem;
                    }

                    .game-header {
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .game-header h2 {
                        font-size: 0.9rem;
                    }

                    .game-header select {
                        padding: 0.375rem;
                        font-size: 0.75rem;
                    }

                    .game-status {
                        padding: 0.5rem;
                        font-size: 0.8rem;
                    }

                    .thinking span {
                        font-size: 0.75rem;
                    }

                    .move-history {
                        padding: 0.5rem;
                        max-height: 100px;
                    }

                    .move-history h3 {
                        font-size: 0.75rem;
                    }

                    .move-item {
                        font-size: 0.65rem;
                        padding: 0.2rem 0.4rem;
                    }
                }

                /* Mobile Small (iPhone SE, older phones - 375px) */
                @media (max-width: 375px) {
                    .square {
                        width: calc((100vw - 50px) / 8);
                        height: calc((100vw - 50px) / 8);
                        max-width: 36px;
                        max-height: 36px;
                    }

                    .piece {
                        font-size: 1.25rem;
                    }

                    .coord-label {
                        width: 12px;
                        font-size: 0.5rem;
                    }

                    .game-header h2 {
                        font-size: 0.8rem;
                    }

                    .move-history {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}

export default ChessGame
