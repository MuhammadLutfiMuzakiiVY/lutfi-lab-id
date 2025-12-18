import React from 'react'

const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

const HeartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
)

const CodeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
)

const ShieldIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
)

const SparkleIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
)

function Footer() {
    return (
        <footer className="credit-footer">
            <div className="footer-container">
                {/* Left - Powered by */}
                <div className="footer-section">
                    <span className="label-text">Powered by</span>
                    <a
                        href="https://github.com/MuhammadLutfiMuzakiiVY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="developer-link"
                    >
                        <GitHubIcon />
                        <span className="developer-name">Muhammad Lutfi Muzaki</span>
                    </a>
                </div>

                {/* Center - Professional Title with Jedag Jedug */}
                <div className="footer-section center-section">
                    <div className="pro-title-container">
                        <div className="pro-title jedag-jedug">
                            <div className="title-icon code-icon">
                                <CodeIcon />
                            </div>
                            <span className="title-text">Developer & Software Engineer</span>
                            <span className="title-divider">×</span>
                            <div className="title-icon shield-icon">
                                <ShieldIcon />
                            </div>
                            <span className="title-text cyber-text">Cybersecurity Professional</span>
                        </div>
                        <div className="glow-effect"></div>
                    </div>
                </div>

                {/* Right - Made with Love with Jedag Jedug */}
                <div className="footer-section">
                    <div className="made-with-container">
                        <div className="made-with jedag-jedug-alt">
                            <span className="crafted-text">Crafted with</span>
                            <div className="heart-container">
                                <HeartIcon />
                                <div className="heart-ring"></div>
                            </div>
                            <span className="in-text">&</span>
                            <SparkleIcon />
                            <span className="location-text">
                                <span className="in-word">in</span>
                                <span className="country">Indonesia</span>
                                <span className="flag">🇮🇩</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .credit-footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(180deg, rgba(8, 8, 18, 0.9), rgba(12, 12, 28, 0.98));
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border-top: 1px solid rgba(99, 102, 241, 0.2);
                    padding: 0.875rem 2rem;
                    z-index: 1000;
                    overflow: hidden;
                }

                .credit-footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.5), transparent);
                    animation: borderGlow 3s ease-in-out infinite;
                }

                .footer-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1400px;
                    margin: 0 auto;
                    gap: 2rem;
                }

                .footer-section {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .center-section {
                    flex: 1;
                    justify-content: center;
                }

                /* Left Section - Developer */
                .label-text {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.7rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .developer-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                    padding: 0.4rem 0.875rem;
                    border-radius: 24px;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12));
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .developer-link:hover {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
                    border-color: rgba(168, 85, 247, 0.4);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
                }

                .developer-link svg {
                    color: #a78bfa;
                    transition: all 0.4s ease;
                }

                .developer-link:hover svg {
                    color: #c4b5fd;
                    transform: rotate(360deg);
                }

                .developer-name {
                    font-size: 0.8rem;
                    font-weight: 700;
                    background: linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6);
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s ease-in-out infinite;
                }

                /* Center Section - Pro Title with Jedag Jedug */
                .pro-title-container {
                    position: relative;
                }

                .pro-title {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding: 0.5rem 1.25rem;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.1));
                    border: 1px solid rgba(16, 185, 129, 0.25);
                    border-radius: 30px;
                    position: relative;
                    z-index: 1;
                }

                .pro-title.jedag-jedug {
                    animation: jedagJedug 1.5s ease-in-out infinite;
                }

                .title-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                }

                .code-icon {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: white;
                    animation: iconPop 1.5s ease-in-out infinite;
                }

                .shield-icon {
                    background: linear-gradient(135deg, #10b981, #14b8a6);
                    color: white;
                    animation: iconPop 1.5s ease-in-out infinite 0.2s;
                }

                .title-text {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                    letter-spacing: 0.3px;
                }

                .cyber-text {
                    background: linear-gradient(90deg, #10b981, #22d3ee);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .title-divider {
                    color: rgba(255, 255, 255, 0.3);
                    font-weight: 300;
                    font-size: 0.875rem;
                }

                .glow-effect {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(ellipse, rgba(16, 185, 129, 0.2), transparent 70%);
                    border-radius: 30px;
                    animation: glowPulse 1.5s ease-in-out infinite;
                    pointer-events: none;
                }

                /* Right Section - Made with Love Jedag Jedug */
                .made-with-container {
                    position: relative;
                }

                .made-with {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1));
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    border-radius: 24px;
                    font-size: 0.75rem;
                }

                .made-with.jedag-jedug-alt {
                    animation: jedagJedugAlt 1.5s ease-in-out infinite 0.3s;
                }

                .crafted-text {
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 500;
                }

                .heart-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .heart-container svg {
                    color: #ef4444;
                    animation: heartBeat 0.8s ease-in-out infinite;
                    filter: drop-shadow(0 0 6px rgba(239, 68, 68, 0.6));
                    z-index: 1;
                }

                .heart-ring {
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border: 2px solid rgba(239, 68, 68, 0.4);
                    border-radius: 50%;
                    animation: ringExpand 1.5s ease-out infinite;
                }

                .in-text {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.7rem;
                }

                .made-with svg:not(.heart-container svg) {
                    color: #fbbf24;
                    animation: sparkle 1s ease-in-out infinite;
                }

                .location-text {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .in-word {
                    color: rgba(255, 255, 255, 0.5);
                }

                .country {
                    font-weight: 700;
                    background: linear-gradient(90deg, #ef4444, #fbbf24);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: textPulse 1.5s ease-in-out infinite;
                }

                .flag {
                    font-size: 0.875rem;
                    animation: flagWave 2s ease-in-out infinite;
                }

                /* Jedag Jedug Animations */
                @keyframes jedagJedug {
                    0%, 100% { 
                        transform: scale(1) translateY(0);
                        box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
                    }
                    10% { 
                        transform: scale(1.03) translateY(-3px);
                        box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
                    }
                    20% { 
                        transform: scale(0.98) translateY(1px);
                    }
                    30% { 
                        transform: scale(1.02) translateY(-2px);
                        box-shadow: 0 6px 25px rgba(34, 211, 238, 0.3);
                    }
                    40% { 
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes jedagJedugAlt {
                    0%, 100% { 
                        transform: scale(1) translateY(0);
                        box-shadow: 0 0 15px rgba(239, 68, 68, 0.15);
                    }
                    15% { 
                        transform: scale(1.04) translateY(-4px);
                        box-shadow: 0 10px 35px rgba(239, 68, 68, 0.35);
                    }
                    30% { 
                        transform: scale(0.97) translateY(2px);
                    }
                    45% { 
                        transform: scale(1.02) translateY(-2px);
                        box-shadow: 0 6px 25px rgba(251, 146, 60, 0.3);
                    }
                    60% { 
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes iconPop {
                    0%, 100% { transform: scale(1); }
                    20% { transform: scale(1.15); }
                    40% { transform: scale(1); }
                }

                @keyframes heartBeat {
                    0%, 100% { transform: scale(1); }
                    15% { transform: scale(1.25); }
                    30% { transform: scale(1); }
                    45% { transform: scale(1.2); }
                    60% { transform: scale(1); }
                }

                @keyframes ringExpand {
                    0% { 
                        width: 16px; 
                        height: 16px; 
                        opacity: 0.8;
                    }
                    100% { 
                        width: 40px; 
                        height: 40px; 
                        opacity: 0;
                    }
                }

                @keyframes glowPulse {
                    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
                }

                @keyframes sparkle {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                    50% { transform: scale(1.2) rotate(180deg); opacity: 0.7; }
                }

                @keyframes textPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; filter: brightness(1.2); }
                }

                @keyframes flagWave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(8deg); }
                    75% { transform: rotate(-8deg); }
                }

                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes borderGlow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .footer-container {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .center-section {
                        order: -1;
                    }
                }

                @media (max-width: 600px) {
                    .credit-footer {
                        padding: 0.75rem 1rem;
                    }

                    .pro-title {
                        padding: 0.4rem 0.875rem;
                        gap: 0.4rem;
                    }

                    .title-text {
                        font-size: 0.65rem;
                    }

                    .title-icon {
                        width: 22px;
                        height: 22px;
                    }

                    .made-with {
                        padding: 0.4rem 0.75rem;
                        font-size: 0.65rem;
                    }

                    .developer-name {
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </footer>
    )
}

export default Footer
