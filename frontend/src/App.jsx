import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import OAuthCallback from './pages/OAuthCallback'
import ProtectedRoute from './components/ProtectedRoute'
import UserDashboardPage from './pages/UserDashboardPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import DeveloperDashboardPage from './pages/DeveloperDashboardPage'
import { NotFoundPage, ServerErrorPage, ForbiddenPage } from './pages/ErrorPages'

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AuthProvider>
                    <Router>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/oauth-callback" element={<OAuthCallback />} />

                            {/* Main Dashboard - redirects based on role */}
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <UserDashboardPage />
                                    </ProtectedRoute>
                                }
                            />

                            {/* User Dashboard */}
                            <Route
                                path="/dashboard/user"
                                element={
                                    <ProtectedRoute>
                                        <UserDashboardPage />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Admin Dashboard */}
                            <Route
                                path="/dashboard/admin"
                                element={
                                    <ProtectedRoute>
                                        <AdminDashboardPage />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Super Developer Dashboard */}
                            <Route
                                path="/dashboard/developer"
                                element={
                                    <ProtectedRoute>
                                        <DeveloperDashboardPage />
                                    </ProtectedRoute>
                                }
                            />

                            <Route path="/" element={<Navigate to="/login" replace />} />

                            {/* Error Pages */}
                            <Route path="/403" element={<ForbiddenPage />} />
                            <Route path="/500" element={<ServerErrorPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Router>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default App

