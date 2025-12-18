import React, { useState, useEffect, useRef, useCallback } from 'react'

// Fake command responses
const commandResponses = {
    help: `
╔═══════════════════════════════════════════════════════════════╗
║                    AVAILABLE COMMANDS                          ║
╠═══════════════════════════════════════════════════════════════╣
║  help          - Show this help menu                          ║
║  clear         - Clear terminal screen                        ║
║  scan          - Scan target for vulnerabilities              ║
║  port-scan     - Scan open ports                              ║
║  net-scan      - Scan network devices                         ║
║  connect       - Connect to target server                     ║
║  exploit       - Run exploit module                           ║
║  decrypt       - Decrypt encoded message                      ║
║  hash-crack    - Crack password hash                          ║
║  firewall      - Check firewall status                        ║
║  inject        - Inject payload                               ║
║  status        - Show system status                           ║
║  logs          - View access logs                             ║
║  puzzle        - Start puzzle mode                            ║
║  typing        - Start typing challenge                       ║
╚═══════════════════════════════════════════════════════════════╝`,
    status: `
┌─────────────────────────────────────────┐
│ SYSTEM STATUS                           │
├─────────────────────────────────────────┤
│ CPU Usage:     ████████░░ 78%           │
│ Memory:        ██████░░░░ 62%           │
│ Network:       ████░░░░░░ 45%           │
│ Firewall:      ACTIVE                   │
│ Encryption:    AES-256                  │
│ Connection:    SECURE                   │
│ Uptime:        14d 7h 32m               │
└─────────────────────────────────────────┘`,
    logs: `
[2024-12-11 22:15:32] INFO  - Connection established from 192.168.1.105
[2024-12-11 22:15:34] WARN  - Failed login attempt from 10.0.0.45
[2024-12-11 22:15:36] INFO  - Firewall rule updated
[2024-12-11 22:15:38] ERROR - Unauthorized access detected at port 8080
[2024-12-11 22:15:40] INFO  - SSH session started for user admin
[2024-12-11 22:15:42] WARN  - Suspicious packet detected
[2024-12-11 22:15:44] INFO  - System backup completed successfully`,
}

// Puzzle types
const puzzles = [
    {
        type: 'base64',
        question: 'Decode Base64: U2t5Q3liZXJfU2VjdXJpdHk=',
        answer: 'SkyCyber_Security',
        hint: 'Use Base64 decoding'
    },
    {
        type: 'hex',
        question: 'Decode Hex: 48 41 43 4B 45 52',
        answer: 'HACKER',
        hint: 'Convert hex to ASCII'
    },
    {
        type: 'rot13',
        question: 'Decode ROT13: Plorefrphevgl',
        answer: 'Cybersecurity',
        hint: 'Shift each letter by 13'
    },
    {
        type: 'password',
        question: 'Password clue: First 4 digits of PI + year of first iPhone',
        answer: '31412007',
        hint: '3.141... + 2007'
    },
    {
        type: 'port',
        question: 'Which port is used for HTTPS?',
        answer: '443',
        hint: 'Secure web traffic'
    },
    {
        type: 'sql',
        question: 'Safe SQL: SELECT * FROM users WHERE id = ?',
        answer: 'parameterized',
        hint: 'Type how this query is called'
    }
]

// Typing challenges
const typingChallenges = [
    "nmap -sV -sC target.com",
    "sqlmap -u 'http://target.com?id=1' --dbs",
    "hydra -l admin -P wordlist.txt ssh://target",
    "msfconsole -q -x 'use exploit/multi/handler'",
    "nikto -h http://target.com -ssl",
    "gobuster dir -u http://target.com -w wordlist.txt"
]

