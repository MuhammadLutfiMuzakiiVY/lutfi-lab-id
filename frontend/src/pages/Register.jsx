import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Footer from '../components/Footer'
import '../styles/login.css'

// Icons
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
)

const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
    </svg>
)

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
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

function Register() {
    const navigate = useNavigate()
    const { register, loading, error } = useAuth()

    // Registration method: 'email' or 'phone'
    const [regMethod, setRegMethod] = useState('email')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)

    const passwordRequirements = [
        { label: 'Minimal 8 karakter', test: (p) => p.length >= 8 },
        { label: 'Mengandung huruf besar', test: (p) => /[A-Z]/.test(p) },
        { label: 'Mengandung huruf kecil', test: (p) => /[a-z]/.test(p) },
        { label: 'Mengandung angka', test: (p) => /[0-9]/.test(p) },
        { label: 'Mengandung karakter spesial', test: (p) => /[!@#$%^&*]/.test(p) }
    ]

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name) {
            newErrors.name = 'Nama wajib diisi'
        } else if (formData.name.length < 2) {
            newErrors.name = 'Nama minimal 2 karakter'
        }

        if (regMethod === 'email') {
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
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password minimal 8 karakter'
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Konfirmasi password'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Password tidak cocok'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        try {
            const identifier = regMethod === 'email' ? formData.email : formData.phone
            await register(identifier, formData.password, formData.name)
            setSuccess(true)
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        } catch (err) {
            console.error('Registration failed:', err)
        }
    }

    // OAuth URL - must use direct backend URL because OAuth redirects cannot go through proxy
    const OAUTH_URL = 'http://localhost:3000/api/auth';

    const handleOAuthSignup = (provider) => {
        window.location.href = `${OAUTH_URL}/${provider}`;
    };

    if (success) {
        return (
            <div className="login-container">
                <div className="animated-bg"></div>
                <div className="grid-overlay"></div>
                <div className="orbs">
                    {[...Array(4)].map((_, i) => <div key={i} className="orb"></div>)}
                </div>
                <div className="particles">
                    {[...Array(12)].map((_, i) => <div key={i} className="particle"></div>)}
                </div>
                <div className="glass-card login-card">
                    <div className="corner-decoration top-left"></div>
                    <div className="corner-decoration bottom-right"></div>
                    <div className="login-success">
                        <div className="success-icon">
                            <CheckIcon />
                        </div>
                        <h2>Pendaftaran Berhasil!</h2>
                        <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
                            Mengalihkan ke halaman login...
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="login-container">
            <div className="animated-bg"></div>

            {/* Grid Overlay */}
            <div className="grid-overlay"></div>

            {/* Floating Orbs */}
            <div className="orbs">
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
            </div>

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(12)].map((_, i) => <div key={i} className="particle"></div>)}
            </div>

            {/* Decorative Dots */}
            <div className="decoration-dots top-right"></div>
            <div className="decoration-dots bottom-left"></div>

            <div className="glass-card login-card">
                {/* Corner Decorations */}
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration bottom-right"></div>

                {/* Brand */}
                <div className="login-brand">
                    <div className="brand-logo">
                        <ShieldIcon />
                    </div>
                    <h1 className="brand-name">
                        <span className="text-gradient">Lutfi-Lab</span>.ID
                    </h1>
                    <p className="brand-tagline">Buat Akun Baru</p>
                </div>

                {/* Error Alert */}
                {error && (
                    <div className="alert alert-error">
                        <AlertCircleIcon />
                        <span>{error}</span>
                    </div>
                )}

                {/* Social Signup - Google Only */}
                <div className="social-login-grid">
                    <button
                        className="social-btn-full google"
                        type="button"
                        onClick={() => handleOAuthSignup('google')}
                    >
                        <GoogleIcon />
                        <span>Daftar dengan Google</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="login-divider">
                    <span>atau daftar dengan email</span>
                </div>

                {/* Registration Method Toggle */}
                <div className="login-method-toggle">
                    <button
                        type="button"
                        className={`method-btn ${regMethod === 'email' ? 'active' : ''}`}
                        onClick={() => setRegMethod('email')}
                    >
                        <MailIcon />
                        Email
                    </button>
                    <button
                        type="button"
                        className={`method-btn ${regMethod === 'phone' ? 'active' : ''}`}
                        onClick={() => setRegMethod('phone')}
                    >
                        <PhoneIcon />
                        Nomor HP
                    </button>
                </div>

                {/* Register Form */}
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Nama Lengkap</label>
                        <div style={{ position: 'relative' }}>
                            <span className="form-icon">
                                <UserIcon />
                            </span>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder="Muhammad Lutfi"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                        </div>
                        {errors.name && (
                            <p className="form-error">
                                <AlertCircleIcon />
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email or Phone Field */}
                    {regMethod === 'email' ? (
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Alamat Email</label>
                            <div style={{ position: 'relative' }}>
                                <span className="form-icon">
                                    <MailIcon />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`form-input ${errors.email ? 'error' : ''}`}
                                    placeholder="email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                            </div>
                            {errors.email && (
                                <p className="form-error">
                                    <AlertCircleIcon />
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone">Nomor HP</label>
                            <div style={{ position: 'relative' }}>
                                <span className="form-icon">
                                    <PhoneIcon />
                                </span>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={`form-input ${errors.phone ? 'error' : ''}`}
                                    placeholder="+62 812 3456 7890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                />
                            </div>
                            {errors.phone && (
                                <p className="form-error">
                                    <AlertCircleIcon />
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Password Field */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <span className="form-icon">
                                <KeyIcon />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className={`form-input ${errors.password ? 'error' : ''}`}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="form-error">
                                <AlertCircleIcon />
                                {errors.password}
                            </p>
                        )}

                        {/* Password Requirements */}
                        {formData.password && (
                            <div style={{ marginTop: '0.75rem' }}>
                                {passwordRequirements.map((req, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            fontSize: '0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: req.test(formData.password) ? '#34d399' : 'var(--text-muted)',
                                            marginBottom: '0.25rem'
                                        }}
                                    >
                                        {req.test(formData.password) ? <CheckIcon /> : <span style={{ width: 18 }}>○</span>}
                                        {req.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">Konfirmasi Password</label>
                        <div style={{ position: 'relative' }}>
                            <span className="form-icon">
                                <KeyIcon />
                            </span>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="form-error">
                                <AlertCircleIcon />
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <div className="spinner"></div>
                                Mendaftarkan...
                            </>
                        ) : (
                            'Buat Akun'
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="login-footer">
                    Sudah punya akun? <Link to="/login">Masuk</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
