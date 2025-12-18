// Anime Hacker SVG Component - Cybersecurity themed
const AnimeHackerSVG = ({ className, style }) => (
    <svg
        className={className}
        style={style}
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Glow Effects */}
        <defs>
            <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
            <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fce5d8" />
                <stop offset="100%" stopColor="#f5d0c5" />
            </linearGradient>
            <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Shield with Lock - Background Element */}
        <g transform="translate(130, 140)" filter="url(#glow)">
            <path
                d="M0 -40 L35 -25 L35 15 C35 35 0 55 0 55 C0 55 -35 35 -35 15 L-35 -25 Z"
                fill="url(#shirtGradient)"
                opacity="0.9"
                stroke="#22d3ee"
                strokeWidth="2"
            />
            {/* Lock Icon */}
            <rect x="-12" y="-5" width="24" height="20" rx="3" fill="#0a0a1a" />
            <path
                d="M-8 -5 L-8 -12 C-8 -20 8 -20 8 -12 L8 -5"
                stroke="#22d3ee"
                strokeWidth="3"
                fill="none"
            />
            <circle cx="0" cy="5" r="3" fill="#22d3ee" />
        </g>

        {/* Body */}
        <g transform="translate(100, 100)">
            {/* Hoodie/Jacket */}
            <path
                d="M-45 80 C-45 60 -35 50 -20 45 L20 45 C35 50 45 60 45 80 L45 140 L-45 140 Z"
                fill="#1e1e3f"
                stroke="#6366f1"
                strokeWidth="1"
            />
            {/* Hoodie Hood */}
            <ellipse cx="0" cy="50" rx="50" ry="20" fill="#1e1e3f" />
            {/* Jacket Details */}
            <path d="M0 50 L0 140" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
            <path d="M-20 70 L-20 100" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
            <path d="M20 70 L20 100" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />

            {/* Glowing Lines on Jacket */}
            <path
                d="M-40 90 L-25 85 L-25 120"
                stroke="#22d3ee"
                strokeWidth="1.5"
                fill="none"
                filter="url(#softGlow)"
                opacity="0.8"
            />
            <path
                d="M40 90 L25 85 L25 120"
                stroke="#22d3ee"
                strokeWidth="1.5"
                fill="none"
                filter="url(#softGlow)"
                opacity="0.8"
            />
        </g>

        {/* Face */}
        <g transform="translate(100, 85)">
            {/* Face Shape */}
            <ellipse cx="0" cy="0" rx="35" ry="40" fill="url(#skinGradient)" />

            {/* Eyes */}
            <g transform="translate(-12, -5)">
                <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" />
                <ellipse cx="1" cy="0" rx="5" ry="6" fill="#4a3728" />
                <ellipse cx="2" cy="-1" rx="2" ry="2.5" fill="#1a1a2e" />
                <ellipse cx="3" cy="-3" rx="1.5" ry="1.5" fill="white" opacity="0.9" />
            </g>
            <g transform="translate(12, -5)">
                <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" />
                <ellipse cx="1" cy="0" rx="5" ry="6" fill="#4a3728" />
                <ellipse cx="2" cy="-1" rx="2" ry="2.5" fill="#1a1a2e" />
                <ellipse cx="3" cy="-3" rx="1.5" ry="1.5" fill="white" opacity="0.9" />
            </g>

            {/* Eyebrows */}
            <path d="M-20 -18 Q-12 -22 -5 -18" stroke="#1a1a2e" strokeWidth="2" fill="none" />
            <path d="M5 -18 Q12 -22 20 -18" stroke="#1a1a2e" strokeWidth="2" fill="none" />

            {/* Blush */}
            <ellipse cx="-22" cy="8" rx="6" ry="3" fill="#ffb3b3" opacity="0.5" />
            <ellipse cx="22" cy="8" rx="6" ry="3" fill="#ffb3b3" opacity="0.5" />

            {/* Mouth - Smile */}
            <path d="M-8 18 Q0 24 8 18" stroke="#c4a4a4" strokeWidth="2" fill="none" />

            {/* Nose */}
            <path d="M0 5 L0 12" stroke="#e8c4b8" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Hair */}
        <g transform="translate(100, 60)">
            {/* Main Hair */}
            <ellipse cx="0" cy="0" rx="45" ry="35" fill="url(#hairGradient)" />
            {/* Hair Strands */}
            <path d="M-40 10 Q-50 40 -45 80" stroke="#1a1a2e" strokeWidth="8" fill="none" />
            <path d="M40 10 Q50 40 45 80" stroke="#1a1a2e" strokeWidth="8" fill="none" />
            {/* Bangs */}
            <path d="M-30 15 Q-25 35 -15 25" fill="#16213e" />
            <path d="M-20 10 Q-10 30 0 20" fill="#1a1a2e" />
            <path d="M0 10 Q10 30 20 20" fill="#16213e" />
            <path d="M15 15 Q25 35 30 25" fill="#1a1a2e" />
            {/* Hair Shine */}
            <path d="M-15 -10 Q-5 -15 5 -10" stroke="#4a4a8a" strokeWidth="3" fill="none" opacity="0.5" />

            {/* Hair Clip - Cyber Style */}
            <rect x="20" y="20" width="12" height="6" rx="2" fill="#22d3ee" filter="url(#softGlow)" />
        </g>

        {/* Hand Pointing Up */}
        <g transform="translate(35, 130)">
            <ellipse cx="0" cy="40" rx="12" ry="15" fill="url(#skinGradient)" />
            {/* Pointing Finger */}
            <rect x="-4" y="0" width="8" height="35" rx="4" fill="url(#skinGradient)" />
            {/* Other Fingers curled */}
            <ellipse cx="8" cy="38" rx="5" ry="8" fill="url(#skinGradient)" />
            <ellipse cx="-8" cy="40" rx="5" ry="7" fill="url(#skinGradient)" />
        </g>

        {/* Floating Icons */}
        {/* Globe Icon */}
        <g transform="translate(25, 50)" filter="url(#softGlow)">
            <circle cx="0" cy="0" r="12" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
            <ellipse cx="0" cy="0" rx="12" ry="5" stroke="#22d3ee" strokeWidth="1" fill="none" />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#22d3ee" strokeWidth="1" />
            <line x1="-12" y1="0" x2="12" y2="0" stroke="#22d3ee" strokeWidth="1" />
        </g>

        {/* Lock Icon - Small */}
        <g transform="translate(30, 180)" filter="url(#softGlow)">
            <rect x="-8" y="0" width="16" height="12" rx="2" fill="#6366f1" />
            <path d="M-5 0 L-5 -5 C-5 -10 5 -10 5 -5 L5 0" stroke="#6366f1" strokeWidth="2" fill="none" />
            <circle cx="0" cy="5" r="2" fill="#22d3ee" />
        </g>

        {/* Check Icon */}
        <g transform="translate(170, 220)" filter="url(#softGlow)">
            <circle cx="0" cy="0" r="10" fill="#22d3ee" opacity="0.3" />
            <path d="M-5 0 L-2 4 L6 -4" stroke="#22d3ee" strokeWidth="2" fill="none" />
        </g>

        {/* Sparkles */}
        <g fill="#d946ef" opacity="0.8">
            <circle cx="60" cy="40" r="2" />
            <circle cx="150" cy="60" r="1.5" />
            <circle cx="170" cy="180" r="2" />
            <circle cx="40" cy="230" r="1.5" />
        </g>

        {/* Text */}
        <text
            x="100"
            y="25"
            textAnchor="middle"
            fill="url(#glowGradient)"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
            filter="url(#softGlow)"
        >
            CYBER SECURITY
        </text>
    </svg>
);

export default AnimeHackerSVG;
