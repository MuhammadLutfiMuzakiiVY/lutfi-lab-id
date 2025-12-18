import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

// Icons
const HelpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
)

const BugIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="6" width="8" height="14" rx="4" />
        <path d="M19 9h-3" />
        <path d="M8 9H5" />
        <path d="M19 13h-3" />
        <path d="M8 13H5" />
        <path d="M19 17h-3" />
        <path d="M8 17H5" />
        <path d="M12 6V2" />
    </svg>
)

const FeedbackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
)

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)

const TicketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
    </svg>
)

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

const DEVELOPER_EMAIL = 'muhammadlutfimuzaki.devopssec@gmail.com'

const REPORT_TYPES = [
    { id: 'help', label: 'Help & Support', icon: HelpIcon, color: '#6366f1', description: 'Butuh bantuan menggunakan aplikasi' },
    { id: 'bug', label: 'Bug Report', icon: BugIcon, color: '#ef4444', description: 'Laporkan error atau masalah teknis' },
    { id: 'feedback', label: 'Feedback', icon: FeedbackIcon, color: '#10b981', description: 'Saran untuk meningkatkan aplikasi' },
    { id: 'contact', label: 'Contact Developer', icon: EmailIcon, color: '#f59e0b', description: 'Hubungi developer langsung' },
    { id: 'ticket', label: 'Support Ticket', icon: TicketIcon, color: '#8b5cf6', description: 'Buat tiket dukungan formal' }
]

const PRIORITY_LEVELS = [
    { id: 'low', label: 'Low', color: '#22c55e' },
    { id: 'medium', label: 'Medium', color: '#f59e0b' },
    { id: 'high', label: 'High', color: '#f97316' },
    { id: 'critical', label: 'Critical', color: '#ef4444' }
]

const FAQ_ITEMS = [
    { q: 'Bagaimana cara menggunakan Music Player?', a: 'Klik icon musik di pojok kanan bawah untuk membuka player. Anda bisa play/pause, skip track, dan mengatur volume.' },
    { q: 'Bagaimana cara bermain Chess vs AI?', a: 'Pilih menu "Chess Game" di sidebar. Pilih difficulty level, lalu mulai bermain dengan menggerakkan bidak putih.' },
    { q: 'Bagaimana cara menambah task baru?', a: 'Buka menu "Task Manager", klik tombol "New Task", isi detail task, lalu klik "Create Task".' },
    { q: 'Bagaimana cara mengubah theme/tema?', a: 'Buka menu "Pengaturan" > "Theme" untuk mengubah warna dan tampilan dashboard.' },
    { q: 'Bagaimana cara logout?', a: 'Klik tombol logout di bagian bawah sidebar (icon keluar).' }
]

