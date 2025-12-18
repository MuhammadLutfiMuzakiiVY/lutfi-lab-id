import { useState, useEffect, useRef, useCallback } from 'react'

// Mini Tools Utilities - Productivity toolkit
const MiniTools = () => {
    const [activeTool, setActiveTool] = useState('stopwatch')

    // ═══════════════════════════════════════════════════════════
    // STOPWATCH STATE
    // ═══════════════════════════════════════════════════════════
    const [stopwatchTime, setStopwatchTime] = useState(0)
    const [stopwatchRunning, setStopwatchRunning] = useState(false)
    const [stopwatchLaps, setStopwatchLaps] = useState([])
    const stopwatchInterval = useRef(null)

    // ═══════════════════════════════════════════════════════════
    // COUNTDOWN TIMER STATE
    // ═══════════════════════════════════════════════════════════
    const [timerMinutes, setTimerMinutes] = useState(25)
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [timerTimeLeft, setTimerTimeLeft] = useState(25 * 60)
    const [timerRunning, setTimerRunning] = useState(false)
    const [timerComplete, setTimerComplete] = useState(false)
    const timerInterval = useRef(null)

    // ═══════════════════════════════════════════════════════════
    // CALCULATOR STATE
    // ═══════════════════════════════════════════════════════════
    const [calcDisplay, setCalcDisplay] = useState('0')
    const [calcPrevValue, setCalcPrevValue] = useState(null)
    const [calcOperator, setCalcOperator] = useState(null)
    const [calcWaitingForOperand, setCalcWaitingForOperand] = useState(false)

    // ═══════════════════════════════════════════════════════════
    // NOTEPAD STATE
    // ═══════════════════════════════════════════════════════════
    const [notepadText, setNotepadText] = useState('')
    const [notepadSaved, setNotepadSaved] = useState(true)

    // ═══════════════════════════════════════════════════════════
    // QR CODE STATE
    // ═══════════════════════════════════════════════════════════
    const [qrText, setQrText] = useState('')
    const [qrGenerated, setQrGenerated] = useState(false)

    // ═══════════════════════════════════════════════════════════
    // UNIT CONVERTER STATE
    // ═══════════════════════════════════════════════════════════
    const [converterType, setConverterType] = useState('length')
    const [converterValue, setConverterValue] = useState('')
    const [converterFrom, setConverterFrom] = useState('m')
    const [converterTo, setConverterTo] = useState('km')

    const tools = [
        { id: 'stopwatch', label: 'Stopwatch', icon: '⏱️' },
        { id: 'timer', label: 'Timer', icon: '⏳' },
        { id: 'calculator', label: 'Calculator', icon: '🧮' },
        { id: 'notepad', label: 'Notepad', icon: '📝' },
        { id: 'qrcode', label: 'QR Code', icon: '📱' },
        { id: 'converter', label: 'Converter', icon: '🔄' }
    ]

    // ═══════════════════════════════════════════════════════════
    // STOPWATCH LOGIC
    // ═══════════════════════════════════════════════════════════
    useEffect(() => {
        if (stopwatchRunning) {
            stopwatchInterval.current = setInterval(() => {
                setStopwatchTime(prev => prev + 10)
            }, 10)
        } else {
            clearInterval(stopwatchInterval.current)
        }
        return () => clearInterval(stopwatchInterval.current)
    }, [stopwatchRunning])

    const formatStopwatch = (ms) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = Math.floor((ms % 60000) / 1000)
        const centiseconds = Math.floor((ms % 1000) / 10)
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`
    }

    const stopwatchStart = () => setStopwatchRunning(true)
    const stopwatchStop = () => setStopwatchRunning(false)
    const stopwatchReset = () => {
        setStopwatchRunning(false)
        setStopwatchTime(0)
        setStopwatchLaps([])
    }
    const stopwatchLap = () => {
        setStopwatchLaps([...stopwatchLaps, stopwatchTime])
    }

    // ═══════════════════════════════════════════════════════════
    // TIMER LOGIC
    // ═══════════════════════════════════════════════════════════
    useEffect(() => {
        if (timerRunning && timerTimeLeft > 0) {
            timerInterval.current = setInterval(() => {
                setTimerTimeLeft(prev => prev - 1)
            }, 1000)
        } else if (timerTimeLeft === 0 && timerRunning) {
            setTimerRunning(false)
            setTimerComplete(true)
            // Play sound or notification
        }
        return () => clearInterval(timerInterval.current)
    }, [timerRunning, timerTimeLeft])

    const formatTimer = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const timerStart = () => {
        if (timerTimeLeft === 0) {
            setTimerTimeLeft(timerMinutes * 60 + timerSeconds)
        }
        setTimerRunning(true)
        setTimerComplete(false)
    }
    const timerPause = () => setTimerRunning(false)
    const timerReset = () => {
        setTimerRunning(false)
        setTimerTimeLeft(timerMinutes * 60 + timerSeconds)
        setTimerComplete(false)
    }
    const timerSetTime = () => {
        setTimerTimeLeft(timerMinutes * 60 + timerSeconds)
        setTimerComplete(false)
    }

    // ═══════════════════════════════════════════════════════════
    // CALCULATOR LOGIC
    // ═══════════════════════════════════════════════════════════
    const calcInputDigit = (digit) => {
        if (calcWaitingForOperand) {
            setCalcDisplay(digit)
            setCalcWaitingForOperand(false)
        } else {
            setCalcDisplay(calcDisplay === '0' ? digit : calcDisplay + digit)
        }
    }

    const calcInputDecimal = () => {
        if (calcWaitingForOperand) {
            setCalcDisplay('0.')
            setCalcWaitingForOperand(false)
        } else if (!calcDisplay.includes('.')) {
            setCalcDisplay(calcDisplay + '.')
        }
    }

    const calcPerformOperation = (nextOperator) => {
        const inputValue = parseFloat(calcDisplay)

        if (calcPrevValue === null) {
            setCalcPrevValue(inputValue)
        } else if (calcOperator) {
            const currentValue = calcPrevValue || 0
            let result
            switch (calcOperator) {
                case '+': result = currentValue + inputValue; break
                case '-': result = currentValue - inputValue; break
                case '×': result = currentValue * inputValue; break
                case '÷': result = inputValue !== 0 ? currentValue / inputValue : 'Error'; break
                default: result = inputValue
            }
            setCalcDisplay(String(result))
            setCalcPrevValue(result)
        }

        setCalcWaitingForOperand(true)
        setCalcOperator(nextOperator)
    }

    const calcEquals = () => {
        if (calcOperator && calcPrevValue !== null) {
            calcPerformOperation(null)
            setCalcOperator(null)
            setCalcPrevValue(null)
        }
    }

    const calcClear = () => {
        setCalcDisplay('0')
        setCalcPrevValue(null)
        setCalcOperator(null)
        setCalcWaitingForOperand(false)
    }

    const calcPercent = () => {
        setCalcDisplay(String(parseFloat(calcDisplay) / 100))
    }

    const calcToggleSign = () => {
        setCalcDisplay(String(parseFloat(calcDisplay) * -1))
    }

    // ═══════════════════════════════════════════════════════════
    // NOTEPAD LOGIC
    // ═══════════════════════════════════════════════════════════
    const notepadSave = () => {
        localStorage.setItem('minitools_notepad', notepadText)
        setNotepadSaved(true)
    }

    const notepadLoad = () => {
        const saved = localStorage.getItem('minitools_notepad')
        if (saved) setNotepadText(saved)
    }

    const notepadCopy = () => {
        navigator.clipboard.writeText(notepadText)
    }

    const notepadClear = () => {
        setNotepadText('')
        setNotepadSaved(false)
    }

    useEffect(() => {
        notepadLoad()
    }, [])

    // ═══════════════════════════════════════════════════════════
    // UNIT CONVERTER LOGIC
    // ═══════════════════════════════════════════════════════════
    const converterUnits = {
        length: { m: 1, km: 0.001, cm: 100, mm: 1000, mi: 0.000621371, ft: 3.28084, in: 39.3701 },
        weight: { kg: 1, g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274 },
        temperature: { c: 'celsius', f: 'fahrenheit', k: 'kelvin' },
        time: { s: 1, min: 1 / 60, hr: 1 / 3600, day: 1 / 86400 }
    }

    const convertValue = () => {
        if (!converterValue || isNaN(converterValue)) return '0'
        const value = parseFloat(converterValue)

        if (converterType === 'temperature') {
            // Temperature conversion
            let celsius
            if (converterFrom === 'c') celsius = value
            else if (converterFrom === 'f') celsius = (value - 32) * 5 / 9
            else celsius = value - 273.15 // kelvin

            if (converterTo === 'c') return celsius.toFixed(2)
            else if (converterTo === 'f') return ((celsius * 9 / 5) + 32).toFixed(2)
            else return (celsius + 273.15).toFixed(2)
        } else {
            const units = converterUnits[converterType]
            const baseValue = value / units[converterFrom]
            return (baseValue * units[converterTo]).toFixed(6).replace(/\.?0+$/, '')
        }
    }

    // ═══════════════════════════════════════════════════════════
    // RENDER TOOLS
    // ═══════════════════════════════════════════════════════════

    const renderStopwatch = () => (
        <div className="tool-content stopwatch">
            <div className="time-display large">{formatStopwatch(stopwatchTime)}</div>
            <div className="control-buttons">
                {!stopwatchRunning ? (
                    <button className="btn primary" onClick={stopwatchStart}>▶ Start</button>
                ) : (
                    <button className="btn warning" onClick={stopwatchStop}>⏸ Pause</button>
                )}
                <button className="btn secondary" onClick={stopwatchLap} disabled={!stopwatchRunning}>🏁 Lap</button>
                <button className="btn danger" onClick={stopwatchReset}>↺ Reset</button>
            </div>
            {stopwatchLaps.length > 0 && (
                <div className="laps-list">
                    {stopwatchLaps.map((lap, i) => (
                        <div key={i} className="lap-item">
                            <span>Lap {i + 1}</span>
                            <span>{formatStopwatch(lap)}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

    const renderTimer = () => (
        <div className="tool-content timer">
            <div className={`time-display large ${timerComplete ? 'complete' : ''}`}>
                {formatTimer(timerTimeLeft)}
            </div>
            {timerComplete && <div className="timer-complete-msg">⏰ Time's Up!</div>}

            <div className="timer-setup">
                <div className="timer-input-group">
                    <label>Minutes</label>
                    <input
                        type="number"
                        min="0"
                        max="99"
                        value={timerMinutes}
                        onChange={(e) => setTimerMinutes(parseInt(e.target.value) || 0)}
                        disabled={timerRunning}
                    />
                </div>
                <span className="timer-separator">:</span>
                <div className="timer-input-group">
                    <label>Seconds</label>
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={timerSeconds}
                        onChange={(e) => setTimerSeconds(parseInt(e.target.value) || 0)}
                        disabled={timerRunning}
                    />
                </div>
                <button className="btn small" onClick={timerSetTime} disabled={timerRunning}>Set</button>
            </div>

            <div className="control-buttons">
                {!timerRunning ? (
                    <button className="btn primary" onClick={timerStart}>▶ Start</button>
                ) : (
                    <button className="btn warning" onClick={timerPause}>⏸ Pause</button>
                )}
                <button className="btn danger" onClick={timerReset}>↺ Reset</button>
            </div>

            <div className="quick-presets">
                {[5, 10, 15, 25, 30, 45, 60].map(mins => (
                    <button
                        key={mins}
                        className="preset-btn"
                        onClick={() => {
                            setTimerMinutes(mins)
                            setTimerSeconds(0)
                            setTimerTimeLeft(mins * 60)
                        }}
                        disabled={timerRunning}
                    >
                        {mins}m
                    </button>
                ))}
            </div>
        </div>
    )

    const renderCalculator = () => (
        <div className="tool-content calculator">
            <div className="calc-display">{calcDisplay}</div>
            <div className="calc-buttons">
                <button className="calc-btn func" onClick={calcClear}>AC</button>
                <button className="calc-btn func" onClick={calcToggleSign}>±</button>
                <button className="calc-btn func" onClick={calcPercent}>%</button>
                <button className="calc-btn operator" onClick={() => calcPerformOperation('÷')}>÷</button>

                <button className="calc-btn" onClick={() => calcInputDigit('7')}>7</button>
                <button className="calc-btn" onClick={() => calcInputDigit('8')}>8</button>
                <button className="calc-btn" onClick={() => calcInputDigit('9')}>9</button>
                <button className="calc-btn operator" onClick={() => calcPerformOperation('×')}>×</button>

                <button className="calc-btn" onClick={() => calcInputDigit('4')}>4</button>
                <button className="calc-btn" onClick={() => calcInputDigit('5')}>5</button>
                <button className="calc-btn" onClick={() => calcInputDigit('6')}>6</button>
                <button className="calc-btn operator" onClick={() => calcPerformOperation('-')}>−</button>

                <button className="calc-btn" onClick={() => calcInputDigit('1')}>1</button>
                <button className="calc-btn" onClick={() => calcInputDigit('2')}>2</button>
                <button className="calc-btn" onClick={() => calcInputDigit('3')}>3</button>
                <button className="calc-btn operator" onClick={() => calcPerformOperation('+')}>+</button>

                <button className="calc-btn zero" onClick={() => calcInputDigit('0')}>0</button>
                <button className="calc-btn" onClick={calcInputDecimal}>.</button>
                <button className="calc-btn equals" onClick={calcEquals}>=</button>
            </div>
        </div>
    )

    const renderNotepad = () => (
        <div className="tool-content notepad">
            <div className="notepad-header">
                <span className={`save-status ${notepadSaved ? 'saved' : 'unsaved'}`}>
                    {notepadSaved ? '✓ Saved' : '● Unsaved'}
                </span>
                <span className="char-count">{notepadText.length} chars</span>
            </div>
            <textarea
                value={notepadText}
                onChange={(e) => {
                    setNotepadText(e.target.value)
                    setNotepadSaved(false)
                }}
                placeholder="Write your notes here..."
            />
            <div className="notepad-actions">
                <button className="btn primary" onClick={notepadSave}>💾 Save</button>
                <button className="btn secondary" onClick={notepadCopy}>📋 Copy</button>
                <button className="btn danger" onClick={notepadClear}>🗑️ Clear</button>
            </div>
        </div>
    )

    const renderQRCode = () => (
        <div className="tool-content qrcode">
            <div className="qr-input-area">
                <input
                    type="text"
                    value={qrText}
                    onChange={(e) => {
                        setQrText(e.target.value)
                        setQrGenerated(false)
                    }}
                    placeholder="Enter text or URL..."
                />
                <button
                    className="btn primary"
                    onClick={() => setQrGenerated(true)}
                    disabled={!qrText.trim()}
                >
                    Generate QR
                </button>
            </div>

            {qrGenerated && qrText && (
                <div className="qr-result">
                    <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`}
                        alt="QR Code"
                        className="qr-image"
                    />
                    <p className="qr-text">{qrText}</p>
                </div>
            )}
        </div>
    )

    const renderConverter = () => (
        <div className="tool-content converter">
            <div className="converter-type-select">
                {Object.keys(converterUnits).map(type => (
                    <button
                        key={type}
                        className={`type-btn ${converterType === type ? 'active' : ''}`}
                        onClick={() => {
                            setConverterType(type)
                            setConverterFrom(Object.keys(converterUnits[type])[0])
                            setConverterTo(Object.keys(converterUnits[type])[1])
                        }}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            <div className="converter-inputs">
                <div className="converter-row">
                    <input
                        type="number"
                        value={converterValue}
                        onChange={(e) => setConverterValue(e.target.value)}
                        placeholder="Enter value"
                    />
                    <select value={converterFrom} onChange={(e) => setConverterFrom(e.target.value)}>
                        {Object.keys(converterUnits[converterType]).map(unit => (
                            <option key={unit} value={unit}>{unit.toUpperCase()}</option>
                        ))}
                    </select>
                </div>

                <div className="converter-arrow">↓</div>

                <div className="converter-row result">
                    <div className="result-value">{convertValue()}</div>
                    <select value={converterTo} onChange={(e) => setConverterTo(e.target.value)}>
                        {Object.keys(converterUnits[converterType]).map(unit => (
                            <option key={unit} value={unit}>{unit.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                className="btn secondary swap-btn"
                onClick={() => {
                    const temp = converterFrom
                    setConverterFrom(converterTo)
                    setConverterTo(temp)
                }}
            >
                ⇅ Swap Units
            </button>
        </div>
    )

    const renderActiveTool = () => {
        switch (activeTool) {
            case 'stopwatch': return renderStopwatch()
            case 'timer': return renderTimer()
            case 'calculator': return renderCalculator()
            case 'notepad': return renderNotepad()
            case 'qrcode': return renderQRCode()
            case 'converter': return renderConverter()
            default: return null
        }
    }

    return (
        <div className="mini-tools">
            <div className="tools-header">
                <h2>🧰 Mini Tools</h2>
                <p>Productivity utilities at your fingertips</p>
            </div>

            <div className="tools-nav">
                {tools.map(tool => (
                    <button
                        key={tool.id}
                        className={`tool-tab ${activeTool === tool.id ? 'active' : ''}`}
                        onClick={() => setActiveTool(tool.id)}
                    >
                        <span className="tool-icon">{tool.icon}</span>
                        <span className="tool-label">{tool.label}</span>
                    </button>
                ))}
            </div>

            <div className="tools-container">
                {renderActiveTool()}
            </div>

            <style>{`
                .mini-tools {
                    padding: 0;
                }

                .tools-header {
                    margin-bottom: 1.5rem;
                }

                .tools-header h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .tools-header p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .tools-nav {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .tool-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .tool-tab:hover {
                    background: rgba(99, 102, 241, 0.2);
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .tool-tab.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
                    border-color: #6366f1;
                    color: #fff;
                }

                .tool-icon {
                    font-size: 1.1rem;
                }

                .tool-label {
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .tools-container {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    padding: 1.5rem;
                    min-height: 350px;
                }

                .tool-content {
                    animation: fadeIn 0.2s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Common Elements */
                .time-display {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 3rem;
                    font-weight: 700;
                    text-align: center;
                    color: #fff;
                    margin-bottom: 1.5rem;
                }

                .time-display.complete {
                    color: #10b981;
                    animation: pulse 1s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .control-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .btn {
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn.primary {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: #fff;
                }

                .btn.secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                }

                .btn.warning {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    color: #fff;
                }

                .btn.danger {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                }

                .btn.small {
                    padding: 0.5rem 1rem;
                    font-size: 0.8rem;
                }

                .btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                }

                .btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Stopwatch */
                .laps-list {
                    max-height: 150px;
                    overflow-y: auto;
                    margin-top: 1rem;
                }

                .lap-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 6px;
                    margin-bottom: 0.5rem;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                /* Timer */
                .timer-complete-msg {
                    text-align: center;
                    font-size: 1.5rem;
                    color: #10b981;
                    margin-bottom: 1rem;
                    animation: bounce 0.5s ease infinite alternate;
                }

                @keyframes bounce {
                    from { transform: translateY(0); }
                    to { transform: translateY(-5px); }
                }

                .timer-setup {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .timer-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .timer-input-group label {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-align: center;
                }

                .timer-input-group input {
                    width: 60px;
                    padding: 0.5rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    color: #fff;
                    text-align: center;
                    font-size: 1.25rem;
                    font-family: 'JetBrains Mono', monospace;
                }

                .timer-separator {
                    font-size: 1.5rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.5rem;
                }

                .quick-presets {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    flex-wrap: wrap;
                }

                .preset-btn {
                    padding: 0.4rem 0.75rem;
                    background: rgba(99, 102, 241, 0.2);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 6px;
                    color: #a5b4fc;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .preset-btn:hover:not(:disabled) {
                    background: rgba(99, 102, 241, 0.3);
                }

                /* Calculator */
                .calc-display {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 2.5rem;
                    text-align: right;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    color: #fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .calc-buttons {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.5rem;
                }

                .calc-btn {
                    padding: 1rem;
                    font-size: 1.25rem;
                    border: none;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }

                .calc-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .calc-btn.func {
                    background: rgba(99, 102, 241, 0.3);
                    color: #a5b4fc;
                }

                .calc-btn.operator {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    color: #fff;
                }

                .calc-btn.equals {
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: #fff;
                }

                .calc-btn.zero {
                    grid-column: span 2;
                }

                /* Notepad */
                .notepad-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.75rem;
                    font-size: 0.8rem;
                }

                .save-status.saved { color: #10b981; }
                .save-status.unsaved { color: #f59e0b; }
                .char-count { color: rgba(255, 255, 255, 0.5); }

                .notepad textarea {
                    width: 100%;
                    height: 200px;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 0.95rem;
                    resize: vertical;
                    font-family: inherit;
                }

                .notepad textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .notepad-actions {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }

                /* QR Code */
                .qr-input-area {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .qr-input-area input {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 0.95rem;
                }

                .qr-result {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .qr-image {
                    background: #fff;
                    padding: 1rem;
                    border-radius: 12px;
                }

                .qr-text {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.85rem;
                    word-break: break-all;
                    text-align: center;
                }

                /* Converter */
                .converter-type-select {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .type-btn {
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .type-btn.active {
                    background: rgba(99, 102, 241, 0.3);
                    border-color: #6366f1;
                    color: #fff;
                }

                .converter-inputs {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .converter-row {
                    display: flex;
                    gap: 0.75rem;
                }

                .converter-row input,
                .converter-row select {
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 1rem;
                }

                .converter-row input {
                    flex: 1;
                }

                .converter-row.result .result-value {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    background: rgba(16, 185, 129, 0.2);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    border-radius: 10px;
                    color: #10b981;
                    font-size: 1.1rem;
                    font-weight: 600;
                    font-family: 'JetBrains Mono', monospace;
                }

                .converter-arrow {
                    text-align: center;
                    font-size: 1.5rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .swap-btn {
                    width: 100%;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .tools-nav {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 0.5rem;
                    }

                    .tool-tab {
                        flex-shrink: 0;
                    }

                    .tool-label {
                        display: none;
                    }

                    .time-display {
                        font-size: 2.5rem;
                    }

                    .calc-buttons {
                        gap: 0.375rem;
                    }

                    .calc-btn {
                        padding: 0.75rem;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default MiniTools
