import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AnimeHackerSVG from '../components/AnimeHackerSVG'
import Footer from '../components/Footer'
import '../styles/login.css'

// Icons
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
)

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
)

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"></path>
    </svg>
)

const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
    </svg>
)

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
)

const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
)

const AlertCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
)

// Social Icons
const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20">
        <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
        <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
        <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
        <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
    </svg>
)

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

const MicrosoftIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20">
        <path fill="#F25022" d="M0 0h11v11H0z" />
        <path fill="#7FBA00" d="M13 0h11v11H13z" />
        <path fill="#00A4EF" d="M0 13h11v11H0z" />
        <path fill="#FFB900" d="M13 13h11v11H13z" />
    </svg>
)

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20">
        <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFDC80" />
                <stop offset="25%" stopColor="#F77737" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="75%" stopColor="#C13584" />
                <stop offset="100%" stopColor="#833AB4" />
            </linearGradient>
        </defs>
        <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
)

// API URL for regular API calls (through Vite proxy)
const API_URL = '/api/auth';

// OAuth URL - must use direct backend URL because OAuth redirects cannot go through proxy
const OAUTH_URL = 'http://localhost:3000/api/auth';

function Login() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const { setUser, setAccessToken, setRefreshToken } = useAuth()

    // Steps: 'credentials' | 'verification'
    const [step, setStep] = useState('credentials')
    const [loginMethod, setLoginMethod] = useState('email')

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        verificationCode: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [countdown, setCountdown] = useState(0)

    // Helper function to get redirect path based on role
    const getRedirectPath = (role) => {
        switch (role) {
            case 'super_developer':
                return '/dashboard/developer'
            case 'admin':
                return '/dashboard/admin'
            default:
                return '/dashboard/user'
        }
    }

    // Check for OAuth callback error
    useEffect(() => {
        if (searchParams.get('error')) {
            setError('Login dengan OAuth gagal. Silakan coba lagi.')
        }
    }, [searchParams])

    // Countdown timer for resend code
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [countdown])

    const validateCredentials = () => {
        const newErrors = {}

        if (loginMethod === 'email') {
            if (!formData.email) {
                newErrors.email = 'Email wajib diisi'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Format email tidak valid'
            }
        } else {
            if (!formData.phone) {
                newErrors.phone = 'Nomor HP wajib diisi'
            } else if (!/^(\+62|62|0)[0-9]{9,12}$/.test(formData.phone.replace(/\s/g, ''))) {
                newErrors.phone = 'Format nomor HP tidak valid'
            }
        }

        if (!formData.password) {
            newErrors.password = 'Password wajib diisi'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password minimal 6 karakter'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
        setError('')
    }

    // Step 1: Submit credentials
    const handleSubmitCredentials = async (e) => {
        e.preventDefault()

        if (!validateCredentials()) return

        setLoading(true)
        setError('')

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: loginMethod === 'email' ? formData.email : formData.phone,
                    password: formData.password
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Login gagal')
            }

            // DEV MODE: If response includes tokens directly (no verification needed)
            if (data.accessToken && data.user) {
                setAccessToken(data.accessToken)
                setRefreshToken(data.refreshToken)
                setUser(data.user)
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                localStorage.setItem('user', JSON.stringify(data.user))
                navigate(getRedirectPath(data.user.role))
                return
            }

            // Production mode: Move to verification step
            setStep('verification')
            setCountdown(60) // 60 seconds to resend
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Step 2: Verify code
    const handleVerifyCode = async (e) => {
        e.preventDefault()

        if (formData.verificationCode.length !== 7) {
            setErrors({ verificationCode: 'Kode harus 7 digit' })
            return
        }

        setLoading(true)
        setError('')

        try {
            const response = await fetch(`${API_URL}/verify-code`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: loginMethod === 'email' ? formData.email : formData.phone,
                    code: formData.verificationCode
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Kode tidak valid')
            }

            // Save tokens and user
            setAccessToken(data.accessToken)
            setRefreshToken(data.refreshToken)
            setUser(data.user)

            if (rememberMe) {
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                localStorage.setItem('user', JSON.stringify(data.user))
            }

            navigate(getRedirectPath(data.user.role))
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Resend verification code
    const handleResendCode = async () => {
        if (countdown > 0) return

        setLoading(true)
        try {
            const response = await fetch(`${API_URL}/resend-code`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: loginMethod === 'email' ? formData.email : formData.phone
                })
            })

            if (response.ok) {
                setCountdown(60)
                setError('')
            }
        } catch (err) {
            setError('Gagal mengirim ulang kode')
        } finally {
            setLoading(false)
        }
    }

    // OAuth login handlers - uses direct backend URL
    const handleOAuthLogin = (provider) => {
        window.location.href = `${OAUTH_URL}/${provider}`
    }

    return (
        <div className="login-container">
            {/* Background elements */}
            <div className="animated-bg"></div>
            <div className="grid-overlay"></div>
            <div className="orbs">
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
            </div>
            <div className="particles">
                {[...Array(12)].map((_, i) => <div key={i} className="particle"></div>)}
            </div>
            <div className="decoration-dots top-right"></div>
            <div className="decoration-dots bottom-left"></div>

            {/* BRUTAL EFFECTS */}
            <div className="scanlines"></div>
            <div className="crt-flicker"></div>

            {/* Shock Waves */}
            <div className="shock-wave"></div>
            <div className="shock-wave"></div>
            <div className="shock-wave"></div>
            <div className="shock-wave"></div>

            {/* Lightning / Halilintar Effects */}
            <div className="lightning-container">
                <div className="lightning"></div>
                <div className="lightning"></div>
                <div className="lightning"></div>
                <div className="lightning"></div>
                <div className="lightning"></div>
                <div className="lightning"></div>
            </div>
            <div className="lightning-flash"></div>

            {/* Electric Sparks */}
            <div className="sparks">
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
            </div>

            {/* Anime Characters with Enhanced Effects */}
            <div className="anime-particles left">
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
            </div>
            <div className="anime-character anime-character-left">
                <AnimeHackerSVG />
            </div>
            <div className="anime-speech left">
                ⚡ Selamat datang di Lutfi-Lab.ID!
            </div>

            <div className="anime-particles right">
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
                <div className="anime-particle"></div>
            </div>
            <div className="anime-character anime-character-right">
                <AnimeHackerSVG />
            </div>
            <div className="anime-speech right">
                🔐 Keamanan adalah prioritas!
            </div>

            {/* Login Card */}
            <div className="glass-card login-card">
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration bottom-right"></div>

                {/* Brand */}
                <div className="login-brand">
                    <div className="brand-logo">
                        <LockIcon />
                    </div>
                    <h1 className="brand-name">
                        <span className="text-gradient">Lutfi-Lab</span>.ID
                    </h1>
                    <p className="brand-tagline">Platform Teknologi & Keamanan Siber</p>
                    <div className="developer-credit">
                        <span className="credit-name">MUHAMMAD LUTFI MUZAKI</span>
                        <span className="credit-role">DEVELOPER & CYBERSECURITY</span>
                    </div>
                </div>

                {/* Header */}
                <div className="login-header">
                    <h2>{step === 'credentials' ? 'Selamat Datang!' : '🔐 Verifikasi Email'}</h2>
                    <p>
                        {step === 'credentials'
                            ? 'Pilih metode login yang Anda inginkan'
                            : 'Masukkan kode 7 digit yang dikirim ke email Anda'
                        }
                    </p>
                </div>

                {/* Error Alert */}
                {error && (
                    <div className="alert alert-error">
                        <AlertCircleIcon />
                        <span>{error}</span>
                    </div>
                )}

                {step === 'credentials' ? (
                    <>
                        {/* Social Login Buttons */}
                        <div className="social-login-grid">
                            <button className="social-btn-full google" type="button" onClick={() => handleOAuthLogin('google')}>
                                <GoogleIcon />
                                <span>Lanjutkan dengan Google</span>
                            </button>
                        </div>

                        <div className="login-divider">
                            <span>atau login dengan</span>
                        </div>

                        {/* Login Method Toggle */}
                        <div className="login-method-toggle">
                            <button
                                type="button"
                                className={`method-btn ${loginMethod === 'email' ? 'active' : ''}`}
                                onClick={() => setLoginMethod('email')}
                            >
                                <MailIcon />
                                Email
                            </button>
                            <button
                                type="button"
                                className={`method-btn ${loginMethod === 'phone' ? 'active' : ''}`}
                                onClick={() => setLoginMethod('phone')}
                            >
                                <PhoneIcon />
                                Nomor HP
                            </button>
                        </div>

                        {/* Credentials Form */}
                        <form onSubmit={handleSubmitCredentials}>
                            {loginMethod === 'email' ? (
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <div style={{ position: 'relative' }}>
                                        <span className="form-icon"><MailIcon /></span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`form-input ${errors.email ? 'error' : ''}`}
                                            placeholder="email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.email && <p className="form-error"><AlertCircleIcon />{errors.email}</p>}
                                </div>
                            ) : (
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Nomor HP</label>
                                    <div style={{ position: 'relative' }}>
                                        <span className="form-icon"><PhoneIcon /></span>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className={`form-input ${errors.phone ? 'error' : ''}`}
                                            placeholder="+62 812 3456 7890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.phone && <p className="form-error"><AlertCircleIcon />{errors.phone}</p>}
                                </div>
                            )}

                            <div className="form-group">
                                <label className="form-label" htmlFor="password">Password</label>
                                <div style={{ position: 'relative' }}>
                                    <span className="form-icon"><KeyIcon /></span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        className={`form-input ${errors.password ? 'error' : ''}`}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                    </button>
                                </div>
                                {errors.password && <p className="form-error"><AlertCircleIcon />{errors.password}</p>}
                            </div>

                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                    Ingat saya
                                </label>
                                <Link to="/forgot-password" className="forgot-password">Lupa password?</Link>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={loading}>
                                {loading ? <><div className="spinner"></div>Memverifikasi...</> : 'Lanjutkan'}
                            </button>
                        </form>
                    </>
                ) : (
                    /* Verification Code Form */
                    <form onSubmit={handleVerifyCode}>
                        <div className="verification-info">
                            <p>📧 Kode dikirim ke: <strong>{formData.email || formData.phone}</strong></p>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="verificationCode">Kode Verifikasi (7 digit)</label>
                            <input
                                type="text"
                                id="verificationCode"
                                name="verificationCode"
                                className={`form-input verification-input ${errors.verificationCode ? 'error' : ''}`}
                                placeholder="0000000"
                                value={formData.verificationCode}
                                onChange={handleChange}
                                maxLength={7}
                                style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.5rem' }}
                            />
                            {errors.verificationCode && <p className="form-error"><AlertCircleIcon />{errors.verificationCode}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={loading}>
                            {loading ? <><div className="spinner"></div>Memverifikasi...</> : 'Verifikasi & Masuk'}
                        </button>

                        <div className="resend-section">
                            <button
                                type="button"
                                className="resend-btn"
                                onClick={handleResendCode}
                                disabled={countdown > 0 || loading}
                            >
                                {countdown > 0 ? `Kirim ulang dalam ${countdown}s` : 'Kirim ulang kode'}
                            </button>
                            <button
                                type="button"
                                className="back-btn"
                                onClick={() => setStep('credentials')}
                            >
                                ← Kembali
                            </button>
                        </div>
                    </form>
                )}

                {/* Footer */}
                <div className="login-footer">
                    Belum punya akun? <Link to="/register">Daftar sekarang</Link>
                </div>
            </div>

            {/* Additional styles */}
            <style>{`
                .social-row {
                    display: flex;
                    gap: 0.75rem;
                }
                
                .social-btn-small {
                    flex: 1;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: var(--border-radius-md);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .social-btn-small:hover {
                    transform: translateY(-2px);
                    border-color: rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.06);
                }
                
                .verification-info {
                    text-align: center;
                    padding: 1rem;
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: var(--border-radius-md);
                    margin-bottom: 1.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }
                
                .verification-info strong {
                    color: var(--text-primary);
                }
                
                .resend-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .resend-btn, .back-btn {
                    background: none;
                    border: none;
                    color: var(--color-primary-light);
                    cursor: pointer;
                    font-size: 0.875rem;
                    font-family: var(--font-family);
                    transition: all 0.3s ease;
                }
                
                .resend-btn:hover:not(:disabled), .back-btn:hover {
                    color: var(--color-primary);
                }
                
                .resend-btn:disabled {
                    color: var(--text-muted);
                    cursor: not-allowed;
                }
            `}</style>
            <Footer />
        </div>
    )
}

export default Login