function SupportCenter() {
    const { user } = useAuth()
    const [activeTab, setActiveTab] = useState('help')
    const [selectedType, setSelectedType] = useState(null)
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        priority: 'medium',
        category: '',
        browserInfo: navigator.userAgent,
        timestamp: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [expandedFAQ, setExpandedFAQ] = useState(null)
    const [tickets, setTickets] = useState([
        { id: 'TKT-001', type: 'bug', subject: 'Sample: Loading issue', status: 'open', date: '2024-12-10', priority: 'high' }
    ])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Build email content
        const emailSubject = encodeURIComponent(`[Lutfi-Lab.ID ${selectedType?.label || 'Support'}] ${formData.subject}`)
        const emailBody = encodeURIComponent(
            `=== SUPPORT REQUEST ===
Type: ${selectedType?.label || 'General'}
Priority: ${formData.priority.toUpperCase()}
Date: ${new Date().toLocaleString('id-ID')}

--- USER INFO ---
Name: ${user?.name || 'Anonymous'}
Email: ${user?.email || 'N/A'}

--- MESSAGE ---
${formData.message}

--- TECHNICAL INFO ---
Browser: ${formData.browserInfo}
URL: ${window.location.href}
Screen: ${window.innerWidth}x${window.innerHeight}

---
Sent from Lutfi-Lab.ID Support Center
`)

        // Create mailto link
        const mailtoLink = `mailto:${DEVELOPER_EMAIL}?subject=${emailSubject}&body=${emailBody}`

        // Open email client
        window.location.href = mailtoLink

        // Add to local tickets
        const newTicket = {
            id: `TKT-${String(tickets.length + 1).padStart(3, '0')}`,
            type: selectedType?.id || 'help',
            subject: formData.subject,
            status: 'open',
            date: new Date().toISOString().split('T')[0],
            priority: formData.priority
        }
        setTickets(prev => [newTicket, ...prev])

        // Simulate submission delay
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)

            // Reset after showing success
            setTimeout(() => {
                setIsSubmitted(false)
                setSelectedType(null)
                setFormData({
                    subject: '',
                    message: '',
                    priority: 'medium',
                    category: '',
                    browserInfo: navigator.userAgent,
                    timestamp: ''
                })
            }, 3000)
        }, 1000)
    }

    const renderTypeSelector = () => (
        <div className="type-selector">
            <h3>Pilih Jenis Bantuan</h3>
            <div className="type-grid">
                {REPORT_TYPES.map(type => (
                    <button
                        key={type.id}
                        className={`type-card ${selectedType?.id === type.id ? 'active' : ''}`}
                        onClick={() => setSelectedType(type)}
                        style={{ '--card-color': type.color }}
                    >
                        <div className="type-icon">
                            <type.icon />
                        </div>
                        <span className="type-label">{type.label}</span>
                        <span className="type-desc">{type.description}</span>
                    </button>
                ))}
            </div>
        </div>
    )

    const renderForm = () => (
        <div className="support-form-container">
            <button className="back-btn" onClick={() => setSelectedType(null)}>
                ← Kembali
            </button>

            <div className="form-header">
                <div className="form-type-badge" style={{ background: selectedType.color }}>
                    <selectedType.icon />
                    <span>{selectedType.label}</span>
                </div>
            </div>

            {isSubmitted ? (
                <div className="success-message">
                    <div className="success-icon">
                        <CheckIcon />
                    </div>
                    <h3>Terkirim!</h3>
                    <p>Email client Anda akan terbuka. Silakan kirim email tersebut.</p>
                    <p className="success-note">Tiket #{tickets[0]?.id} telah dibuat</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="support-form">
                    <div className="form-group">
                        <label>Subjek *</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Ringkasan masalah atau pertanyaan Anda"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Prioritas</label>
                        <div className="priority-selector">
                            {PRIORITY_LEVELS.map(p => (
                                <button
                                    key={p.id}
                                    type="button"
                                    className={`priority-btn ${formData.priority === p.id ? 'active' : ''}`}
                                    onClick={() => setFormData(prev => ({ ...prev, priority: p.id }))}
                                    style={{ '--priority-color': p.color }}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Pesan *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={
                                selectedType.id === 'bug'
                                    ? 'Jelaskan bug yang Anda temukan:\n1. Langkah untuk mereproduksi\n2. Apa yang terjadi\n3. Apa yang seharusnya terjadi'
                                    : selectedType.id === 'feedback'
                                        ? 'Berikan saran atau masukan Anda...'
                                        : 'Jelaskan pertanyaan atau masalah Anda secara detail...'
                            }
                            rows={6}
                            required
                        />
                    </div>

                    <div className="form-info">
                        <p>📧 Email akan dikirim ke: <strong>{DEVELOPER_EMAIL}</strong></p>
                        <p>👤 Dikirim oleh: <strong>{user?.name || 'Anonymous'}</strong></p>
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="spinner"></div>
                                Mengirim...
                            </>
                        ) : (
                            <>
                                <SendIcon />
                                Kirim Laporan
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    )

    const renderFAQ = () => (
        <div className="faq-section">
            <h3>❓ Pertanyaan Umum (FAQ)</h3>
            <div className="faq-list">
                {FAQ_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}
                    >
                        <button
                            className="faq-question"
                            onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                        >
                            <span>{item.q}</span>
                            <span className="faq-toggle">{expandedFAQ === index ? '−' : '+'}</span>
                        </button>
                        {expandedFAQ === index && (
                            <div className="faq-answer">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

    const renderTickets = () => (
        <div className="tickets-section">
            <h3>🎫 Tiket Saya</h3>
            {tickets.length === 0 ? (
                <p className="no-tickets">Belum ada tiket support.</p>
            ) : (
                <div className="tickets-list">
                    {tickets.map(ticket => (
                        <div key={ticket.id} className={`ticket-item ${ticket.status}`}>
                            <div className="ticket-header">
                                <span className="ticket-id">{ticket.id}</span>
                                <span className={`ticket-status ${ticket.status}`}>
                                    {ticket.status === 'open' ? '🟢 Open' : ticket.status === 'pending' ? '🟡 Pending' : '✅ Closed'}
                                </span>
                            </div>
                            <div className="ticket-subject">{ticket.subject}</div>
                            <div className="ticket-meta">
                                <span className={`ticket-priority ${ticket.priority}`}>{ticket.priority}</span>
                                <span className="ticket-date">{ticket.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

    return (
        <div className="support-center">
            <div className="support-header">
                <h1>🛟 Support Center</h1>
                <p>Butuh bantuan? Kami siap membantu Anda!</p>
            </div>

            <div className="support-tabs">
                <button
                    className={`tab-btn ${activeTab === 'help' ? 'active' : ''}`}
                    onClick={() => setActiveTab('help')}
                >
                    <HelpIcon /> Help & Report
                </button>
                <button
                    className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
                    onClick={() => setActiveTab('faq')}
                >
                    ❓ FAQ
                </button>
                <button
                    className={`tab-btn ${activeTab === 'tickets' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tickets')}
                >
                    <TicketIcon /> My Tickets
                </button>
            </div>

            <div className="support-content">
                {activeTab === 'help' && (
                    selectedType ? renderForm() : renderTypeSelector()
                )}
                {activeTab === 'faq' && renderFAQ()}
                {activeTab === 'tickets' && renderTickets()}
            </div>

            <div className="support-footer">
                <p>📧 Developer: <a href={`mailto:${DEVELOPER_EMAIL}`}>{DEVELOPER_EMAIL}</a></p>
                <p>💡 Response time: Biasanya dalam 24-48 jam</p>
            </div>

            <style>{`
                .support-center {
                    padding: 1.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .support-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .support-header h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .support-header p {
                    color: var(--text-secondary);
                }

                .support-tabs {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.5rem;
                    border-radius: 12px;
                }

                .tab-btn {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1rem;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .tab-btn:hover {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                }

                .tab-btn.active {
                    background: var(--gradient-primary);
                    color: white;
                }

                .support-content {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.5rem;
                    min-height: 400px;
                }

                /* Type Selector */
                .type-selector h3 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: var(--text-primary);
                }

                .type-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 1rem;
                }

                .type-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1.5rem 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-align: center;
                }

                .type-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--card-color);
                    transform: translateY(-4px);
                }

                .type-card.active {
                    background: color-mix(in srgb, var(--card-color) 15%, transparent);
                    border-color: var(--card-color);
                    box-shadow: 0 4px 20px color-mix(in srgb, var(--card-color) 30%, transparent);
                }

                .type-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: color-mix(in srgb, var(--card-color) 20%, transparent);
                    border-radius: 12px;
                    color: var(--card-color);
                }

                .type-icon svg {
                    width: 24px;
                    height: 24px;
                }

                .type-label {
                    font-weight: 600;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                }

                .type-desc {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    line-height: 1.4;
                }

                /* Form */
                .support-form-container {
                    animation: fadeIn 0.3s ease;
                }

                .back-btn {
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    cursor: pointer;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    transition: color 0.2s;
                }

                .back-btn:hover {
                    color: var(--text-primary);
                }

                .form-header {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                .form-type-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.625rem 1.25rem;
                    border-radius: 20px;
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .support-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    resize: vertical;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                    background: rgba(255, 255, 255, 0.08);
                }

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: var(--text-muted);
                }

                .priority-selector {
                    display: flex;
                    gap: 0.5rem;
                }

                .priority-btn {
                    flex: 1;
                    padding: 0.625rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .priority-btn:hover {
                    background: rgba(255, 255, 255, 0.08);
                }

                .priority-btn.active {
                    background: color-mix(in srgb, var(--priority-color) 20%, transparent);
                    border-color: var(--priority-color);
                    color: var(--priority-color);
                }

                .form-info {
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 10px;
                    padding: 1rem;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .form-info p {
                    margin: 0.25rem 0;
                }

                .form-info strong {
                    color: var(--text-primary);
                }

                .submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: var(--gradient-primary);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Success Message */
                .success-message {
                    text-align: center;
                    padding: 3rem 2rem;
                    animation: fadeIn 0.3s ease;
                }

                .success-icon {
                    width: 64px;
                    height: 64px;
                    background: linear-gradient(135deg, #10b981, #34d399);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    color: white;
                    animation: pop 0.3s ease;
                }

                @keyframes pop {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }

                .success-message h3 {
                    color: #10b981;
                    margin-bottom: 0.5rem;
                }

                .success-message p {
                    color: var(--text-secondary);
                    margin-bottom: 0.25rem;
                }

                .success-note {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 8px;
                    color: #10b981;
                    font-weight: 500;
                }

                /* FAQ */
                .faq-section h3 {
                    margin-bottom: 1rem;
                }

                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .faq-question {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: none;
                    border: none;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                    text-align: left;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .faq-question:hover {
                    background: rgba(255, 255, 255, 0.03);
                }

                .faq-toggle {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(99, 102, 241, 0.2);
                    border-radius: 50%;
                    color: #6366f1;
                    font-weight: bold;
                }

                .faq-answer {
                    padding: 0 1rem 1rem;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    line-height: 1.6;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Tickets */
                .tickets-section h3 {
                    margin-bottom: 1rem;
                }

                .no-tickets {
                    text-align: center;
                    color: var(--text-muted);
                    padding: 2rem;
                }

                .tickets-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .ticket-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 10px;
                    padding: 1rem;
                    transition: all 0.2s;
                }

                .ticket-item:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .ticket-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .ticket-id {
                    font-family: monospace;
                    font-size: 0.8rem;
                    color: #6366f1;
                    background: rgba(99, 102, 241, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }

                .ticket-status {
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .ticket-subject {
                    font-weight: 500;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                }

                .ticket-meta {
                    display: flex;
                    gap: 1rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .ticket-priority {
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .ticket-priority.low { color: #22c55e; }
                .ticket-priority.medium { color: #f59e0b; }
                .ticket-priority.high { color: #f97316; }
                .ticket-priority.critical { color: #ef4444; }

                /* Footer */
                .support-footer {
                    margin-top: 2rem;
                    text-align: center;
                    padding: 1.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .support-footer p {
                    margin: 0.25rem 0;
                }

                .support-footer a {
                    color: #6366f1;
                    text-decoration: none;
                }

                .support-footer a:hover {
                    text-decoration: underline;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .support-center {
                        padding: 1rem;
                    }

                    .type-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .support-tabs {
                        flex-direction: column;
                    }

                    .priority-selector {
                        flex-wrap: wrap;
                    }

                    .priority-btn {
                        flex: 1 1 40%;
                    }
                }
            `}</style>
        </div>
    )
}

export default SupportCenter