function HackerTerminal() {
    const [mode, setMode] = useState('menu') // menu, terminal, puzzle, typing
    const [history, setHistory] = useState([])
    const [currentInput, setCurrentInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [cursorVisible, setCursorVisible] = useState(true)
    const [theme, setTheme] = useState('green') // green, cyan, purple, red
    const [soundEnabled, setSoundEnabled] = useState(true)
    const [showMatrix, setShowMatrix] = useState(false)

    // Puzzle state
    const [currentPuzzle, setCurrentPuzzle] = useState(0)
    const [puzzleScore, setPuzzleScore] = useState(0)
    const [puzzleTimer, setPuzzleTimer] = useState(0)
    const [puzzleActive, setPuzzleActive] = useState(false)
    const [showHint, setShowHint] = useState(false)

    // Typing state
    const [typingText, setTypingText] = useState('')
    const [typingInput, setTypingInput] = useState('')
    const [typingStats, setTypingStats] = useState({ wpm: 0, accuracy: 0 })
    const [typingStartTime, setTypingStartTime] = useState(null)
    const [typingComplete, setTypingComplete] = useState(false)

    // Total stats
    const [totalScore, setTotalScore] = useState(0)
    const [achievements, setAchievements] = useState([])

    const terminalRef = useRef(null)
    const inputRef = useRef(null)
    const audioContext = useRef(null)
    const timerRef = useRef(null)

    // Initialize
    useEffect(() => {
        audioContext.current = new (window.AudioContext || window.webkitAudioContext)()
        return () => {
            if (audioContext.current) audioContext.current.close()
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [])

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev)
        }, 530)
        return () => clearInterval(interval)
    }, [])

    // Puzzle timer
    useEffect(() => {
        if (puzzleActive) {
            timerRef.current = setInterval(() => {
                setPuzzleTimer(prev => prev + 1)
            }, 1000)
        } else {
            if (timerRef.current) clearInterval(timerRef.current)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [puzzleActive])

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [history])

    // Play sound
    const playSound = useCallback((type) => {
        if (!soundEnabled || !audioContext.current) return

        const ctx = audioContext.current
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        if (type === 'key') {
            oscillator.frequency.setValueAtTime(800 + Math.random() * 200, ctx.currentTime)
            gainNode.gain.setValueAtTime(0.03, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.05)
        } else if (type === 'enter') {
            oscillator.frequency.setValueAtTime(600, ctx.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1)
            gainNode.gain.setValueAtTime(0.05, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.1)
        } else if (type === 'success') {
            [523, 659, 784].forEach((freq, i) => {
                const osc = ctx.createOscillator()
                const gain = ctx.createGain()
                osc.connect(gain)
                gain.connect(ctx.destination)
                osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1)
                gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.1)
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.15)
                osc.start(ctx.currentTime + i * 0.1)
                osc.stop(ctx.currentTime + i * 0.1 + 0.15)
            })
        } else if (type === 'error') {
            oscillator.frequency.setValueAtTime(200, ctx.currentTime)
            gainNode.gain.setValueAtTime(0.05, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2)
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.2)
        }
    }, [soundEnabled])

    // Typewriter effect
    const typeText = useCallback(async (text, delay = 20) => {
        setIsTyping(true)
        for (let i = 0; i <= text.length; i++) {
            await new Promise(r => setTimeout(r, delay))
            setHistory(prev => {
                const newHistory = [...prev]
                newHistory[newHistory.length - 1] = {
                    ...newHistory[newHistory.length - 1],
                    output: text.substring(0, i)
                }
                return newHistory
            })
        }
        setIsTyping(false)
    }, [])

    // Generate fake scan output
    const generateScanOutput = () => {
        const ports = [21, 22, 80, 443, 3306, 8080, 8443]
        const statuses = ['open', 'filtered', 'closed']
        const services = ['ftp', 'ssh', 'http', 'https', 'mysql', 'http-proxy', 'https-alt']

        let output = `
Starting Nmap scan...
Host is up (0.032s latency).

PORT      STATE    SERVICE
`
        ports.forEach((port, i) => {
            const status = statuses[Math.floor(Math.random() * statuses.length)]
            output += `${port}/tcp   ${status.padEnd(8)} ${services[i]}\n`
        })
        output += `
Scan completed: 1 IP address scanned in 4.52 seconds`
        return output
    }

    // Generate exploit output
    const generateExploitOutput = () => `
[*] Started reverse TCP handler on 192.168.1.100:4444
[*] Sending exploit payload...
[*] Exploit running as background job.

[+] ════════════════════════════════════════════════════
[+]  EXPLOIT SUCCESSFUL!
[+]  Session established with target
[+]  Access Level: USER
[+] ════════════════════════════════════════════════════

meterpreter > `

    // Process command
    const processCommand = async (cmd) => {
        const command = cmd.toLowerCase().trim()
        const args = command.split(' ')
        const baseCmd = args[0]

        let output = ''

        switch (baseCmd) {
            case 'help':
                output = commandResponses.help
                break
            case 'clear':
                setHistory([])
                return
            case 'status':
                output = commandResponses.status
                break
            case 'logs':
                output = commandResponses.logs
                break
            case 'scan':
            case 'port-scan':
            case 'net-scan':
                setHistory(prev => [...prev, { type: 'output', output: '\n[*] Initializing scan module...' }])
                await new Promise(r => setTimeout(r, 500))
                setHistory(prev => [...prev, { type: 'output', output: '[*] Scanning target...' }])
                await new Promise(r => setTimeout(r, 1000))
                output = generateScanOutput()
                break
            case 'connect':
                output = `
[*] Establishing SSH connection...
[*] Authenticating...
[+] Connection established!
[+] Welcome to target-server
Last login: Wed Dec 11 22:30:15 2024 from 192.168.1.100
target@server:~$ `
                break
            case 'exploit':
            case 'inject':
                setHistory(prev => [...prev, { type: 'output', output: '\n[*] Loading exploit module...' }])
                await new Promise(r => setTimeout(r, 800))
                setHistory(prev => [...prev, { type: 'output', output: '[*] Checking target vulnerability...' }])
                await new Promise(r => setTimeout(r, 600))
                output = generateExploitOutput()
                playSound('success')
                break
            case 'decrypt':
                output = `
[*] Decryption module loaded
[*] Analyzing encryption type...
[*] Detected: AES-256-CBC
[*] Attempting decryption...
████████████████████████████░░░░ 85%
[+] Decryption successful!
[+] Output: FLAG{SKYCYBER_TERMINAL_MASTER}`
                playSound('success')
                break
            case 'hash-crack':
                output = `
[*] Loading wordlist...
[*] Hash type detected: MD5
[*] Starting brute force attack...
Progress: ████████████████████ 100%
[+] Password found: admin123
[+] Time elapsed: 2.4 seconds`
                break
            case 'firewall':
                output = `
┌──────────────────────────────────────┐
│ FIREWALL STATUS                      │
├──────────────────────────────────────┤
│ Status:      ACTIVE                  │
│ Rules:       47 active               │
│ Blocked IPs: 128                     │
│ Last update: 2 hours ago             │
│ Mode:        Strict                  │
└──────────────────────────────────────┘`
                break
            case 'puzzle':
                setMode('puzzle')
                startPuzzle()
                return
            case 'typing':
                setMode('typing')
                startTyping()
                return
            case 'matrix':
                setShowMatrix(!showMatrix)
                output = showMatrix ? '[*] Matrix rain disabled' : '[*] Matrix rain enabled'
                break
            default:
                output = `bash: ${baseCmd}: command not found. Type 'help' for available commands.`
                playSound('error')
        }

        setHistory(prev => [...prev, { type: 'output', output: '' }])
        await typeText(output, 5)
    }

    // Handle input
    const handleInput = async (e) => {
        if (e.key === 'Enter' && currentInput.trim()) {
            playSound('enter')
            const cmd = currentInput
            setHistory(prev => [...prev, { type: 'command', text: cmd }])
            setCurrentInput('')
            await processCommand(cmd)
        } else if (e.key !== 'Enter') {
            playSound('key')
        }
    }

    // Start puzzle mode
    const startPuzzle = () => {
        setCurrentPuzzle(0)
        setPuzzleScore(0)
        setPuzzleTimer(0)
        setPuzzleActive(true)
        setShowHint(false)
    }

    // Check puzzle answer
    const checkPuzzleAnswer = (answer) => {
        const puzzle = puzzles[currentPuzzle]
        if (answer.toLowerCase().trim() === puzzle.answer.toLowerCase()) {
            playSound('success')
            const timeBonus = Math.max(0, 100 - puzzleTimer * 2)
            const points = 100 + timeBonus
            setPuzzleScore(prev => prev + points)
            setTotalScore(prev => prev + points)

            if (currentPuzzle < puzzles.length - 1) {
                setCurrentPuzzle(prev => prev + 1)
                setPuzzleTimer(0)
                setShowHint(false)
            } else {
                setPuzzleActive(false)
                // Check achievement
                if (puzzleTimer < 120) {
                    setAchievements(prev => [...prev, '🚀 Fast Hacker'])
                }
            }
        } else {
            playSound('error')
        }
    }

    // Start typing challenge
    const startTyping = () => {
        const text = typingChallenges[Math.floor(Math.random() * typingChallenges.length)]
        setTypingText(text)
        setTypingInput('')
        setTypingStartTime(null)
        setTypingComplete(false)
        setTypingStats({ wpm: 0, accuracy: 0 })
    }

    // Handle typing input
    const handleTypingInput = (e) => {
        const value = e.target.value

        if (!typingStartTime && value.length === 1) {
            setTypingStartTime(Date.now())
        }

        setTypingInput(value)

        if (value === typingText) {
            const endTime = Date.now()
            const timeInMinutes = (endTime - typingStartTime) / 60000
            const words = typingText.split(' ').length
            const wpm = Math.round(words / timeInMinutes)

            let correct = 0
            for (let i = 0; i < value.length; i++) {
                if (value[i] === typingText[i]) correct++
            }
            const accuracy = Math.round((correct / typingText.length) * 100)

            setTypingStats({ wpm, accuracy })
            setTypingComplete(true)
            setTotalScore(prev => prev + wpm + accuracy)
            playSound('success')

            if (wpm >= 100) {
                setAchievements(prev => [...prev, '⚡ Speed Typer'])
            }
        }
    }

    // Get theme colors
    const getThemeColor = () => {
        const colors = {
            green: '#00ff00',
            cyan: '#22d3ee',
            purple: '#a78bfa',
            red: '#ef4444'
        }
        return colors[theme]
    }

    // Menu screen
    if (mode === 'menu') {
        return (
            <div className="hacker-terminal" style={{ '--theme-color': getThemeColor() }}>
                {showMatrix && <MatrixRain />}
                <div className="terminal-header">
                    <div className="header-title">
                        <span className="blink">█</span> SkyCyber Terminal v1.0
                    </div>
                    <div className="header-info">
                        <span>User: Muhammad Lutfi Muzaki</span>
                        <span>Mode: Simulation</span>
                    </div>
                </div>

                <div className="menu-content">
                    <pre className="ascii-art">{`
   _____ _          _____      _               
  / ____| |        / ____|    | |              
 | (___ | | ___  _| |    _   _| |__   ___ _ __ 
  \\___ \\| |/ / || | |   | | | | '_ \\ / _ \\ '__|
  ____) |   <| || | |___| |_| | |_) |  __/ |   
 |_____/|_|\\_\\\\__, \\_____\\__, |_.__/ \\___|_|   
               __/ |      __/ |                
              |___/      |___/   TERMINAL GAME
                    `}</pre>

                    <div className="menu-buttons">
                        <button onClick={() => { setMode('terminal'); setHistory([{ type: 'system', text: 'Welcome to SkyCyber Terminal. Type "help" for commands.' }]) }}>
                            <span className="icon">💻</span>
                            <span className="label">Free-Hack Mode</span>
                            <span className="desc">Explore terminal commands</span>
                        </button>
                        <button onClick={() => { setMode('puzzle'); startPuzzle() }}>
                            <span className="icon">🧩</span>
                            <span className="label">Puzzle Challenge</span>
                            <span className="desc">Decrypt & solve puzzles</span>
                        </button>
                        <button onClick={() => { setMode('typing'); startTyping() }}>
                            <span className="icon">⌨️</span>
                            <span className="label">Typing Speed</span>
                            <span className="desc">Test your hacking speed</span>
                        </button>
                    </div>

                    <div className="menu-options">
                        <div className="theme-selector">
                            <span>Theme:</span>
                            {['green', 'cyan', 'purple', 'red'].map(t => (
                                <button
                                    key={t}
                                    className={`theme-btn ${theme === t ? 'active' : ''}`}
                                    style={{ backgroundColor: t === 'green' ? '#00ff00' : t === 'cyan' ? '#22d3ee' : t === 'purple' ? '#a78bfa' : '#ef4444' }}
                                    onClick={() => setTheme(t)}
                                />
                            ))}
                        </div>
                        <button className="option-btn" onClick={() => setSoundEnabled(!soundEnabled)}>
                            {soundEnabled ? '🔊 Sound ON' : '🔇 Sound OFF'}
                        </button>
                        <button className="option-btn" onClick={() => setShowMatrix(!showMatrix)}>
                            {showMatrix ? '🌧️ Matrix ON' : '🌧️ Matrix OFF'}
                        </button>
                    </div>

                    <div className="stats-display">
                        <div className="stat">
                            <span className="stat-label">Total Score</span>
                            <span className="stat-value">{totalScore}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Achievements</span>
                            <span className="stat-value">{achievements.length}</span>
                        </div>
                    </div>

                    {achievements.length > 0 && (
                        <div className="achievements-list">
                            {achievements.map((a, i) => <span key={i}>{a}</span>)}
                        </div>
                    )}
                </div>
                <style>{styles}</style>
            </div>
        )
    }

    // Puzzle mode
    if (mode === 'puzzle') {
        const puzzle = puzzles[currentPuzzle]
        return (
            <div className="hacker-terminal" style={{ '--theme-color': getThemeColor() }}>
                {showMatrix && <MatrixRain />}
                <div className="terminal-header">
                    <div className="header-title">
                        <span className="blink">█</span> PUZZLE MODE - Level {currentPuzzle + 1}/{puzzles.length}
                    </div>
                    <button className="back-btn" onClick={() => setMode('menu')}>← Back</button>
                </div>

                <div className="puzzle-content">
                    <div className="puzzle-stats">
                        <span>⏱️ {puzzleTimer}s</span>
                        <span>🎯 Score: {puzzleScore}</span>
                        <span>📊 {puzzle.type.toUpperCase()}</span>
                    </div>

                    {puzzleActive ? (
                        <>
                            <div className="puzzle-question">
                                <pre>{puzzle.question}</pre>
                            </div>

                            <input
                                type="text"
                                className="puzzle-input"
                                placeholder="Enter your answer..."
                                onKeyDown={(e) => e.key === 'Enter' && checkPuzzleAnswer(e.target.value)}
                                autoFocus
                            />

                            <div className="puzzle-actions">
                                <button onClick={() => setShowHint(true)} disabled={showHint}>
                                    💡 {showHint ? puzzle.hint : 'Show Hint'}
                                </button>
                                <button onClick={() => setCurrentPuzzle(prev => Math.min(puzzles.length - 1, prev + 1))}>
                                    Skip →
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="puzzle-complete">
                            <h2>🎉 All Puzzles Complete!</h2>
                            <div className="final-score">
                                <span>Final Score: {puzzleScore}</span>
                                <span>Time: {puzzleTimer}s</span>
                            </div>
                            <button onClick={startPuzzle}>Play Again</button>
                        </div>
                    )}
                </div>
                <style>{styles}</style>
            </div>
        )
    }

    // Typing mode
    if (mode === 'typing') {
        return (
            <div className="hacker-terminal" style={{ '--theme-color': getThemeColor() }}>
                {showMatrix && <MatrixRain />}
                <div className="terminal-header">
                    <div className="header-title">
                        <span className="blink">█</span> TYPING CHALLENGE
                    </div>
                    <button className="back-btn" onClick={() => setMode('menu')}>← Back</button>
                </div>

                <div className="typing-content">
                    <div className="typing-display">
                        <span className="typing-prompt">$ </span>
                        {typingText.split('').map((char, i) => {
                            let className = ''
                            if (i < typingInput.length) {
                                className = typingInput[i] === char ? 'correct' : 'incorrect'
                            }
                            return <span key={i} className={className}>{char}</span>
                        })}
                    </div>

                    <input
                        type="text"
                        className="typing-input"
                        value={typingInput}
                        onChange={handleTypingInput}
                        placeholder="Start typing..."
                        disabled={typingComplete}
                        autoFocus
                    />

                    {typingComplete ? (
                        <div className="typing-results">
                            <h3>✅ Complete!</h3>
                            <div className="typing-stats">
                                <div className="typing-stat">
                                    <span className="stat-label">WPM</span>
                                    <span className="stat-value">{typingStats.wpm}</span>
                                </div>
                                <div className="typing-stat">
                                    <span className="stat-label">Accuracy</span>
                                    <span className="stat-value">{typingStats.accuracy}%</span>
                                </div>
                            </div>
                            <button onClick={startTyping}>Try Again</button>
                        </div>
                    ) : (
                        <div className="typing-hint">
                            Type the command exactly as shown above
                        </div>
                    )}
                </div>
                <style>{styles}</style>
            </div>
        )
    }

    // Terminal mode
    return (
        <div className="hacker-terminal" style={{ '--theme-color': getThemeColor() }} onClick={() => inputRef.current?.focus()}>
            {showMatrix && <MatrixRain />}
            <div className="terminal-header">
                <div className="header-title">
                    <span className="blink">█</span> SkyCyber Terminal v1.0
                </div>
                <div className="header-controls">
                    <button className="back-btn" onClick={() => setMode('menu')}>← Menu</button>
                </div>
            </div>

            <div className="terminal-body" ref={terminalRef}>
                {history.map((item, index) => (
                    <div key={index} className={`terminal-line ${item.type}`}>
                        {item.type === 'command' && (
                            <><span className="prompt">root@skycyber:~$ </span>{item.text}</>
                        )}
                        {item.type === 'output' && <pre>{item.output}</pre>}
                        {item.type === 'system' && <span className="system-msg">[SYSTEM] {item.text}</span>}
                    </div>
                ))}

                <div className="terminal-input-line">
                    <span className="prompt">root@skycyber:~$ </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleInput}
                        disabled={isTyping}
                        autoFocus
                    />
                    <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>█</span>
                </div>
            </div>
            <style>{styles}</style>
        </div>
    )
}

