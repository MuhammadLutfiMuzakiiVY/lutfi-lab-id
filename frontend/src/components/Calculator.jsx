import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Calculator = () => {
    const { t } = useLanguage()
    const [display, setDisplay] = useState('0')
    const [previousValue, setPreviousValue] = useState(null)
    const [operation, setOperation] = useState(null)
    const [waitingForOperand, setWaitingForOperand] = useState(false)
    const [history, setHistory] = useState([])
    const [isScientific, setIsScientific] = useState(false)
    const [memory, setMemory] = useState(0)

    // Handle number input
    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setDisplay(digit)
            setWaitingForOperand(false)
        } else {
            setDisplay(display === '0' ? digit : display + digit)
        }
    }

    // Handle decimal point
    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.')
            setWaitingForOperand(false)
        } else if (!display.includes('.')) {
            setDisplay(display + '.')
        }
    }

    // Clear display
    const clear = () => {
        setDisplay('0')
        setPreviousValue(null)
        setOperation(null)
        setWaitingForOperand(false)
    }

    // Clear entry
    const clearEntry = () => {
        setDisplay('0')
    }

    // Toggle sign
    const toggleSign = () => {
        setDisplay(String(-parseFloat(display)))
    }

    // Percentage
    const percentage = () => {
        const value = parseFloat(display) / 100
        setDisplay(String(value))
    }

    // Perform operation
    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display)

        if (previousValue === null) {
            setPreviousValue(inputValue)
        } else if (operation) {
            const result = calculate(previousValue, inputValue, operation)
            setDisplay(String(result))
            setPreviousValue(result)

            // Add to history
            const historyEntry = `${previousValue} ${getOperationSymbol(operation)} ${inputValue} = ${result}`
            setHistory(prev => [historyEntry, ...prev.slice(0, 9)])
        }

        setWaitingForOperand(true)
        setOperation(nextOperation)
    }

    // Calculate result
    const calculate = (left, right, op) => {
        switch (op) {
            case '+': return left + right
            case '-': return left - right
            case '*': return left * right
            case '/': return right !== 0 ? left / right : 'Error'
            case '^': return Math.pow(left, right)
            default: return right
        }
    }

    // Get operation symbol
    const getOperationSymbol = (op) => {
        const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷', '^': '^' }
        return symbols[op] || op
    }

    // Equal sign
    const handleEqual = () => {
        if (operation && previousValue !== null) {
            const inputValue = parseFloat(display)
            const result = calculate(previousValue, inputValue, operation)

            const historyEntry = `${previousValue} ${getOperationSymbol(operation)} ${inputValue} = ${result}`
            setHistory(prev => [historyEntry, ...prev.slice(0, 9)])

            setDisplay(String(result))
            setPreviousValue(null)
            setOperation(null)
            setWaitingForOperand(true)
        }
    }

    // Scientific functions
    const scientificOperation = (func) => {
        const value = parseFloat(display)
        let result

        switch (func) {
            case 'sin': result = Math.sin(value * Math.PI / 180); break
            case 'cos': result = Math.cos(value * Math.PI / 180); break
            case 'tan': result = Math.tan(value * Math.PI / 180); break
            case 'sqrt': result = Math.sqrt(value); break
            case 'log': result = Math.log10(value); break
            case 'ln': result = Math.log(value); break
            case 'x2': result = Math.pow(value, 2); break
            case 'x3': result = Math.pow(value, 3); break
            case '1/x': result = 1 / value; break
            case 'abs': result = Math.abs(value); break
            case 'exp': result = Math.exp(value); break
            case 'pi': result = Math.PI; break
            case 'e': result = Math.E; break
            case 'fact': result = factorial(value); break
            default: result = value
        }

        setDisplay(String(result))
        setWaitingForOperand(true)
    }

    // Factorial
    const factorial = (n) => {
        if (n < 0) return 'Error'
        if (n === 0 || n === 1) return 1
        let result = 1
        for (let i = 2; i <= n; i++) result *= i
        return result
    }

    // Memory functions
    const memoryAdd = () => setMemory(memory + parseFloat(display))
    const memorySubtract = () => setMemory(memory - parseFloat(display))
    const memoryRecall = () => setDisplay(String(memory))
    const memoryClear = () => setMemory(0)

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key >= '0' && e.key <= '9') inputDigit(e.key)
            else if (e.key === '.') inputDecimal()
            else if (e.key === '+') performOperation('+')
            else if (e.key === '-') performOperation('-')
            else if (e.key === '*') performOperation('*')
            else if (e.key === '/') { e.preventDefault(); performOperation('/') }
            else if (e.key === 'Enter' || e.key === '=') handleEqual()
            else if (e.key === 'Escape') clear()
            else if (e.key === 'Backspace') {
                setDisplay(display.length > 1 ? display.slice(0, -1) : '0')
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    // Button component
    const Button = ({ onClick, children, style, className = '' }) => (
        <button
            onClick={onClick}
            style={{ ...styles.button, ...style }}
            className={className}
        >
            {children}
        </button>
    )

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>🧮 Calculator</h2>
                <button
                    onClick={() => setIsScientific(!isScientific)}
                    style={styles.modeToggle}
                >
                    {isScientific ? 'Basic' : 'Scientific'}
                </button>
            </div>

            {/* Display */}
            <div style={styles.displayContainer}>
                {operation && (
                    <div style={styles.operationDisplay}>
                        {previousValue} {getOperationSymbol(operation)}
                    </div>
                )}
                <div style={styles.display}>{display}</div>
            </div>

            {/* Memory indicator */}
            {memory !== 0 && (
                <div style={styles.memoryIndicator}>M = {memory}</div>
            )}

            {/* Buttons */}
            <div style={styles.buttonGrid}>
                {/* Memory row */}
                <div style={styles.memoryRow}>
                    <Button onClick={memoryClear} style={styles.memoryBtn}>MC</Button>
                    <Button onClick={memoryRecall} style={styles.memoryBtn}>MR</Button>
                    <Button onClick={memoryAdd} style={styles.memoryBtn}>M+</Button>
                    <Button onClick={memorySubtract} style={styles.memoryBtn}>M-</Button>
                </div>

                {/* Scientific buttons */}
                {isScientific && (
                    <div style={styles.scientificRow}>
                        <Button onClick={() => scientificOperation('sin')} style={styles.sciBtn}>sin</Button>
                        <Button onClick={() => scientificOperation('cos')} style={styles.sciBtn}>cos</Button>
                        <Button onClick={() => scientificOperation('tan')} style={styles.sciBtn}>tan</Button>
                        <Button onClick={() => scientificOperation('sqrt')} style={styles.sciBtn}>√</Button>
                        <Button onClick={() => scientificOperation('log')} style={styles.sciBtn}>log</Button>
                        <Button onClick={() => scientificOperation('ln')} style={styles.sciBtn}>ln</Button>
                        <Button onClick={() => scientificOperation('x2')} style={styles.sciBtn}>x²</Button>
                        <Button onClick={() => scientificOperation('x3')} style={styles.sciBtn}>x³</Button>
                        <Button onClick={() => performOperation('^')} style={styles.sciBtn}>xʸ</Button>
                        <Button onClick={() => scientificOperation('1/x')} style={styles.sciBtn}>1/x</Button>
                        <Button onClick={() => scientificOperation('pi')} style={styles.sciBtn}>π</Button>
                        <Button onClick={() => scientificOperation('e')} style={styles.sciBtn}>e</Button>
                        <Button onClick={() => scientificOperation('fact')} style={styles.sciBtn}>n!</Button>
                        <Button onClick={() => scientificOperation('abs')} style={styles.sciBtn}>|x|</Button>
                        <Button onClick={() => scientificOperation('exp')} style={styles.sciBtn}>eˣ</Button>
                    </div>
                )}

                {/* Main buttons */}
                <div style={styles.mainButtons}>
                    <Button onClick={clear} style={styles.clearBtn}>AC</Button>
                    <Button onClick={clearEntry} style={styles.clearBtn}>CE</Button>
                    <Button onClick={toggleSign} style={styles.funcBtn}>±</Button>
                    <Button onClick={() => performOperation('/')} style={styles.opBtn}>÷</Button>

                    <Button onClick={() => inputDigit('7')} style={styles.numBtn}>7</Button>
                    <Button onClick={() => inputDigit('8')} style={styles.numBtn}>8</Button>
                    <Button onClick={() => inputDigit('9')} style={styles.numBtn}>9</Button>
                    <Button onClick={() => performOperation('*')} style={styles.opBtn}>×</Button>

                    <Button onClick={() => inputDigit('4')} style={styles.numBtn}>4</Button>
                    <Button onClick={() => inputDigit('5')} style={styles.numBtn}>5</Button>
                    <Button onClick={() => inputDigit('6')} style={styles.numBtn}>6</Button>
                    <Button onClick={() => performOperation('-')} style={styles.opBtn}>−</Button>

                    <Button onClick={() => inputDigit('1')} style={styles.numBtn}>1</Button>
                    <Button onClick={() => inputDigit('2')} style={styles.numBtn}>2</Button>
                    <Button onClick={() => inputDigit('3')} style={styles.numBtn}>3</Button>
                    <Button onClick={() => performOperation('+')} style={styles.opBtn}>+</Button>

                    <Button onClick={percentage} style={styles.funcBtn}>%</Button>
                    <Button onClick={() => inputDigit('0')} style={styles.numBtn}>0</Button>
                    <Button onClick={inputDecimal} style={styles.numBtn}>.</Button>
                    <Button onClick={handleEqual} style={styles.equalBtn}>=</Button>
                </div>
            </div>

            {/* History */}
            {history.length > 0 && (
                <div style={styles.historyContainer}>
                    <div style={styles.historyHeader}>
                        <span>History</span>
                        <button onClick={() => setHistory([])} style={styles.clearHistory}>Clear</button>
                    </div>
                    <div style={styles.historyList}>
                        {history.map((entry, index) => (
                            <div key={index} style={styles.historyItem}>{entry}</div>
                        ))}
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
        maxWidth: '400px',
        margin: '0 auto'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    },
    title: {
        fontSize: '24px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    modeToggle: {
        background: 'rgba(99, 102, 241, 0.2)',
        color: '#a5b4fc',
        border: '1px solid rgba(99, 102, 241, 0.4)',
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '600'
    },
    displayContainer: {
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '15px',
        border: '1px solid rgba(99, 102, 241, 0.2)'
    },
    operationDisplay: {
        color: '#94a3b8',
        fontSize: '14px',
        textAlign: 'right',
        marginBottom: '5px'
    },
    display: {
        color: '#fff',
        fontSize: '36px',
        fontWeight: '600',
        textAlign: 'right',
        fontFamily: 'monospace',
        wordBreak: 'break-all'
    },
    memoryIndicator: {
        color: '#6366f1',
        fontSize: '12px',
        textAlign: 'right',
        marginBottom: '10px'
    },
    buttonGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    memoryRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px'
    },
    scientificRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '6px',
        marginBottom: '8px'
    },
    mainButtons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px'
    },
    button: {
        padding: '18px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: '600',
        transition: 'all 0.2s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numBtn: {
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#fff'
    },
    opBtn: {
        background: 'rgba(99, 102, 241, 0.3)',
        color: '#a5b4fc'
    },
    funcBtn: {
        background: 'rgba(148, 163, 184, 0.2)',
        color: '#94a3b8'
    },
    clearBtn: {
        background: 'rgba(239, 68, 68, 0.3)',
        color: '#fca5a5'
    },
    equalBtn: {
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: '#fff'
    },
    memoryBtn: {
        background: 'rgba(34, 197, 94, 0.2)',
        color: '#86efac',
        padding: '10px',
        fontSize: '12px'
    },
    sciBtn: {
        background: 'rgba(168, 85, 247, 0.2)',
        color: '#c4b5fd',
        padding: '12px 8px',
        fontSize: '13px'
    },
    historyContainer: {
        marginTop: '20px',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        padding: '15px',
        maxHeight: '150px',
        overflowY: 'auto'
    },
    historyHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        color: '#94a3b8',
        fontSize: '12px'
    },
    clearHistory: {
        background: 'transparent',
        border: 'none',
        color: '#ef4444',
        cursor: 'pointer',
        fontSize: '12px'
    },
    historyList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },
    historyItem: {
        color: '#64748b',
        fontSize: '13px',
        fontFamily: 'monospace',
        padding: '5px',
        borderRadius: '4px',
        background: 'rgba(255, 255, 255, 0.02)'
    }
}

export default Calculator
