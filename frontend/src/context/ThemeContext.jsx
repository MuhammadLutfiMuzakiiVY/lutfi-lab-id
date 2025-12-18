import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const THEMES = {
    dark: {
        id: 'dark',
        name: 'Dark Mode',
        icon: '🌙',
        colors: {
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            surface: 'rgba(15, 23, 42, 0.95)',
            surfaceHover: 'rgba(30, 41, 59, 0.95)',
            primary: '#6366f1',
            primaryGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            secondary: '#a855f7',
            accent: '#00f5ff',
            text: '#ffffff',
            textSecondary: '#94a3b8',
            textMuted: '#64748b',
            border: 'rgba(99, 102, 241, 0.3)',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#0ea5e9'
        }
    },
    light: {
        id: 'light',
        name: 'Light Mode',
        icon: '☀️',
        colors: {
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            surface: 'rgba(255, 255, 255, 0.95)',
            surfaceHover: 'rgba(241, 245, 249, 0.95)',
            primary: '#4f46e5',
            primaryGradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            secondary: '#9333ea',
            accent: '#0891b2',
            text: '#0f172a',
            textSecondary: '#475569',
            textMuted: '#94a3b8',
            border: 'rgba(99, 102, 241, 0.2)',
            success: '#16a34a',
            warning: '#d97706',
            error: '#dc2626',
            info: '#0284c7'
        }
    },
    midnight: {
        id: 'midnight',
        name: 'Midnight Blue',
        icon: '🌌',
        colors: {
            background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
            surface: 'rgba(2, 6, 23, 0.95)',
            surfaceHover: 'rgba(15, 23, 42, 0.95)',
            primary: '#3b82f6',
            primaryGradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            secondary: '#60a5fa',
            accent: '#38bdf8',
            text: '#f1f5f9',
            textSecondary: '#cbd5e1',
            textMuted: '#64748b',
            border: 'rgba(59, 130, 246, 0.3)',
            success: '#22c55e',
            warning: '#fbbf24',
            error: '#f87171',
            info: '#38bdf8'
        }
    },
    cyberpunk: {
        id: 'cyberpunk',
        name: 'Cyberpunk',
        icon: '🔮',
        colors: {
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 100%)',
            surface: 'rgba(10, 10, 10, 0.95)',
            surfaceHover: 'rgba(26, 10, 46, 0.95)',
            primary: '#ff00ff',
            primaryGradient: 'linear-gradient(135deg, #ff00ff, #00ffff)',
            secondary: '#00ffff',
            accent: '#ffff00',
            text: '#ffffff',
            textSecondary: '#e879f9',
            textMuted: '#a855f7',
            border: 'rgba(255, 0, 255, 0.4)',
            success: '#00ff88',
            warning: '#ffff00',
            error: '#ff0055',
            info: '#00ffff'
        }
    },
    forest: {
        id: 'forest',
        name: 'Forest Green',
        icon: '🌲',
        colors: {
            background: 'linear-gradient(135deg, #052e16 0%, #14532d 100%)',
            surface: 'rgba(5, 46, 22, 0.95)',
            surfaceHover: 'rgba(20, 83, 45, 0.95)',
            primary: '#22c55e',
            primaryGradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
            secondary: '#4ade80',
            accent: '#86efac',
            text: '#f0fdf4',
            textSecondary: '#bbf7d0',
            textMuted: '#4ade80',
            border: 'rgba(34, 197, 94, 0.3)',
            success: '#4ade80',
            warning: '#fbbf24',
            error: '#f87171',
            info: '#38bdf8'
        }
    },
    sunset: {
        id: 'sunset',
        name: 'Sunset Orange',
        icon: '🌅',
        colors: {
            background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)',
            surface: 'rgba(28, 25, 23, 0.95)',
            surfaceHover: 'rgba(41, 37, 36, 0.95)',
            primary: '#f97316',
            primaryGradient: 'linear-gradient(135deg, #f97316, #ea580c)',
            secondary: '#fb923c',
            accent: '#fbbf24',
            text: '#fef3c7',
            textSecondary: '#fed7aa',
            textMuted: '#fdba74',
            border: 'rgba(249, 115, 22, 0.3)',
            success: '#84cc16',
            warning: '#fbbf24',
            error: '#ef4444',
            info: '#38bdf8'
        }
    }
}

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('app_theme')
        return saved && THEMES[saved] ? saved : 'dark'
    })

    const theme = THEMES[currentTheme]

    // Apply theme to document
    useEffect(() => {
        localStorage.setItem('app_theme', currentTheme)

        // Apply CSS variables
        const root = document.documentElement
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value)
        })

        // Apply body background
        document.body.style.background = theme.colors.background
        document.body.style.color = theme.colors.text
        document.body.style.transition = 'background 0.3s ease, color 0.3s ease'
    }, [currentTheme, theme])

    // Detect system preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const handleChange = (e) => {
            if (!localStorage.getItem('app_theme')) {
                setCurrentTheme(e.matches ? 'dark' : 'light')
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const changeTheme = (themeId) => {
        if (THEMES[themeId]) {
            setCurrentTheme(themeId)
        }
    }

    const toggleTheme = () => {
        const themeKeys = Object.keys(THEMES)
        const currentIndex = themeKeys.indexOf(currentTheme)
        const nextIndex = (currentIndex + 1) % themeKeys.length
        setCurrentTheme(themeKeys[nextIndex])
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            currentTheme,
            themes: THEMES,
            changeTheme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export default ThemeContext