// Matrix Rain Component
function MatrixRain() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*'
        const fontSize = 14
        const columns = canvas.width / fontSize
        const drops = Array(Math.floor(columns)).fill(1)

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = '#00ff0033'
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)]
                ctx.fillText(char, i * fontSize, drops[i] * fontSize)

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }
        }

        const interval = setInterval(draw, 50)
        return () => clearInterval(interval)
    }, [])

    return <canvas ref={canvasRef} className="matrix-canvas" />
}

const styles = `
    .hacker-terminal {
        background: #000000;
        border-radius: 12px;
        overflow: hidden;
        font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
        border: 1px solid var(--theme-color, #00ff00);
        box-shadow: 0 0 30px rgba(0, 255, 0, 0.2), inset 0 0 100px rgba(0, 0, 0, 0.9);
        position: relative;
        min-height: 500px;
        display: flex;
        flex-direction: column;
    }

    .matrix-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.3;
    }

    .terminal-header {
        background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
        padding: 0.75rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--theme-color);
        position: relative;
        z-index: 1;
    }

    .header-title {
        color: var(--theme-color);
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .blink {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    .header-info {
        display: flex;
        gap: 1.5rem;
        font-size: 0.7rem;
        color: var(--theme-color);
        opacity: 0.7;
    }

    .back-btn {
        background: transparent;
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.375rem 0.75rem;
        border-radius: 4px;
        font-size: 0.75rem;
        cursor: pointer;
        font-family: inherit;
        transition: all 0.2s;
    }

    .back-btn:hover {
        background: var(--theme-color);
        color: #000;
    }

    /* Menu styles */
    .menu-content {
        padding: 1.5rem;
        text-align: center;
        position: relative;
        z-index: 1;
    }

    .ascii-art {
        color: var(--theme-color);
        font-size: 0.5rem;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        text-shadow: 0 0 10px var(--theme-color);
    }

    .menu-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        max-width: 400px;
        margin: 0 auto 1.5rem;
    }

    .menu-buttons button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(0, 255, 0, 0.05);
        border: 1px solid var(--theme-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        text-align: left;
    }

    .menu-buttons button:hover {
        background: rgba(0, 255, 0, 0.15);
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
        transform: translateX(5px);
    }

    .menu-buttons .icon {
        font-size: 1.5rem;
    }

    .menu-buttons .label {
        color: var(--theme-color);
        font-weight: 600;
        font-size: 0.95rem;
        display: block;
    }

    .menu-buttons .desc {
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.7rem;
    }

    .menu-options {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }

    .theme-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--theme-color);
        font-size: 0.8rem;
    }

    .theme-btn {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.2s;
    }

    .theme-btn.active {
        border-color: white;
        transform: scale(1.2);
    }

    .option-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.75rem;
        cursor: pointer;
        font-family: inherit;
    }

    .option-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .stats-display {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .stats-display .stat {
        text-align: center;
    }

    .stats-display .stat-label {
        display: block;
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.7rem;
        margin-bottom: 0.25rem;
    }

    .stats-display .stat-value {
        color: var(--theme-color);
        font-size: 1.5rem;
        font-weight: 700;
    }

    .achievements-list {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .achievements-list span {
        background: rgba(0, 255, 0, 0.1);
        padding: 0.375rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        color: var(--theme-color);
        border: 1px solid var(--theme-color);
    }

    /* Terminal styles */
    .terminal-body {
        flex: 1;
        padding: 1rem;
        overflow-y: auto;
        position: relative;
        z-index: 1;
    }

    .terminal-line {
        margin-bottom: 0.25rem;
        line-height: 1.4;
    }

    .terminal-line pre {
        margin: 0;
        white-space: pre-wrap;
        font-family: inherit;
        font-size: 0.8rem;
        color: var(--theme-color);
    }

    .prompt {
        color: var(--theme-color);
        font-weight: 600;
    }

    .terminal-line.command {
        color: white;
        font-size: 0.85rem;
    }

    .terminal-line.output {
        color: var(--theme-color);
        opacity: 0.9;
    }

    .system-msg {
        color: #fbbf24;
        font-size: 0.8rem;
    }

    .terminal-input-line {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
    }

    .terminal-input-line input {
        background: transparent;
        border: none;
        color: white;
        font-family: inherit;
        font-size: 0.85rem;
        outline: none;
        flex: 1;
        caret-color: transparent;
    }

    .cursor {
        color: var(--theme-color);
        font-size: 0.85rem;
        opacity: 0;
    }

    .cursor.visible {
        opacity: 1;
    }

    /* Puzzle styles */
    .puzzle-content {
        padding: 1.5rem;
        position: relative;
        z-index: 1;
    }

    .puzzle-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        color: var(--theme-color);
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
    }

    .puzzle-question {
        background: rgba(0, 255, 0, 0.05);
        border: 1px solid var(--theme-color);
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
    }

    .puzzle-question pre {
        color: var(--theme-color);
        font-size: 1rem;
        margin: 0;
        text-align: center;
        word-break: break-all;
    }

    .puzzle-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.875rem;
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        outline: none;
    }

    .puzzle-input:focus {
        box-shadow: 0 0 10px var(--theme-color);
    }

    .puzzle-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .puzzle-actions button {
        background: transparent;
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-size: 0.8rem;
        transition: all 0.2s;
    }

    .puzzle-actions button:hover:not(:disabled) {
        background: var(--theme-color);
        color: #000;
    }

    .puzzle-actions button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .puzzle-complete {
        text-align: center;
        padding: 2rem;
    }

    .puzzle-complete h2 {
        color: var(--theme-color);
        margin-bottom: 1rem;
    }

    .final-score {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: var(--theme-color);
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

    .puzzle-complete button {
        background: var(--theme-color);
        border: none;
        color: #000;
        padding: 0.75rem 2rem;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 600;
    }

    /* Typing styles */
    .typing-content {
        padding: 1.5rem;
        position: relative;
        z-index: 1;
    }

    .typing-display {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--theme-color);
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
    }

    .typing-prompt {
        color: var(--theme-color);
    }

    .typing-display span {
        color: rgba(255, 255, 255, 0.3);
    }

    .typing-display span.correct {
        color: var(--theme-color);
    }

    .typing-display span.incorrect {
        color: #ef4444;
        text-decoration: underline;
    }

    .typing-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--theme-color);
        color: white;
        padding: 0.875rem;
        border-radius: 4px;
        font-family: inherit;
        font-size: 1rem;
        margin-bottom: 1rem;
        outline: none;
    }

    .typing-input:focus {
        box-shadow: 0 0 10px var(--theme-color);
    }

    .typing-hint {
        text-align: center;
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.8rem;
    }

    .typing-results {
        text-align: center;
        padding: 1rem;
    }

    .typing-results h3 {
        color: var(--theme-color);
        margin-bottom: 1rem;
    }

    .typing-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 1.5rem;
    }

    .typing-stat {
        text-align: center;
    }

    .typing-stat .stat-label {
        display: block;
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
    }

    .typing-stat .stat-value {
        color: var(--theme-color);
        font-size: 2rem;
        font-weight: 700;
    }

    .typing-results button {
        background: var(--theme-color);
        border: none;
        color: #000;
        padding: 0.75rem 2rem;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 600;
    }

    /* Responsive */
    @media (max-width: 500px) {
        .hacker-terminal {
            min-height: 400px;
            font-size: 0.85rem;
        }

        .ascii-art {
            font-size: 0.35rem;
        }

        .header-info {
            display: none;
        }

        .menu-options {
            flex-direction: column;
            align-items: center;
        }
    }
`

export default HackerTerminal
