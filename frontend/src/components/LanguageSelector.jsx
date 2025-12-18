import { useState, useRef, useEffect } from 'react'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

function LanguageSelector({ compact = false }) {
    const { language, setLanguage, currentLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const filteredLanguages = LANGUAGES.filter(lang =>
        lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.native.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.code.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSelect = (code) => {
        setLanguage(code)
        setIsOpen(false)
        setSearchTerm('')
    }

    return (
        <div className={`language-selector ${compact ? 'compact' : ''}`} ref={dropdownRef}>
            <button
                className="lang-trigger"
                onClick={() => setIsOpen(!isOpen)}
                title="Change Language"
            >
                <span className="current-flag">{currentLanguage.flag}</span>
                {!compact && (
                    <>
                        <span className="current-name">{currentLanguage.native}</span>
                        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
                    </>
                )}
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search language..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="lang-list">
                        {filteredLanguages.map(lang => (
                            <button
                                key={lang.code}
                                className={`lang-option ${language === lang.code ? 'active' : ''}`}
                                onClick={() => handleSelect(lang.code)}
                            >
                                <span className="lang-flag">{lang.flag}</span>
                                <div className="lang-info">
                                    <span className="lang-native">{lang.native}</span>
                                    <span className="lang-english">{lang.name}</span>
                                </div>
                                {language === lang.code && (
                                    <span className="check-mark">✓</span>
                                )}
                            </button>
                        ))}
                        {filteredLanguages.length === 0 && (
                            <div className="no-results">No languages found</div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                .language-selector {
                    position: relative;
                    z-index: 1000;
                }

                .lang-trigger {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 0.9rem;
                }

                .language-selector.compact .lang-trigger {
                    padding: 0.5rem;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    justify-content: center;
                }

                .lang-trigger:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .current-flag {
                    font-size: 1.25rem;
                }

                .current-name {
                    font-weight: 500;
                }

                .dropdown-arrow {
                    font-size: 0.6rem;
                    color: var(--text-muted);
                    margin-left: 0.25rem;
                }

                .lang-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    width: 280px;
                    max-height: 400px;
                    background: rgba(15, 15, 30, 0.98);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                    overflow: hidden;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .search-box {
                    padding: 0.75rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .search-box input {
                    width: 100%;
                    padding: 0.625rem 0.875rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }

                .search-box input::placeholder {
                    color: var(--text-muted);
                }

                .search-box input:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .lang-list {
                    max-height: 320px;
                    overflow-y: auto;
                    padding: 0.5rem;
                }

                .lang-list::-webkit-scrollbar {
                    width: 4px;
                }

                .lang-list::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                }

                .lang-option {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.75rem;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.15s;
                }

                .lang-option:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .lang-option.active {
                    background: rgba(99, 102, 241, 0.15);
                }

                .lang-flag {
                    font-size: 1.5rem;
                    line-height: 1;
                }

                .lang-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .lang-native {
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .lang-english {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .check-mark {
                    color: #10b981;
                    font-weight: bold;
                }

                .no-results {
                    padding: 1rem;
                    text-align: center;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                }

                @media (max-width: 480px) {
                    .lang-dropdown {
                        width: calc(100vw - 40px);
                        max-width: 300px;
                    }
                }
            `}</style>
        </div>
    )
}

export default LanguageSelector
